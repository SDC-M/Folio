<script setup></script>

<template>
  <div class="container">
    <div class="text-container">
      <p>./Hello_World</p>
      <p>
        Hello! I'm 21 years old and currently in my third year of studying
        Computer Science. I'm passionate about technology, programming, chess
        and running.
      </p>
      <p>
        I enjoy learning new languages, for example Go and TypeScript. After my
        first year at engineering school, I decided to join the University of
        Rouen. This allowed me to fully flourish. I now plan to obtain my
        bachelor's degree and then continue with a master's degree or a
        work-study program.
      </p>
      <p>
        I love building projects and exploring new areas like web development
        and algorithms. You can get a glimpse of what I'm doing here or on my
        Github I'm always looking for opportunities to grow, collaborate, and
        contribute to exciting tech communities.
      </p>
      <p>
        Don't hesitate to contact me here if you want create something with me.
      </p>
      <p>Best regards - Sébastien</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../assets/scss/mixin.scss" as mixin;

  .container {
    @include mixin.flex-center-center;
  }

  .text-container {
    @include mixin.flex-start-center;
    flex-direction: column;
    padding: 1em;
    font-size: 1.2em;
    border-left: 1px solid var(--font-color);
  }
</style>
