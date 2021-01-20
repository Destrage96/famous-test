<template>
  <div class="main-content">
    <h1 class="main-content__title">Картины эпохи Возрождения</h1>

    <div class="main-content__cards">
      <Card v-for="card in cardsList"
            :key="card.id"
            :card="card"
            :add-card="cardId"
            :loading="loading"
            @on-add="$_onAdd"/>
    </div>
  </div>
</template>

<script>
import Card from '../components/card';
import axios from 'axios';

export default {
  name: "main-content",
  components: {
    Card
  },

  mounted() {
    let list = this.$store.getters['CARDS'];
    if (list.length === 0) {
      this.cardsList = this.cards;
    } else {
      this.cards = this.$store.getters['CARDS'];
    }
  },

  data: function () {
    return {
      cardRequest: null,
      loading: false,
      cardId: '',
      cards: [
        {
          id: '1',
          img: 'img1.png',
          name: '«Рождение Венеры»',
          author: 'Сандро Боттичелли',
          oldPrice: '2 000 000 $',
          price: '1 000 000 $',
          status: false,
          inStock: true
        },
        {
          id: '2',
          img: 'img2.png',
          name: '«Тайная вечеря»',
          author: 'Леонардо да Винчи',
          price: '3 000 000 $',
          status: false,
          inStock: true
        },
        {
          id: '3',
          img: 'img3.png',
          name: '«Сотворение Адама»',
          author: 'Микеланджело',
          oldPrice: '6 000 000 $',
          price: '5 000 000 $',
          status: false,
          inStock: true
        },
        {
          id: '4',
          img: 'img4.png',
          name: '«Урок анатомии»',
          author: 'Рембрандт',
          oldPrice: '4 000 000 $',
          price: '3 000 000 $',
          status: false,
          inStock: false
        }
      ]
    }
  },

  computed: {
    cardsList: {
      get() {
        return this.$store.getters['CARDS'];
      },

      set(value) {
        return this.$store.commit('SET_CARDS', value)
      }
    },
  },

  methods: {
    $_onAdd(id) {
      this.loading = true;
      this.cardId = id;
      let card = this.cardsList.find(item => item.id === id);
      if(card.status === true) {
        axios
          .get('https://reqres.in/api/products/3')
          .then(response => {
            this.$store.dispatch('saveCards', card);
            this.cardRequest = response.data;
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .finally(() => (
              this.loading = false
          ));
      } else {
        this.$store.dispatch('saveCards', card);
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles";
  .main-content {
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    &__title {
      margin-bottom: 39px;
      margin-top: 2px;
      font-weight: 700;
      font-size: 24px;
      line-height: 150%;
      color: $brown-text;
    }

    &__cards {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
