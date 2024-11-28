<script setup>
import ModalForm from './ModalForm.vue'

</script>

<script>
import { reactive } from 'vue'

export default {
    setup: () => {

    },
    props: {
        workTablesOptions: {
            type: Array,
            required: true,
        },
    },
    data: function () {
        return {
        }
    }, components: {},
    methods: {
    },
    mounted() {
    },
    beforeUpdate(){  
    }

}

////////////////////////////////////////////



</script>

<template>

    <div>
        <h2>WorkSapce editor</h2>
        <div v-for="(item, index) in this.workTablesOptions"  v-bind:nombre item.nombre v-bind:oldName>
            <input type="text"
                :name="item.id" 
                :id="item.id" 
                :value="item"
                v-model="item.nombre" 
                @change="$emit('update-table-name', item)">
        </div>
    </div>


</template>

<style scoped>
.table-container {
    display: flex;
    flex-direction: row;
}
.table-hover:hover{
    border: 1px solid rgba(0, 0, 0, 0.2); 
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    transition: 1s;

}

</style>
