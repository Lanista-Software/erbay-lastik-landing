<template>
  <div class="pt-32">
    <section
      id="home"
      class="w-full h-[793px]"
      style="
        background-image: url('/images/hero.png');
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div
        class="w-full h-[793px] pt-36"
        style="background: rgba(4, 31, 69, 0.8)"
      >
        <div class="container-lg flex flex-row justify-between items-center">
          <div class="text-side flex flex-col w-1/2">
            <LuiHeading level="1" size="xs" display>{{
              hero.title
            }}</LuiHeading>
            <LuiHeading level="2" size="xs" display class="pb-8">{{
              hero.subtitle
            }}</LuiHeading>
            <LuiText class="pb-8">{{ hero.description }}</LuiText>
            <div>
              <LuiButton variant="secondary" rounded size="lg">
                Iletisime Gecin
              </LuiButton>
            </div>
          </div>
          <div class="card-side flex flex-col w-1/2">
            <div id="search-card" class="rounded-2xl bg-white mx-auto">
              <div
                class="rounded-t-2xl grid grid-cols-3 gap-3 p-6 bg-[#f3f4f6]"
              >
                <LuiDropdown
                  v-for="item in arama"
                  :key="item"
                  size="lg"
                  rounded
                  :text="item.title"
                  ><lui-dropdown-item
                    v-for="listItem in item.list"
                    :key="listItem"
                    >{{ listItem.adi }}</lui-dropdown-item
                  >
                </LuiDropdown>
              </div>
              <div class="all-center">
                <img src="/images/lastik.png" alt="lastik" />
              </div>
              <div class="bg-[#f3f4f6] w-full px-12 py-8 rounded-b-2xl">
                <LuiButton variant="primary" size="lg" block rounded
                  >Lastik aramasi Yap</LuiButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="hit" class="pb-40">
      <div
        id="hit-cards"
        class="container-sm flex flex-row justify-between items-center -mt-20"
      >
        <div
          v-for="item in populer"
          :key="item"
          class="rounded-2xl bg-white w-72"
        >
          <div id="hit-icon" class="pt-5 pb-2 left-0">
            <span
              class="bg-secondary py-2 pl-2 pr-4 rounded-r-2xl text-xs text-primary"
              >Popüler</span
            >
          </div>
          <div id="hit-image" class="all-center">
            <img :src="item.foto.src" :alt="item.foto.alt" class="h-40 w-40" />
          </div>
          <div
            id="hit-type"
            class="flex flex-row justify-between items-center px-4 py-6"
          >
            <span class="text-primary-300">{{ item.mevsim }} Lastiği</span>
            <img
              :src="
                item.mevsim === 'Kış'
                  ? '/icons/snowy.svg'
                  : [
                      item.mevsim === 'Yaz'
                        ? '/icons/sun.svg'
                        : '/icons/rainy.svg',
                    ]
              "
              alt="lastik tipi"
            />
          </div>
          <div id="hit-name" class="overflow-hidden pb-4">
            <LuiText
              class="!text-sm text-black px-4 overflow-hidden whitespace-nowrap overflow-ellipsis"
              >{{ item.lastikAdi }}</LuiText
            >
          </div>
          <div id="hit-info" class="pb-4">
            <LuiText class="!text-xs text-slate-700 px-4">{{
              item.kisaBilgi
            }}</LuiText>
          </div>
          <div
            id="hit-bottom"
            class="flex flex-row justify-between items-center px-4 pb-4"
          >
            <div id="hit-starts" class="flex flex-row">
              <i
                v-for="item in item.yildiz"
                :key="item"
                class="ri-star-fill text-yellow-400"
              ></i>
            </div>
            <div id="hit-button" class="flex">
              <LuiButton rounded size="sm" variant="primary">
                <nuxt-link to="/">{{ item.buton }}</nuxt-link></LuiButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="products">
      <div class="all-center flex-col">
        <div id="product-title" class="all-center flex-col pb-8">
          <LuiHeading level="4" size="xl" class="text-black">{{
            urunler.baslik
          }}</LuiHeading>
          <LuiText class="text-xl text-slate-700">{{
            urunler.aciklama
          }}</LuiText>
        </div>
        <div>
          <div
            id="search-card-product"
            class="container rounded-2xl bg-white mx-auto w-full flex flex-row justify-between px-8 py-4"
          >
            <div class="grid grid-cols-6 gap-3 justify-center items-center">
              <LuiDropdown
                v-for="item in arama"
                :key="item"
                size="lg"
                rounded
                :text="item.title"
                ><lui-dropdown-item
                  v-for="listItem in item.list"
                  :key="listItem"
                  >{{ listItem.adi }}</lui-dropdown-item
                >
              </LuiDropdown>
            </div>
            <div>
              <LuiButton variant="primary" size="lg" rounded
                >Lastik aramasi Yap</LuiButton
              >
            </div>
          </div>
        </div>
        <div id="product-cards" class="container-sm grid grid-cols-4 gap-16">
          <div
            v-for="item in urunler.liste"
            :key="item"
            class="rounded-2xl bg-white w-72 pt-12"
          >
            <div id="hit-image" class="all-center">
              <img
                :src="item.foto.src"
                :alt="item.foto.alt"
                class="h-40 w-40"
              />
            </div>
            <div
              id="hit-type"
              class="flex flex-row justify-between items-center px-4 py-6"
            >
              <span class="text-primary-300">{{ item.mevsim }} Lastiği</span>
              <img
                :src="
                  item.mevsim === 'Kış'
                    ? '/icons/snowy.svg'
                    : [
                        item.mevsim === 'Yaz'
                          ? '/icons/sun.svg'
                          : '/icons/rainy.svg',
                      ]
                "
                alt="lastik tipi"
              />
            </div>
            <div id="hit-name" class="overflow-hidden pb-4">
              <LuiText
                class="!text-sm text-black px-4 overflow-hidden whitespace-nowrap overflow-ellipsis hover:overflow-visible"
                >{{ item.lastikAdi }}</LuiText
              >
            </div>
            <div id="hit-info" class="pb-4">
              <LuiText class="!text-xs text-slate-700 px-4">{{
                item.kisaBilgi
              }}</LuiText>
            </div>
            <div
              id="hit-bottom"
              class="flex flex-row justify-between items-center px-4 pb-4"
            >
              <div id="hit-starts" class="flex flex-row">
                <i
                  v-for="item in item.yildiz"
                  :key="item"
                  class="ri-star-fill text-yellow-400"
                ></i>
              </div>
              <div id="hit-button" class="flex">
                <LuiButton rounded size="sm" variant="primary">
                  <nuxt-link to="/">{{ item.buton }}</nuxt-link></LuiButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="brands"></section>
    <section id="about"></section>
    <section id="faq"></section>
  </div>
