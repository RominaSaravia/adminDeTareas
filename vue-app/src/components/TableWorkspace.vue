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
                <th scope="col">{{ tableName }}</th>
                <th scope="col">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" :data-bs-whatever="tableName"  >+</button>
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
.table-hover:hover{
    border: 1px solid rgba(0, 0, 0, 0.2); 
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    transition: 1s;

}

</style>
