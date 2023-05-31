<template>
  <div class="title">
    <slot>
      <span>爆款推荐</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
}
</script>

<style lang="less" scoped>
.title {
  padding: 0.625rem 0;
  width: 100%;
  text-align: center;
  font-size: 1.125rem;
  span {
    position: relative;
    font-weight: 400;
  }
  span::before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    display: block;
    background: #d4c0a7;
    top: 50%;
    margin-top: -0.25rem;
    left: -1rem;
  }
  span::after {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    display: block;
    background: #d4c0a7;
    top: 50%;
    margin-top: -0.25rem;
    right: -1rem;
  }
}
</style>