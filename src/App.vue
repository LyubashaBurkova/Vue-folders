<template>
  <div id="app">
    <home-page></home-page>
  </div>
</template>

<script>
import HomePage from './components/Home.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button.btn {
  display: inline-block;
  font-size: 1.2rem;
  padding: 5px 10px;
  border-radius: 4px;
  -webkit-transition: background-color 0.1s ease;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  cursor: pointer;
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
