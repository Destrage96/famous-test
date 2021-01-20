<template>
  <NavPanel/>
  <div class="inner-container">
    <MainContent/>
  </div>
  <FooterPage/>
</template>

<script>
import NavPanel from './components/nav-panel.vue';
import MainContent from './components/main-content.vue';
import FooterPage from './components/footer.vue';

export default {
  name: 'App',
  components: {
    NavPanel,
    MainContent,
    FooterPage
  }
}
</script>
