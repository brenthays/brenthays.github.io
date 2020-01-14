<template>
  <div class="projects" id="projects">
    <div v-for="(item, index) in $static.projects.edges" v-bind:class="{'bg-light': index % 2 === 0}">
      <div class="container project-container py-5">
        <div class="row">
          <div class="col-sm-12 col-lg-5">
            <a :href="item.node.demo" :title="item.node.title" target="_blank" class="project-img-link">
              <g-image immediate :src="item.node.image" class="project-img mb-3 mb-lg-0"/>
            </a>
          </div>
          <div class="col-sm-12 col-lg-7">
            <h1 class="mb-3">{{item.node.title}}</h1>
            <div class="mb-3">
              <span v-for="tag in item.node.tags" class="badge badge-pill badge-dark mr-1">{{ tag }}</span>
            </div>
            <div v-html="item.node.content" class="mb-4"></div>
            <a :href="item.node.demo" :title="item.node.title" class="btn btn-primary mr-1" target="_blank">Live Demo</a>
            <a :href="item.node.source" :title="item.node.title + ' Source'" class="btn btn-outline-primary mr-1" target="_blank">Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query Project {
  projects: allProject(sortBy: "order") {
    edges {
      node {
        title
        content
        tags
        image
        demo
        source
      }
    }
  }
}
</static-query>

<style lang="scss">
  .projects {
    .project-img-link {
      display: block;
      border: 1px solid transparent;
      transition: border-width 0.1s linear;
      &:hover {
        border: 5px solid transparent;
      }
    }
    .project-img {
      width: 100%;
      transition: opacity 0.1s linear;
      &:hover {
        opacity: .8;
      }
    }
  }
</style>
