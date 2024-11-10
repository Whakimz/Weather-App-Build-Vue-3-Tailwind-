<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg z-50">
    <!-- Navigation Bar -->
    <nav class="container flex justify-between items-center py-4">
      <!-- Logo Section -->
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center gap-2 text-warning"
      >
        <i class="fa-solid fa-sun text-2xl"></i>
        <p class="text-lg font-medium">{{ $t('welcome') }}</p>
      </router-link>

      <!-- Icon Section -->
      <div class="flex gap-4 items-center">
        <!-- Information Icon -->
        <div class="relative group">
          <i
            class="fa-solid fa-circle-info text-xl text-white hover:text-weather-secondary duration-150 cursor-pointer"
            @click="toggleModal"
          ></i>
          <div
            class="absolute left-1/2 transform -translate-x-1/2 mt-2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded py-1 px-2"
          >
            {{ $t('information') }}
          </div>
        </div>

        <!-- Add City Icon (Conditional) -->
        <div v-if="route.query.preview" class="relative group">
          <i
            class="fa-solid fa-plus text-xl text-white hover:text-weather-secondary duration-150 cursor-pointer"
            @click="addCity"
          ></i>
          <div
            class="absolute left-1/2 transform -translate-x-1/2 mt-2 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded py-1 px-2"
          >
            {{ $t('addCity') }}
          </div>
        </div>

        <span class="text-gray text-xl">|</span>

        <!-- Language Switch Dropdown -->
        <div class="relative ml-auto">
          <!-- Language Switch Button -->
          <button
            class="flex items-center cursor-pointer text-white text-sm transition duration-200"
            @click="toggleDropdown"
          >
            <i class="fa-solid fa-globe text-lg mr-2"></i>
            {{ currentLang === 'en' ? 'US' : 'TH' }}
            <i class="fa-solid fa-chevron-down ml-2"></i>
          </button>

          <!-- Dropdown Menu -->
          <div
            v-show="dropdownVisible"
            class="absolute right-0 mt-2 bg-gray-800 text-white text-sm rounded shadow-lg transition-opacity duration-200 w-32"
            @click.stop
          >
            <div
              @click="switchLanguage('en')"
              class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-weather-secondary transition duration-200"
            >
              <img src="@/assets/us.svg" alt="US Flag" class="w-6 h-4" />
              US
            </div>
            <div
              @click="switchLanguage('th')"
              class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-weather-secondary transition duration-200"
            >
              <img src="@/assets/th.svg" alt="TH Flag" class="w-6 h-4" />
              TH
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Modal Section for Information -->
    <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
      <div class="text-black">
        <h1 class="text-2xl mb-1">{{ $t('about') }}</h1>
        <p class="mb-4">{{ $t('aboutText') }}</p>

        <h2 class="text-2xl">{{ $t('howItWorks') }}</h2>
        <ol class="list-decimal list-inside mb-4">
          <li>{{ $t('searchCity') }}</li>
          <li>{{ $t('selectCity') }}</li>
          <li>{{ $t('trackCity') }}</li>
        </ol>

        <h2 class="text-2xl">{{ $t('removingCity') }}</h2>
        <p>{{ $t('removeCityText') }}</p>
      </div>
    </BaseModal>
  </header>
</template>

<script setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { uid } from 'uid'

import BaseModal from './BaseModal.vue'

// i18n setup
const { locale } = useI18n()

// Modal active state
const modalActive = ref(false)

// Language handling
const currentLang = ref(localStorage.getItem('language') || 'en')
const dropdownVisible = ref(false)

watchEffect(() => {
  localStorage.setItem('language', currentLang.value)
  locale.value = currentLang.value
})

const route = useRoute()
const router = useRouter()

const switchLanguage = lang => {
  currentLang.value = lang
  localStorage.setItem('language', lang)
  dropdownVisible.value = false
  // You can set locale if you are using vue-i18n
}

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value
}
// Toggle modal visibility
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
// Close dropdown if user clicks outside
const handleClickOutside = event => {
  if (!event.target.closest('.relative')) {
    dropdownVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
// Handle adding city
const savedCities = ref([])

const addCity = () => {
  if (localStorage.getItem('savedCities')) {
    savedCities.value = JSON.parse(localStorage.getItem('savedCities'))
  }

  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: { lat: route.query.lat, lng: route.query.lng },
  }

  savedCities.value.push(locationObj)
  localStorage.setItem('savedCities', JSON.stringify(savedCities.value))

  let query = Object.assign({}, route.query)
  delete query.preview
  query.id = locationObj.id
  router.replace({ query })
}
</script>

<style scoped>
/* Style adjustments for icon and dropdown sections */
.group:hover .opacity-0 {
  opacity: 100;
}
</style>
