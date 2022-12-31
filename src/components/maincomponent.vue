<template>
    <div>
        <Header />
        <div class="h-screen">
            <router-view></router-view>
        </div>
        <Footer />
    </div>
</template>
<script>
import Header from './mainheader.vue'
import Footer from './mainfooter.vue'
export default {
    components: {
        Header,
        Footer,

    },
}

</script>