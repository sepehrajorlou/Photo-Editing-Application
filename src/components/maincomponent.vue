<template>
    <div>
        <Header @updateExportValue="callbackPropsFunction()" />
        <div class="h-screen">
            <router-view :status="exportValueCounter"></router-view>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from './mainheader.vue';
import Footer from './mainfooter.vue';
import { ref } from 'vue'
export default {
    components: {
        Header,
        Footer,

    },
    setup(){
        let exportValueCounter = ref(0)
        function callbackPropsFunction(){
            exportValueCounter.value += 1;
        }
        return {
            callbackPropsFunction,
            exportValueCounter
        }
    }
}

</script>