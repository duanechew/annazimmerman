<template>
  <div class="wrap1280">
    <Breadcrumbs :links="[{ title: 'About', href: `${$config.baseUrl}/about` }]" />
    <div class="outer">
      <div class="upper">
        <div>
          <img width="100%" :src="`${$config.baseUrl}/images/profilephoto.png`" />
        </div>
        <div>
          <div class="headline is-yellow first">Hello</div>
          <div class="headline is-small second">
            I am a dedicated, enthusiastic, and ambitious graphic designer with a passion for beautifying and elevating your brand.
          </div>
          <div class="light">
            I'm a native Clevelander, 2017 Appalachian Trail thru hiker, Step Mom, and Dog Mom.
            I work on a wide range of design projects with a diverse and versatile skill set.
            Having a background in Graphic Design and Art Direction, I know how to create 
            illustrations and produce content that work perfectly for their intended environment.
          </div>
        </div>
      </div>
    </div>

    <div class="lower">
      <div class="lower-left">
        <div class="headline is-pink">
          Services
        </div>
        <div style="padding-bottom:2.5rem; padding-right: 2.5rem;">
          I've worked with marketing teams and product teams, with agencies and in-house,
          both on teams and independently. I value accessible and inclusive design above all.
        </div>
        <Button :buttonHref="`${$config.baseUrl}/images/azimmerman-resume.pdf`" buttonText="Download My Resume" download="Anna_Zimmerman_Resume.pdf" />
      </div>
      <div class="lower-right">
        <div class="section">
          <div class="headline is-pink">Illustration</div>
          Style Development, Product Illustration, Icons, Editorial
        </div>
        <div class="section">
          <div class="headline is-pink">Brand Design</div>
          Brand Development, Brand Campaigns, Social Campaigns
        </div>
        <div class="section">
          <div class="headline is-pink">Design Layout</div>
          Web Design, Print Collateral, Ebooks, Infographics
        </div>
      </div>
    </div>

    <CTAWithImage
      :image="`${$config.baseUrl}/images/stretch.png`"
      :header="'Interested in working together?'"
      :body="`Do you want to learn more about the projects above? Do you want to chat about hiking the <a href='https://thetrek.co/author/anna-zimmerman/' target='_blank'><b>Appalachian Trail</b></a>?`"
    />
  </div>
</template>

<style lang="scss" scoped>
.outer {
  display: flex;
}


.upper {
  padding-bottom: 90px;
  margin-bottom: 90px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px white;
  flex-wrap: wrap;
  div {
    flex-basis: 100%;
    @media screen and (min-width: 900px) {
      flex-basis: 48%;
    }
  }
  .first {
    padding-top: 1rem;
  }
  .second {
    padding: 2.5rem 0;
  }
}

.upper-heavy {
  padding: 40px 0;
  font-family: 'DM Serif Display', serif;
}

.lower {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.lower-left {
  flex-basis: 100%;
  .headline {
    padding-bottom: 1.5rem;
  }
  @media screen and (min-width: 900px) {
    flex-basis: 60%;
  }
}

.lower-right {
  margin-top: 60px;
  flex-basis: 100%;
  .section {
    padding-bottom: 2.5rem;
  }
  @media screen and (min-width: 900px) {
    flex-basis: 38%;
    margin-top: 0;
  }
}
</style>
