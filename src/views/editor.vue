<template>
    <div>
        <div class="container mx-auto  bg-slate-50">
            <div class="w-full h-full  flex sm:flex-row flex-col items-center border border-red-500 border border-green-900 overflow-auto">
                <div
                    class="flex sm:flex-col sm:gap-y-12 gap-y-4 sm:w-20  w-full border border-red-300 items-center flex-wrap border ">
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-crop-64.png" class="navigation-icons" alt="crop-icon">
                        <h2 class="text-sm font-bold">crop</h2>
                    </div>
                    <div class="flex flex-col items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-visual-effects-24.png" class="navigation-icons"
                            alt="filter-icon">
                        <h2 class="text-sm font-bold">filter</h2>
                    </div>
                    <div class="flex flex-col items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-sun-60.png" class="navigation-icons" alt="brightness-icon">
                        <h2 class="text-sm font-bold">brightness</h2>
                    </div>
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-sign-up-50.png" class="navigation-icons" alt="painting-icon">
                        <h2 class="text-sm font-bold">painting</h2>
                    </div>
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-hanging-frame-50.png" class="navigation-icons"
                            alt="frame-icon">
                        <h2 class="text-sm font-bold">frame</h2>
                    </div>
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-resize-50.png" class="navigation-icons" alt="resize-icon">
                        <h2 class="text-sm font-bold">resize</h2>
                    </div>
                </div>
                <div class="border border-green-800  w-full ">
                    <div class="">
                        <img :src="imgSrc" v-if="imgSrc.length >= 3"
                            class="mx-auto object-cover max-w-screen-md  max-height-image" alt="photo-for-edit" />


                        <div class="flex flex-row mx-auto items-center hover:bg-sky-400 bg-sky-300 block w-32 text-center p-4 rounded-3xl  font-bold"
                            v-else>
                            <input type="file" id="files" class="hidden" accept="image/*" @change="onFile" />
                            <label for="files" class="cursor-pointer">Select
                                Photo</label>
                            <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon" >
                        </div>

                    </div>
                </div>
            </div>

            <div class="w-full border border-sky-800 text-center flex flex-row " v-if="(imgSrc.length >= 3)">
                <div class="sm:w-20  w-full"></div>
                <div
                    class="flex flex-row mx-auto items-center  bg-sky-300 block sm:mt-0 mt-4 w-32 text-center hover:bg-sky-400 p-4 rounded-3xl  font-bold">
                    <input type="file" id="files" class="hidden" accept="image/*" @change="onFile" />
                    <label for="files" class="cursor-pointer
                    ">Select
                        Photo</label>
                    <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon">
                </div>
                <!-- <span class="font-bold">source : {{imgSrc}}</span> -->
            </div>
            <div v-else></div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        let imgSrc = ref("");
        const onFile = (e) => {
            const files = e.target.files
            if (!files.length) return
            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => (imgSrc.value = reader.result)
        }
        return {
            imgSrc,
            onFile
        }

    }

    // data() {
    //     return {
    //         imgSrc: ''
    //     }
    // },
    // methods: {
    //     onFile(e) {
    //         const files = e.target.files
    //         if (!files.length) return
    //         const reader = new FileReader()
    //         reader.readAsDataURL(files[0])
    //         reader.onload = () => (this.imgSrc = reader.result)
    //     }
    // }
}
</script>
<style scoped>
.navigation-icons {
    width: 35px;
}

.max-height-image {
    max-height: 550px;
}
</style>