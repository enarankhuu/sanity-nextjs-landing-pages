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
                  buildHookId: '60221818903419612cb96b29',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-apdf3of7',
                  apiId: '4af87682-92b1-417a-b9f2-cb04c9663219'
                },
                {
                  buildHookId: '6022181857b0904e27b42133',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-im3k8csg',
                  apiId: 'ebc75933-de11-43d0-bb14-e76a77463b2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/enarankhuu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-im3k8csg.netlify.app', category: 'apps'}
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
