<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";

  const repos = ref([]);
  const loading = ref(false);
  const error = ref();

  const fetchRepos = async () => {
    loading.value = true;

    try {
      const response = await axios.get(
        "https://api.github.com/users/SDC-M/repos"
      );
      repos.value = response.data.filter((repo) => repo.description);
    } catch (err) {
      error.value = "Error during the fetch of data on Github";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    fetchRepos();
  });
</script>

<template>
  <div class="repos-container">
    <h1 v-if="!loading">My Github</h1>
    <div v-if="loading" class="loading"><span class="loader"></span></div>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="repos-grid">
      <div v-for="repo in repos" :key="repo.id" class="repo-card">
        <h2>{{ repo.name }}</h2>
        <p class="description">
          {{ repo.description }}
        </p>
        <div class="language" v-if="repo.language">
          <span class="language-badge">{{ repo.language }}</span>
        </div>
        <a :href="repo.html_url" target="_blank" class="repo-link">
          See on GitHub →
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../assets/scss/mixin.scss" as mixin;
  @import url(../assets/css/variables.css);

  .repos-container {
    height: 100%;
    padding: 20px;
    max-width: 1200px;
    margin: 0;
  }

  .repos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .repo-card {
    @include mixin.flex-start-space-between;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 20px;
    background: var(--body-background-color);
    transition: transform 0.2s;
  }

  .repo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .repo-card h2 {
    margin: 0 0 10px 0;
    color: var(--font-color);
  }

  .description {
    color: var(--font-color);
    margin-bottom: 15px;
  }

  .language-badge {
    background: var(--navbar-background-color);
    color: var(--font-color);
    padding: 4px 12px;
    border-radius: 12px;
  }

  .repo-link {
    margin-top: 10px;
    color: var(--font-color);
    text-decoration: none;
  }

  .repo-link:hover {
    text-decoration: underline;
  }

  .loading {
    @include mixin.flex-center-center;
    height: 100%;
    width: 100%;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid var(--font-color);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
</style>
