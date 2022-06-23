<template>
  <nav class="fixed top-0 left-0 w-full bg-white z-20 transition duration-200 drop-shadow-md py-2 h-10"> 
    <div class="container flex flex-row items-center justify-between h-19.5">
      <div class="left-10 relative z-30 flex items-center gap-2 mb-2 lg:mb-0">
        <img class="h-4 w-4" src="../assets/Icon.png">
        <h1 class="text-black text-sm">yourlogo</h1>
      </div>

      <div
        class="
          absolute lg:static top-20 inset-x-0
          flex flex-row lg:flex-row items-center gap-5 lg:gap-10
          bg-primary-200 lg:bg-transparent pt-5 pb-10 px-5 lg:p-0
          transition duration-500 lg:duration-200 lg:-translate-y-0
        ">
        <a class="text-gray-500 text-sm">Home</a>
        <a class="text-gray-500 text-sm">Pages</a>
        <a class="text-gray-500 text-sm">Blog</a>
        <a class="text-gray-500 text-sm">Demos</a>
        <a class="text-gray-500 text-sm">Docs</a>
        <button class="bg-green-400 hover:bg-green-500 duration-300 text-sm text-white rounded py-0.5 px-2">Buy Now</button>
      </div>
    </div>
  </nav>
</template>