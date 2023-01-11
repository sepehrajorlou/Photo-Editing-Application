<template>
    <div>
        <div class="mx-auto   sm:p-6 p-2 bg-slate-50 ">
            <div class="flex flex-row sm:flex-row flex-col items-center">
                <div class="sm:basis-1/2 ">
                    <div class="flex flex-row items-center">
                        <h2 class="text-2xl font-bold">EDIT</h2>
                        <img src="../assets/icons/icons8-edit.svg" alt="" class="icons">
                        <h2 class="text-2xl font-bold">Photo</h2>
                    </div>
                </div>
                <div class="sm:basis-1/2  flex flex-row sm:justify-evenly  sm:mt-0 mt-3">
                    <div>
                        <h1 class="font-bold sm:text-xl text-base mx-2">
                            Login / Signin
                        </h1>
                    </div>
                    <div>
                        <h1 class="font-bold sm:text-xl text-base mx">Social media templates</h1>
                    </div>
                    <div>
                        <h1 class="font-bold sm:text-xl text-base text-amber-400 cursor-pointer" @click="$emit('updateExportValue')" >export</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>