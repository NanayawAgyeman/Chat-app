<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Download from "./components/Download.vue";
import Parallax from "./components/Parallax.vue";
import About from "./components/About.vue";
import Hero from "./components/Hero.vue";
import Blog from "./components/Blog.vue";
</script>

<template>
  <div class="container bg-gray-95 flex flex-col gap-1">
    <Navbar />
    <Hero />
    <About />
    <Parallax />
    <Blog />
    <Download />
    <Footer />
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
