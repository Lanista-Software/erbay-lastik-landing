<template>
  <div role="listbox" class="dropdown" :class="computedClasses.container">
    <lui-button
      type="text"
      v-bind="$attrs"
      :variant="variant"
      :size="size"
      :rounded="rounded"
      :aria-expanded="menuActive"
      :icon="icon === 'default' ? iconName.append : icon"
      :prepend="icon === 'default' ? iconName.prepend : prepend"
      :block="block"
      :icon-line="iconLine"
      :uppercase="uppercase"
      :filter="filter"
      :font-bold="fontBold"
      @click.stop="menuActive = !menuActive"
    >
      {{ text }}
    </lui-button>
    <ul
      v-show="menuActive"
      :class="computedClasses.content"
      class="dropdown-menu"
    >
      <slot />
    </ul>
  </div>
</template>
<script>
// import {
//   ref,
//   computed,
//   provide,
//   watch,
//   onUnmounted,
//   onMounted,
// } from '@nuxtjs/composition-api'
import { generateClasses } from '../../mixins/methods'
import * as prop from '../../mixins/props'
import LuiButton from './LuiButton.vue'
export default {
  components: { LuiButton },
  mixins: [
    prop.variant(),
    prop.filter(),
    prop.boolean('rounded', true),
    prop.boolean('block', false),
    prop.boolean('uppercase'),
    prop.string('icon', 'default'),
    prop.string('prepend', 'none'),
    prop.boolean('iconLine', true),
    prop.boolean('fontBold', false),
    prop.string('placement', 'bottomLeft', [
      'bottomLeft',
      'bottomRight',
      'topLeft',
      'topRight',
      'rightTop',
      'rightBottom',
      'leftTop',
      'leftBottom',
    ]),
    prop.string('text', 'Dropdown'),
    prop.size('md', ['sm', 'md', 'lg']),
  ],
  inheritAttrs: false,
  emits: ['onChange'],
  setup(props, { emit }) {
    onMounted(() => {
      document.addEventListener('click', closeDropdown)
    })
    onUnmounted(() => {
      document.removeEventListener('click', closeDropdown)
    })
    const parentProps = ref({
      variant: props.variant,
      filter: props.filter,
      rounded: props.rounded,
      block: props.block,
      size: props.size,
    })
    provide('parentProps', parentProps.value)

    const menuActive = ref(false)

    watch(menuActive, (val) => {
      emit('onChange', val)
    })

    function closeDropdown() {
      menuActive.value = false
    }

    const iconName = computed(() => {
      if (props.icon === 'default') {
        const names = { prepend: 'none', append: 'none' }
        if (props.placement.startsWith('bottom')) {
          if (menuActive.value) names.append = 'arrow-down-s'
          else names.append = 'arrow-down-s'
        }
        if (props.placement.startsWith('top')) {
          if (!menuActive.value) names.append = 'arrow-down-s'
          else names.append = 'arrow-down-s'
        }
        if (props.placement.startsWith('right')) {
          if (!menuActive.value) names.append = 'arrow-left-s'
          else names.append = 'arrow-down-s'
        }
        if (props.placement.startsWith('left')) {
          if (!menuActive.value) names.prepend = 'arrow-right-s'
          else names.prepend = 'arrow-down-s'
        }
        return names
      }
      return null
    })

    const computedClasses = computed(() => {
      const classes = {
        container: {
          position: 'relative',
          width: props.block ? 'w-full' : 'w-max',
          zIndex: 'z-50',
        },
        content: {
          position: 'absolute',
          top:
            props.placement.includes('bottom') ||
            props.placement.includes('Bottom')
              ? 'top-full'
              : props.placement.includes('Top')
              ? 'top-0'
              : '',
          bottom: props.placement.startsWith('top') ? 'bottom-full' : '',
          left: props.placement.includes('Left')
            ? 'left-0'
            : props.placement.startsWith('right')
            ? 'left-full'
            : '',
          right: props.placement.includes('Right')
            ? 'right-0'
            : props.placement.startsWith('left')
            ? 'right-full'
            : '',
          backgroundColor: 'bg-white',
          borderRadius: props.rounded ? 'rounded-lg' : '',
          borderWidth: 'border',
          borderColor: 'border-secondary-200',
          // width: 'w-full',
          width: 'w-max',
          paddingBottom: 'pb-2',
          marginTop: props.placement.includes('bottom') ? 'mt-2' : '',
          marginBottom: props.placement.includes('top') ? 'mb-2' : '',
          marginLeft: props.placement.includes('right') ? 'ml-2' : '',
          marginRight: props.placement.includes('left') ? 'mr-2' : '',
          boxShadow: 'shadow-md',
        },
      }
      return {
        container: generateClasses([{ ...classes.container }]),
        content: generateClasses([{ ...classes.content }]),
      }
    })

    return { menuActive, computedClasses, iconName }
  },
}
</script>
