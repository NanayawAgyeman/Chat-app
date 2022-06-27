<template>
    <div class="w-full grid grid-cols-2 place-items-center gap-5 py-32">
        <div class="flex flex-col gap-6 py-20">
            <h1 class="text-title text-4xl">Modern, online, free <span class="text-solid">chat</span> 
            and <br/> <span class="text-solid">contact</span> app</h1>
            <p class="text-para text-lg mb-3">Maecenas sed ligula ut dui pharetra aliquet. Vestibulum eget orci <br/> libero. 
            Sed est sem, mollis nec lectus nec, varius suscipit ligula. </p>
            <div class="flex flex-row gap-3">
                <button class="p-2 text-lit bg-solid w-40 rounded-full flex flex-row space-x-2">
                    <img class="ml-2 mt-3" src="../assets/apple.png"/>
                    <div class="flex flex-col">
                        <a class="text-xs text-left">Download on the</a>
                        <a class="text-md text-left">App Store</a>
                    </div>           
                </button>
                <button class="p-2 text-lit bg-solid w-40 rounded-full flex flex-row space-x-2">
                    <img class="ml-2 mt-3" src="../assets/google.png"/>
                    <div class="flex flex-col">
                        <a class="text-xs text-left">Get it on</a>
                        <a class="text-md text-left">Google Play</a>
                    </div>
                </button>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
            <img class="place-items-center py-64" src="../assets/first.png">
            <div class="grid grid-rows-2 gap-3">
               <img src="../assets/top.png"/>
               <img src="../assets/down.png"/>
            </div>
        </div>
    </div>
</template>