<script setup>
import TableWorkspace from './TableWorkspace.vue'
import ModalForm from './ModalForm.vue'
import ModalFormV2 from './ModalFormV2.vue'
import { reactive,onBeforeMount ,onBeforeUpdate } from 'vue'


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
    taskList.push({
        id: getTaskId(),
        nombre: e.nombre,
        tableName:e.tableName,
    });   

}

function updateItemTable(updatedItem){
    for (let index = 0; index < taskList.length; index++) {
        if(taskList[index].id == updatedItem.id)
        {
            taskList[index].nombre = updatedItem.nombre;
            if(updatedItem.status != null){
                console.log('New status = ',  updatedItem.status)
                taskList[index].tableName = updatedItem.status;
            }
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


</script>

<script>
function showSideModal(){
    let modal = document.getElementById("sideModal");
    modal.style.display = "block";
    console.log(modal);

}
</script>


<template>

    <div class="container table-container">
    <TableWorkspace v-for="(item,index) in workTables" 
    v-bind:tableName = item  
    v-model:tableItems = "taskList" 
    
    v-on:update-task = "updateItemTable"
    ></TableWorkspace>

    </div>

    <ModalForm 
    v-bind:workTablesOptions = workTables 
    v-on:new-task = "addNewItem"
    > </ModalForm>

    <ModalFormV2 
    v-bind:workTablesOptions = workTables 
    v-on:update-task = "updateItemTable"
    > </ModalFormV2>


</template>

<style scoped>
    .table-container {
    display: flex;
    flex-direction: column;
    
    }


@media (min-width: 1024px) {
    .table-container{
    display: flex;
    flex-direction: row;
    place-items: flex-start;

}

}
</style>
