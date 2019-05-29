<template>
  <div class="additional_info">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .additional_info {
    color: #cccccc;
    /*font-size: 0.9rem; /* /// rem?*/
    font-style: italic;

    &::before {
      content: '* ';
    }
  }
</style>
