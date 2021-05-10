<template>
  <div class="wrapper">
    <Breadcrumbs :links="[{ title:this.project.title, href: `/projects/${this.project.id}/${this.project.slug}` }]" />
    <div class="full-width-img">
      <img width="100%" :src="`${$config.baseUrl}${this.project.topImage}`" />
    </div>
    <div class="bg-txt">
      {{ this.project.textA }}
    </div>
    <div class="img-cols">
      <div v-if="this.project.bottomImages">
        <img width="100%" :src="`${$config.baseUrl}${this.project.bottomImages[0]}`" />
      </div>
      <div v-if="this.project.bottomImages">
        <img width="100%" :src="`${$config.baseUrl}${this.project.bottomImages[1]}`" />
      </div>
    </div>
    <div class="bg-txt">
      {{ this.project.textB }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
const projects = require('@/static/data/projects')

export default Vue.extend({
  data() {
    return {
      project: {}
    }
  },
  beforeCreate() {
    projects.forEach((project) => {
      if (project.id.toString() === this.$route.params.id) {
        this.project = project;
      }
    })
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}
.full-width-img {
  width: 100%;
}
.bg-txt {
  /* font-size: 2rem; */
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 0;
}
.img-cols {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    flex-basis: 48%;
  }
}
</style>

