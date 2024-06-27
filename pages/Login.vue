<template>
  <div class="login-container">
    <input 
      type="password" 
      v-model="password" 
      placeholder="Enter Password"
      @input="checkPassword"
      class="password-input"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const password = ref('');

const checkPassword = () => {
  if (password.value === '123456') {
    window.location.href = '/outgoing/'
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f7;
}

.password-input {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>