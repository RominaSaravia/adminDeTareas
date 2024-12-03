<script setup>
import ModalFormV2 from './ModalFormV2.vue'

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
    <table class="table table-hover content-table" >
        <thead>
            <tr>
                <th scope="col">{{ tableName }}</th>
                <th scope="col">
                    <button type="button" class="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" 
                    :data-bs-whatever="tableName"  >+</button>
                </th>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="(item, index) in this.tableItems" v-bind:nombre item.nombre  >
                <div v-if="item.tableName == this.tableName" class="div-table-row">
                <td  scope="row">#{{ index }}</td>
                <td>
                    <input 
                    type="text" 
                    :name="item.id" 
                    :id="item.id"
                    v-model="item.nombre" 
                    @change="$emit('update-task', {id:item.id , nombre:item.nombre , status:null })">
                    
                </td>
                <td>
                    <button type="button" class="btn btn-success button-edit" 
                data-bs-toggle="modal" 
                data-bs-target="#editModal" 
                :data-bs-whatever="tableName" 
                :data-bs-taskId="item.id" 
                :data-bs-taskNombre="item.nombre"  >Edit</button>

                </td>

                </div>
            </tr>
            

        </tbody>
    </table>



</template>

<style scoped>
.content-table{
    margin: 0 auto;

}
.content-table td {
    text-align: center;
}
.content-table tr {
    margin: 0 auto;
    text-align: center;
}
.content-table tr div {
    margin: 0 auto;
    text-align: center;
}

.table{
    text-align: center
}
.table thead{
    border-right: 1px solid rgb(167, 167, 167);
    border-left: 1px solid rgb(167, 167, 167);

}

.table-hover:hover{
    border: 1px solid rgba(0, 0, 0, 0.2); 
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    transition: 1s;

}
.button-edit{
    display: inline-block;
}
.div-table-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
}

td input {
    padding: 5px;
    margin: 2px 8px;
}
.button-edit{
    margin: 0 8px;
    text-align: right;
}
table tbody{
    width:100%;
}
tbody tr{
    width: 100%;
}

</style>
