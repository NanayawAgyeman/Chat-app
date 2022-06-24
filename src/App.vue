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
  <div class="w-screen bg-white">
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
