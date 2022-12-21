<template>
    <div>
        <div class="container mx-auto  bg-slate-50">
            <div class="w-full h-full  flex  flex-col items-center  overflow-auto">

                <div
                    class="flex sm:flex-row sm:gap-y-0 gap-y-4 sm:w-1/2 w-full  items-center justify-between flex-wrap border border-red-400">
                    <div v-on:click="(cropClass = true) + (filterClass = false) + (brightnessClass = false) + (paintingClass = false) + (frameClass = false) + (resizeClass = false)"
                        class="flex flex-col  items-center sm:basis-0 basis-1/3 cursor-pointer hover:bg-sky-400 p-2 rounded-xl"
                        :class="{'bg-sky-400' : cropClass}">
                        <img src="../assets/icons/icons8-crop-64.png" class="navigation-icons" alt="crop-icon">
                        <h2 class="text-base font-bold">crop</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = true) + (brightnessClass = false) + (paintingClass = false) + (frameClass = false) + (resizeClass = false) + cropeImage()"
                        class="flex flex-col items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': filterClass }">
                        <img src="../assets/icons/icons8-visual-effects-24.png" class="navigation-icons"
                            alt="filter-icon">
                        <h2 class="text-base font-bold">filter</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = true) + (paintingClass = false) + (frameClass = false) + (resizeClass = false) + cropeImage()"
                        class="flex flex-col items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': brightnessClass }">
                        <img src="../assets/icons/icons8-sun-60.png" class="navigation-icons" alt="brightness-icon">
                        <h2 class="text-base font-bold">brightness</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = false) + (paintingClass = true) + (frameClass = false) + (resizeClass = false) + cropeImage()"
                        class="flex flex-col  items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': paintingClass }">
                        <img src="../assets/icons/icons8-sign-up-50.png" class="navigation-icons" alt="painting-icon">
                        <h2 class="text-base font-bold">painting</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = false) + (paintingClass = false) + (frameClass = true) + (resizeClass = false) + cropeImage()"
                        class="flex flex-col  items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': frameClass }">
                        <img src="../assets/icons/icons8-hanging-frame-50.png" class="navigation-icons"
                            alt="frame-icon">
                        <h2 class="text-base font-bold">frame</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = false) + (paintingClass = false) + (frameClass = false) + (resizeClass = true) + cropeImage()"
                        class="flex flex-col  items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': resizeClass }">
                        <img src="../assets/icons/icons8-resize-50.png" class="navigation-icons" alt="resize-icon">
                        <h2 class="text-base font-bold">resize</h2>
                    </div>

                </div>





                <div class="flex sm:flex-row items-center sm:py-3 py-0 sm:w-1/2 gap-y-2 w-full  flex-wrap border border-cyan-400"
                    v-if="(cropClass) && (imgSrc || resultImg)">
                    <div
                        class="flex flex-row  cursor-pointer gap-x-1 sm:basis-0 sm:basis-1/4 basis-1/2  justify-center order-1">
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
                            <h3 class="text-sm font-bold">crop</h3>
                        </div>
                    </div>
                </div>
                <!-- <div v-else></div> -->




                <div class="flex sm:flex-row  sm:py-3 py-0 sm:w-1/2 w-full border border-cyan-400 flex flex-row  overflow-auto overflow-x-scroll"
                    v-else-if="(filterClass) && (imgSrc || resultImg)">
                    <!-- && (imgSrc || resultImg) -->
                    <div class="min-width-200 text-center ">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = false) + (filterHover.one = true) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.one }">
                            normal</h3>
                    </div>

                    <div class="min-width-200 text-center ">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-amazon') + + (filterHover.one = false) + (filterHover.two = true) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.two }">amazon</h3>
                    </div>

                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-SummerHeat') + + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = true) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.three }">summer heat</h3>
                    </div>

                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-Fever') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = true) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.four }">fever</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-Ryellow') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = true) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.five }">ryellow</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-IcyWater') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = true) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.six }">icy water</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="filterEffect = ('image-container-SweetSunset') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = true) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.seven }">sweet sunset</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-Waterness') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = true) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.eight }">waterness</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-CoalPaper') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = true) + (filterHover.ten = false) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.nine }">coal paper</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-SimpleGray') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = true) + (filterHover.eleven = false)"
                            :class="{ 'bg-amber-400': filterHover.ten }">simple gray</h3>
                    </div>
                    <div class="min-width-200 text-center">
                        <h3 class="text-lg font-bold cursor-pointer inline-block hover:bg-amber-400 rounded-lg p-3"
                            v-on:click="(filterEffect = 'image-container-SpaceTrip') + (filterHover.one = false) + (filterHover.two = false) + (filterHover.three = false) + (filterHover.four = false) + (filterHover.five = false) + (filterHover.six = false) + (filterHover.seven = false) + (filterHover.eight = false) + (filterHover.nine = false) + (filterHover.ten = false) + (filterHover.eleven = true)"
                            :class="{ 'bg-amber-400': filterHover.eleven }">space trip</h3>
                    </div>
                </div>

                <div class="flex sm:flex-row  items-center sm:py-3 py-0 sm:w-1/2  w-full  justify-center border border-cyan-400"
                    v-else-if="(brightnessClass) && (imgSrc || resultImg)">

                    <div class="flex flex-row  cursor-pointer   sm:mx-4 mx-2 justify-center  ">
                        <img src="../assets/icons/icons8-black-and-white-30.png" class="options-icons"
                            alt="rotate-left-icon">
                        <div class="text-sm font-bold"><span class="text-sm font-bold ">contrast</span> <input
                                type="number" class="w-14  ml-1  border-2 border-black text-center rounded-lg"
                                v-model="brightnessFilterValue.contrast"></div>
                    </div>
                    <div class="flex flex-row  cursor-pointer  sm:mx-4 mx-2  justify-center  ">
                        <img src="../assets/icons/icons8-automatic-brightness-50.png" class="options-icons"
                            alt="rotate-left-icon">
                        <div class="text-sm font-bold"><span class="text-sm font-bold">gamma</span> <input type="number"
                                class="w-14 ml-1  border-2 border-black text-center rounded-lg"
                                v-model="brightnessFilterValue.gamma"></div>
                    </div>
                </div>

                <div class="flex sm:flex-row  items-center sm:py-3 py-0 sm:w-1/2  w-full  justify-center border border-cyan-400"
                    v-else-if="true">

                    
                </div>


                <div v-else></div>


                <div class="border border-green-800  w-full " id="mydiv">
                    <div class="">
                        <vue-cropper ref="cropper" :src="imgSrc" class="sm:w-3/4 w-full mx-auto " alt="image-source"
                            v-if="imgSrc.length >= 3 && !resultImg">
                        </vue-cropper>
                        <div class="sm:w-3/4 border border-black w-full mx-auto " v-else-if="resultImg">
                            <div :class="filterEffect">
                                <img :src="resultImg" alt="the Image you imported"
                                    :style="{ filter: 'contrast' + '(' + brightnessFilterValue.contrast + '%' + ')' + 'brightness' + '(' + brightnessFilterValue.gamma + '%' + ')' }">
                            </div>


                        </div>




                        <div class="flex flex-row mx-auto items-center hover:bg-sky-400 bg-sky-300 block w-32 text-center p-4 rounded-3xl  font-bold"
                            v-else-if="imgSrc.length <= 3 && !resultImg && cropClass">
                            <input type="file" id="files" class="hidden" accept="image/*" v-on:change="onFile" />
                            <label for="files" class="cursor-pointer">Select
                                Photo</label>
                            <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon">
                        </div>
                        <div v-else></div>

                    </div>
                </div>
            </div>











            <div class="w-full border border-sky-800 text-center flex flex-row justify-center my-4 "
                v-if="(imgSrc.length >= 3)">
                <div class="sm:w-20  w-0"></div>
                <div
                    class="flex flex-row mx-auto items-center  bg-sky-300 block sm:mt-0 mt-4 w-32 text-center hover:bg-sky-400 p-4 rounded-3xl  font-bold">
                    <input type="file" id="files" class="hidden" accept="image/*" v-on:change="onFile"
                        v-on:click="(imgSrc = '') + (resultImg = '')" />
                    <label for="files" class="cursor-pointer
                    ">Select
                        Photo</label>
                    <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon">
                </div>
            </div>
            <div v-else></div>

        </div>




    </div>
