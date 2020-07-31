<template>
    <div>
        <div class="modal-mask"  v-if="showModal">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">                 
                </slot>
              </div>

              <div class="modal-body">               
                <slot name="body">                 
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">                
                </slot>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    props: {
        'showModal': {
            type: Boolean
        }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  display: block;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  padding: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 360px;
  height: 334px;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
}


/* .modal-header h3 {
  margin-top: 0;
  color: #42b983;
} */

.modal-body {
  padding: 20px;
}

/* .modal-default-button {
  float: right;
} */

/* .modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */

</style>