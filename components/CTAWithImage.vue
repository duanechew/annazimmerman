<template>
  <div class="wrap1280">
    <div class="cta-with-image">
      <div class="image">
        <img width="100%" :src="`${image}`" />
      </div>
      <div class="text">
        <p class="headline is-yellow">{{ header }}</p>
        <p v-html="body"></p>
        <div class="button">
          <EmailButton :buttonText="'Email Me'" />
        </div>
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
}

.image {
  display: flex;
  align-items: center;
  margin-bottom: 80px;
  div {
    flex-basis: 100%;
  }
}

.image, .text {
  flex-basis: 100%;
}

.button {
  margin: 60px auto 0 auto;
}

@media screen and (min-width: 900px) {
  .image, .text {
    flex-basis: 50%;
  }
  .text {
    padding-left: 60px;
  }
  .button {
    margin: 60px 0 0 0;
  }
}
</style>
