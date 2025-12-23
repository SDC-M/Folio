<script setup lang="ts">
  import { test } from "@/stores/test.ts";

  const store = test();
  store.fct();
</script>

<template>
  <main>
    <h1>{{ store.user?.message }}</h1>
  </main>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/mixin.scss" as mixin;

  main {
    @include mixin.flex-center-center;
  }
</style>
