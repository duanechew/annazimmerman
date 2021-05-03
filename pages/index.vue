<template>
  <div class="container">
    <div>
      <div class="wrap1280">
        <div class="capsule">
          <div class="capsule_top headline">
            I am a dedicated, enthusiastic, and ambitious graphic designer
            with a passion for beautifying and elevating your brand.
          </div>
          <div class="capsule_middle poppins-headline is-bold">
            Illustration & Design by Anna Zimmerman
          </div>
          <div class="capsule_bottom poppins-headline">
            Based in Indiana
          </div>
        </div>
      </div>
      <div id="work"></div>
      <ProjectsGrid :projects="projects" />
      <CTAWithImage
        :image="`${$config.baseUrl}/images/stretch.png`"
        :header="'Interested in working together?'"
        :body="'Do you want to learn more about the projects above? Do you want to chat about hiking the Appalachian Trail?'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const projects = require('@/static/data/projects')

export default Vue.extend({
  data() {
    return {
      projects: projects
    }
  }
})
</script>

<style lang="scss" scoped>
.capsule {
  margin-top: 180px;
  margin-bottom: 180px;
  text-align: center;
}
.capsule_top {
  margin: 0 auto 40px auto;
}
.capsule_middle {
  text-transform: uppercase;
  padding-bottom: 20px;
}
.capsule_bottom {
  text-transform: uppercase;
}
button, button:active, button:focus, a, a:focus, a:active {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: 0;
}
</style>