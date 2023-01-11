<template>
    <div>
        <div class="container mx-auto  bg-slate-50">
            <div class="w-full h-full  flex  flex-col items-center  overflow-auto">

                <div
                    class="flex sm:flex-row sm:gap-y-0 gap-y-4 sm:w-1/2 w-full  items-center justify-between flex-wrap border border-red-400">
                    <div v-on:click="(cropClass = true) + (filterClass = false) + (brightnessClass = false) + (paintingClass = false) + (frameClass = false) + (resizeClass = false) + cropeImage(false)"
                        class="flex flex-col  items-center sm:basis-0 basis-1/3 cursor-pointer hover:bg-sky-400 p-2 rounded-xl"
                        :class="{'bg-sky-400' : cropClass}">
                        <img src="../assets/icons/icons8-crop-64.png" class="navigation-icons" alt="crop-icon">
                        <h2 class="text-base font-bold">crop</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = true) + (brightnessClass = false) + (paintingClass = false) + (frameClass = false) + (resizeClass = false) + cropeImage(false)"
                        class="flex flex-col items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': filterClass }">
                        <img src="../assets/icons/icons8-visual-effects-24.png" class="navigation-icons"
                            alt="filter-icon">
                        <h2 class="text-base font-bold">filter</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = true) + (paintingClass = false) + (frameClass = false) + (resizeClass = false) + cropeImage(false)"
                        class="flex flex-col items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': brightnessClass }">
                        <img src="../assets/icons/icons8-sun-60.png" class="navigation-icons" alt="brightness-icon">
                        <h2 class="text-base font-bold">brightness</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = false) + (paintingClass = true) + (frameClass = false) + (resizeClass = false) + cropeImage(false)"
                        class="flex flex-col  items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': paintingClass }">
                        <img src="../assets/icons/icons8-sign-up-50.png" class="navigation-icons" alt="painting-icon">
                        <h2 class="text-base font-bold">painting</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = false) + (paintingClass = false) + (frameClass = true) + (resizeClass = false) + cropeImage(false)"
                        class="flex flex-col  items-center sm:basis-0 cursor-pointer basis-1/3 hover:bg-sky-400 p-2 rounded-xl"
                        :class="{ 'bg-sky-400': frameClass }">
                        <img src="../assets/icons/icons8-hanging-frame-50.png" class="navigation-icons"
                            alt="frame-icon">
                        <h2 class="text-base font-bold">frame</h2>
                    </div>

                    <div v-on:click="(cropClass = false) + (filterClass = false) + (brightnessClass = false) + (paintingClass = false) + (frameClass = false) + (resizeClass = true) + cropeImage(false)"
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
                            v-on:click="cropeImage(true)">
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

                <div class="flex sm:flex-row  items-center sm:py-3 py-0 sm:w-1/2  w-full  justify-around border border-cyan-400"
                    v-else-if="(brightnessClass) && (imgSrc || resultImg)">

                    <div class="flex flex-row  cursor-pointer   sm:mx-4 mx-2 justify-center  ">
                        <img src="../assets/icons/icons8-black-and-white-30.png" class="options-icons"
                            alt="rotate-left-icon">
                        <div class="text-sm font-bold"><span class="text-sm font-bold ">contrast</span> <input
                                type="number" class="w-14  ml-1  border-2 border-black text-center rounded-lg"
                                v-model="brightnessFilterValue.contrast" min="0"></div>
                    </div>
                    <div class="flex flex-row  cursor-pointer  sm:mx-4 mx-2  justify-center"
                        v-on:click="(brightnessFilterValue.contrast = 100) && (brightnessFilterValue.brightness = 100)">
                        <img src="../assets/icons/icons8-restart-64.png" class="options-icons" alt="rotate-left-icon">
                        <h3 class="text-sm font-bold">reset values</h3>
                    </div>
                    <div class="flex flex-row  cursor-pointer  sm:mx-4 mx-2  justify-center  ">
                        <img src="../assets/icons/icons8-automatic-brightness-50.png" class="options-icons"
                            alt="rotate-left-icon">
                        <div class="text-sm font-bold"><span class="text-sm font-bold">brightness</span> <input
                                type="number" class="w-14 ml-1  border-2 border-black text-center rounded-lg"
                                v-model="brightnessFilterValue.brightness" min="0"></div>
                    </div>

                </div>



                <div class="flex sm:flex-row   items-center sm:py-3 py-0 sm:w-1/2  w-full  justify-around border border-cyan-400"
                    v-else-if="(paintingClass) && (imgSrc || resultImg)">
                    <!-- <div class="flex flex-row sm:basis-0 sm:basis-1/4 basis-1/2 justify-center">
                        <div class="flex flex-row border border-black  cursor-pointer gap-x-1 border border-red-400">
                            <img src="../assets/icons/icons8-paint-palette-30.png" class="options-icons"
                                alt="flip-x-icon">
                            <h3 class="text-sm font-bold">painitng</h3>
                        </div>
                    </div> -->

                    <div class="flex flex-row sm:basis-0 sm:basis-1/4 basis-1/2 justify-center ">
                        <div class="flex flex-row border border-black  cursor-pointer gap-x-1 border border-red-400">
                            <img src="../assets/icons/icons8-text-width-50.png" class="options-icons" alt="flip-x-icon">
                            <h3 class="text-sm font-bold">text</h3>
                        </div>
                    </div>
                    <div class="flex flex-row sm:basis-0 sm:basis-1/4 basis-1/2 justify-center">
                        <div class="flex flex-row border border-black  cursor-pointer gap-x-1 border border-red-400">
                            <img src="../assets/icons/icons8-restart-64.png" class="options-icons" alt="flip-x-icon">
                            <h3 class="text-sm font-bold">reset values</h3>
                        </div>
                    </div>
                    <div class="flex flex-row sm:basis-0 sm:basis-1/4 basis-1/2 justify-center ">
                        <div class="flex flex-row border border-black  cursor-pointer gap-x-1 border border-red-400">
                            <img src="../assets/icons/icons8-eraser-64.png" class="options-icons" alt="flip-x-icon">
                            <h3 class="text-sm font-bold">eraser</h3>
                        </div>
                    </div>



                </div>


                <div v-else></div>


                <div class="border border-green-800  w-full " id="mydiv">
                    <div class="">
                        <vue-cropper ref="cropper" :src="imgSrc" class="sm:w-3/4 w-full mx-auto " alt="image-source"
                            v-if="imgSrc.length >= 3 && !resultImg">
                        </vue-cropper>
                        <div class="sm:w-3/4  text-center w-full mx-auto " v-else-if="resultImg">
                            <div :class="filterEffect" class="z-10" ref="imageContainerDiv">

                                <img :src="resultImg" alt="the Image you imported" ref="noneShowImage" class="z-50"
                                    :style="{ filter: 'contrast' + '(' + brightnessFilterValue.contrast + '%' + ')' + 'brightness' + '(' + brightnessFilterValue.brightness + '%' + ')' + 'blur' + '(' + brightnessFilterValue.blur + 'px' + ')' }">
                                <!-- Optimization !! -->
                                <canvas ref="canvas" :width="canvasValues.widthImage" :height="canvasValues.heightImage"
                                    class="mx-auto">
                                    <!-- remove from html template -->
                                </canvas>



                            </div>
                        </div>



                        <div class="flex flex-row mx-auto items-center hover:bg-sky-400 bg-sky-300 block w-32 text-center p-4 rounded-3xl  font-bold"
                            v-else-if="imgSrc.length <= 3 && !resultImg && cropClass">
                            <input type="file" id="files" class="hidden" accept="image/*" v-on:change="onFile" />
                            <label for="files" class="cursor-pointer">Select
                                Photo</label>
                            <img src="../assets/icons/icons8-import-50.png" class="navigation-icons" alt="import-icon">
                        </div>
                        <div v-else>
                            <!-- else -->
                        </div>

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
            <div v-else>
                <!-- else -->
            </div>

        </div>
    </div>

    <Teleport to="#modal">
        <ErrorModal v-if="modal.errorModal" :title="modal.title" :description="modal.description"
            @closeErroBtn="closeOrOpenErrorModal(false)" />
        <SuccessModal v-else-if="modal.successModal" :title="modal.title" :description="modal.description"
            @closeSuccessBtn="closeOrOpenSuccessModal(false)" />
        <div v-else>
            <!-- else -->
        </div>

    </Teleport>
    <!-- <Header @fortest="test()" /> -->
    <!-- <button @click="test2()">clickkk</button> -->
    <button @click="exportImageDownload()" class="block">export</button>
