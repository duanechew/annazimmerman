<template>
  <div class="wrapper">
    <div v-for="project in projects" v-bind:key="project.id">
      <div v-if="project.id.toString() === $route.params.id">
        <Breadcrumbs :links="[{ title:project.title, href: `/projects/${project.id}/${project.slug}` }]" />
        <div class="full-width-img">
          <img width="100%" :src="`${$config.baseUrl}${project.topImage}`" />
        </div>
        <div class="bg-txt">
          {{ project.textA }}
        </div>
        <div class="img-cols">
          <div v-if="project.bottomImages">
            <img width="100%" :src="`${$config.baseUrl}${project.bottomImages[0]}`" />
          </div>
          <div v-if="project.bottomImages">
            <img width="100%" :src="`${$config.baseUrl}${project.bottomImages[1]}`" />
          </div>
        </div>
        <div class="bg-txt">
          {{ project.textB }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
const projects = require('@/static/data/projects')

export default Vue.extend({
  data() {
    return {
      projects: projects,
      projectId: this.$route.params.id
      // project: {}
    }
  },
  // fetch() {
  //   projects.forEach((project) => {
  //     if (project.id.toString() === this.$route.params.id) {
  //       this.project = project;
  //     }
  //   })
  // }
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

