<template>
<div>
  <button @click="showModal = true">Открыть</button>

  <modal :showModal="showModal"></modal>
</div>

</template>

<script>
import Modal from './Modal.vue'

export default {
  name: "HomePage",
  data() {
      return{
          showModal: false,
      }    
  },
  components: {
      'modal': Modal
  }
}
</script>
<style>
button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: #3eaf7c;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  -webkit-transition: background-color 0.1s ease;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #389d70;
}
</style>