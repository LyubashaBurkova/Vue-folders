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
  width: 360px;
  height: auto;
  min-height: 330px;
  margin: 0px auto;
  display: block;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  padding: 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  
}

.modal-body {
  padding: 0 20px;
}

.modal-footer {
     padding: 15px;
}
</style>