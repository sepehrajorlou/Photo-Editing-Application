<template>
    <div>
        <button v-on:click="increase()">increase</button>
        <br>
        <button v-on:click="decrease()">decrease</button>

        <h1 class="text-4xl">{{ data }}</h1>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        
    }
}
</script>