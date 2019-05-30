<template>
  <p class="additional_info">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
  .additional_info {
    margin: 0;
    color: #cccccc;
    font-style: italic;

    &::before {
      content: '* ';
    }
  }
</style>
