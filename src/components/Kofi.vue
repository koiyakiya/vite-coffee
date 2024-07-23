<template>
    <div class="kofi-button-wrapper">
      <a :href="kofiURL" target="_blank" class="kofi-button" :style="buttonStyle">
        <img class="kofi-icon" src="../assets/kofilogo.png" :style="iconStyle" />
        <span class="kofi-text" :style="textStyle">Support me on Ko-fi</span>
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
      buttonStyle() {
        return {
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: '#13233F',
          color: 'white',
          padding: '2px 12px',
          borderRadius: '4px',
          textDecoration: 'none',
          fontFamily: '"Helvetica", "Arial", sans-serif',
          fontSize: '13px',
          fontWeight: '400',
          lineHeight: '24px',
        };
      },
      iconStyle() {
        return {
          width: '35px',
          height: '35px',
          marginRight: '8px',
        };
      },
      textStyle() {
        return {
          color: 'white',
        };
      },
    },
  });
  </script>
  
  <style scoped>
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