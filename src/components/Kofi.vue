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
      backgroundColor: { type: String, default: '#1A8ABE' },
      hoverBackgroundColor: { type: String, default: '#29ABE0' },
      textColor: { type: String, default: '#fff' },
      padding: { type: String, default: '10px' },
      borderRadius: { type: String, default: '10px' },
      gap: { type: String, default: '5px' },
      display: { type: String, default: 'flex' },
      width: { type: String, default: '200px' },
      height: { type: String, default: '40px' },
      alignItems: { type: String, default: 'center' },
      justifyContent: { type: String, default: 'center' },
      textDecoration: { type: String, default: 'none' },
      cursor: { type: String, default: 'pointer' },
      imgWidth: { type: String, default: '35px' },
      imgMarginLeft: { type: String, default: '-10px' },
      imgMarginRight: { type: String, default: '-5px' },
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
            backgroundColor: this.hover ? this.hoverBackgroundColor : this.backgroundColor,
            color: this.textColor,
            padding: this.padding,
            borderRadius: this.borderRadius,
            gap: this.gap,
            display: this.display,
            width: this.width,
            height: this.height,
            alignItems: this.alignItems,
            justifyContent: this.justifyContent,
            textDecoration: this.textDecoration,
            cursor: this.cursor,
          }
        },
        imgStyle() {
          return {
            width: this.imgWidth,
            marginLeft: this.imgMarginLeft,
            marginRight: this.imgMarginRight,
          }
        }
    },
  });
</script>
  