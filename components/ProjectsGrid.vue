<template>
  <div class="projects-grid">
    <div class="column" v-for="(projs, i) of projectColumns" v-bind:key="i">
      <ProjectCard
        v-for="(project, i) of projs"
        v-bind:key="i"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

const divideProjects = (projects) => {
  const numberOfColumns = 5
  const projectColumns = []
  for (let i = numberOfColumns; i > 0; i--) {
    projectColumns.push(
      projects.splice(0, Math.ceil(
        projects.length / i
      ))
    )
  }
  return projectColumns
}

export default Vue.extend({
  props: {
    projects: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      projectColumns: []
    }
  },
  created() {
    this.projectColumns = divideProjects(this.projects);
  }
})
</script>

<style lang="scss" scoped>
.projects-grid {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: stretch;
}

.column {
  flex-basis: 33.3%;
  &:first-child {
    margin-top: 40px;
  }
  &:nth-child(2){
    margin-top: 20px;
  }
  &:nth-child(4) {
    margin-top:40px;
  }
  &:last-child {
    margin-top: 80px;
  }
}
</style>
