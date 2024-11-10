<template>
  <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md">
    <!-- Left Section -->
    <div class="flex flex-col flex-1 gap-2">
      <AnimatedPlaceholder
        class="card card-compact shadow-xl bg-base-200 w-full max-w-[50%] animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2"
          >
            {{ $t('cityH2line9') }}
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {{ $t('cityPline14') }}
          </p>
        </div>
      </AnimatedPlaceholder>
      <AnimatedPlaceholder
        class="card card-compact shadow-xl bg-base-200 w-full max-w-[40%] animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2"
          >
            {{ $t('cityH2line9') }}
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          >
            {{ $t('cityPline14') }}
          </p>
        </div>
      </AnimatedPlaceholder>
    </div>

    <!-- Right Section -->
    <div class="flex flex-col items-end flex-1 gap-2">
      <AnimatedPlaceholder
        class="card card-compact shadow-xl bg-base-200 max-w-[50px] w-full animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2"
          >
            {{ $t('cityH2line9') }}
          </h2>
        </div>
      </AnimatedPlaceholder>
      <AnimatedPlaceholder
        class="card card-compact shadow-xl bg-base-200 max-w-[75px] w-full animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2"
          >
            {{ $t('cityH2line9') }}
          </h2>
        </div>
      </AnimatedPlaceholder>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
</script>
