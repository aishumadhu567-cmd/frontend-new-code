// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: '/',   // 👈 CRITICAL FIX
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
 base: '/hrms/dev/',   // 👈 VERY IMPORTANT
 plugins: [react()],
 server: {
  port: 5173,
  proxy: {
    '/api': {
      // target:'http://localhost:8085',
      target: 'https://dev.hrms.venturebiz.in/',
      changeOrigin: true,
      secure: false,
      // Rewrite cookie domain so auth cookies set by the backend are usable in local dev
      cookieDomainRewrite: 'localhost',
      cookiePathRewrite: {
        '/': '/'
      }
    }
  }
}
})
