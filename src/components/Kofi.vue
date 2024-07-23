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
    setup(props) {
        const kofiURL = `https://ko-fi.com/${props.username}`;
    
        const style = {
            backgroundColor: '#29ABE0',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
        };
    
        const hoverStyle = {
            backgroundColor: '#1A8ABE',
        };
    
        return {
            kofiURL,
            style,
            hoverStyle,
        };
    },
  });
</script>
  