<template>
    <div class="container  py-20 flex flex-col items-center space-y-10">
        <div>
          <h2 class="text-4xl text-black text-center mb-3">Download App</h2>
          <p class="text-xl text-gray-500 text-center">Fusce placerat pretium mauris, vel sollicitudin elit <br/> lacinia 
          vitae. Quisque sit amet nisi erat.</p>
        </div>
       
        <div class="flex items-center space-x-2">
          <button class="p-2 text-white bg-green-400 w-40 rounded-full flex flex-row space-x-2">
            <img class="ml-2 mt-3" src="../assets/apple.png"/>
            <div class="flex flex-col">
                <a class="text-xs text-left">Download on the</a>
                <a class="text-md text-left">App Store</a>
            </div>           
          </button>
          <button class="p-2 text-white bg-green-400 w-40 rounded-full flex flex-row space-x-2">
            <img class="ml-2 mt-3" src="../assets/google.png"/>
            <div class="flex flex-col">
                <a class="text-xs text-left">Get it on</a>
                <a class="text-md text-left">Google Play</a>
            </div>
          </button>
        </div>  
    </div>
</template>