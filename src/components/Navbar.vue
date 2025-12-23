<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import { ref } from "vue";
  import {
    HomeIcon,
    EyeIcon,
    EyeSlashIcon,
    SunIcon,
    MoonIcon,
    BriefcaseIcon,
    EnvelopeIcon,
  } from "@heroicons/vue/24/outline";
  import { useDark, useToggle } from "@vueuse/core";
  import { useFullscreen } from "@vueuse/core";

  const { toggle } = useFullscreen();

  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const isActive = ref(true);

  function close() {
    isActive.value = !isActive.value;
  }
</script>

<template>
  <div class="navbar-container" :class="{ active: isActive }">
    <nav>
      <ul>
        <li @click="close" id="title">
          <EyeIcon v-if="isActive" class="icon" />
          <EyeSlashIcon v-else class="icon" />
        </li>
      </ul>
    </nav>

    <Transition name="fade">
      <nav v-if="isActive" id="header">
        <ul>
          <RouterLink to="/">
            <li><HomeIcon class="icon" /></li>
          </RouterLink>
          <RouterLink to="/repos">
            <li><BriefcaseIcon class="icon" /></li>
          </RouterLink>
          <RouterLink to="/contact">
            <li><EnvelopeIcon class="icon" /></li>
          </RouterLink>
        </ul>
      </nav>
    </Transition>

    <Transition name="fade">
      <nav v-if="isActive" id="test">
        <ul>
          <div @click="toggleDark()">
            <li>
              <SunIcon v-if="isDark" class="icon" />
              <MoonIcon v-else class="icon" />
            </li>
          </div>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/mixin.scss" as mixin;

  @import url(../assets/css/variables.css);
  @import url(../assets/css/animations.css);
  @import url(../assets/css/medias.css);

  .icon {
    width: 30px;
    color: var(--icon-color);
  }

  .navbar-container {
    @include mixin.flex-center-space-between;
    flex-direction: column;
    height: 75px;
    margin: 1em;
    border-radius: 5px;
    background-color: var(--navbar-background-color);
    transition: height 0.3s ease, width 0.3s ease;
    overflow: hidden;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  li {
    flex-direction: row;
    border-radius: 0.2em;
    padding: 1em;
    margin: 5px;
    transition: background-color 0.2s ease;
  }

  li:hover {
    background-color: var(--navbar-hover-color);
  }

  .active {
    height: 90%;
  }
</style>
