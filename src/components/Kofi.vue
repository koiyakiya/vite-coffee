<template>
    <a :href="kofiURL" target="_blank" class="kofi-button">
      <span class="kofi-icon">♥</span>
      Support me on Ko-fi
    </a>
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
    }
  })
  </script>
  
  <style scoped>
  .kofi-button {
    display: inline-flex;
    align-items: center;
    background-color: #29abe0;
    color: white;
    padding: 5px 12px;
    border-radius: 4px;
    text-decoration: none;
    font-family: 'Helvetica', 'Arial', sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    transition: background-color 0.2s ease;
  }
  
  .kofi-button:hover {
    background-color: #2795c4;
  }
  
  .kofi-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #ff5e5b;
  }
  </style>