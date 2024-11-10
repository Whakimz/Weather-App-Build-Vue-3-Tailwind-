<template>
  <div
    class="card bg-weather-secondary text-white shadow-xl rounded-lg cursor-pointer hover:scale-105 transform transition duration-300"
  >
    <!-- Card Content -->
    <div class="card-body flex flex-col gap-4 p-6">
      <h2 class="text-3xl font-semibold text-[#a1d1f8]">{{ city.city }}</h2>
      <h3 class="text-xl text-gray-300">{{ city.state }}</h3>

      <div class="flex justify-between items-center">
        <!-- Temperature -->
        <p class="text-5xl font-bold">
          <i class="fa-solid fa-temperature-half text-4xl"></i>
          {{ Math.round(city.weather.main.temp - 273.15) }}&deg;
        </p>
        <div class="flex flex-col items-end">
          <!-- Max and Min Temperatures -->
          <span class="text-xs text-gray-300 flex items-center">
            <i class="fa-solid fa-temperature-high text-sm mr-1"></i>
            H: {{ Math.round(city.weather.main.temp_max - 273.15) }}&deg;
          </span>
          <span class="text-xs text-gray-300 flex items-center">
            <i class="fa-solid fa-temperature-low text-sm mr-1"></i>
            L: {{ Math.round(city.weather.main.temp_min - 273.15) }}&deg;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    default: () => ({}),
  },
})
</script>
