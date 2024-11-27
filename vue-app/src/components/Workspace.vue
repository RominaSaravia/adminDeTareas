<script setup>
import TableWorkspace from './TableWorkspace.vue'
import ModalForm from './ModalForm.vue'
import { ref, reactive,onMounted,onBeforeMount ,onBeforeUpdate } from 'vue'


let taskList = reactive([
    {
        id:1,
        nombre:"Tarea a realizar",
        tableName:"Backlog",
    },
    {
        id:2,
        nombre:"Tarea a realizar",
        tableName:"In Progress",
    },
    {
        id:3,
        nombre:"Tarea a realizar",
        tableName:"Finalizadas",
    }
])

let workTables = reactive(new Set());


function addNewItem(e){
    console.log("addNewTask: ", e)
    taskList.push({
        id: getTaskId(),
        nombre: e.nombre,
        tableName:e.tableName,
    });   

}

function updateItemTable(updatedItem){
    console.log("updateItemTable", taskList)
    for (let index = 0; index < taskList.length; index++) {
        if(taskList[index].id == updatedItem.id)
        {
            taskList[index].nombre = updatedItem.nombre;
            return;
        }
        
    }

}

function getTaskId(){
    return taskList.length + 1
}


onBeforeMount(()=> {
  for (let index = 0; index < taskList.length; index++) {
    const element = taskList[index];
    workTables.add(element.tableName);
    
  }
})

onBeforeUpdate(()=> {
    console.log(this.taskList)
})


///////////////////////////





</script>


<template>
    <!-- <div class="container table-container">
    <TableWorkspace tableName = "Backlog" v-bind:tableItems = "taskList" v-on:new-task = "addNewItem"></TableWorkspace>
    <TableWorkspace tableName = "In Progress" v-bind:tableItems = "taskList" v-on:new-task = "addNewItem"></TableWorkspace>
    <TableWorkspace tableName = "Tareas Finalizadas" v-bind:tableItems = "taskList"  v-on:new-task = "addNewItem"></TableWorkspace>
    </div> -->
   

    <div class="container table-container">
    <TableWorkspace v-for="(item,index) in workTables" 
    v-bind:tableName = item  
    v-model:tableItems = "taskList" 
    
    v-on:update-task = "updateItemTable"
    ></TableWorkspace>

    </div>

    <ModalForm 
    v-on:new-task = "addNewItem"
    > </ModalForm>


</template>

<style scoped>
.table-container{
    display: flex;
    flex-direction: row;

}
</style>
