<template>
  <div>
    <button type="button" class="btn btn-success" @click="showModal=true">Открыть</button>
    <modal :showModal="showModal">
      <template v-slot:header>
          <h2>{{modal.caption}}</h2>
      </template>
      <template v-slot:body>
        <ul class="folders-list">
          <li is="folder"  
            v-for="folder in folders"
            :folder="folder"
            :key="folder.id"          
          >
          </li>
        </ul>          
      </template>
      <template v-slot:footer>
          <button 
            type="button" 
            class="btn btn-success" 
            @click="submitFolder()" 
          >
            ок
          </button>       
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from './Modal'
import Folder from './Folder'

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
    submitFolder(){
      this.showModal = false
      const submitFolderId =  this.$store.getters.getSelectFolderId
      console.log('submitFolderId', submitFolderId)
    }
  },
  components: {
      Modal,
      Folder
  }
}
</script>
<style>
.folders-list,
.folders-list ul {
  padding: 0;
  text-align: left;
}

.folders-list li {
  list-style-type:none;
  margin: 10px 0 10px 20px ;
}

.folders-list li .folder-caption{
  cursor: pointer;
}

.folders-list li .selected-folder {
  font-weight: bold;
}
</style>