<template>
  <button>
    <a
      @click="emailAnna"
    >
      {{ buttonText }}
    </a>
  </button>
</template>

<script>
export default {
  props: {
    buttonHref: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  },
  methods: {
    emailAnna(e) {
      e.preventDefault();
      const domain = '@gmail.com';
      const alias = 'annaelizabethzimmerman';
      const email = window.open(`mailto:${alias}${domain}`, '_blank');
      email.focus();
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
  }
  a {
    display: block;
    text-align: center;
    width: 200px;
    border: solid 1px white;
    color: white;
    padding: 15px;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .15rem;
    cursor: pointer;
    transition: all .5s ease;
    font-weight: 900;
    text-decoration: none;
    &:hover {
      background: white;
      color: rgb(26, 23, 24)
    }
  }
</style>