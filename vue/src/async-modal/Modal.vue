<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div class="modal-body">
        <h3>This is the modal!</h3>
      </div>

      <div class="modal-footer">
        <button class="modal-default-button" @click="$emit('close')">OK</button>
      </div>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-default-button {
  float: right;
}
</style>
