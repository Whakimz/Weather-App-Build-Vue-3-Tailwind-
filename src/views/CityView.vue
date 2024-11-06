<template>
  <div>
    <Suspense>
      <AsyncCityView />
      <template #fallback>
        <CityViewSkeleton />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from '@/components/AsyncCityView.vue'
import CityViewSkeleton from '@/components/CityViewSkeleton.vue'
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
