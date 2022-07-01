<template>
  <nav class="fixed w-full bg-white transition duration-200 drop-shadow-md h-16 pt-3"> 
    <div class="container flex flex-row items-center justify-between h-19.5">
      <div class="left-10 relative z-30 flex items-center gap-2 mb-2 lg:mb-0">
        <img class="h-7 w-6" src="../assets/Icon.png">
        <h1 class="text-head text-xl">yourlogo</h1>
      </div>

      <div
        class="
          absolute lg:static top-20 inset-x-0
          flex flex-row lg:flex-row items-center gap-5 lg:gap-10
          bg-primary-200 pt-5 pb-10 px-5 lg:p-0
          transition duration-500 lg:duration-200 lg:-translate-y-0
        ">
        <a class="text-para text-md">Home <font-awesome-icon :icon="['fas', 'angle-down']"/></a>
        <a class="text-para text-md">Pages <font-awesome-icon :icon="['fas', 'angle-down']"/></a>
        <a class="text-para text-md">Blog <font-awesome-icon :icon="['fas', 'angle-down']"/></a>
        <a class="text-para text-md">Demos <font-awesome-icon :icon="['fas', 'angle-down']"/></a>
        <a class="text-para text-md">Docs <font-awesome-icon :icon="['fas', 'angle-down']"/></a>
        <button class="bg-solid hover:bg-green-700 duration-300 text-md text-white rounded py-1 px-2">Buy Now</button>
      </div>
    </div>
  </nav>
</template>