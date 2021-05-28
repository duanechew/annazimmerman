<template>
  <div class="outer">
    <a class="breadcrumb" href="/">Home</a>
    <span style="font-size: 16px" v-for="(link, i) of links" v-bind:key="i">
      <span class="pointer">></span>
      <a class="breadcrumb" :href="link.href">
        {{ link.title }}
      </a>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: []
    },
  }
}
</script>

<style lang="scss" scoped>
.outer {
  padding: 40px 0;
}

.pointer {
  padding: 0 5px 0 8px;
}

.breadcrumb {
  color: white;
  text-decoration: none;
  transition: all .5s ease;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 600;
  position: relative;
  padding-bottom: 5px;
  /* &:hover {
    color: #c76253;
  } */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: white;
    transition: all 0.5s ease;
  }
  &:hover {
    &:after {
      left: 0;
      width: 100%;
    }
  }
}
</style>