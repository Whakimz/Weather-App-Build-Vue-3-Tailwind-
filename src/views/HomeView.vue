<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative" @click="closeSearch">
      <!-- Input Search with DaisyUI styling and icons -->
      <div class="relative">
        <!-- Search Icon -->
        <i
          class="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 fa fa-search"
        ></i>
        <!-- Input Box -->
        <input
          type="text"
          v-model="searchQuery"
          @input="getSearchResults"
          :placeholder="$t('placeholderSearch')"
          class="input input-bordered w-full pl-10 bg-transparent focus:outline-none focus:ring-2 focus:ring-weather-secondary"
        />
        <!-- Clear Button -->
        <button
          v-if="searchQuery"
          @click.stop="clearSearch"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <i class="fa fa-times"></i>
        </button>
      </div>

      <!-- Search Results -->
      <ul
        class="absolute bg-weather-secondary text-white w-full shadow-md py-2 px-1 top-[66px] rounded-b-lg z-50"
        v-if="mapboxSearchResults"
      >
        <p class="py-2 text-center" v-if="searchError">
          {{ $t('pline15') }}
        </p>
        <p
          class="py-2 text-center"
          v-if="!searchError && mapboxSearchResults.length === 0"
        >
          {{ $t('pline19') }}
        </p>
        <template v-else>
          <li
            v-for="searchResult in mapboxSearchResults"
            :key="searchResult.id"
            class="py-2 cursor-pointer hover:bg-weather-secondary hover:text-white rounded transition-colors"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>

    <!-- City List Section -->
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList />
        <template #fallback>
          <CityCardSkeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import CityList from '@/components/CityList.vue'
import CityCardSkeleton from '@/components/CityCardSkeleton.vue'

const router = useRouter()
const previewCity = searchResult => {
  console.log('Result: ', searchResult)
  const [city, state] = searchResult.place_name.split(',')
  router.push({
    name: 'cityView',
    params: { state: state.replaceAll(' ', ''), city: city },
    query: {
      lat: searchResult.geometry.coordinates[1],
      lng: searchResult.geometry.coordinates[0],
      preview: true,
    },
  })
}

const mapboxAPIKey =
  'pk.eyJ1Ijoid2FraW0xOTEwIiwiYSI6ImNtMzIzdWIydDE4OGYyanB1MGhzbXoxcnMifQ.hWRJckSpITnc0k2Cv16A6g'
const searchQuery = ref('')
const queryTimeout = ref(null)
const mapboxSearchResults = ref(null)
const searchError = ref(null)

const getSearchResults = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== '') {
      try {
        const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`,
        )
        mapboxSearchResults.value = result.data.features
      } catch {
        searchError.value = true
      }

      return
    }
    mapboxSearchResults.value = null
  }, 300)
}

const clearSearch = () => {
  searchQuery.value = ''
  mapboxSearchResults.value = null
}

const closeSearch = e => {
  // Close search if clicked outside of the input or result list
  if (!e.target.closest('.pt-4.mb-8.relative')) {
    mapboxSearchResults.value = null
  }
}
</script>

<style scoped>
/* Style the input with DaisyUI */
.input-bordered {
  border-width: 2px;
  border-color: #004e71;
}

.input-primary {
  border-color: #004e71;
}

.input:hover {
  border-color: #006f94;
}

.focus\:ring-weather-secondary:focus {
  box-shadow: 0px 0px 0px 4px rgba(0, 142, 169, 0.5);
}

/* Ensure search results are above other components */
ul {
  z-index: 50; /* Ensure it is above other components */
  position: absolute;
  top: 66px; /* Adjust to your layout */
  left: 0;
}

/* Add some styling for the search result list */
li:hover {
  background-color: #004e71; /* Hover effect for each result */
  color: white;
}

/* Style the icon inside the input */
.fa-search,
.fa-times {
  font-size: 1.2rem;
}
</style>
