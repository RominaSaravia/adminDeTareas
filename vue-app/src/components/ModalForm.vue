<script setup>
import { ref, reactive } from 'vue'

</script>

<script>
import { reactive } from 'vue'

export default {
    setup: () => {

    },
    data: function () {
        return {
          taskName: reactive("task"),
          tableName:reactive("table"),
        }
    }, components: {},
    methods: {},
    mounted() {
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
            <input type="text" class="form-control" id="table-name" :v-model="this.tableName">
            {{ this.tableName }}
          </div>
          <div class="mb-3">
            <label for="taskName-text" class="col-form-label">Nombre:</label>
            <input type="text" class="form-control" id="taskName-text" :v-model="this.taskName" >
            {{ this.taskName }}
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="$emit('new-task', { tableName:this.tableName , nombre:this.taskName })">New task</button>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>



</style>
