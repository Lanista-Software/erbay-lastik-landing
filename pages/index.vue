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
    <section id="products" class="pb-24">
      <div class="all-center flex-col">
        <div id="product-title" class="all-center flex-col pb-8">
          <LuiHeading level="4" size="xl" class="text-black">{{
            urunler.baslik
          }}</LuiHeading>
          <LuiText class="text-xl text-slate-700">{{
            urunler.aciklama
          }}</LuiText>
        </div>
        <div class="pb-16">
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
    <section
      id="banner"
      style="
        background-image: url('/images/mobilbanner.svg');
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <div class="container w-full mx-auto text-center h-96 center-col">
        <LuiHeading level="4" size="lg" class="pb-12">{{
          banner.baslik
        }}</LuiHeading>
        <LuiText class="pb-8">{{ banner.aciklama }}</LuiText>
        <LuiButton rounded size="lg" variant="secondary">
          <nuxt-link :to="banner.buton.link">{{
            banner.buton.label
          }}</nuxt-link></LuiButton
        >
      </div>
    </section>
    <section id="services" class="py-24">
      <div class="flex flex-col justify-center items-center">
        <div class="container-lg mx-auto text-center text-black center-col">
          <LuiHeading level="4" size="lg" class="pb-4">{{
            hizmetler.baslik
          }}</LuiHeading>
          <LuiText class="text-xl">{{ hizmetler.aciklama }}</LuiText>
        </div>
        <div id="services-cards" class="container-sm grid grid-cols-4 gap-16">
          <div
            v-for="(item, i) in hizmetler.liste"
            :key="i"
            class="section-services-container-item"
          >
            <ServiceCard :bg-url="item.fotograf" :title="item.baslik">
              {{ item.icerik }}
            </ServiceCard>
          </div>
        </div>
      </div>
    </section>
    <section id="brands" class="pt-36">
      <div class="container-lg flex flex-row justify-between items-start">
        <div id="brands-text" class="flex flex-col text-start justify-center">
          <div class="flex flex-row items-center space-x-4 pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="#22c55e" d="M5 11h14v2H5z" />
            </svg>
            <LuiText class="text-xl text-slate-500">{{
              markalar.ustbaslik
            }}</LuiText>
          </div>
          <LuiHeading level="4" size="lg" class="pb-8 text-black">{{
            markalar.baslik
          }}</LuiHeading>
          <LuiText class="text-xl text-slate-500 pb-8">{{
            markalar.aciklama
          }}</LuiText>
          <div>
            <LuiButton variant="primary" rounded size="lg">
              Hemen Arayın
            </LuiButton>
          </div>
        </div>
        <div id="brands-logo" class="grid grid-cols-3 gap-4">
          <div
            v-for="(item, index) in markalar.liste"
            :key="index"
            class="bg-white rounded-2xl h-44 w-44 all-center"
          >
            <img :src="item.src" :alt="item.alt" class="rounded-xl p-3" />
          </div>
        </div>
      </div>
    </section>
    <section
      id="about"
      style="background-image: url('/images/banner/aboutbanner.jpg')"
    >
      <div class="all-center py-24" style="background: rgba(4, 31, 69, 0.8)">
        <div class="container-lg flex flex-row justify-between">
          <div
            class="text-side text-white flex flex-col justify-start lg:w-3/5"
          >
            <LuiHeading class="text-warning pb-4" level="2"
              >Biz Kimiz</LuiHeading
            >
            <LuiText class="text-lg !text-white"
              >Erbay Lastik, 2002 yılından bu yana www.erbaylastik.com web
              sitesi ve diğer dijital satış platformları üzerinde farklı araç
              tipleri için, farklı markaların ürünlerini bir arada sunan lastik
              satış merkezidir. Merkezi Van’da bulunan şirketimiz lastik, jant
              ve mini stepne gibi lastik sektörü ürünleri üzerine alanında uzman
              kadrosu ile hizmet vermektedir. Erbay lastik’de otomobil
              lastikleri Michelin, Kormoran, Nokian, Tigar, Hankook, Lassa,
              Petlas, General, başta olmak üzere 30’un üzerinde markanın
              ürünleri, tüm markalara eşit mesafede olduğumuz objektif bir
              yaklaşım ile sunulmaktadır. Web sitemiz, aradığınız ürüne en hızlı
              şekilde ulaşabilmeniz için lastik sektörüne özel olarak
              hazırlanmıştır. Böylece Erbay Lastik, üreticiler başta olmak üzere
              güçlü bir tedarikçi ağı ve depoları ile çoğu stoklarda hazır
              durumdaki, 10.000 üzeri farklı lastik seçeneğini tüm Türkiye’ye
              sevkiyat imkânı ile sunmaktadır. Misyonumuz müşteririlermizin
              memnuniyetini en üst seviyede tutmak üzerine kuruludur. Kaliteli
              hizmet anlayışını ilke edinmek, Sektörü, rakipleri iyi tanımak,
              gözlemlemek, İletişime açık, geri bildirimli olmak, empati
              kurabilmek, Mevcut durumla yetinmeyen, teknolojiyi takip eden,
              yeni yöntemler geliştirerek rekabet gücünü arttırmaya çalışan bir
              şirket olabilmek, Hedefe/sonuca giden yolda emin ve doğru
              adımlarla ilerlemek, Güvenilir, verimli ve karlı hizmet vermek,
              Takım ruhuna sahip, tüm çalışanları ile birlikte Şirket ve Marka
              değerlerini ön planda tutmak diğer prensiplerimizdir.</LuiText
            >
          </div>
          <div class="img-side lg:flex justify-end items-end hidden">
            <img
              src="/icons/erbay.png"
              alt="logo"
              class="flex justify-end items-end w-16"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="faq" class="contentrain-lg py-20 px-0 md:px-16 lg:px-64">
      <div class="center-col">
        <div class="all-center flex-col">
          <LuiText class="pb-8 text-center text-xl"
            >Aklınıza takılabileceğini düşündüğümüz bazı sorular ve cevapları
            sizler için listeledik. Daha fazla bilgi almak için lütfen bizimle
            iletişime geçmekten çekinmeyin.</LuiText
          >
        </div>
        <div class="center-row space-x-4">
          <LuiButton rounded size="md" @click="activeCategory = 'odeme'"
            >Ödeme</LuiButton
          >
          <LuiButton rounded size="md" @click="activeCategory = 'teknik'"
            >Teknik</LuiButton
          >
          <LuiButton rounded size="md" @click="activeCategory = 'iletisim'"
            >İletişim</LuiButton
          >
        </div>
        <lui-accordion-group class="mt-16 lg:w-2/3 lg:mx-auto">
          <lui-accordion
            v-for="(accordion, index) in filteredFaq"
            :key="index"
            :title="accordion.title"
            class="bg-white text-black"
          >
            <div class="text-info-600 mb-6" v-html="accordion.rawContent"></div>
          </lui-accordion>
        </lui-accordion-group>
      </div>
    </section>
    <section id="map" class="all-center py-24 flex flex-col">
      <div class="section-header container-lg all-center flex-col w-3/5">
        <LuiText class="font-bold pb-4 text-4xl text-heading">iletisim</LuiText>
        <LuiText class="pb-8 text-center">iletisim</LuiText>
        <div class="pb-14">
          <a href="">
            <LuiButton rounded size="lg" class="p-2">Haritalarda Ac</LuiButton>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-between items-center">
        <div class="img-side hidden lg:block">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.5466315222907!2d43.36042361566709!3d38.521165776637126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40127ab989b12c95%3A0xb9911b531d5ab773!2sMichelin%20-%20Erbay%20Lastik!5e0!3m2!1str!2str!4v1606392979587!5m2!1str!2str"
            frameborder="0"
            allowfullscreen
            aria-hidden="true"
            height="447px"
            width="840px"
            tabindex="0"
            title="oto deniz adresi"
            class="rounded-2xl"
          ></iframe>
        </div>
        <div class="img-side lg:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.5466315222907!2d43.36042361566709!3d38.521165776637126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40127ab989b12c95%3A0xb9911b531d5ab773!2sMichelin%20-%20Erbay%20Lastik!5e0!3m2!1str!2str!4v1606392979587!5m2!1str!2str"
            frameborder="0"
            allowfullscreen
            aria-hidden="true"
            height="447px"
            width="420px"
            tabindex="0"
            title="oto deniz adresi"
            class="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
    <section id="contact" class="pb-24">
      <div class="flex flex-col justify-center items-center">
        <div
          id="contact-title"
          class="container-lg mx-auto text-center text-black center-col"
        >
          <LuiHeading level="4" size="lg" class="pb-4"
            >Mesajlarınızı hemen cevaplayalım</LuiHeading
          >
          <LuiText class="text-xl"
            >Sormak istediğiniz her soru, almak istediğiniz bütün hizmetlerle
            ilgili bize mesaj gönderebilirsiniz. Soru ve görüşlerinizi
            önemsiyoruz.</LuiText
          >
        </div>
        <div class="border-2 border-blue-900 rounded-2xl flex flex-row">
          <div
            id="contact-input-side"
            class="grid lg:grid-cols-2 grid-cols-1 gap-8 p-8"
          >
            <div class="col-span-1">
              <div>
                <LuiLabel size="lg" class="pb-2">A</LuiLabel>
                <LuiInput
                  for="item.label"
                  size="lg"
                  class="w-full"
                  placeholder="placeholder"
                ></LuiInput>
              </div>
            </div>
            <div class="col-span-1">
              <div>
                <LuiLabel size="lg" class="pb-2">A</LuiLabel>
                <LuiInput
                  for="item.label"
                  size="lg"
                  class="w-full"
                  placeholder="placeholder"
                ></LuiInput>
              </div>
            </div>
            <div class="col-span-2">
              <LuiLabel size="lg" class="pb-2">A</LuiLabel>
              <LuiInput
                for="item.label"
                size="lg"
                class="w-full"
                placeholder="placeholder"
              ></LuiInput>
            </div>
            <div class="col-span-2">
              <LuiLabel size="lg" class="pb-2">A</LuiLabel>
              <LuiInput
                for="item.label"
                size="lg"
                class="w-full"
                placeholder="placeholder"
              ></LuiInput>
            </div>
            <div class="col-span-2">
              <LuiLabel size="lg" class="pb-2">A</LuiLabel>
              <LuiTextarea
                for="item.label"
                size="lg"
                class="w-full h-32"
                placeholder="placeholder"
              ></LuiTextarea>
            </div>
          </div>
          <div id="contact-image-side">
            <img
              src="https://via.placeholder.com/574x578/"
              alt="placeholder"
              class="rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </section>
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
const banner = {
  baslik:
    'WEB SİTEMİZDE BULUNMAYAN TÜM ÜRÜN VE HİZMETLERİMİZ İÇİN BİZİMLE İLETİŞİME GEÇEBİLİRSİNİZ',
  aciklama: 'Telefonla iletişime geçmek için tıklayın.',
  buton: {
    label: 'Hemen Arayın',
    link: 'tel:0(432)2232448',
  },
}
const hizmetler = {
  baslik: 'Erbay Lastik Yerinde Hizmetler',
  liste: [
    {
      baslik: 'Jant Düzeltme',
      icerik:
        'Lastiklerinizin çabuk yıpranmaması için gelin jant bakımlarınızı servisimizde yapalım',
      fotograf: '/images/service2.jpg',
    },
    {
      baslik: 'Lastik Sökme ve Takma',
      icerik:
        'Satın aldığınız lastiklerin sökme ve takma işlemlerini biz gerçekleştirelim',
      fotograf: '/images/service3.jpg',
    },
    {
      baslik: 'Lastik hastanesi',
      icerik:
        'Mevsimi geçen lastiklerinizi bize emanet edin, siz muhafaza etme derdinden kurtulun',
      fotograf: '/images/service4.jpg',
    },
    {
      baslik: 'Rot Balans',
      icerik:
        'Lastiklerinizin en hassas ayarları için bize gelin, yollarda daha güvenli sürüş keyfini yaşayın',
      fotograf: '/images/man.png',
    },
  ],
  aciklama:
    'Lastik satışımızın yanında yerinde verdiğimiz diğer hizmetler için ofis telefonlarımızdan bize ulaşıp daha ayrıntılı bilgi talep edebilir ve ilgili hizmetler için randevu oluşturabilirsiniz.',
}
const markalar = {
  ustbaslik: 'MARKALARIMIZ',
  baslik: 'Temsilcilsi olduğumuz bazı büyük markalar',
  aciklama: 'Daha fazla bilgi almak ve diğer hizmetleri öğrenmek için',
  liste: [
    {
      src: '/icons/markalar/ako.svg',
      alt: 'ako',
    },
    {
      src: '/icons/markalar/castrol.svg',
      alt: 'castrol',
    },
    {
      src: '/icons/markalar/General.svg',
      alt: 'General',
    },
    {
      src: '/icons/markalar/Kormoran.svg',
      alt: 'Kormoran',
    },
    {
      src: '/icons/markalar/Michelin.svg',
      alt: 'Michelin',
    },
    {
      src: '/icons/markalar/Nokian.svg',
      alt: 'Nokian',
    },
    {
      src: '/icons/markalar/Petlas.svg',
      alt: 'Petlas',
    },
    {
      src: '/icons/markalar/Tigar.svg',
      alt: 'Tigar',
    },
  ],
}
const accordion = [
  {
    tag: 'odeme',
    title: 'odeme',
    rawContent: '<p>odeme</p>',
  },
  {
    tag: 'odeme',
    title: 'odeme',
    rawContent: '<p>odeme</p>',
  },
  {
    tag: 'teknik',
    title: 'teknik',
    rawContent: '<p>teknik</p>',
  },
  {
    tag: 'iletisim',
    title: 'iletisim',
    rawContent: '<p>iletisim</p>',
  },
]
const activeCategory = ref('odeme')

const filteredFaq = computed(() => {
  return accordion.filter((item) => item.tag == activeCategory.value)
})

watch(filteredFaq, (to, from) => {
  console.log(to, from)
})
// let filteredFaqs = accordion
// function showFaq(tag) {
//   let filteredFaqs = []
//   accordion.forEach((acc) => {
//     console.log(acc)
//     if (tag === acc.tag) {
//       filteredFaqs.push(acc)
//       console.log(filteredFaqs)
//     }
//   })
//   return filteredFaqs
// }
</script>
