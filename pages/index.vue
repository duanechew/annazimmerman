<template>
  <div class="container">
    <div>
      <div class="wrap1280">
        <div class="headline">
          <div class="headline_top">
            I am a dedicated, enthusiastic, and ambitious graphic designer
            with a passion for beautifying and elevating your brand.
          </div>
          <div class="headline_middle">
            Illustration & Design by Anna Zimmerman
          </div>
          <div class="headline_bottom">
            Based in Indianapolis, IN
            Hello World
          </div>
        </div>
      </div>
      <div id="work"></div>
      <ProjectsGrid :projects="projects" />
      <CTAWithImage
        :image="`${$config.imageUrl}/images/stretch.png`"
        :body="'Interested in working together? Want to learn more about the projects above?'"
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

<style lang="scss">
.headline {
  margin-top: 180px;
  margin-bottom: 180px;
  text-align: center;
}
.headline_top {
  font-size: 2.5rem;
  margin: 0 auto 40px auto;
}
.headline_middle {
  font-size: 1.5rem;
  text-transform: uppercase;
  padding-bottom: 20px;
}
.headline_bottom {
  font-size: 1.2rem;
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