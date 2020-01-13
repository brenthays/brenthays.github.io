<template>
  <Layout>
    <Bio />
    <Projects />
    <Skills />
  </Layout>
</template>

<script>
import Bio from '@/components/Bio'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default {
  components: {
    Bio,
    Projects,
    Skills,
  },
  metaInfo: {
    title: 'Brent Hays | Full Stack Developer'
  }
}
</script>

<style>

</style>