</template>
<script setup>
const hero = {
  title: 'Erbay Lastik',
  subtitle: 'Her mevsim yol güvenceniz',
  description:
    'Yılların sağladığı tecrübe ve uzman kadromuzla garantili hizmet anlayışı Erbay Lastik’te. Aradığınız tipteki bütün lastiklere Van’daki satış ofisimizde veya internet mağazalarımız üzerinden ulaşabilirsiniz.',
}
const arama = [
  {
    title: 'Marka',
    list: [
      {
        adi: 'Michelin',
      },
      {
        adi: 'Kormoran',
      },
      {
        adi: 'Nokian',
      },
      {
        adi: 'Tigar',
      },
    ],
  },
  {
    title: 'Mevsim',
    list: [
      {
        adi: 'Yaz',
      },
      {
        adi: 'Kış',
      },
      {
        adi: 'Mevsimlik',
      },
    ],
  },
  {
    title: 'Yıl',
    list: [
      {
        adi: '2021',
      },
      {
        adi: '2020',
      },
      {
        adi: '2019',
      },
      {
        adi: '2017',
      },
    ],
  },
  {
    title: 'Taban Genişliği',
    list: [
      {
        adi: '185',
      },
      {
        adi: '195',
      },
      {
        adi: '205',
      },
      {
        adi: '215',
      },
      {
        adi: '225',
      },
      {
        adi: '235',
      },
      {
        adi: '245',
      },
      {
        adi: '255',
      },
    ],
  },
  {
    title: 'Kesit Oranı',
    list: [
      {
        adi: '40',
      },
      {
        adi: '45',
      },
      {
        adi: '50',
      },
      {
        adi: '55',
      },
      {
        adi: '60',
      },
      {
        adi: '65',
      },
    ],
  },
  {
    title: 'Jant Çapı',
    list: [
      {
        adi: '15',
      },
      {
        adi: '16',
      },
      {
        adi: '17',
      },
      {
        adi: '18',
      },
      {
        adi: '19',
      },
    ],
  },
]
const populer = [
  {
    foto: {
      src: '/images/nokianwr.jpg',
      alt: 'lastik',
    },
    mevsim: 'Kış',
    lastikAdi:
      'Nokian WR Snowproof 195/65 R15 91T (D5) Kış Lastiği 2021 Üretimi',
    kisaBilgi: 'AMBALAJLI KARGO - 2 YIL GARANTİ',
    yildiz: 5,
    buton: 'İletişime Geçin',
  },
  {
    foto: {
      src: '/images/nokianwr.jpg',
      alt: 'lastik',
    },
    mevsim: 'Kış',
    lastikAdi:
      'Nokian WR Snowproof 195/65 R15 91T (D5) Kış Lastiği 2021 Üretimi',
    kisaBilgi: 'AMBALAJLI KARGO - 2 YIL GARANTİ',
    yildiz: 5,
    buton: 'İletişime Geçin',
  },
  {
    foto: {
      src: '/images/nokianwr.jpg',
      alt: 'lastik',
    },
    mevsim: 'Kış',
    lastikAdi:
      'Nokian WR Snowproof 195/65 R15 91T (D5) Kış Lastiği 2021 Üretimi',
    kisaBilgi: 'AMBALAJLI KARGO - 2 YIL GARANTİ',
    yildiz: 5,
    buton: 'İletişime Geçin',
  },
  {
    foto: {
      src: '/images/nokianwr.jpg',
      alt: 'lastik',
    },
    mevsim: 'Kış',
    lastikAdi:
      'Nokian WR Snowproof 195/65 R15 91T (D5) Kış Lastiği 2021 Üretimi',
    kisaBilgi: 'AMBALAJLI KARGO - 2 YIL GARANTİ',
    yildiz: 5,
    buton: 'İletişime Geçin',
  },
]
const urunler = {
  baslik: 'Bayimizdeki ürünleri keşfedin',
  aciklama: 'Bayilerimizde sizler için sunduğumuz ürünler',
  liste: [
    {
      foto: {
        src: '/images/nokianwr.jpg',
        alt: 'lastik',
      },
      mevsim: 'Kış',
      lastikAdi:
        'Nokian WR Snowproof 195/65 R15 91T (D5) Kış Lastiği 2021 Üretimi',
      kisaBilgi: 'AMBALAJLI KARGO - 2 YIL GARANTİ',
      yildiz: 5,
      buton: 'İletişime Geçin',
    },
  ],
}
</script>
