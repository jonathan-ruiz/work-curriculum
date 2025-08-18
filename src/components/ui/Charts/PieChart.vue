<script setup lang="ts">
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Pie} from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
    data: Array<{ label: string; value: number; color: string }>
}>()
const orderedData = props.data.sort((a,b) => {return a.label.localeCompare(b.label);})
</script>

<template>
  <Pie :data="{
  labels: orderedData.map(obj => obj.label),
  datasets: [
    {
      backgroundColor: orderedData.map(obj => obj.color),
      data: orderedData.map(obj => obj.value)
    }
  ]
}" :options="{
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
      align: 'center',
      position: 'top'
    }
  }
}"/>
</template>