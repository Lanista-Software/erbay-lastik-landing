<template>
  <footer
    class="w-full bg-gradient-to-r from-primary-400 to-primary-700 text-white"
  >
    <div
      class="site-navigation container-lg flex justify-between items-start py-16 lg:flex-row flex-col xl:space-x-36 lg:space-x-10"
    >
      <div
        v-for="nav in footerData.links"
        :key="nav.ID"
        class="flex flex-col pb-8 lg:pb-0"
      >
        <LuiText class="pb-8 font-semibold text-xl">{{ nav.title }}</LuiText>
        <div
          v-for="item in nav.list"
          :key="item.ID"
          class="flex flex-row justify-start items-center space-x-2 pb-4"
        >
          <LuiIcon
            v-if="item.icon != ''"
            :name="item.icon"
            line
            size="xl"
            class="top-0"
          />
          <button @click="scrollDown(item.url)">
            <LuiText>{{ item.name }}</LuiText>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full bg-primary-800">
      <div class="container-lg flex flex-row justify-between items-center py-8">
        <div>
          <img
            :src="footerData.footerAlt.logo[0].src.split('public')[1]"
            :alt="footerData.footerAlt.logo[0].alt"
            class="w-16"
          />
        </div>
        <div>
          <p class="text-white hidden lg:block">
            {{ footerData.footerAlt.info.yazi }}
            <sup>{{ footerData.footerAlt.info.yil }}</sup>
          </p>
        </div>
        <div>
          <a href="https://lanista.com.tr" target="_blank">
            <img
              :src="footerData.footerAlt.logo[1].src.split('public')[1]"
              :alt="footerData.footerAlt.logo[1].alt"
              class="w-32"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
const { data } = await useAsyncData('footer', () =>
  queryContent('contentrain', 'footer').findOne()
)
let footerData = ref(data.value.body[0])
</script>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      nav: [
        {
          title: '??LET??????M',
          list: [
            {
              iconName: 'phone',
              description: '04322232448',
              link: 'tel:04322232448',
            },
            {
              iconName: 'map-2',
              description:
                'Abdurrahman Gazi, Erci?? Yolu 2. Km D:No:119/A, 65040 Tu??ba/Van',
              link: 'https://g.page/IstasyonTusbaMichelin?share',
            },
            {
              iconName: 'mail',
              description: 'bilgi@erbaylastik.com',
              link: 'mailto:bilgi@erbaylastik.com',
            },
          ],
        },
        {
          title: 'S??TE HAR??TASI',
          list: [
            {
              iconName: '',
              description: 'Anasayfa',
              link: '/',
            },
            {
              iconName: '',
              description: '??ne ????kanlar',
              link: '#hit',
            },
            {
              iconName: '',
              description: '??r??nler',
              link: '#products',
            },
            {
              iconName: '',
              description: 'Markalar',
              link: '#brands',
            },
            {
              iconName: '',
              description: 'Hakk??m??zda',
              link: '#about',
            },
            {
              iconName: '',
              description: 'S??k Sorulanlar',
              link: '#faqs',
            },
          ],
        },
        {
          title: 'H??ZMETLER',
          list: [
            {
              iconName: '',
              description: 'Lastik s??kme ve takma',
              link: '#services',
            },
            {
              iconName: '',
              description: 'Rot Balans hizmeti',
              link: '#services',
            },
            {
              iconName: '',
              description: 'Lastik hastanesi hizmeti',
              link: '#services',
            },
            {
              iconName: '',
              description: 'Jant d??zeltme hizmeti',
              link: '#services',
            },
          ],
        },
      ],
    }
  },
  methods: {
    startWith(link) {
      const sectionName = link
      return sectionName.startsWith('#')
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
