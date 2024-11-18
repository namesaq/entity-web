<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view />
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

html {
  height: 100vh;
}

body {
  height: 100%;
  overflow-x: hidden;
  position: relative;
}

@font-face {
  font-family: 'Raleway';
  src: url("./assets/fonts/RalewayRegular.ttf") format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  background: whitesmoke;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  width: 92%;
  height: inherit;
  display: inherit;
  flex-direction: inherit;
  justify-content: inherit;
  align-items: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>