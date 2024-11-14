<script setup>
import TableWorkspace from './TableWorkspace.vue'
import { ref, reactive,onMounted  } from 'vue'

let taskList = reactive([
    {
        nombre:"Tarea a realizar",
        tableName:"Backlog",
    },
    {
        nombre:"Tarea a realizar",
        tableName:"In Progress",
    },
    {
        nombre:"Tarea a realizar",
        tableName:"Finalizadas",
    },
])


function addNewItem(tableName){
    console.log(tableName);
    taskList.push({
        nombre: "nueva tarea"
    });   

}

onMounted(()=> {
  console.log("Mounted");
  console.log(taskList)


})

</script>

<template>
    <div class="container table-container">
    <TableWorkspace tableName = "Backlog" v-bind:tableItems = "taskList" v-on:new-task = "addNewItem"></TableWorkspace>
    <TableWorkspace tableName = "In Progress" v-bind:tableItems = "taskList" v-on:new-task = "addNewItem"></TableWorkspace>
    <TableWorkspace tableName = "Tareas Finalizadas" v-bind:tableItems = "taskList"  v-on:new-task = "addNewItem"></TableWorkspace>
    </div>

</template>

<style scoped>
.table-container{
    display: flex;
    flex-direction: row;

}
</style>
