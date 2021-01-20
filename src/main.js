import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import './assets/styles.scss';
import _ from "lodash";
import axios from 'axios';
import VueAxios from 'vue-axios';

const __LOCALE_LIST_CARDS = '__intl_wk_list_cards';

const store = createStore({
    state: {
        cards: JSON.parse(localStorage.getItem(__LOCALE_LIST_CARDS)) || [],
    },

    getters: {
        CARDS: (state) => {
            return state.cards
        }
    },

    mutations: {
        SET_CARDS: (store, cards) => {
            store.cards = cards;
            localStorage.setItem(__LOCALE_LIST_CARDS, JSON.stringify(store.cards));
        }
    },

    actions: {
        saveCards({commit, getters}, card) {
            let cards = _.cloneDeep(getters['CARDS']);
            let index = cards.map(x => {
                return x.id;
            }).indexOf(card.id);

            if (index !== -1) {
                cards[index].status = !cards[index].status;
            }

            commit('SET_CARDS', cards);
        }
    }
});
const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.mount('#app')
