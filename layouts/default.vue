<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: white;
  /* letter-spacing: 0.2rem; */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #231f20;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.wrap1280 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.headline {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  &.is-small {
    font-size: 2rem;
  }
}

.poppins-headline {
  font-family: 'Poppins', sans-serif;
  &.is-bold { font-weight: 600; }
  letter-spacing: 3px;
}

.is-pink {
  color: #EF476F;
}

.is-yellow {
  color: #FFD166
}

.is-green {
  color: #06D6A0;
}

.is-blue{
  color: #118AB2;
}

.is-navy {
  color: #073B4C;
}

</style>
