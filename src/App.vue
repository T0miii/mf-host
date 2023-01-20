<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="header">
      <header class="child">
        <h1>App Container</h1>
      </header>
    </div>
    <div class="body">
      <div id="mf-app-container" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header"
    "body";
}

.header {
  grid-area: header;
}

.body {
  grid-area: body;
}
</style>
