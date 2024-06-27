<template>
  <div class="container">
    <div class="webflow-style-input">
      <input
        class=""
        type="password"
        placeholder="探索世界"
        v-model="password" 
        @input="checkPassword"
      />
      <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vitepress'

  const password = ref('');
  const router = useRouter()

  const checkPassword = () => {
    if (password.value === '888888') {
      sessionStorage.setItem('token', '888888')
      router.go('/outgoing/')
    }
  };
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @keyframes gradient { 
    0%{background-position:0 0}
    100%{background-position:100% 0}
  }
  
  .webflow-style-input {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 2px;
    padding: 20px 2rem 22px;
    background: rgba(57, 63, 84, 0.8);
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 999;
      height: 2px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      background-position: 0% 0%;
      background: linear-gradient(to right, #B294FF, #57E6E6, #FEFFB8, #57E6E6, #B294FF, #57E6E6);
      background-size: 500% auto;
      animation: gradient 3s linear infinite;
    }
  }
  
  .webflow-style-input input {
    flex-grow: 1;
    color: #BFD2FF;
    font-size: 26px;
    line-height: 34px;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: #7881A1;
    }
  }
  
  .webflow-style-input button {
    color: #7881A1;
    font-size: 34px;
    line-height: 34px;
    vertical-align: middle;
    transition: color .25s;
    &:hover {
      color: #BFD2FF;
    }
  }
}


</style>