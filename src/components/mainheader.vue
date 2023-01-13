<template>
    <div>
        <div class="mx-auto   sm:p-6 p-2 bg-slate-50 ">
            <div class="flex flex-row sm:flex-row flex-col items-center">
                <div class="sm:basis-1/2 mt-1">
                    <div class="flex flex-row items-center">
                        <h2 class="text-2xl font-bold">EDIT</h2>
                        <img src="../assets/icons/icons8-edit.svg" alt="" class="icons">
                        <h2 class="text-2xl font-bold">Photo</h2>
                    </div>
                </div>
                <div class="sm:basis-1/2  flex flex-row sm:justify-end   sm:mt-0 mt-3  items-center">
                    <div class="sm:mr-9 mr-0">
                        <h1 class="font-bold sm:text-xl text-base mx-2">
                            Login / Signin
                        </h1>
                    </div>
                    <div >
                        <div class="flex flex-row" v-if="availableExportSection">
                            <select id="countries"
                                class="bg-gray-50 border   text-amber-400 font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                v-model="selectValue">
                                <option class="font-bold" value="export" selected>export</option>
                                <option class="font-bold text-black" value="small">small</option>
                                <option class="font-bold text-black" value="medium">medium</option>
                                <option class="font-bold text-black" value="large">large</option>
                                <option class="font-bold text-black" value="orginal">orginal</option>
                            </select>
                            <button class="p-2 ml-1 bg-sky-300 hover:bg-sky-400 rounded-lg  font-bold" :disabled="!(selectValue != 'export')"
                                v-on:click="$emit('updateExportValue', selectValue)">Download</button>
                        </div>
                        <select id="countries" v-else disabled
                            class="bg-gray-50 border   text-amber-400 font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option class="font-bold" selected>export</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue';
// ---------------------------------------------
import { useCounterStore } from '../pinia/store.js';
export default {
    setup() {
        // ******************* data ********************************
        let selectValue = ref("export");
        const store = useCounterStore();

        // ******************* functions ********************************

        // ******************* reactivity ********************************

        const availableExportSection = computed(() => {
            return store.$state.IsImageAvailable
        })

        const test = () => {
            console.log(true)
        }
        return {
            // functions
            test,
            // --------

            // data
            availableExportSection,
            selectValue,
            // --------

            // computed
            availableExportSection,
        }
    },

}
</script>