</template>
<script>
import { ref, reactive, watch, watchEffect } from 'vue';

// ---------------------------------------------
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
// ---------------------------------------------

import ErrorModal from '../components/errormodal.vue';
import SuccessModal from '../components/successmodal.vue';
// ---------------------------------------------


export default {
    components: { VueCropper, ErrorModal, SuccessModal },
    props: {
        status: Number
    },

    setup(props) {

        // *******************data********************************
        // simple sources
        let imgSrc = ref("");
        let resultImg = ref("");
        let defaultRotateDeg = ref(-90);

        // about selection sections --------------------
        let cropClass = ref(true);
        let filterClass = ref(false);
        let brightnessClass = ref(false);
        let paintingClass = ref(false);
        let frameClass = ref(false);
        let resizeClass = ref(false);




        // ------------------------------
        let textId = ref(null);


        // about brightnes and filter values------------------------------
        let filterEffect = ref(false);
        const brightnessFilterValue = reactive({
            contrast: 100,
            brightness: 100,
            blur: 0,
            grayScale: 0,
            // ...
        })


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



        // canvas section --------------------
        let canvas = ref(null)
        let noneShowImage = ref(null)
        let imageContainerDiv = ref(null)
        let img2 = ref(null)
        let noneShowImageDisplay = ref(true)
        const canvasValues = reactive({
            widthImage: 0,
            heightImage: 0,
            canvasDisplay: false
        })

        let imgSourceForDownload = ref(null);

        // modal section --------------------
        const modal = reactive({
            errorModal: false,
            successModal: false,
            title: "",
            description: ""
        })


        // *******************functions ********************************
        const resetbrightnessFilterValue = () => {
            brightnessFilterValue.contrast = 100;
            brightnessFilterValue.brightness = 100;
        }

        // about import section ------------------------------
        const onFile = (e) => {
            // for import image with select photo field
            const files = e.target.files
            if (!files.length) return
            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => (imgSrc.value = reader.result)
        }


        // Dimensions functions------------------------------
        const getCoordinates = () => {
            console.log(textId.value.getBoundingClientRect().left)
        }

        // modal functions ------------------------------


        const closeOrOpenErrorModal = (params) => {
            // true or false for show error modal
            return modal.errorModal = params;
        }

        const closeOrOpenSuccessModal = (params) => {
            // true or false for show success modal
            return modal.successModal = params;
        }

        const modalText = (title, description) => {
            // its for all modals title and description
            modal.title = title;
            modal.description = description;
        }

        // canvas functions ------------------------------


        const getCanvasHeightAndWIdth = () => {
            canvasValues.widthImage = noneShowImage.value.clientWidth;
            canvasValues.heightImage = noneShowImage.value.clientHeight;
            // ( not using in html template )

        }

        const canvasDisplay = (params) => {
            return canvasValues.canvasDisplay = params;
            // ( not using in html template )
        }

        const noneShowImageDisplayFunction = (params) => {
            return noneShowImageDisplay.value = params;
            // ( not using in html template )
        }

        const imageCanvas = () => {
            img2 = new Image();
            return img2.src = canvas.value.toDataURL("image/png", 1);
            // ( not using in html template )
        }

        const drawImageFunction = (ctx, params1, params2, params3, params4, params5) => {
            return ctx.drawImage(params1, params2, params3, params4, params5);
            // ( not using in html template )
        }
        const fillRectFunction = (ctx, params1, params2, params3, params4) => {
            return ctx.fillRect(params1, params2, params3, params4);
            // ( not using in html template )
        }

        const convertor_canvas_image = () => {
            // crop btn
            const ctx = canvas.value.getContext("2d");
            ctx.filter = `contrast(${brightnessFilterValue.contrast}%)` + `brightness(${brightnessFilterValue.brightness}%)` + `blur(${brightnessFilterValue.blur}px)`;
            fillRectFunction(ctx, 0, 0, canvasValues.widthImage, canvasValues.heightImage);
            drawImageFunction(ctx, noneShowImage.value, 0, 0, canvas.value.width, canvas.value.height);
            imageCanvas();

            // ( not using in html template )
            // refactor !!
        }


        const convertToCanvas = () => {
            setTimeout(() => {
                getCanvasHeightAndWIdth(0);
            }, 20)

            setTimeout(() => {
                convertor_canvas_image();
            }, 100)
        }


        const exportImageDownload = () => {
            // actually this hs export btn function
            convertToCanvas();
            setTimeout(() => {
                imgSourceForDownload.value = canvas.value.toDataURL("image/png", 1);
            }, 185)
            setTimeout(() => {
                let a = document.createElement("a");
                a.href = imgSourceForDownload.value;
                a.download = "Test.png";
                a.click();
            }, 250)
            // need time to proccess convertToCanva() -
            // so i used setTimeOut with 185 ms
        }



        // ******************* reactivity ********************************
        watch([props], (newVlaue, oldValue) => {
            if (props.status) {
                exportImageDownload();
            }
        })

        // watch([props , test], ([newpropsvalue , newtestvalue] , [oldpropsvalue , oldtestvalue]) => {
        //     if (props.status) {
        //         // exportImageDownload();
        //        
        //     } else if(test){}
        // })

        return {
            // functions
            onFile,
            resetbrightnessFilterValue,
            getCoordinates,
            closeOrOpenErrorModal,
            modalText,
            closeOrOpenSuccessModal,

            convertToCanvas,
            exportImageDownload,
            canvasDisplay,
            noneShowImageDisplayFunction,
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
            brightnessFilterValue,
            textId,
            modal,
            
            imageContainerDiv,
            img2,
            noneShowImageDisplay,
            canvasValues,
            canvas,
            noneShowImage,

        }
    },

    methods: {
        rotate() {
            if (!this.resultImg) {
                if (this.defaultRotateDeg <= 360 && this.defaultRotateDeg >= -360) {
                    return this.$refs.cropper.rotate(this.defaultRotateDeg);
                } else {
                    // console.error("wrong size import");
                    this.closeOrOpenErrorModal(true);
                    this.modalText("Incorrect angle !", "The rotation angle of the photo is incorrect ! <br> The value must be between -360 and +360 degrees.");
                }
            } else {
                // console.error("its croped ! (rotate)");
                this.closeOrOpenErrorModal(true);
                this.modalText("Cropped!", "Please use the reset option first to <span class='text-red-600 font-bold'>'erase'</span> all changes");
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
                // console.error("its croped ! (filipx)");
                this.closeOrOpenErrorModal(true);
                this.modalText("Cropped!", "Please use the reset option first to <span class='text-red-600 font-bold'>'erase'</span> all changes");
            }
        },

        resetCrop() {


            // this.noneShowImageDisplay = false;
            this.noneShowImageDisplayFunction(false);
            if (!this.resultImg) {
                this.$refs.cropper.reset();
                this.resetbrightnessFilterValue();

            } else {
                this.resultImg = '';
                this.resetbrightnessFilterValue();
            }
        },

        cropeImage(isCropBtn) {
            // this.convertToCanvas()
            // this.noneShowImageDisplay = true;
            if (!this.imgSrc) {
                // console.error("empty picture !");
                this.closeOrOpenErrorModal(true);
                this.modalText("empty picture", "please swtich to the crop field and use the 'Select Photo' !");

            } else if (isCropBtn) {
                if (!this.resultImg) {
                    this.resultImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
                } else if (this.resultImg && this.imgSrc) {
                    this.closeOrOpenErrorModal(true);
                    this.modalText("Cropped!", "Please use the reset option first to <span class='text-red-600 font-bold'>'erase'</span> all changes");
                } else {

                    // not statement here (:
                }
            } else if (!this.resultImg && !isCropBtn && !isCropBtn) {
                // this.convertToCanvas();
                this.resultImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
                this.closeOrOpenSuccessModal(true);
                this.modalText("cropped !", "The photo was automatically cropped !");

            } else {
                // maybe console.error("its croped !");            
            }

        }
    },
    // watch : {
    //     status(){
    //         this.exportImageDownload()
    //     }
    // }


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


.test {
    filter: blur(5px);
}
</style>