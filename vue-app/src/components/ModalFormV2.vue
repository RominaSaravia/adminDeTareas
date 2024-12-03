<script setup>
// import { ref, reactive } from 'vue'

// let modaltaskName = "task";
// let modaltableName = "Backlog";
// let miVar = reactive('valorrrr');

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
          modaltaskName: reactive(""),
          modaltaskId: reactive(""),
          modaltaskStatus: reactive(""),
          modaltableName:reactive(""),
        }
    }, components: {},
    methods: {},
    mounted() {
      const editModal = document.getElementById('editModal')
      if (editModal) {
        editModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        const taskName = button.getAttribute('data-bs-taskNombre')
        const taskId = button.getAttribute('data-bs-taskId')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = editModal.querySelector('.modal-title')
        const modalBodyInput = editModal.querySelector('.modal-body input')

        modalTitle.textContent = `New task for table ${recipient}`
        modalBodyInput.value = recipient

        const tableInput = document.getElementById('tableNameInput')
        const taskIdInput = document.getElementById('showTaskId')
        tableInput.value = recipient;
        taskIdInput.value = taskId;
        this.modaltableName = recipient;
        this.modaltaskId = taskId;
        this.modaltaskName = taskName;
        })
      }
    },
    beforeUpdate(){
        console.log('table call ',this.taskList);
    }
}

function updateModalWithValues(){

}
</script>

<template>
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editModalLabel">Edit Task</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="table-name" class="col-form-label">ID:</label>
            <input type="text" class="form-control" id="showTaskId" v-model="modaltaskId" readonly>
            <label for="table-name" class="col-form-label">Status Actual:</label>
            <input type="text" class="form-control" id="tableNameInput" v-model="modaltableName" readonly>
            <label for="table-name" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="newTaskName" v-model="modaltaskName">
          </div>
          <div class="mb-3">
            <label for="taskName-text" class="col-form-label">Status:</label>
            <select name="taskStatus" id="taskStatus" v-model="modaltaskStatus" required>
              <option v-for="(item,index) in workTablesOptions" :value="item">{{item}}</option>
            </select>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="$emit('update-task', { id:modaltaskId , nombre:modaltaskName, status: modaltaskStatus })">Update</button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>




</style>
