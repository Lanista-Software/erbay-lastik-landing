<template>
  <div
    class="flex flex-col bg-gradient-to-r from-primary-400 to-primary-700 fixed top-0 w-full z-50 text-white"
  >
    <div class="border-b-2 border-primary-200 hidden lg:block">
      <div id="contact" class="container-lg py-2">
        <li class="flex flex-row justify-between items-center">
          <ul v-for="item in headerData.ustNavigasyon" :key="item">
            <a
              :href="item.link"
              class="flex flex-row justify-start items-center"
              ><LuiIcon :name="item.icon" line size="xl" class="pr-1"></LuiIcon>
              {{ item.isim }}
            </a>
          </ul>
        </li>
      </div>
    </div>
    <nav
      id="navbar"
      class="header container-lg flex flex-row justify-between items-center py-3"
    >
      <div id="logo" class="flex flex-row space-x-2">
        <a :href="headerData.logo.link">
          <img
            :src="headerData.logo.logoFoto[0].src.split('public')[1]"
            :alt="headerData.logo.logoFoto[0].alt"
            class="h-16 w-16"
          />
        </a>
        <!-- <div class="flex flex-col justify-center items-start">
          <LuiText class="font-semibold text-xl">ERBAY LASTİK</LuiText>
          <LuiText class="!text-xs">Kereste İmalat İnşaat Ltd. Şti.</LuiText>
        </div> -->
      </div>
      <div id="navigation" class="hidden lg:block">
        <ul class="flex flex-row justify-between items-center space-x-4">
          <li v-for="nav in headerData.navigasyon" :key="nav.ID">
            <a :href="scrollDown(nav.link)" :id="nav.navId" class="navLink">
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="button hidden lg:block">
        <LuiButton rounded size="lg" variant="primary">
          <nuxt-link :to="headerData.buton.link">{{
            headerData.buton.label
          }}</nuxt-link></LuiButton
        >
      </div>
      <div class="flex flex-row lg:hidden">
        <LuiButton
          aria-label="menu"
          icon="menu"
          type="text"
          variant="info"
          filter="lighter"
          size="lg"
          rounded
          @click="hamburgerMenu = !hamburgerMenu"
        />
      </div>
      <transition name="fade-menu">
        <HamburgerMenu
          v-show="hamburgerMenu"
          :is-active="hamburgerMenu"
          :nav-list="headerData.navigasyon"
          @closeMenu="handleCloseMenu"
        />
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const { data } = await useAsyncData('header', () =>
  queryContent('contentrain', 'header').findOne()
)
let headerData = ref(data.value.body[0])
</script>

<script>
export default {
  name: 'Header',
  data() {
    return {
      hamburgerMenu: false,
    }
  },
  head() {
    return {
      bodyAttrs: {
        style: this.hamburgerMenu ? 'max-height: 100vh; overflow:hidden;' : '',
      },
    }
  },
  methods: {
    handleCloseMenu() {
      this.hamburgerMenu = !this.hamburgerMenu
    },
    scrollDown(id) {
      var element = document.getElementById(id)
      var headerOffset = 140
      var elementPosition = element.getBoundingClientRect().top
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.fade-menu-enter-active,
.fade-menu-leave-active {
  transition: transform 0.4s;
}
.fade-menu-enter,
.fade-menu-leave-to {
  transform: translateX(100%);
}
</style>
