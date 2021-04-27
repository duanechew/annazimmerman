<template>
  <div class="wrap1280">
    <Breadcrumbs :links="[{ title: 'About', href: '/about' }]" />
    <div class="outer">
      <div class="upper">
        <div>
          <img width="100%" :src="`${imageUrl}/pooch.jpg`" />
        </div>
        <div>
          <div class="upper-headline">HELLO</div>
          <div class="upper-heavy heavy">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
            magna
          </div>
          <div class="light">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip ex
          </div>
        </div>
      </div>
    </div>

    <div class="lower">
      <div class="lower-left">
        <div class="heavy">
          An illustrative designer, a designy illustrator
        </div>
        <div class="light lower-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis
          nisl ut aliquip ex
        </div>
        <Button buttonHref="home" buttonText="Download My Resume" />
      </div>
      <div class="lower-right">
        <div class="light">
          Illustration <br />
          Style Development, Product Illustration, Icons, Editorial
        </div>
        <div class="light">
          Brand Design <br />
          Brand Development, Brand Campaigns, Social Campaigns
        </div>
        <div class="light">
          Visual Design <br />
          UI, End-to-End Product Design, Style Guide Development
        </div>
      </div>
    </div>

    <CTAWithImage
      :image="'/images/pooch.jpg'"
      :body="'Interested in working together? Want to learn more about the projects above?'"
    />
  </div>
</template>

<style lang="scss" scoped>
.outer {
  display: flex;
}

.heavy {
  font-size: 1.5rem;
  font-weight: 800;
}

.light {
  font-size: 1.3rem;
}

.upper {
  padding-bottom: 90px;
  margin-bottom: 90px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px white;
  /* align-items: center; */
  div {
    flex-basis: 48%;
  }
}

.upper-headline {
  font-size: 2.5rem;
  color: #c76253;
  font-weight: 800;
}

.upper-heavy {
  padding: 40px 0;
}

.lower {
  display: flex;
  justify-content: space-between;
}

.lower-left { flex-basis: 60%; }

.lower-right {
  flex-basis: 38%;
  line-height: 2rem;
  div {
    padding-bottom: 30px;
    &:last-child {
      padding-bottom: 0;
    }
  }
}

.lower-light { padding: 40px 0;
}
</style>