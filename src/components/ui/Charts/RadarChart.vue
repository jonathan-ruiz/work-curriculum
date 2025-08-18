<script setup lang="ts">
// import tailwindConfig from "../../../tailwind.config.js"; // Removed unused import
import {Chart as ChartJS, RadialLinearScale, Tooltip, Legend, PointElement, LineElement, Filler} from 'chart.js'
import {Radar} from 'vue-chartjs'

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler)

const props = defineProps<{
  data: Array<{ label: string; value: number; color: string }>
}>()

const max = Math.max(...props.data.map(obj => obj.value))
const orderedData = props.data.sort((a, b) => b.value - a.value)
const normalizedData = props.data.map(obj => {
  return {...obj, value: obj.value * 100 / max}
})

</script>

<template>
  <Radar :data="{
  labels: orderedData.map(obj => obj.label),
  datasets: [
    {
      fill: 'origin',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      data: normalizedData.map(obj => obj.value),
    }
  ]
}" :options="{
  elements: {
    line: {
      borderWidth: 3
    }
  },
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