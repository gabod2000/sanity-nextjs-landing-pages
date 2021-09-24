export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '614d21cf14819a1c6158e731',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-skevgspv',
                  apiId: 'cebe5105-e770-4be2-8957-1491d1923b7a'
                },
                {
                  buildHookId: '614d21cf92f7151f699e3e05',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-x8ndeax6',
                  apiId: 'f79c4cee-99cc-4ff2-9618-a71b2206eafd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabod2000/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-x8ndeax6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
