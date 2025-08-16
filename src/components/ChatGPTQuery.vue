<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
import chatGPTService from '../services/chatgpt';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const query = ref('');
const isLoading = ref(false);
const messages = reactive<Message[]>([]);
const showChat = ref(false);
const inputDisabled = ref(false);

// Make config status reactive
const configStatus = computed(() => chatGPTService.getConfigurationStatus());

const sendQuery = async () => {
  if (!query.value.trim()) return;
  
  const userMessage: Message = {
    role: 'user',
    content: query.value,
    timestamp: new Date()
  };
  
  messages.push(userMessage);
  const currentQuery = query.value;
  query.value = '';
  isLoading.value = true;
  
  try {
    if (configStatus.value.configured) {
      // Use real ChatGPT API (single message, no context)
      const response = await chatGPTService.sendMessage(currentQuery);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      messages.push(assistantMessage);
    } else {
      // Fallback to simulated response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: `I understand you're asking about: "${currentQuery}". This is a simulated response. To get real AI responses, please configure your OpenAI API key by setting the VITE_OPENAI_API_KEY environment variable.`,
        timestamp: new Date()
      };
      
      messages.push(assistantMessage);
    }
  } catch (error) {
    console.error('Error sending message:', error);
    const errorMessage: Message = {
      role: 'assistant',
      content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
      timestamp: new Date()
    };
    messages.push(errorMessage);
  } finally {
    isLoading.value = false;
    inputDisabled.value = true; // Disable input after response
  }
};

const toggleChat = () => {
  showChat.value = !showChat.value;
};

const startNewConversation = () => {
  // Clear local messages
  messages.length = 0;
  // Re-enable input
  inputDisabled.value = false;
  // Clear query
  query.value = '';
};

const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
</script>

<template>
  <div class="relative print:hidden">
    <!-- Chat Toggle Button -->
    <button
      @click="toggleChat"
      class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-2 shadow-md transition-all duration-200 hover:scale-105 text-sm flex items-center space-x-1"
      :class="{ 'bg-green-600 hover:bg-green-700': showChat }"
      title="Chat with AI about my experience"
    >
      <ChatBubbleLeftRightIcon class="w-4 h-4" />
      <span>Ask AI</span>
    </button>

    <!-- Chat Interface -->
    <div
      v-if="showChat"
      class="absolute top-12 transform -translate-x-1/2 w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50"
    >
      <!-- Chat Header -->
      <div class="bg-blue-600 text-white p-4 rounded-t-lg">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-semibold">Ask about my experience</h3>
            <p class="text-sm opacity-90">Powered by AI</p>
          </div>
          <div v-if="!configStatus.configured" class="text-yellow-300" title="API not configured">
            <ExclamationTriangleIcon class="w-5 h-5" />
          </div>
        </div>
      </div>

      <!-- Messages Area -->
      <div class="h-64 md:h-80 lg:h-96 overflow-y-auto p-4 space-y-3">
        <div v-if="messages.length === 0" class="text-center text-gray-500 dark:text-gray-400 py-8">
          <ChatBubbleLeftRightIcon class="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p class="text-sm font-medium mb-2">Ask about my professional experience!</p>
          <p class="text-xs opacity-75">Work history • Technical skills • Certifications • Projects</p>
        </div>
        
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="flex"
          :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-xs px-3 py-2 rounded-lg text-sm"
            :class="message.role === 'user' 
              ? 'bg-blue-600 text-white rounded-br-none' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'"
          >
            <p class="whitespace-pre-wrap">{{ message.content }}</p>
            <p class="text-xs opacity-70 mt-1">{{ formatTime(message.timestamp) }}</p>
          </div>
        </div>
        
        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg rounded-bl-none px-3 py-2">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>

        <!-- Ask Another Question button -->
        <div v-if="messages.length > 0 && !isLoading" class="flex justify-center pt-2">
          <button
            @click="startNewConversation"
            class="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors"
            title="Ask another question (clears previous conversation)"
          >
            Ask Another Question
          </button>
        </div>
      </div>

            <!-- Input Area -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-700">
        <form v-if="!inputDisabled" @submit.prevent="sendQuery" class="flex space-x-2">
          <input
            v-model="query"
            type="text"
            placeholder="Ask about my work experience, skills, or projects..."
            class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
            :disabled="isLoading"
          />
          <button
            type="submit"
            :disabled="isLoading || !query.trim()"
            class="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <PaperAirplaneIcon class="w-4 h-4" />
          </button>
        </form>
        
        <!-- Disabled input state -->
        <div v-else class="flex items-center justify-center py-2">
          <div class="text-center text-gray-500 dark:text-gray-400">
            <p class="text-sm">Click "Ask Another Question" to continue</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for messages */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 2px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb {
  background: #4a5568;
}

.dark .overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #718096;
}
</style>
