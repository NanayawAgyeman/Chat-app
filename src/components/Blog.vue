<template>
    <div class="grid grid-rows-3 gap-2 py-20">
        <div class="container flex flex-col items-center justify-center gap-2  ml-24">
            <button class="bg-green-50 rounded-full w-32 p-2 text-green-500 text-xs">Our Blog</button>
            <h1 class="text-black text-3xl text-center">Read our News & Blogs</h1>
            <p class="text-gray-500 text-lg mb-3 text-center">Fusce placerat pretium mauris, vel sollicitudin 
            elit lacinia <br/> vitae. Quisque sit amet nisi erat.</p>
        </div>

        <div class="grid grid-cols-2 place-contents-center gap-2 px-48">
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-2">
                    <h1 class="text-black text-lg">Do millennials care about <br/> saving?</h1>
                    <p class="text-gray-500 text-lg mb-20">Curabitur tincidunt sed <br/> neque id pretium. Aenean <br/> volutpat 
                    tristique tincidunt. <br/> Pellentesque ac urna.</p>
                    <div class="flex flex-row gap-1">
                        <img class="w-6 h-6" src="../assets/Image.png"/>
                        <h1 class="text-black text-sm justify-center">Rodney Artichoke</h1>
                    </div>
                </div>
                <div class="bg-gray-200 h-full">
                    <button class="bg-gray-500 rounded">July 15</button>
                </div>         
            </div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-2">
                    <h1 class="text-black text-lg">Let's revolutionise global <br/> payments.</h1>
                    <p class="text-gray-500 text-lg mb-20">Quisque facilisis mi eu <br/> finibus venenatis. In non est <br/> rutrum, 
                    fermentum nibh <br/> quis, euismod lacus.</p>
                    <div class="flex flex-row gap-1">
                        <img class="w-6 h-6" src="../assets/Image.png"/>
                        <h1 class="text-black text-sm justify-center">Eric Widget</h1>
                    </div>
                </div>
                <div class="bg-gray-200 h-full">
                    <button class="bg-gray-500 rounded">July 15</button>
                </div>         
            </div>
        </div>
    </div>
</template>