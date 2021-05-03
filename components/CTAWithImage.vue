<template>
  <div class="wrap1280">
    <div class="cta-with-image">
      <div class="image">
        <div style="text-align: center;">
          <img max-width="100%" width="500" :src="`${image}`" />
        </div>
      </div>
      <div style="padding-left: 60px;">
        <p class="cta-header">{{ header }}</p>
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
  font-size: 1.2rem;
  letter-spacing: 3px;
  font-family: 'Poppins';
  display: flex;
  flex-wrap: wrap;
  p {
    padding-bottom: 50px;
  }
  div, .image {
    flex-basis: 50%;
  }
  .cta-header {
    font-family: 'DM Serif Display';
    font-size: 2.5rem;
    color: #FFD166;
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
