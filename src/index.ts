import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { Nav } from './Nav'
import { Profile } from './Profile'
import { Skills } from './Skills'

const app = new Elysia()
  .use(html())
  .use(staticPlugin({
    assets: '/img',
    prefix: '/img'
  }))
  .get('/', () => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
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
      
    </body>
    </html>
  `)
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)