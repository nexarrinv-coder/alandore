<template>
  <header class="">
    <div class="flex top-navs">
      <RouterLink to="/">
        <div class="logo flex">
        <img src="/src/assets/logo.png" alt="Alandore Health LOGO without wording">
        <div class="flex-col logo-txt">
          <span>Alandore</span>
          <span class="acc-color sm-txt">HEALTH</span>
        </div>
        </div>        
      </RouterLink>
      <div class="flex">
        <RouterLink to="/about">ABOUT US</RouterLink>
        <RouterLink to="/blogs">BLOGS</RouterLink>
        <RouterLink to="/departments">DEPARTMENTS</RouterLink>
      </div>
      <div class="top-socials flex">
        <RouterLink to="/"><img src="./assets/icons/facebook.png" alt=""></RouterLink>
        <RouterLink to="/"><img src="./assets/icons/instagram.png" alt=""></RouterLink>
        <RouterLink to="/"><img src="./assets/icons/youtube.png" alt=""></RouterLink>
        <RouterLink to="/"><img src="./assets/icons/twitter.png" alt=""></RouterLink>
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

  header .logo-txt{
    gap: .2rem;
  }

  .top-socials{
    border: 1px solid var(--accent-color);
    padding: .4rem 1rem;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
  }.top-socials img{
    height: 16px;
  }

  header .top-navs a{
    font: var(--bgscreen-fsize) 'Alegreya Sans1', sans-serif;
    text-transform: capitalize;
  }
</style>

<script setup>
import { RouterView, RouterLink } from 'vue-router';

</script>