<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <div class="flex flex-col items-center justify-center h-32">
          <div class="loader mb-2"></div>
          <p class="text-lg font-semibold text-weather-secondary">Loading...</p>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue'
</script>

<style scoped>
.loader {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #fff; /* เปลี่ยนเป็นสีที่ต้องการ */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
