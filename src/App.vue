<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Download from "./components/Download.vue";
import Parallax from "./components/Parallax.vue";
import About from "./components/About.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
  <div class="container bg-gray-95">
    <Navbar />
    <Hero />
    <About />
    <Parallax />
    <Download />
    <Footer />
  </div>
</template>

<style>
@import "./assets/base.css";
</style>
