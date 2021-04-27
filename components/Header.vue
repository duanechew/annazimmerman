<template>
  <header>
    <div class="logo">
      <a :href="`${$config.baseUrl}`">
        Logo Here
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="#work">Work</a></li>
        <li><a :href="`${$config.baseUrl}/about`">About</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  max-width: 1500px;
  margin: 40px auto;
  padding: 0 20px;
  padding: 0 20px;
  justify-content: space-between;
}

nav {
  li {
    display: inline-block;
    &:first-child {
      margin-right: 15px;
    }
  }
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 18px;
    position: relative;
    padding: 5px;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: white;
      transition: all 0.5s ease;
    }
    &:hover {
      &:after {
        left: 0;
        width: 100%;
      }
    }
  }
}
</style>
