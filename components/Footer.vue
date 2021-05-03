<template>
  <div class="wrap1280">
    <div class="footer">
      <div class="footer-section">
        <p style="padding-bottom: 6px">Illustration and Design by Anna Zimerman</p>
        <p>Made with love in Indiana</p>
      </div>
      <div class="footer-section links">
        <div v-for="(link, i) in links" v-bind:key="i" class="link">
          <a class="social-media-link" target="_blank" :href="link.href">
            {{link.title}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { href: 'https://www.instagram.com/annaezimmerman/', title: 'Instagram' },
        { href: 'https://www.linkedin.com/in/annaezimmerman/', title: 'LinkedIn' },
        { href: 'https://twitter.com/annaezimmerman', title: 'Twitter' },
        { href: 'https://dribbble.com/annaezimmerman', title: 'Dribbble' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  margin: 0 auto;
  padding: 100px 20px;
  justify-content: space-between;
  align-items: center;
  border-top: solid 1px white;
  p { margin: 0;}
  a {
    color: white;
    text-decoration: none;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      left: 50%;
      right: 0;
      height: 1px;
      background-color: white;
      transition: all .5s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
  @media screen and (max-width: 750px) {
    display: block;
  }
}

.footer-section {
  &.links {
    display: flex;
    line-height: 2rem;
    flex-wrap: wrap;
    justify-content: space-between;
    .link {
      flex-basis: 50%;
    }
  }
  @media screen and (max-width: 750px) {
    margin: 0 auto;
    text-align: center;
    &:first-child {
      margin-bottom: 60px;
    }
  }
}

.social-media-link {
  width: 50%;
  padding-bottom: 5px;
}
</style>
