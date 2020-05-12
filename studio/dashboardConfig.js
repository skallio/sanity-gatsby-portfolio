export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eba48bf129f12679a804c92',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2i5tafha',
                  apiId: '124e0a63-77ae-40e5-862f-f29dfc224c37'
                },
                {
                  buildHookId: '5eba48bf1787f263d3cc37ff',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s3ktrkzo',
                  apiId: '46d6f1bb-b483-40d2-aadf-0f890efff83f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/skallio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s3ktrkzo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
