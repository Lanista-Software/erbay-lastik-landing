<template>
  <footer class="w-full bg-gradient-to-r from-primary-400 to-primary-700">
    <div
      class="site-navigation flex justify-evenly items-start p-16 lg:flex-row flex-col xl:space-x-36 lg:space-x-10"
    >
      <div
        v-for="nav in nav"
        :key="nav.ID"
        class="flex flex-col lg:w-1/3 pb-8 lg:pb-0"
      >
        <LuiText class="pb-8 font-semibold text-xl">{{ nav.title }}</LuiText>
        <div
          v-for="item in nav.list"
          :key="item.ID"
          class="flex flex-row justify-start items-center space-x-2 pb-4"
        >
          <LuiIcon
            v-if="item.iconName != ''"
            :name="item.iconName"
            line
            size="xl"
            class="top-0"
          />
          <a :href="item.link"
            ><LuiText>{{ item.description }}</LuiText></a
          >
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-around items-center py-8 bg-primary-800">
      <div>
        <img src="/icons/erbay.png" alt="erbay" class="w-16" />
      </div>
      <div>
        <p class="text-white hidden lg:block">
          All rights reserved
          <sup>2022</sup>
        </p>
      </div>
      <div>
        <img src="/icons/lanista.svg" alt="lanista" class="w-32" />
      </div>
    </div>
  </footer>
</template>

<script setup></script>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      nav: [
        {
          title: 'İLETİŞİM',
          list: [
            {
              iconName: 'phone',
              description: '04322232448',
              link: 'tel:04322232448',
            },
            {
              iconName: 'map-2',
              description:
                'Abdurrahman Gazi, Erciş Yolu 2. Km D:No:119/A, 65040 Tuşba/Van',
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
          title: 'SİTE HARİTASI',
          list: [
            {
              iconName: '',
              description: 'Anasayfa',
              link: '/',
            },
            {
              iconName: '',
              description: 'Öne Çıkanlar',
              link: '#hit',
            },
            {
              iconName: '',
              description: 'Ürünler',
              link: '#products',
            },
            {
              iconName: '',
              description: 'Markalar',
              link: '#brands',
            },
            {
              iconName: '',
              description: 'Hakkımızda',
              link: '#about',
            },
            {
              iconName: '',
              description: 'Sık Sorulanlar',
              link: '#faqs',
            },
          ],
        },
        {
          title: 'HİZMETLER',
          list: [
            {
              iconName: '',
              description: 'Lastik sökme ve takma',
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
              description: 'Jant düzeltme hizmeti',
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
  },
}
</script>
