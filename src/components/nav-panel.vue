<template>
  <div class="nav">
    <div class="inner-container nav__content">
      <a class="nav__logo" href="#">
        <img src="../assets/img/logo-museum-2.svg" alt="logo">
      </a>

      <nav class="nav__menu">
        <a class="nav__link" href="#">Каталог</a>
        <a class="nav__link"  href="#">Доставка</a>
        <a class="nav__link"  href="#">Оплата</a>
        <a class="nav__link"  href="#">Контакты</a>
        <a class="nav__link"  href="#">О галерее</a>
      </nav>

      <div class="nav__search">
        <input type="text" placeholder="Поиск по названию картины">
        <Button :textButton="'Найти'" class="search-btn" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/button';

export default {
  name: 'nav-page',
  components: {Button}
}
</script>

<style lang="scss">
@import "../assets/styles";
  .nav {
    height: 93px;
    width: 100%;
    border-bottom: 1px solid $gray-color;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      margin-right: 48px;
      margin-top: 5px;
      cursor: pointer;
      img {
        width: 48px;
        height: 48px;
      }
    }

    &__menu {
      margin-right: 185px;
    }

    &__link {
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $brown-text;
      margin-right: 49px;
      @include transition(color);
      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: $brown-text-hover;
        @include transition(color);
      }
    }

    &__search {
      display: flex;

      input {
        width: 294px;
        padding-left: 16px;
        border-radius: 0;
        border: 1px solid $gray-lighter-color;
        border-right: none;
        box-sizing: border-box;
        font-family: $Merriweather, sans-serif;
        &::placeholder {
          color: $gray-text;
          font-size: 14px;
          font-weight: 300;
        }
      }

      input:focus {
        border-radius: 0;
        border: 1px solid $gray-color;
        border-right: none;
        outline: none;
      }

      .search-btn {
        button {
          width: 120px;
        }
      }
    }
  }
</style>