</template>
<script>
import { ref, reactive } from 'vue';
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
        // ------------------------------
        let cropClass = ref(true);
        let filterClass = ref(false);
        let brightnessClass = ref(false);
        let paintingClass = ref(false);
        let frameClass = ref(false);
        let resizeClass = ref(false);
        // ------------------------------
        let filterEffect = ref(false);

        const filterHover = reactive({
            one: true,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: false,
            ten: false,
            eleven: false
        })
        // ------------------------------
        const brightnessFilterValue = reactive({
            contrast: 100,
            gamma: 100
        })

        const resetbrightnessFilterValue = () => {
            brightnessFilterValue.contrast = 100;
            brightnessFilterValue.gamma = 100;
        }
        // ------------------------------
        const onFile = (e) => {
            const files = e.target.files
            if (!files.length) return
            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => (imgSrc.value = reader.result)
        }
        // ------------------------------

        return {
            // functions
            onFile,
            resetbrightnessFilterValue,
            // --------
            // Data
            imgSrc,
            resultImg,
            defaultRotateDeg,
            cropClass,
            filterClass,
            brightnessClass,
            paintingClass,
            frameClass,
            resizeClass,
            filterEffect,
            filterHover,
            brightnessFilterValue

        }
    },
    methods: {
        rotate() {
            if (!this.resultImg) {
                if (this.defaultRotateDeg <= 360 && this.defaultRotateDeg >= -360) {
                    return this.$refs.cropper.rotate(this.defaultRotateDeg);
                } else {
                    console.error("wrong size import")
                }
            } else {
                console.error("its croped ! (rotate)")
            }
        },

        flipX() {
            if (!this.resultImg) {
                const dom = this.$refs.flipX;
                let scale = dom.getAttribute('data-scale');
                scale = scale ? -scale : -1;
                this.$refs.cropper.scaleX(scale);
                dom.setAttribute('data-scale', scale);
            } else {
                console.error("its croped ! (filipx)")
            }
        },

        resetCrop() {
            if (!this.resultImg) {
                this.$refs.cropper.reset();
                this.resetbrightnessFilterValue();

            } else {
                this.resultImg = '';
                this.resetbrightnessFilterValue();
            }
        },

        cropeImage() {
            if (!this.imgSrc) {
                console.error("empty picture !")
            } else if (!this.resultImg) {
                this.resultImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
            } else {
                console.error("its croped !")
            }

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


.min-width-200 {
    min-width: 150px;
}
</style>