<template>
    <div>
        <div class="container mx-auto  bg-slate-50">
            <div class="w-full h-full  flex  flex-col items-center  overflow-auto">
                <div
                    class="flex sm:flex-row sm:gap-y-0 gap-y-4 sm:w-1/2 w-full  items-center justify-between flex-wrap border border-red-400">
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3 cursor-pointer">
                        <img src="../assets/icons/icons8-crop-64.png" class="navigation-icons" alt="crop-icon">
                        <h2 class="text-base font-bold">crop</h2>
                    </div>
                    <div class="flex flex-col items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-visual-effects-24.png" class="navigation-icons"
                            alt="filter-icon">
                        <h2 class="text-base font-bold">filter</h2>
                    </div>
                    <div class="flex flex-col items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-sun-60.png" class="navigation-icons" alt="brightness-icon">
                        <h2 class="text-base font-bold">brightness</h2>
                    </div>
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-sign-up-50.png" class="navigation-icons" alt="painting-icon">
                        <h2 class="text-base font-bold">painting</h2>
                    </div>
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-hanging-frame-50.png" class="navigation-icons"
                            alt="frame-icon">
                        <h2 class="text-base font-bold">frame</h2>
                    </div>
                    <div class="flex flex-col  items-center sm:basis-0 basis-1/3">
                        <img src="../assets/icons/icons8-resize-50.png" class="navigation-icons" alt="resize-icon">
                        <h2 class="text-base font-bold">resize</h2>
                    </div>
                </div>
                <div class="flex sm:flex-row items-center sm:py-3 py-0 sm:w-1/2 gap-y-2 w-full  flex-wrap border border-cyan-400">

                    <div class="flex flex-row  cursor-pointer gap-x-1 sm:basis-0 sm:basis-1/4 basis-1/2  justify-center order-1">
                        <img src="../assets/icons/icons8-rotate-left-64.png" class="options-icons"
                            alt="rotate-left-icon" v-on:click="rotate()">
                        <div class="text-sm font-bold"><span class="text-sm font-bold " v-on:click="rotate()">rotate
                                (deg)</span> <input type="number"
                                class="w-8 ml-1 numberinput border-2 border-black text-center rounded-lg"
                                v-model="defaultRotateDeg"></div>
                    </div>

                    <div class="flex flex-row sm:basis-1/4 basis-1/2 justify-center order-3">
                        <div ref="flipX" class="flex flex-row border border-black  cursor-pointer gap-x-1"
                            v-on:click="flipX()">
                            <img src="../assets/icons/icons8-flip-horizontal-50.png" class="options-icons"
                                alt="flip-x-icon">
                            <h3 class="text-sm font-bold">flip horizonal</h3>
                        </div>
                    </div>

                    <div class="flex flex-row sm:basis-0  sm:basis-1/4 basis-1/2  justify-center order-4">
                        <div ref="flipX" class="flex flex-row border border-black  cursor-pointer gap-x-1"
                            v-on:click="resetCrop()">
                            <img src="../assets/icons/icons8-restart-64.png" class="options-icons" alt="flip-x-icon">
                            <h3 class="text-sm font-bold">reset</h3>
                        </div>
                    </div>

                    <div class="flex flex-row sm:basis-0 sm:basis-1/4 basis-1/2 justify-center order-2">
                        <div ref="flipX" class="flex flex-row border border-black  cursor-pointer gap-x-1"
                            v-on:click="cropeImage()">
                            <img src="../assets/icons/icons8-cut-50.png" class="options-icons" alt="flip-x-icon">
                            <h3 class="text-sm font-bold">crop image</h3>
                        </div>
                    </div>
                </div>
                <div class="border border-green-800  w-full " id="mydiv">
                    <div class="">
                        <vue-cropper ref="cropper" :src="imgSrc" class="sm:w-3/4 w-full mx-auto " alt="image-source" v-if="imgSrc.length >= 3">
                        </vue-cropper>


                        <div class="flex flex-row mx-auto items-center hover:bg-sky-400 bg-sky-300 block w-32 text-center p-4 rounded-3xl  font-bold"
                            v-else>
                            <input type="file" id="files" class="hidden" accept="image/*" @change="onFile" />
                            <label for="files" class="cursor-pointer">Select
                                Photo</label>
                            <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon">
                        </div>

                    </div>
                </div>
            </div>

            <div class="w-full border border-sky-800 text-center flex flex-row justify-center my-4 " v-if="(imgSrc.length >= 3)">
                <div class="sm:w-20  w-0"></div>
                <div
                    class="flex flex-row mx-auto items-center  bg-sky-300 block sm:mt-0 mt-4 w-32 text-center hover:bg-sky-400 p-4 rounded-3xl  font-bold">
                    <input type="file" id="files" class="hidden" accept="image/*" @change="onFile"
                        v-on:click="imgSrc = ''" />
                    <label for="files" class="cursor-pointer
                    ">Select
                        Photo</label>
                    <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon">
                </div>
            </div>
            <div v-else></div>
        </div>
        <!-- <img
            v-if="cropImg"
            :src="cropImg"
            alt="Cropped Image"
          /> -->
    </div>
</template>
<script>
import { ref } from 'vue';
// ---------------------------------------------
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
// ---------------------------------------------
export default {
    components: { VueCropper },
    setup() {
        let imgSrc = ref("");
        let resultImg = ref("");
        let defaultRotateDeg = ref(-90);
        const onFile = (e) => {
            const files = e.target.files
            if (!files.length) return
            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => (imgSrc.value = reader.result)
        }
        return {
            // functions
            onFile,
            // --------
            // Data
            imgSrc,
            resultImg,
            defaultRotateDeg

        }
    },
    methods: {
        rotate() {
            if (this.defaultRotateDeg <= 360 && this.defaultRotateDeg >= -360) {
                return this.$refs.cropper.rotate(this.defaultRotateDeg);
            } else {
                console.error("wrong size import")
            }
        },
        flipX() {
            const dom = this.$refs.flipX;
            let scale = dom.getAttribute('data-scale');
            scale = scale ? -scale : -1;
            this.$refs.cropper.scaleX(scale);
            dom.setAttribute('data-scale', scale);
        },
        resetCrop() {
            this.$refs.cropper.reset();
        },
        cropeImage() {
            this.resultImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
        }
    }


}
</script>
<style scoped>
#crop {
    /* width: 120px;
    height: 120px; */
    border: 3px solid #000;
    z-index: 999;
    display: block;
    position: relative;
    /* right: 324px; */
    /* left: 324px; */
    bottom: 305px;
    /* bottom: 120px; */
    border-radius: 10px;

}

.navigation-icons {
    width: 30px;
}

.options-icons {
    width: 18px;
}

.max-height-image {
    max-height: 550px;
}

.direction-icon {
    width: 25px;
}

.degreeinput {}

.numberinput[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
}

.numberinput[type=number]::-webkit-inner-spin-button,
.numberinput[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>