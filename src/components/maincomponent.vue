<template>
    <div>
        <Header @updateExportValue="callbackPropsFunction" />
        <div class="h-screen">
            <router-view :status="exportValueCounter" :imageQualityprops="qualityValue"></router-view>
        </div>
        <Footer />
    </div>
</template>
<script>
// ---------------------------------------------
import Header from './mainheader.vue';
import Footer from './mainfooter.vue';
// ---------------------------------------------
import { ref } from 'vue';
// ---------------------------------------------

export default {
    components: {
        Header,
        Footer,

    },
    setup() {
        let exportValueCounter = ref(0);
        let qualityValue = ref(null);
        const callbackPropsFunction = (qualityparameter) => {
            exportValueCounter.value += 1;
            qualityValue.value = qualityparameter;
            // When this changes, I -
            // call the export function -
            // through the watcher in the -
            // editor section
            // props + emit => export btn
        }
        return {
            // functions
            callbackPropsFunction,
            // --------

            //  data
            exportValueCounter,
            qualityValue
        }
    }
}

</script>