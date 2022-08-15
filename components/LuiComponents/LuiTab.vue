<template>
  <div v-show="title == selectedTitle" role="tabpanel" tabindex="0">
    <slot />
  </div>
</template>
<script>
// import { inject, watch, toRefs } from '@nuxtjs/composition-api'
import * as prop from '../../mixins/props'
export default {
  mixins: [
    prop.string('title', 'Title'),
    prop.boolean('active'),
    prop.boolean('disabled'),
  ],
  setup(props) {
    const selectedTitle = inject('selectedTitle')
    const setTitle = inject('setSelectedTitle')
    const { active: isActive } = toRefs(props)

    watch(isActive, (val) => {
      if (val) {
        setTitle(props.title)
      }
    })

    return { selectedTitle }
  },
  watch: {
    selectedTitle(newValue) {
      this.$emit('selectedTab', newValue)
    },
  },
}
</script>
