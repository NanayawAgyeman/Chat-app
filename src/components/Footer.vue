<template>
  <footer class="container bottom-0 pl-20 mt-0 mb-1.5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 mb-9">
      <div>
        <div class="flex gap-2 mb-5">
          <img class="h-4 w-4" src="../assets/Icon.png">
          <h1 class="text-head text-sm">yourlogo</h1>
        </div>
        <p class="text-para leading-loose tracking-wide w-full md:w-[80%] text-md">Morbi convallis bibendum urna ut viverra. Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-12 ">
        <div>
          <h3 class="mb-4 text-md text-title">Helpful Links</h3>
          <div class="flex flex-col gap-3 text-sm text-para">
            <a class="hover:underline"><font-awesome-icon icon="angle-right"/> About Us</a>
            <a class="hover:underline"><font-awesome-icon icon="angle-right"/> Features</a>
            <a class="hover:underline"><font-awesome-icon icon="angle-right"/> FAQ's</a>
            <a class="hover:underline"><font-awesome-icon icon="angle-right"/> Blog</a>
            <a class="hover:underline"><font-awesome-icon icon="angle-right"/> Contact</a>
          </div>
        </div>
        <div>
          <h3 class="mb-4 text-md text-title">Services</h3>
          <div class="flex flex-col gap-3 text-sm text-para">
            <a class="hover:underline"><font-awesome-icon :icon="['fas', 'angle-right']"/> Worldwide</a>
            <a class="hover:underline"><font-awesome-icon :icon="['fas', 'angle-right']"/> Scalable</a>
            <a class="hover:underline"><font-awesome-icon :icon="['fas', 'angle-right']"/> Modular</a>
            <a class="hover:underline"><font-awesome-icon :icon="['fas', 'angle-right']"/> Connectivity</a>
            <a class="hover:underline"><font-awesome-icon :icon="['fas', 'angle-right']"/> Corporate</a>
          </div>
        </div>
        <div>
          <h3 class="mb-4 text-md text-title">Contact Us</h3>
          <div class="flex flex-col gap-3 text-sm text-para">
            <a class="hover:underline">455 West Orchard Street Kings Mountain, NC 28086</a>
            <a class="hover:underline">Phone: (272) 211-7370</a>
            <a class="hover:underline">E-Mail: support@brand.com</a>
          </div>
        </div>
      </div>
    </div>

    <hr class="bg-line"/>

    <div>
      <p class="container drop-shadow-lg text-sm text-center text-para mt-4 mb-4 tracking-wider">
        &copy; 2020 YourSite. All rights reserved.
      </p>
    </div>
  </footer>
</template>

