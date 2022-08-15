<template>
  <div ref="LuiAccordionGroup" class="accordionGroup">
    <slot />
  </div>
</template>

<script>
// import { provide, ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const activeTitle = ref(null)
    provide('activeAccordion', activeTitle)
  },
}
</script>
