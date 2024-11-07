<template>
  <teleport to="body">
    <transition name="modal-outer">
      <div
        v-show="modalActive"
        :class="modalActive ? 'opacity-100' : 'opacity-0'"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 transition-opacity duration-300 ease-out"
      >
        <transition name="modal-inner">
          <div
            v-if="modalActive"
            :class="
              modalActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            "
            class="p-6 bg-white rounded-xl shadow-xl max-w-lg w-full transform transition-all duration-500 ease-in-out"
          >
            <slot />
            <button
              class="text-white mt-8 bg-weather-primary py-2 px-6 rounded-md hover:bg-weather-secondary transition-colors duration-300"
              @click="$emit('close-modal')"
            >
              Close
            </button>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
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
  transition: opacity 0.3s ease-in-out;
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.4s ease-in-out;
}

.modal-inner-leave-active {
  transition: all 0.3s ease-in-out;
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.modal-inner-leave-to {
  transform: scale(0.9);
}
</style>
