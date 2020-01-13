<template>
  <b-navbar fixed="top" toggleable="lg" type="dark" variant="primary" id="top">
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   <b-collapse id="nav-collapse" is-nav>
     <b-navbar-nav class="mx-auto">
       <b-nav-item href="#" v-scroll-to="'#app'" class="ml-2">Bio</b-nav-item>
       <b-nav-item href="#" v-scroll-to="'#projects'" class="ml-2">Projects</b-nav-item>
       <b-nav-item href="#" v-scroll-to="'#skills'" class="ml-2">Skills</b-nav-item>
       <b-nav-item href="https://github.com/brenthays" title="brenthays on GitHub" target="_blank" class="ml-2">GitHub</b-nav-item>
     </b-navbar-nav>
   </b-collapse>
 </b-navbar>
</template>

<style scope="scss">
.nav-link {
  font-weight: bold;
  font-size: 1.15rem;
}
</style>
