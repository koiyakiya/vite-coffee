<template>
    <button class="kofi-btn" :style="style">
        <a :href="kofiURL" target="_blank">
            <img src="../assets/kofilogo.png" />
            <span class="kofi-text">
                Support me on Ko-fi
            </span>
        </a>
    </button>
</template>

<script lang="ts">
import {  defineComponent } from 'vue';

export default /*#__PURE__*/ defineComponent({
    props: {
        username: { type: String, required: true },
        backgroundColor: { type: String, default: '#F0F0F0'},
        hoverColor: { type: String, default: '#D0D0D0'},
        textColor: { type: String, default: '#000000'},
        
    },
    computed: {
        kofiURL() {
            return `https://ko-fi.com/${this.username}`;
        },
        style() {
            return {
                '--bg-color': this.backgroundColor,
                '--bg-hover-color': this.hoverColor,
                '--text-color': this.textColor
            };
        }
    }
})
</script>

<style scoped>
  
    .kofi-btn {
    display: inline-block;
    border: none;
    border-radius: 10px;
    padding: 0;
    cursor: pointer;
    background-color: var(--bg-color);
    transition: background-color 0.3s ease;
  }

  .kofi-btn a {
    display: flex;
    align-items: center;
    padding: 3px 5px;
    text-decoration: none;
  }

  .kofi-btn img {
    height: 35px;
  }

  .kofi-text {
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
    color: var(--text-color);
  }

  .kofi-btn:hover {
    background-color: var(--bg-hover-color)
  }
  
</style>