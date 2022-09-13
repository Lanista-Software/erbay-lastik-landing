<template>
  <div class="lg:pt-32 pt-20 overflow-hidden">
    <section
      id="main"
      class="w-full xl:h-[793px] lg:h-[1000px]"
      style="
        background-image: url('/images/hero.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      "
    >
      <div
        class="w-full xl:h-[793px] lg:h-[1000px] md:pt-12 py-24"
        style="background: rgba(4, 31, 69, 0.8)"
      >
        <div
          class="container-lg mx-auto flex lg:flex-row flex-col justify-between items-center space-y-4"
        >
          <div
            class="text-side flex flex-col lg:w-1/2 text-white text-center lg:text-left"
          >
            <LuiHeading
              level="1"
              size="xs"
              display
              class="font-semibold pb-4"
              >{{ homePage.hero.baslik }}</LuiHeading
            >
            <LuiText class="pb-6 hidden lg:flex">{{
              homePage.hero.aciklama
            }}</LuiText>
            <div class="hidden lg:flex">
              <a :href="homePage.hero.buton.link">
                <LuiButton variant="primary" rounded size="lg">
                  {{ homePage.hero.buton.label }}
                </LuiButton></a
              >
            </div>
          </div>
          <div class="card-side flex flex-col lg:items-end">
            <div id="search-card" class="rounded-2xl bg-white mx-auto">
              <div
                class="rounded-t-2xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:p-6 py-6 px-2 bg-[#f3f4f6] justify-between"
                :key="renderCount"
              >
                <LuiSelect
                  v-for="item in homePage.urunler.aramaKarti.secenekler"
                  :key="item"
                  size="md"
                  rounded
                  :placeholder="item.adi"
                  :options="sendOptions(item)"
                  description=""
                  v-model="form[item.model]"
                  class="md:min-w-[155px] min-w-auto"
                />
              </div>
              <div class="all-center">
                <img
                  :src="homePage.hero.aramaKarti.foto.src.split('public')[1]"
                  :alt="homePage.hero.aramaKarti.foto.alt"
                />
              </div>
              <div class="bg-[#f3f4f6] w-full px-12 py-8 rounded-b-2xl">
                <LuiButton
                  variant="primary"
                  size="lg"
                  block
                  rounded
                  @click="clearSearch"
                  ><a :href="homePage.hero.aramaKarti.buton.link">{{
                    homePage.hero.aramaKarti.buton.label
                  }}</a></LuiButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="hit" class="pb-24 hidden lg:block">
      <div
        id="hit-cards"
        class="container-lg grid xl:grid-cols-4 grid-cols-2 justify-items-center gap-8 -mt-20"
      >
        <div
          v-for="item in homePage.populer.urunKartlari"
          :key="item"
          class="rounded-2xl bg-white w-72 border"
        >
          <div id="hit-icon" class="pt-5 pb-2 left-0">
            <span
              class="bg-warning py-2 pl-2 pr-4 rounded-r-2xl text-xs text-primary"
              >Popüler</span
            >
          </div>
          <div id="hit-image" class="all-center">
            <img
              :src="item.foto.src"
              :alt="item.foto.alt"
              class="max-h-40 max-w-40"
            />
          </div>
          <div
            id="hit-type"
            class="flex flex-row justify-between items-center px-4 py-6"
          >
            <span class="text-primary-300">{{ item.mevsim }} LASTİĞİ</span>
            <img :src="choseSeason(item.mevsim)" alt="lastik tipi" />
          </div>
          <div id="hit-name" class="overflow-hidden pb-4">
            <LuiText
              class="!text-sm px-4 overflow-hidden whitespace-nowrap overflow-ellipsis"
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
              <LuiButton
                size="sm"
                variant="primary"
                rounded
                @click.prevent="scrollDown(item.buton.link)"
                >{{ item.buton.label }}</LuiButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="products" class="pb-24 pt-24 lg:pt-0">
      <div class="all-center flex-col">
        <div
          id="product-title"
          class="container-description all-center flex-col pb-8 text-center"
        >
          <LuiHeading
            level="3"
            size="xl"
            class="font-semibold pb-2 text-secondary-800"
            >{{ homePage.urunler.baslik }}</LuiHeading
          >
          <div>
            <LuiText class="text-secondary-700">{{
              homePage.urunler.aciklama
            }}</LuiText>
          </div>
        </div>
        <div class="pb-16">
          <div
            id="search-card-product"
            class="container rounded-2xl mx-auto w-full flex md:flex-row flex-col justify-between lg:px-8 py-4 px-2 border bg-[#f3f4f6]"
          >
            <div
              class="grid xl:grid-cols-6 grid-cols-3 gap-3 pb-3 md:pb-0 justify-center items-center"
              :key="renderCount"
            >
              <LuiSelect
                v-for="item in homePage.urunler.aramaKarti.secenekler"
                :key="item"
                size="md"
                rounded
                :placeholder="item.adi"
                :options="sendOptions(item)"
                description=""
                v-model="form[item.model]"
                class="lg:min-w-[155px] min-w-[110px]"
              />
            </div>
            <div class="p-2 flex justify-center items-center">
              <LuiButton
                variant="primary"
                size="md"
                rounded
                @click="clearSearch"
                >Aramayı Temizle</LuiButton
              >
            </div>
          </div>
        </div>
        <div
          id="product-cards"
          class="container-lg grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-16"
        >
          <div
            v-for="item in filteredProducts"
            :key="item"
            class="rounded-2xl bg-white w-72 pt-12 border"
          >
            <div id="hit-image" class="all-center">
              <img
                :src="item.foto.src"
                :alt="item.foto.alt"
                class="max-h-40 max-w-40"
              />
            </div>
            <div
              id="hit-type"
              class="flex flex-row justify-between items-center px-4 py-6"
            >
              <span class="text-primary-300">{{ item.mevsim }} LASTİĞİ</span>
              <img :src="choseSeason(item.mevsim)" alt="lastik tipi" />
            </div>
            <div id="hit-name" class="overflow-hidden pb-4">
              <LuiText
                class="!text-sm px-4 overflow-hidden whitespace-nowrap overflow-ellipsis hover:overflow-visible"
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
                <LuiButton
                  size="sm"
                  variant="primary"
                  rounded
                  @click.prevent="scrollDown(item.buton.link)"
                  >{{ item.buton.label }}</LuiButton
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
      <div
        class="container-lg w-full mx-auto text-center lg:h-96 center-col text-white"
      >
        <div class="container-description">
          <LuiHeading level="3" size="xl" class="pb-12 font-medium">{{
            homePage.banner.baslik
          }}</LuiHeading>
          <LuiText class="pb-8">{{ homePage.banner.aciklama }}</LuiText>
          <LuiButton rounded size="lg" variant="primary">
            <a :href="homePage.banner.buton.link">{{
              homePage.banner.buton.label
            }}</a></LuiButton
          >
        </div>
      </div>
    </section>
    <section id="services" class="pt-24 pb-36">
      <div class="flex flex-col justify-center items-center">
        <div class="container-description mx-auto text-center center-col pb-8">
          <LuiHeading
            level="3"
            size="xl"
            class="pb-4 font-semibold text-secondary-800"
            >{{ homePage.hizmetler.baslik }}</LuiHeading
          >
          <LuiText class="text-secondary-700">{{
            homePage.hizmetler.aciklama
          }}</LuiText>
        </div>
        <div
          id="services-cards"
          class="container-lg grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 justify-items-center"
        >
          <div
            v-for="(item, i) in homePage.hizmetler.hizmetKartlari"
            :key="i"
            class="section-services-container-item"
          >
            <ServiceCard
              :bg-url="item.foto.src.split('public')[1]"
              :title="item.baslik"
              :description="item.aciklama"
              :button="item.buton"
            >
            </ServiceCard>
          </div>
        </div>
      </div>
    </section>
    <section id="brands" class="pb-24">
      <div
        class="container-lg flex xl:flex-row flex-col space-y-8 xl:space-y-0 justify-between items-start"
      >
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
            <LuiText class="text-slate-500">{{
              homePage.markalar.ustYazi
            }}</LuiText>
          </div>
          <LuiHeading
            level="3"
            size="xl"
            class="pb-8 font-semibold w-3/4 text-secondary-800"
            >{{ homePage.markalar.baslik }}</LuiHeading
          >
          <LuiText class="text-slate-500 pb-8">{{
            homePage.markalar.aciklama
          }}</LuiText>
          <div>
            <LuiButton variant="primary" rounded size="lg">
              <a :href="homePage.markalar.buton.link">{{
                homePage.markalar.buton.label
              }}</a>
            </LuiButton>
          </div>
        </div>
        <div id="brands-logo" class="grid grid-cols-3 gap-4">
          <div
            v-for="(item, index) in homePage.markalar.markaLogolari"
            :key="index"
            class="bg-white rounded-2xl md:h-44 md:w-52 h-[88px] w-[104px] all-center border"
          >
            <img
              :src="item.src.split('public')[1]"
              :alt="item.alt"
              class="rounded-xl p-3"
            />
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
            <LuiHeading class="pb-4 font-semibold" level="3" size="xl">{{
              homePage.hakkimizda.baslik
            }}</LuiHeading>
            <LuiText class="text-lg !text-white">{{
              homePage.hakkimizda.aciklama
            }}</LuiText>
          </div>
          <div class="img-side lg:flex justify-end items-end hidden">
            <img
              :src="homePage.hakkimizda.logo.src.split('public')[1]"
              :alt="homePage.hakkimizda.logo.alt"
              class="flex justify-end items-end w-16"
            />
          </div>
        </div>
      </div>
    </section>
    <section id="faq" class="py-20">
      <div class="flex flex-col container-lg">
        <div class="container-description all-center flex-col">
          <LuiHeading
            level="3"
            size="xl"
            class="pb-8 font-semibold text-secondary-800"
            >{{ homePage.cokSorulanlar.baslik }}</LuiHeading
          >
          <LuiText class="pb-8 text-center text-secondary-700">{{
            homePage.cokSorulanlar.aciklama
          }}</LuiText>
        </div>
        <div class="center-row space-x-4">
          <LuiButton rounded size="md" @click="activeCategory = 'odeme'">{{
            homePage.cokSorulanlar.tagButon[0].label
          }}</LuiButton>
          <LuiButton rounded size="md" @click="activeCategory = 'teknik'">{{
            homePage.cokSorulanlar.tagButon[1].label
          }}</LuiButton>
          <LuiButton rounded size="md" @click="activeCategory = 'iletisim'">{{
            homePage.cokSorulanlar.tagButon[2].label
          }}</LuiButton>
        </div>
        <lui-accordion-group class="mt-16 lg:w-2/3 lg:mx-auto">
          <lui-accordion
            v-for="(accordion, index) in filteredFaq"
            :key="index"
            :title="accordion.soru"
            class="bg-white"
          >
            <div class="text-info-600 mb-6">{{ accordion.cevap }}</div>
          </lui-accordion>
        </lui-accordion-group>
      </div>
    </section>
    <section id="map" class="all-center pb-24 flex flex-col">
      <div
        class="section-header container-description all-center text-center flex-col"
      >
        <LuiHeading
          level="3"
          size="xl"
          class="font-bold pb-4 text-secondary-800"
          >{{ homePage.harita.baslik }}</LuiHeading
        >
        <LuiText class="pb-8 text-center text-secondary-700">{{
          homePage.harita.aciklama
        }}</LuiText>
        <div class="pb-14">
          <LuiButton rounded size="lg" class="p-2"
            ><a :href="homePage.harita.buton.link">{{
              homePage.harita.buton.label
            }}</a></LuiButton
          >
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
            title="erbay lastik adresi"
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
            title="erbay lastik adresi"
            class="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
    <section id="form" class="pb-24">
      <div class="flex flex-col justify-center items-center">
        <div
          id="contact-title"
          class="container-lg mx-auto text-center center-col pb-12"
        >
          <div class="container-description">
            <LuiHeading
              level="3"
              size="xl"
              class="pb-4 font-semibold text-secondary-800"
              >{{ homePage.mesaj.baslik }}</LuiHeading
            >
            <LuiText class="text-secondary-700">{{
              homePage.mesaj.aciklama
            }}</LuiText>
          </div>
        </div>
        <div
          class="md:border-2 border-blue-900 rounded-2xl flex lg:flex-row flex-col w-full md:w-auto px-2 md:px-0"
        >
          <div
            id="contact-input-side"
            class="grid lg:grid-cols-2 grid-cols-1 gap-8 md:p-8"
          >
            <div class="md:col-span-1 col-span-2">
              <div>
                <LuiLabel
                  size="lg"
                  class="pb-2"
                  :for="homePage.mesaj.bilgiler[0].label"
                  >{{ homePage.mesaj.bilgiler[0].label }}</LuiLabel
                >
                <LuiInput
                  :id="homePage.mesaj.bilgiler[0].label"
                  size="lg"
                  class="w-full"
                  :placeholder="homePage.mesaj.bilgiler[0].placeholder"
                ></LuiInput>
              </div>
            </div>
            <div class="md:col-span-1 col-span-2">
              <div>
                <LuiLabel
                  size="lg"
                  class="pb-2"
                  :for="homePage.mesaj.bilgiler[1].label"
                  >{{ homePage.mesaj.bilgiler[1].label }}</LuiLabel
                >
                <LuiInput
                  :id="homePage.mesaj.bilgiler[1].label"
                  size="lg"
                  class="w-full"
                  :placeholder="homePage.mesaj.bilgiler[1].placeholder"
                ></LuiInput>
              </div>
            </div>
            <div class="col-span-2">
              <LuiLabel
                size="lg"
                class="pb-2"
                :for="homePage.mesaj.bilgiler[2].label"
                >{{ homePage.mesaj.bilgiler[2].label }}</LuiLabel
              >
              <LuiInput
                :id="homePage.mesaj.bilgiler[2].label"
                size="lg"
                class="w-full"
                :placeholder="homePage.mesaj.bilgiler[2].placeholder"
              ></LuiInput>
            </div>
            <div class="col-span-2">
              <LuiLabel
                size="lg"
                class="pb-2"
                :for="homePage.mesaj.bilgiler[3].label"
                >{{ homePage.mesaj.bilgiler[3].label }}</LuiLabel
              >
              <LuiInput
                :id="homePage.mesaj.bilgiler[3].label"
                size="lg"
                class="w-full"
                :placeholder="homePage.mesaj.bilgiler[3].placeholder"
              ></LuiInput>
            </div>
            <div class="col-span-2">
              <LuiLabel
                size="lg"
                class="pb-2"
                :for="homePage.mesaj.bilgiler[4].label"
                >{{ homePage.mesaj.bilgiler[4].label }}</LuiLabel
              >
              <LuiTextarea
                :id="homePage.mesaj.bilgiler[4].label"
                size="lg"
                class="w-full h-32"
                :placeholder="homePage.mesaj.bilgiler[4].placeholder"
              />
            </div>
            <div class="col-span-2 flex justify-end items-end">
              <LuiButton size="lg" rounded>{{
                homePage.mesaj.buton
              }}</LuiButton>
            </div>
          </div>
          <div id="contact-image-side" class="hidden lg:block">
            <img
              :src="homePage.mesaj.foto.src.split('public')[1]"
              :alt="homePage.mesaj.foto.alt"
              class="rounded-b-2xl h-full lg:rounded-b-none lg:rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { data } = await useAsyncData('anasayfa', () =>
  queryContent('contentrain', 'anasayfa').findOne()
)
let homePage = data.value.body[0]
let productList = homePage.urunler.urunKartlari
const renderCount = ref(0)

