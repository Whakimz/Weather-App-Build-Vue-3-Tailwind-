<template>
  <SpeedInsights />
  <SiteNavigation />
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <div class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
  <FootersSite />
</template>

<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { RouterView } from 'vue-router'
import SiteNavigation from '@/components/SiteNavigation.vue'
import FootersSite from './components/FootersSite.vue'
</script>

<style>
* {
  font-family: 'Kanit', sans-serif;
}
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
