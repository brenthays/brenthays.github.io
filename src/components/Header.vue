<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="primary" id="top">
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   <b-collapse id="nav-collapse" is-nav>
     <b-navbar-nav class="mx-auto">
       <b-nav-item href="#" v-scroll-to="'#app'" class="mx-1">Bio</b-nav-item>
       <b-nav-item href="#" v-scroll-to="'#projects'" class="mx-1">Projects</b-nav-item>
       <b-nav-item href="#" v-scroll-to="'#skills'" class="mx-1">Skills</b-nav-item>
       <b-nav-item href="https://github.com/brenthays" title="brenthays on GitHub" target="_blank" class="mx-1">GitHub</b-nav-item>
     </b-navbar-nav>
   </b-collapse>
 </b-navbar>
</template>

<style lang="scss">
#app {
  .navbar-dark {
    .navbar-nav {
      .nav-link {
        font-weight: bold;
        font-size: 1.15rem;
        color: #fff;
        &:hover {
          opacity: 0.75;
        }
      }
    }
  }
}
</style>
