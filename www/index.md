---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
navbar: false
pageClass: home-page-container
---

<style lang="less">
.home-page-container {
  .VPHome { margin-bottom: 0}
  .container { padding:0; max-width: 100% }
}
</style>

<script setup>
import HomePage from './components/home-page.vue'
</script>

<HomePage />
