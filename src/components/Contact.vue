<script setup></script>

<template>
  <div class="container">
    <div class="text-container">
      <div class="element">
        <a href="https://www.linkedin.com/in/sébastien-de-backer-cuvelier">
          Mon profil Linkedin →
        </a>
      </div>
      <div class="element">sebastien.cuvelier[@]univ-rouen.fr</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../assets/scss/mixin.scss" as mixin;
  @import url(../assets/css/variables.css);

  .container {
    @include mixin.flex-center-start;
    height: 100%;
    width: 100%;
    color: var(--font-color);
    font-size: 1.5em;
  }

  .text-container {
    @include mixin.flex-start-center;
    flex-direction: column;
    width: 80%;
    padding: 1em;
  }

  .element {
    @include mixin.flex-center-center;
    flex-direction: row;
    margin: 0.5em;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
