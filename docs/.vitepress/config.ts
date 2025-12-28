import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ecanquiz',
  description: 'Desarrolo Web',
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',  
    siteTitle: 'ecanquiz',
    nav: [//{
        //text: 'About', link: 'https://ecanquiz.github.io/portfolio/'
      //}, {
      //  text: 'Blog', link: 'https://ecanquiz.github.io/myblog/'
      //},
      {
        text: 'Books',
        items: [
          { text: 'Kanban in Action', link: 'https://madexblog.wordpress.com/2020/06/19/kanban-en-accion/' },
          { text: 'Metodología Ágil de Desarrollo eXtremo', link: 'https://madexblog.wordpress.com/2016/06/21/13/' }          
        ]
      }, {
        text: 'Methodologies',
        items: [
          { text: 'eXtreme Programming', link: 'https://ecanquiz.github.io/extreme-programming/' },
          { text: 'Refactorizar ya?', link: 'https://ecanquiz.github.io/refactor-now/' },
          { text: 'Scrum', link: 'https://ecanquiz.github.io/scrum/' }
        ]
      }, {
        text: 'Scaffolding',
        items: [
          { text: 'LaraVuel-ApiSpa', link: 'https://ecanquiz.github.io/laravuel-apispa/' },
          { text: 'ShopCart-Nuxt', link: 'https://ecanquiz.github.io/shopcart/' }      
        ]
      }, {
        text: 'Tool',
        items: [
          { text: 'Auto-CRUD Generator', link: 'https://ecanquiz.github.io/auto-crudx/' }      
        ]
      }, {
        text: 'Tutorials',
        items: [
          { text: 'Cocinando con Laravel', link: 'https://ecanquiz.github.io/cooking-with-laravel/' },
          { text: 'Cómo codificar en JavaScript', link: 'https://ecanquiz.github.io/how-to-code-in-javascript/' },
          { text: 'Cómo codificar en TypeScript', link: 'https://ecanquiz.github.io/how-to-code-in-typescript/' },
          { text: 'CRUD ToDo ( Laravel + Vue )', link: 'https://ecanquiz.github.io/crud-todo/' },
          { text: 'Estructura de Carpetas', link: 'https://ecanquiz.github.io/folder-structure-for-vue-apps/' },
          { text: 'Laravel-Docker', link: 'https://ecanquiz.github.io/laravel-docker/' },
          { text: 'Laravel en funcionamiento', link: 'https://ecanquiz.github.io/laravel-up-running/' },
          { text: 'Nuxt4 Fetch Tuto', link: 'https://ecanquiz.github.io/nuxt4-fetch-tutorial/' },
          { text: 'Patrones Probados de Pinia', link: 'https://ecanquiz.github.io/proven-pinia-patterns/' },
          { text: 'Vue-Docker', link: 'https://ecanquiz.github.io/vue-docker/' },        
          { text: 'Vue-Forms-Tuto', link: 'https://ecanquiz.github.io/vue-forms-tuto/' },
          { text: 'Vue-PWA', link: 'https://ecanquiz.github.io/vue-pwa/' },
          { text: 'Vue-TDD', link: 'https://ecanquiz.github.io/vue-tdd/' }          
        ]
      }
    ],    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/ecanquiz.github.io/' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ernesto Canquiz'
    }    
  }
})
