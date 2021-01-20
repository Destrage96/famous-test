<template>
  <div class="main-button">
    <button v-if="loading===true" class="main-button__disabled main-button__primary">
      <Spin class="main-button__spin"/>
      Загрузка
    </button>

    <button class="main-button__primary main-button__checked" v-else-if="inCart===true"
            @click="$_onChange">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5316 4.80934L7.63353 14.2369L3.34826 10.1923"
              stroke="#F4F6F9" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      В корзине
    </button>

    <button class="main-button__primary" v-else
            @click="$_onChange">{{ textButton }}</button>
  </div>
</template>

<script>
import Spin from './spin';
export default {
  name: "main-button",
  props: {
    textButton: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    inCart: {
      type: Boolean,
      default: false
    }
  },

  components: {Spin},

  methods: {
    $_onChange() {
      this.$emit('on-change');
    }
  }
}
</script>

<style lang="scss">
  @import "../assets/styles";

  .main-button {
    &__primary {
      display: flex;
      justify-content: center;
      padding: 15px 0;
      border-radius: 0;
      border: none;
      min-width: 118px;
      background-color: $brown-color;
      font-family: $Merriweather, sans-serif;
      font-size: 14px;
      color: white;
      @include transition(background-color);

      &:hover {
        background-color: $button-hover;
        @include transition(background-color);
      }
    }

    &__disabled {
      background-color: $button-disabled;

      &:hover {
        background-color: $button-disabled;
      }

      &:focus {
        outline: none;
      }
    }

    &__checked {
      padding: 15px 0 13px;
      background-color: $button-checked;
      @include transition(background-color);

      svg {
        margin-right: 4px;
      }
    }

    &__spin {
      margin-right: 8px;
    }
  }

</style>
