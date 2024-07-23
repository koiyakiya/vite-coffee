<template>
    <div class="kofi-button-wrapper">
      <a :href="kofiURL" target="_blank" class="kofi-button">
        <img class="kofi-icon" src="../assets/kofilogo.png" />
        <span class="kofi-text">Support me on Ko-fi</span>
      </a>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      username: { type: String, required: true },
    },
    computed: {
      kofiURL() {
        return `https://ko-fi.com/${this.username}`;
      },
    },
  });
  </script>
  
  <style scoped>
  .kofi-button {
    display: inline-flex !important;
    align-items: center !important;
    background-color: #13233F !important;
    color: white !important;
    padding: 2px 12px !important;
    border-radius: 4px !important;
    text-decoration: none !important;
    font-family: "Helvetica", "Arial", sans-serif !important;
    font-size: 13px !important;
    font-weight: 400 !important;
    line-height: 24px !important;
  }
  
  .kofi-icon {
    width: 35px !important;
    height: 35px !important;
    margin-right: 8px !important;
  }
  
  .kofi-text {
    color: white !important; 
  }
  
  .kofi-button-wrapper :deep(.kofi-button:hover) {
    background-color: #1e3a6a !important;
  }
  </style>
  