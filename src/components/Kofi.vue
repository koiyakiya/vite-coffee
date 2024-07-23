<template>
    <div class="kofi-button-wrapper">
      <a :href="kofiURL" target="_blank" class="kofi-button">
        <span class="kofi-icon">♥</span>
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
        display: 'inline-flex';
        align-items: 'center';
        background-color: '#13233F';
        color: 'white';
        padding: '2px 12px';
        border-radius: '4px';
        text-decoration: 'none';
        font-family: '"Helvetica", "Arial", sans-serif';
        font-size: '13px';
        font-weight: '400';
        line-height: '24px';
  }

  .kofi-icon {
    font-size: 16px;
    margin-right: 8px;
    color: '#FF5E5B';
  }

  .kofi-text {
    color: white;
  }

  .kofi-button-wrapper :deep(.kofi-button) {
    all: initial;
    * {
      all: unset;
    }
  }
  
  .kofi-button-wrapper :deep(.kofi-button:hover) {
    background-color: #1e3a6a !important;
  }
  </style>