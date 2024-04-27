<script setup>
import { useData, useRouter } from 'vitepress'
const { page, frontmatter, theme } = useData()
const { go } = useRouter()
</script>

<template>
  <div class="flex h-screen w-screen relative">
    <div class="absolute inset-0 z-[1] bg-black/90"></div>
    <div class="absolute inset-0 z-[2] flex flex-col items-center justify-between text-white font-mono p-10">
      <div class="flex items-center justify-center ">
        <svg class="w-[90px]" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424 110">
          <path fill="currentColor"
            d="m7 5h22l25 76 16-51 9 26-16 50h-21zm68 0h19l24 76 24-76h22l-37 101h-20zm111 0h25l40 101h-22l-30.2-83.2-27.8 83.2h-20zm53 0h20l36 101h-19zm75 0h21l-33 85-9-24zm33.7 0h68.6v19h-68.6zm3.3 42h61.8v17h-61.8zm-6 40h74v19h-74z" />
        </svg>
      </div>
      <div class="flex items-center flex-col mb-10 text-center">
        <div class="lg:text-7xl text-4xl font-medium mb-5">Made for Efficiency</div>
        <div class="lg:text-lg text-sm mb-10">简单易用的自动化桌面软件, 支持win和mac</div>
        <div class="flex space-x-5">
          <div v-on:click="go('/install#安装包')"
            class="flex items-center justify-center rounded-xl text-md bg-[#4f40ff] text-white font-bold px-5 py-3 cursor-pointer !no-underline hover:!text-white visited:text-white">
            软件下载</div>
          <div
            class="flex items-center justify-center rounded-xl text-md bg-transparent border text-white font-bold px-5 py-3 cursor-pointer"
            v-on:click="go('/document')">
            使用文档</div>
        </div>
      </div>
      <div class="flex flex-col-reverse md:flex-row items-center justify-center uppercase w-full">
        <div class="flex items-center gap-2">made by
          <a href="https://twitter.com/0x3lang" target="_blank"
            class="hover:underline cursor-pointer underline-offset-4 ">0x3lang</a>
        </div>
        <!-- <div class="flex items-center">
          <div v-for="nav in theme.nav" class="hover:underline cursor-pointer underline-offset-4 ml-5 first:ml-0"
            :key="nav.link" v-on:click="go(nav.link)">{{
            nav.text }}</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="less">
.home-page-container {
  .VPHome {
    margin-bottom: 0
  }

  .container {
    padding: 0;
    max-width: 100%
  }
}
</style>
