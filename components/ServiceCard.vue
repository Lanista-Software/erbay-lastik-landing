<template>
  <div class="service-hover-card radius-10" :style="bgStyle">
    <div class="bg-dark_08 service-hover-card-abs">
      <h5 class="text-white fw-100">
        {{ title }}
      </h5>
      <p class="text-white fw-400">
        {{ description }}
      </p>
      <LuiButton variant="primary" size="md" rounded
        ><a :href="button.link">{{ button.label }}</a></LuiButton
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    button: {
      type: Object,
      default: () => {},
    },
    bgUrl: {
      type: String,
      default: null,
    },
  },
  computed: {
    bgStyle() {
      return `background-image: url(${this.bgUrl})`
    },
  },
}
</script>

<style lang="scss" scoped>
.service-hover-card {
  display: flex;
  width: 300px;
  height: 285px;
  border-radius: 16px;
  background-size: cover;
  &-abs {
    align-self: flex-end;
    height: 40%;
    text-align: center;
    display: grid;
    justify-content: center;
    transition: 1s;
    align-content: center;
    grid-template-rows: auto auto auto;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    padding: 0px 25px;
    overflow: hidden;
    background-color: #27509b80;
    p,
    h5 {
      margin-top: 5px;
    }
    p {
      opacity: 0.8;
      font-size: 0.8rem;
    }
    button {
      display: none;
      margin-top: 50px;
    }
  }
}
.service-hover-card:hover {
  .service-hover-card-abs {
    height: 100%;
    border-radius: 10px;
    transition: 1s;
    button {
      display: block;
    }
  }
}
@media only screen and (max-width: 768px) {
  .service-hover-card {
    height: 290px;
  }
}
</style>
