<script setup>
// import { ref, reactive } from 'vue'

// let modaltaskName = "task";
// let modaltableName = "Backlog";

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
          modaltaskName: reactive("new Task"),
          modaltableName:reactive(""),
        }
    }, components: {},
    methods: {},
    mounted() {
      const exampleModal = document.getElementById('exampleModal')
      if (exampleModal) {
        exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `New task for table ${recipient}`
        modalBodyInput.value = recipient

        const tableInput = document.getElementById('tableNameInput')
        tableInput.value = recipient;
        this.modaltableName = recipient;
  })
}
    },
    beforeUpdate(){
        console.log('table call ',this.taskList);
    }
}


</script>

<template>



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="table-name" class="col-form-label">tabla:</label>
            <input type="text" class="form-control" id="tableNameInput" v-model="modaltableName" readonly>
          </div>
          <div class="mb-3">
            <label for="taskName-text" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="taskNameInput" v-model="modaltaskName" >
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="$emit('new-task', { tableName:modaltableName , nombre:modaltaskName })">New task</button>
      </div>
    </div>
  </div>
</div>


</template>

<style scoped>



</style>
