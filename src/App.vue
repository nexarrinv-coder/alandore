<template>
  <header class="">
    <div class="flex top-navs">
      <RouterLink to="/">
        <div class="logo flex">
        <img src="/src/assets/logo.png" alt="Alandore Health LOGO without wording"><span>Alandore</span>
        </div>        
      </RouterLink>
      <div class="flex">
        <RouterLink to="/about">ABOUT US</RouterLink>
        <RouterLink to="/blogs">BLOGS</RouterLink>
        <RouterLink to="/departments">DEPARTMENTS</RouterLink>
      </div>
      <div class="top-socials flex">
        <RouterLink to="/">Facebook</RouterLink>
        <RouterLink to="/">Instagram</RouterLink>
        <RouterLink to="/">WhatsApp</RouterLink>
        <RouterLink to="/">X</RouterLink>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p>Copyright &copy; Alandore Health, all rights reserved, 2026</p>
  </footer>

</template>

<style scoped>

  header{
    padding: 1rem 2rem 1px;
    background-color: var(--light-accent-color);
  }

  header img{
    height: 64px;
  }

  header .logo{
    align-items: center;
    text-transform: uppercase;
    font-size: var(--bg-fsize3);
    color: var(--darker-pri-color);
    font-weight: 600;
    font-family: 'Accent Font', sans-serif;
  }

  header .top-navs{
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 1rem;
    box-shadow: 0 4px 4px -6px var(--pri-color);
  }

  header .top-navs a{
    font: var(--bgscreen-fsize) 'Alegreya Sans1', sans-serif;
    text-transform: capitalize;
  }
</style>

<script setup>
import { RouterView, RouterLink } from 'vue-router';

</script>