<template>
  <a :href="`${$config.baseUrl}/projects/${project.id}/${project.slug}`" style="color: white;">
    <div class="card"
      ref="card"
      :style="`background-image: url('${$config.baseUrl}${project.previewImage}'); height: ${height}px`"
    >
      <div class="card-hover" :style="`background: ${project.previewColor}`">
        <div>
          <p style="padding-bottom: 5px">{{project.title}}</p>
          <p style="fontWeight: 600, textTransform: uppercase">{{project.shortDescription}}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    project: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      height: '200',
    }
  },
  mounted() {
    this.calculateHeight();
  },
  methods: {
    calculateHeight() {
      this.height = this.$refs.card.clientWidth;
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  position: relative; 
  background-size: cover;
}

.card-hover {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  text-align: center;
  opacity: 0;
  transition: all .5s ease;
  font-size: 1.25rem;
  p {
    margin: 0;
  }
  &:hover {
    opacity: 100;
  }
}
</style>