function sendOptions(obj) {
  const list = obj.liste.map((e) => {
    return e.secenek
  })
  return list
}

function clearSearch() {
  form.value = {
    marka: '',
    mevsim: '',
    yil: '',
    taban: '',
    kesit: '',
    jant: '',
  }
  renderCount.value += 1
}

function scrollDown(id) {
  var element = document.getElementById(id)
  var headerOffset = 140
  var elementPosition = element.getBoundingClientRect().top
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

const sections = ['main', 'products', 'brands', 'about', 'faq']
onMounted(() => {
  let el
  let observer
  sections.forEach((section) => {
    el = document.getElementById(section)
    observer = new IntersectionObserver(callback, {
      threshold: 0.1,
    })
    observer.observe(el)
  })
})
function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setNavActiveClass(entry.target.id)
    }
  })
}
function setNavActiveClass(id) {
  sections.forEach((section) => {
    const el = document.getElementById(`nav-${section}`)
    if (id === section) {
      el.classList.add(...['border-b-2', 'border-warning', 'left-0', 'right-2'])
    } else {
      el.classList.remove(
        ...['border-b-2', 'border-warning', 'left-0', 'right-2']
      )
    }
  })
}

let form = ref({
  marka: '',
  mevsim: '',
  yil: '',
  taban: '',
  kesit: '',
  jant: '',
})

const filteredProducts = computed(() => {
  const availableKeys = Object.entries(form.value)
    .map(([key, value]) => {
      if (value) {
        return key
      }
    })
    .filter((y) => y !== undefined)
  return productList.filter((item) => {
    if (availableKeys.length > 0) {
      const sameKeys = availableKeys.map((c) => {
        if (item.lastikAdi.includes(form.value[c])) {
          return true
        }
        return false
      })
      return sameKeys.filter((x) => x == true).length === sameKeys.length
    }
    return true
  })
})

const activeCategory = ref('odeme')
const newAcc = homePage.cokSorulanlar.soruKartlari

const filteredFaq = computed(() => {
  return newAcc.filter((item) => item.tag == activeCategory.value)
})

function choseSeason(season) {
  if (season === 'KIŞ') {
    return '/icons/snowy.svg'
  } else if (season === 'YAZ') {
    return '/icons/sun.svg'
  } else {
    return '/icons/rainy.svg'
  }
}

watch(filteredFaq, (to, from) => {
  console.log(to, from)
})
</script>
<style scoped>
.border-bottom {
  border-bottom: 2px solid #fce500;
  position: absolute;
  right: 50%;
  left: 0;
}
</style>
