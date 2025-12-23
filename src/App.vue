<script setup lang="ts">
  import { RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="wrapper">
    <div class="navbar-wrapper">
      <Navbar />
    </div>
    <div class="content-wrapper">
      <div class="content-container">
        <RouterView v-slot="{ Component, route }">
          <transition name="fade" mode="out-in">
            <component :is="Component" :key="route.path" />
          </transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use "assets/scss/mixin.scss" as mixin;
  @import url(assets/css/variables.css);
  @import url(assets/css/animations.css);
  @import url(assets/css/medias.css);

  .content-container {
    height: 90%;
    width: 100%;
    @include mixin.flex-start-center;
    background-color: var(--navbar-background-color);
    border-radius: 5px;
    margin-right: 1em;
    overflow-y: scroll;
  }

  .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .navbar-wrapper {
    @include mixin.flex-center-center;
    height: 100%;
  }

  .content-wrapper {
    width: 100%;
    height: 100vh;
    @include mixin.flex-center-center;
  }
</style>
