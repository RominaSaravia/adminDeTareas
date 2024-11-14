<script setup>
import { ref, reactive,onMounted } from 'vue'

defineProps({
  tableName: {
    type: String,
    required: true,
  },
  tableItems:{
    type:Array,
    required:true,

  }
})

//Filter table row by TableName
// onMounted(function() {
//     console.log(this.tableItems);
//     this.tableItems =  this.tableItems.filter(x => {
//         x.tableName == 'In Progress'
//     })
  

</script>

<template>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">{{tableName}}</th>
                    <th scope="col">
                        <button type="button" class="btn btn-outline-success"  v-on:click="$emit('new-task',this.tableName)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                            </svg>
                          </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item,index) in this.tableItems" v-bind:nombre item.nombre>
                    <th scope="row">#{{index}}</th>
                    <td contentEditable="true" >{{item.nombre}}</td>
                </tr>
            </tbody>
        </table>
</template>

<style scoped>
.table-container{
    display: flex;
    flex-direction: row;

}
</style>

