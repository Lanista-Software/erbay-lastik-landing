<template>
  <div
    class="flex flex-col bg-gradient-to-r from-primary-400 to-primary-700 fixed top-0 w-full h-32 z-50 text-white"
  >
    <div id="contact" class="container-sm py-2 border-b-2 border-primary-200">
      <li class="flex flex-row justify-between items-center">
        <ul v-for="item in iletisim" :key="item">
          <a :href="item.link" class="flex flex-row justify-start items-center"
            ><LuiIcon :name="item.icon" line size="xl" class="pr-1"></LuiIcon>
            {{ item.name }}
          </a>
        </ul>
      </li>
    </div>
    <nav
      id="navbar"
      class="header container-sm flex flex-row justify-between items-center py-3"
    >
      <div id="logo" class="flex flex-row space-x-2">
        <img :src="logo.src" :alt="logo.alt" class="h-16 w-16" />
        <!-- <div class="flex flex-col justify-center items-start">
          <LuiText class="font-semibold text-xl">ERBAY LASTİK</LuiText>
          <LuiText class="!text-xs">Kereste İmalat İnşaat Ltd. Şti.</LuiText>
        </div> -->
      </div>
      <div id="navigation">
        <ul class="flex flex-row justify-between items-center space-x-4">
          <li v-for="nav in navigasyon" :key="nav.ID">
            <a :href="nav.link" :id="nav.id">
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </div>
      <div class="button hidden lg:block">
        <LuiButton rounded size="lg" variant="primary">
          <nuxt-link :to="button.link">{{ button.label }}</nuxt-link></LuiButton
        >
      </div>
    </nav>
  </div>
</template>

<script setup>
const iletisim = [
  {
    name: '0(432) 223 24 48',
    link: 'tel:0(432) 223 24 48',
    icon: 'phone',
  },
  {
    name: 'Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van',
    link: 'https://g.page/IstasyonTusbaMichelin?share',
    icon: 'map-pin-2',
  },
  {
    name: 'bilgi@erbaylastik.com',
    link: 'mailto:bilgi@erbaylastik.com',
    icon: 'mail',
  },
]
const logo = {
  src: '/icons/erbay.png',
  alt: 'erbay logo',
}
const navigasyon = [
  { name: 'Anasayfa', link: '/', id: 'nav-home' },
  { name: 'Öne Çıkanlar', link: 'hit', id: 'nav-hit' },
  { name: 'Ürünler', link: 'products', id: 'nav-products' },
  { name: 'Markalar', link: 'brands', id: 'nav-brands' },
  { name: 'Hakkımızda', link: 'about', id: 'nav-about' },
  { name: 'Sık Sorulanlar', link: 'faq', id: 'nav-faq' },
]
const button = {
  label: 'İletişim',
  link: '#contact',
}
</script>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="postcss" scoped></style>
