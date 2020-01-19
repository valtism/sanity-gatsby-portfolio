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
                  buildHookId: '5e2426a968310d9787aa5c2f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u74bzfej',
                  apiId: '14b994d9-1157-4cef-98cc-8895fa72b8cd'
                },
                {
                  buildHookId: '5e2426a9e6ddb63efffff5c2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-yaub4w5d',
                  apiId: 'e151726a-2960-4d10-a307-57ced1e579ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/valtism/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-yaub4w5d.netlify.com',
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
