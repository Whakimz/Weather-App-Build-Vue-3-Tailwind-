<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      :class="modalActive ? 'opacity-100' : 'opacity-0'"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 transition-opacity duration-300 ease-out"
    >
      <transition name="modal-inner">
        <div
          v-if="modalActive"
          :class="modalActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'"
          class="p-6 bg-white rounded-lg shadow-lg max-w-screen-md transform transition-all duration-500 ease-out"
        >
          <slot />
          <button
            class="text-white mt-8 bg-weather-primary py-2 px-6 rounded-lg hover:bg-weather-secondary transition-colors duration-300"
            @click="$emit('close-modal')"
          >
            Close
          </button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup>
defineEmits(['close-modal'])
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
