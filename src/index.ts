import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { Nav } from './Nav'
import { Profile } from './Profile'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { About } from './About'
import { Projects } from './Projects'
import { ContactMe } from './ContactMe'
const app = new Elysia()
  .use(html())
  .use(staticPlugin({
    assets: './styles',
    prefix: '/styles',

   
  }))
  .get('/', () => `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
    <link href="./styles/styles.css" rel="stylesheet">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Boom.Tris</title>
            
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
        tailwind.config = {
          theme: {
            extend: {
              fontFamily: {
                sans: ['Sora', 'sans-serif'],
              },
            }
          }
        }
      </script>
    </head>
    <body class="font-sans bg-white min-h-screen pt-16 md:pt-20">
      ${Nav()}
      ${Profile()}
      ${Skills()}
      ${Experience()}
      ${About()}
      ${Projects()}   
      ${ContactMe()}
    </body>
    </html>
  `)
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)