<template>
  <div class="flex flex-col flex-1">
    <!-- Overview -->
    <div class="flex flex-col py-12 items-center">
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-xs mb-4 animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch the data.
          </p>
        </div>
      </AnimatedPlaceholder>
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-xs mb-4 animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch the data.
          </p>
        </div>
      </AnimatedPlaceholder>
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-xs mb-4 animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch the data.
          </p>
        </div>
      </AnimatedPlaceholder>
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-xs mb-4 animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch the data.
          </p>
        </div>
      </AnimatedPlaceholder>
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-xs animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch the data.
          </p>
        </div>
      </AnimatedPlaceholder>
    </div>

    <!-- Hourly -->
    <div class="flex flex-col py-12 px-8 items-center">
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-screen-md mb-12 animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch hourly data.
          </p>
        </div>
      </AnimatedPlaceholder>
    </div>

    <!-- Weekly -->
    <div class="flex flex-col py-12 px-8 items-center">
      <AnimatedPlaceholder
        class="card shadow-xl bg-base-200 w-full max-w-screen-md mb-12 animate-pulse"
      >
        <div class="card-body">
          <h2
            class="card-title text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 mb-2"
          >
            Loading...
          </h2>
          <p
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            Please wait while we fetch the weekly forecast.
          </p>
        </div>
      </AnimatedPlaceholder>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
</script>
