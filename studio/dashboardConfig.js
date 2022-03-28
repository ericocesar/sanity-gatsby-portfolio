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
                  buildHookId: '624124df90a68f311384b60b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vop5wmaz',
                  apiId: 'e68bc80f-9ee3-4ec8-8ae6-93535975483e'
                },
                {
                  buildHookId: '624124e01438670e43c4d7a7',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6ypt21zg',
                  apiId: '24aec81e-0bcf-4b09-8878-9da536235a9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericocesar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6ypt21zg.netlify.app',
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
