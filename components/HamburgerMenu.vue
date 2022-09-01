<template>
  <div
    class="hamburger w-screen h-screen transition-all duration-75 overflow-hidden bg-opacity-40 fixed left-0 top-0 flex"
    :class="isActive ? 'bg-info-900' : ' bg-transparent'"
  >
    <div
      class="content brand-shadow w-4/5 h-full p-6 flex flex-col bg-white ml-auto rounded-l-md"
    >
      <div class="flex items-center justify-between">
        <div class="w-20">
          <a href="/">
            <img src="/favicon.ico" alt="erbay lastik logo" />
          </a>
        </div>
        <LuiButton
          type="text"
          icon="close"
          variant="primary"
          rounded
          @click="$emit('closeMenu')"
        />
      </div>
      <nav class="mt-8 space-y-4 w-max" @click="$emit('closeMenu')">
        <template v-for="navItem in navList" :key="navItem.link">
          <a
            :href="navItem.link"
            class="lanista-header-nav-item block text-primary"
          >
            <span>{{ navItem.name }}</span>
          </a>
        </template>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HambugerMenu',
  props: {
    isActive: { type: Boolean, default: false },
    navList: {
      type: Array,
      default: () => [],
    },
    logo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
.hamburger {
  z-index: 9999;
}
.brand-shadow {
  box-shadow: -2px 0px 16px rgba(0, 0, 0, 0.08);
}
.expand-list-enter-active,
.expand-list-leave-active {
  transition: opacity 0.2s;
  transition: transform 0.2s;
}
.expand-list-enter,
.expand-list-leave-to {
  opacity: 0.2;
  transform: translateY(-10%);
}
</style>
