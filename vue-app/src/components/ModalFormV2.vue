<script setup>
import { ref, reactive } from 'vue'

let modaltaskName = "task";
let modaltableName = "Backlog";
let miVar = reactive('valorrrr');

</script>

<!-- <script>
import { reactive } from 'vue'

export default {
    setup: () => {

    },
    data: function () {
        return {
          modaltaskName: reactive("task"),
          modaltableName:reactive("Backlog"),
        }
    }, components: {},
    methods: {},
    mounted() {
    },
    beforeUpdate(){
        console.log('table call ',this.taskList);
    }
}
</script> -->

<template>
    <div>
    <input v-model="miVar">
    <button @click="$emit('mi-evento', {pepe:miVar})">
      Click me
    </button>
    {{miVar}}
  </div>
</template>

<style scoped>



</style>
