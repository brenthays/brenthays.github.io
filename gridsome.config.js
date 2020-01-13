module.exports = {
  siteName: 'Brent Hays | Full Stack Dev',
  siteDescription: 'Brent Hays is a full stack developer in Austin, TX.',
  siteUrl: 'https://brenthays.github.io',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Project',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'skills/**/*.md',
        typeName: 'Skill',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: 'UA-72659574-10'
    //   }
    // },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
