<template>
  <div
    class="relative w-full h-8 overflow-hidden rounded-lg bg-gray-200 shadow-md"
  >
    <div
      class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 opacity-75 animate-pulse-glow"
    ></div>
  </div>
</template>

<style scoped>
/* Custom Animation */
@keyframes pulse-glow {
  0% {
    transform: translateX(-100%);
    opacity: 0.6;
  }
  50% {
    opacity: 0.9;
  }
  100% {
    transform: translateX(100%);
    opacity: 0.6;
  }
}

.animate-pulse-glow {
  animation: pulse-glow 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
