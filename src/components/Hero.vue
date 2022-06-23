<template>
    <div class="container grid grid-cols-2 gap-5 py-20 px-20 ml-10 mt-0">
        <div class="flex flex-col gap-2 py-20">
            <h1 class="text-black text-xl">Modern, online, free <span class="text-green-500">chat</span> 
            and <br/> <span class="text-green-500">contact</span> app</h1>
            <p class="text-gray-500 text-xs mb-3">Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci <br/> libero. 
            Sed est sem, mollis nec lectus nec, varius suscipit ligula. </p>
            <div class="flex flex-row gap-3">
                <button class="p-2 text-sm md:text-base text-white bg-green-400 rounded-full flex flex-row gap-3">
                   <img class="relative" src="../assets/apple.png"/>
                   <div class="flex flex-col">
                     <a class="text-xs text-left">Download on the</a>
                     <a>App Store</a>
                   </div>           
                </button>
                <button class="p-2 text-sm text-white bg-green-400 rounded-full flex flex-row gap-2">
                   <img class="" src="../assets/google.png"/>
                   <div class="flex flex-col">
                      <a class="text-xs text-left">Get it on</a>
                      <a>Google Play</a>
                   </div>
                </button>
            </div>
        </div>

        <div class="container bg-green-500 grid grid-cols-2 gap-3 rounded-lg top-0 right-0">
            <img class="place-items-center py-40" src="../assets/first.png">
            <div class="grid grid-rows-2 gap-2">
               <img src="../assets/top.png"/>
               <img src="../assets/down.png"/>
            </div>
        </div>
    </div>
</template>