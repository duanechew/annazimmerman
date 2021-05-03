<template>
  <div class="wrap1280">
    <div class="cta-with-image">
      <div class="image">
        <div style="text-align: center;">
          <img max-width="100%" width="500" :src="`${image}`" />
        </div>
      </div>
      <div style="padding-left: 60px;">
        <p class="headline is-yellow">{{ header }}</p>
        <p>{{ body }}</p>
        <EmailButton :buttonText="'Email Me'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    }
  },
  methods: {
    emailAnna() {
      alert('time to email!');
    }
  }
}
</script>

<style lang="scss" scoped>
.cta-with-image {
  padding: 100px 20px;
  margin-top: 180px;
  border-top: solid 1px white;
  display: flex;
  flex-wrap: wrap;
  p {
    padding-bottom: 50px;
  }
  div, .image {
    flex-basis: 50%;
  }
  @media screen and (max-width: 800px) {
    div, .image {
      flex-basis: 100%;
    }
    .image {
      padding-bottom: 40px;
    }

  }
}

.image {
  display: flex;
  align-items: center;
  div {
    flex-basis: 100%;
  }
}
</style>
