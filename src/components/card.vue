<template>
  <div class="card" :class="{ 'card-sold-out': card.inStock === false }">
    <div class="card__image">
      <img :src="require('../assets/img/' + card.img)" alt="">
    </div>
    <div class="card__footer">
      <h3 class="footer-title">{{ card.name }}</h3>
      <p class="footer-subtitle">{{ card.author }}</p>

      <div class="price" v-if="card.inStock === true">
        <div class="price-block">
          <p class="old-price" v-if="card.oldPrice">{{ card.oldPrice }}</p>
          <p class="new-price">{{ card.price }}</p>
        </div>

        <Button :textButton="'Купить'"
                :loading="loading && card.id === addCard"
                :in-cart="card.status"
                @on-change="$_addCart"/>
      </div>


      <div class="price" v-else>
        <h3 class="sold-out">
          Продана на аукционе
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './button';

export default {
  name: "card",
  props: {
    card: {
      type: Object
    },
    loading: {
      type: Boolean,
      default: false
    },
    addCard: {
      type: String,
      default: ''
    }
  },

  components: {Button},

  methods: {
    $_addCart() {
      this.$emit('on-add', this.card.id);
    }
  }
}
</script>

<style lang="scss">
  @import "src/assets/styles";

  .card {
    width: 278px;
    height: 325px;
    border: 1px solid $gray-lighter-color;

    &__image {
      width: 100%;
      height: 157px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__footer {
      padding: 22px 23px 24px;

      .footer-title, .footer-subtitle {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #343030;
        margin: 0;
      }

      .footer-subtitle {
        margin-bottom: 22px;
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .price-block {
          .old-price {
            font-weight: 300;
            font-size: 14px;
            line-height: 150%;
            text-decoration-line: line-through;
            color: $gray-text-price;
            margin: 0;
          }

          .new-price {
            margin: 0;
            font-weight: bold;
            font-size: 16px;
            line-height: 150%;
            color: $brown-text;
          }
        }

        .sold-out {
          font-size: 16px;
          line-height: 150%;
          margin: 12px 0 0;
        }
      }
    }
  }

  .card-sold-out {
    width: 278px;
    height: 325px;
    opacity: 0.5;
  }
</style>
