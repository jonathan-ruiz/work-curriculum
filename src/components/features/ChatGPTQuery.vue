<script setup lang="ts">
import { ref } from 'vue'
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon
} from '@heroicons/vue/24/outline'
import { chatGPTService } from '@/services/chatgpt'
import type { ChatMessage } from '@/types'

// Reactive state
const isOpen = ref(false)
const isLoading = ref(false)
const userInput = ref('')
const messages = ref<ChatMessage[]>([])
const inputDisabled = ref(false)

// Computed properties - removed unused configStatus

// Methods
const openChat = () => {
  isOpen.value = true
}

const closeChat = () => {
  isOpen.value = false
}

const sendMessage = async () => {
  const message = userInput.value.trim()
  if (!message || isLoading.value) return

  // Add user message
  messages.value.push({
    role: 'user',
    content: message
  })

  userInput.value = ''
  isLoading.value = true
  inputDisabled.value = true

  try {
    const response = await chatGPTService.sendMessage(message)
    
    messages.value.push({
      role: 'assistant',
      content: response
    })
  } catch (error) {
    messages.value.push({
      role: 'assistant',
      content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`
    })
  } finally {
    isLoading.value = false
  }
}

const resetChat = () => {
  messages.value = []
  inputDisabled.value = false
  userInput.value = ''
}
</script>

<template>
  <div class="chatgpt-query print:hidden">
    <!-- Chat Button -->
    <button
      @click="openChat"
      class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
      :disabled="isLoading"
    >
      <ChatBubbleLeftRightIcon class="w-4 h-4" />
      <span class="hidden sm:inline">Ask about my experience</span>
      <span class="sm:hidden">Chat</span>
    </button>

    <!-- Chat Modal -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4"
      @click="closeChat"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[600px] max-h-[80vh] flex flex-col"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-4 border-b">
          <h3 class="text-lg font-semibold text-gray-900">Ask about my experience</h3>
          <button
            @click="closeChat"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon class="w-6 h-6" />
          </button>
        </div>

        <!-- Messages Area -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[80%] rounded-lg px-4 py-2"
              :class="
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              "
            >
              <p class="whitespace-pre-wrap">{{ message.content }}</p>
            </div>
          </div>

          <!-- Loading indicator -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-gray-100 rounded-lg px-4 py-2">
              <div class="flex items-center space-x-2">
                <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span class="text-gray-600">Thinking...</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div v-if="!inputDisabled" class="p-4 border-t">
          <form @submit.prevent="sendMessage" class="flex gap-2">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask about my work experience, skills, or projects..."
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :disabled="isLoading"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              :disabled="isLoading || !userInput.trim()"
            >
              <PaperAirplaneIcon class="w-4 h-4" />
            </button>
          </form>
        </div>

        <!-- Ask Another Question Button -->
        <div v-if="inputDisabled && !isLoading" class="p-4 border-t">
          <button
            @click="resetChat"
            class="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Ask Another Question
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chatgpt-query {
  /* Component-specific styles */
}

/* Custom scrollbar for messages */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>
