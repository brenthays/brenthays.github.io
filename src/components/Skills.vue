<template>
  <div class="skills border-top" id="skills">
    <div class="container skills-container text-center py-5">
      <h1 class="mb-3">Skills &amp; Technologies</h1>
      <h2 class="mb-5">Some languages, frameworks, API's and other tools I've worked with...</h2>
      <div class="row">
        <div v-for="item in $static.skills.edges" class="col-xs-6 col-sm-6 col-md-3 col-lg-2 mb-5">
          <div class="skill">
            <i class="skill-icon mb-2" v-bind:class="item.node.icon"></i>
            <div class="skill-text">{{item.node.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query Skill {
	skills: allSkill(sortBy: "order") {
    edges {
      node {
        title
        icon
      }
    }
  }
}
</static-query>

<style lang="scss">
  .skills-container {
    h2 {
      font-size: 1.25rem;
    }
    .skill {
      .skill-icon {
        color: #444;
        display: block;
        font-size: 3rem;
      }
    }
  }
</style>
