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
  font-size: 16px;
  color: white;
  letter-spacing: 0.2rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: rgb(26, 23, 24);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.wrap1280 {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.headline {
  font-family: 'DM Serif Display', serif;
  font-size: 40px;
}

</style>
