<template>
  <div class="outer">
    <a class="breadcrumb" href="/">Home</a>
    <span v-for="(link, i) of links" v-bind:key="i">
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
  font-size: 1rem;
  &:hover {
    color: #c76253;
  }
}
</style>