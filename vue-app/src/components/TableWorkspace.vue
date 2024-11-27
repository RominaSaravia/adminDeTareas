<script setup>
import ModalForm from './ModalForm.vue'

</script>

<script>
import { reactive } from 'vue'

export default {
    setup: () => {

    },
    props: {
        tableName: {
            type: String,
            required: true,
        },
        tableItems: {
            type: Array,
            required: true,
        }
    },
    data: function () {
        return {
            tableItemsToShow: reactive([])
        }
    }, components: {},
    methods: {
        filterTableItems: function () { // muestra cuál componente emitió el evento "product-click"
            this.tableItemsToShow = this.tableItems.filter(x => {
                return x.tableName == this.tableName
            })
        },
        updateTask: function(i){
            console.log(i)

        }
    },
    mounted() {
        this.filterTableItems();
    },
    beforeUpdate(){  
    }

}



////////////////////////////////////////////



</script>

<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">{{ tableName }}</th>
                <th scope="col">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" :data-bs-whatever="tableName"  >+</button>
                    <!-- <button type="button" class="btn btn-outline-success" v-on:click="$emit('new-task', this.tableName)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-plus-square" viewBox="0 0 16 16">
                            <path
                                d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z">
                            </path>
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4">
                            </path>
                        </svg>
                    </button> -->
                </th>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="(item, index) in this.tableItems" v-bind:nombre item.nombre >
                <div v-if="item.tableName == this.tableName" >
                <th scope="row">#{{ index }}</th>
                <td>
                    <input 
                    type="text" 
                    :name="item.id" 
                    :id="item.id"
                    v-model="item.nombre" 
                    @change="$emit('update-task', item)">
                    
                </td>
                </div>
            </tr>
            

        </tbody>
    </table>

</template>

<style scoped>
.table-container {
    display: flex;
    flex-direction: row;

}
</style>
