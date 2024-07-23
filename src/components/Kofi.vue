<template>
    <div class="kofi-button-wrapper">
      <a :href="kofiURL" target="_blank" class="kofi-button" :style="style" @mouseover="hover = true" @mouseleave="hover = false">
        <img class="kofi-icon" src="../assets/kofilogo.png" :style="imgStyle"/>
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
    data() {
      return {
        hover: false
      };
    },
    computed: {
        kofiURL() {
          return `https://ko-fi.com/${this.username}`;
        },
    
        style() {
          return {
            backgroundColor: this.hover ? '#29ABE0' : '#1A8ABE',
            color: '#fff',
            padding: '10px',
            borderRadius: '10px',
            gap: '5px',
            display: 'flex',
            width: '175px',
            height: '20px',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            cursor: 'pointer',
          }
        },
        imgStyle() {
          return {
            width: '35px',
            marginLeft: '-10px',
            marginRight: '-5px',
          }
        }
    },
  });
</script>
  