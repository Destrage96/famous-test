<template>
  <div class="footer">
    <div class="inner-container footer__content">
      <a class="footer__logo" href="#">
        <img src="../assets/img/logo-museum-1.svg" alt="logo">
      </a>

      <nav class="footer__menu">
        <a class="nav__link" href="#">Каталог</a>
        <a class="nav__link"  href="#">Доставка</a>
        <a class="nav__link"  href="#">Оплата</a>
        <a class="nav__link"  href="#">Контакты</a>
        <a class="nav__link"  href="#">О галерее</a>
      </nav>

      <div class="footer__contacts">
        <a href="tel:+7 (495) 555-55-55" class="contacts-item">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6861 12.0733L12.5241 9.9061C12.0934 9.47621 11.3803 9.48927 10.9346 9.9361L9.84534
                     11.0276C9.77652 10.9896 9.70529 10.9499 9.6304 10.9077C8.94254 10.5257 8.00109 10.0022
                     7.0104 9.00851C6.01678 8.01276 5.49391 7.06772 5.11161 6.37786C5.07127 6.30478 5.03261
                     6.23431 4.99445 6.16739L5.7255 5.43577L6.08492 5.07509C6.53125 4.62763 6.54356 3.91305
                     6.11392 3.48192L3.95184 1.31445C3.52219 0.883917 2.80871 0.896979 2.36238 1.34444L1.75303
                     1.95868L1.76968 1.97525C1.56536 2.23655 1.39462 2.53793 1.26756 2.86292C1.15044 3.17228 1.07752
                     3.46748 1.04418 3.76329C0.758688 6.13542 1.84023 8.30337 4.7754 11.2452C8.8327 15.3114 12.1023
                     15.0043 12.2434 14.9893C12.5506 14.9525 12.845 14.8789 13.1442 14.7624C13.4657 14.6366 13.7662
                     14.4657 14.0267 14.2613L14.04 14.2732L14.6573 13.6673C15.1028 13.22 15.1156 12.5051 14.6861
                     12.0733Z"/>
          </svg>
          +7 (495) 555-55-55
        </a>
        <a href="#" class="contacts-item">
          <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.07028 0C2.27451 0 0 2.27451 0 5.07025C0 8.53985 4.5374 13.6334 4.73058 13.8486C4.91204
                    14.0507 5.22884 14.0503 5.40997 13.8486C5.60315 13.6334 10.1406 8.53985 10.1406 5.07025C10.1405
                    2.27451 7.86601 0 5.07028 0ZM5.07028 7.62123C3.66366 7.62123 2.51932 6.47687 2.51932
                    5.07025C2.51932 3.66363 3.66368 2.51929 5.07028 2.51929C6.47687 2.51929 7.6212 3.66366 7.6212
                    5.07028C7.6212 6.47689 6.47687 7.62123 5.07028 7.62123Z"/>
          </svg>
          г. Москва, ул. Расплетина, 24
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'footer-page'
}
</script>

<style lang="scss">
@import "../assets/styles";
  .footer {
    position: absolute;
    bottom: 0;
    height: 95px;
    width: 100%;
    background-color: $gray-light-color;
    border-bottom: 1px solid $gray-color;
    display: flex;
    justify-content: center;
    align-items: center;

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0 !important;
    }

    &__logo {
      margin-right: 48px;
      margin-top: 6px;
      cursor: pointer;
      img {
        width: 48px;
        height: 48px;
      }
    }

    &__menu {
      margin-right: 140px;
    }

    &__link {
      text-decoration: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $brown-text-link;
      margin-right: 48px;
      @include transition(color);
      &:last-child {
        margin-right: 0;
      }

      &:hover {
        color: $brown-text-link-hover;
        @include transition(color);
      }
    }


    &__contacts {
      .contacts-item {
        margin-right: 48px;
        text-decoration: none;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        color: $brown-text-link;
        @include transition(color);

        svg {
          margin-right: 8px;
          fill: $brown-text-link;
          @include transition(fill);
        }

        &:hover {
          color: $brown-text-link-hover;
          @include transition(color);

          svg {
            fill: $brown-text-link-hover;
            @include transition(fill);
          }
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
