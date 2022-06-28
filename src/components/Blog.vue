<template>
    <div class="grid grid-rows-3 gap-2 py-20">
        <div class="container flex flex-col items-center justify-center gap-2  ml-24">
            <button class="bg-light rounded-full w-32 p-2 text-solid text-xs">Our Blog</button>
            <h1 class="text-title text-3xl text-center">Read our News & Blogs</h1>
            <p class="text-para text-lg mb-3 text-center">Fusce placerat pretium mauris, vel sollicitudin 
            elit lacinia <br/> vitae. Quisque sit amet nisi erat.</p>
        </div>

        <div class="grid grid-cols-2 place-contents-center gap-8 px-48">
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-2">
                    <h1 class="text-title text-lg">Do millennials care about <br/> saving?</h1>
                    <p class="text-para text-lg mb-20">Curabitur tincidunt sed <br/> neque id pretium. Aenean <br/> volutpat 
                    tristique tincidunt. <br/> Pellentesque ac urna.</p>
                    <div class="flex flex-row gap-1">
                        <img class="w-6 h-6" src="../assets/Image.png"/>
                        <h1 class="text-title text-sm justify-center">Rodney Artichoke</h1>
                    </div>
                </div>
                <div class="relative bg-blog h-full rounded-r">
                    <button class="absolute top-3 right-3 bg-gray-400 text-white rounded px-2 py-1">July 15</button>
                </div>         
            </div>
            <div class="grid grid-cols-2">
                <div class="flex flex-col gap-2">
                    <h1 class="text-title text-lg">Let's revolutionise global <br/> payments.</h1>
                    <p class="text-para text-lg mb-20">Quisque facilisis mi eu <br/> finibus venenatis. In non est <br/> rutrum, 
                    fermentum nibh <br/> quis, euismod lacus.</p>
                    <div class="flex flex-row gap-1">
                        <img class="w-6 h-6" src="../assets/Image.png"/>
                        <h1 class="text-title text-sm justify-center">Eric Widget</h1>
                    </div>
                </div>
                <div class="relative bg-blog h-full rounded-r">
                    <button class="absolute top-3 right-3 bg-gray-400 text-white rounded px-2 py-1">July 15</button>
                </div>         
            </div>
        </div>
    </div>
</template>