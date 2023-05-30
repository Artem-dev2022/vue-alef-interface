<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <img alt="лого" class="header__logo" src="@/assets/alef-logo.png"/>

      <nav class="header__nav">
        <RouterLink class="header__link" :class="{'header__link--active': $route.path == '/'}" to="/">Форма</RouterLink>
        <RouterLink class="header__link" :class="{'header__link--active': $route.path == '/preview'}" to="/preview">Превью</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <div class="main__container container">
      <RouterView />
    </div>
  </main>

  <footer class="footer">
    <div class="container footer__container">
      <p class="footer__rights">all rights reserved</p>
    </div>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
</script>