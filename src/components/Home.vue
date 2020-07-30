<template>
  <div>
    <button type="button" class="btn btn-success" @click="showModal=true">Открыть</button>
    <modal :showModal="showModal">
      <template v-slot:header>
          <h2>{{modal.caption}}</h2>
      </template>
      <template v-slot:body>
        <div class="folders-list">
          <folder 
            v-for="folder in folders"
            :folder="folder"
            :key="folder.id"          
          >
          </folder>
        </div>          
      </template>
      <template v-slot:footer>
          <button 
            type="button" 
            class="btn btn-success" 
            @click="selectFolder()" 
          >
            OK
          </button>       
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'
import Folder from './Folder.vue'

export default {
  name: "HomePage",
  data() {
      return{
          showModal: false,
          createNewFolder: false,
      }    
  },
  computed: {
    folders(){
      return this.$store.getters.getFolders
    },
    modal(){
      return this.$store.getters.getModalInfo
    }
  },
  methods: {
    selectFolder(){
      this.showModal = false
    }
  },
  components: {
      'modal': Modal,
      'folder': Folder
  }
}
</script>
<style>
button.btn {
  display: inline-block;
  font-size: 1.2rem;
  /* color: #fff;
  background-color: #3eaf7c; */
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  -webkit-transition: background-color 0.1s ease;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  /* border-bottom: 1px solid #389d70; */
}

.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}

.btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
}

.btn-success:not(:disabled):active {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
}

.btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
}

.btn-light:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
}

.btn-light:not(:disabled):active {
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df;
}
</style>