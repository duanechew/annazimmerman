<template>
  <button>
    <a :href="buttonHref">
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
  }
}
</script>

<style lang="scss" scoped>
  button {
    background: none;
    border: none;
  }
  a {
    display: block;
    text-align: center;
    width: 250px;
    border: solid 1px white;
    color: white;
    padding: 15px;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: .2rem;
    cursor: pointer;
    transition: all .5s ease;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      background: white;
      color: rgb(26, 23, 24)
    }
  }
</style>