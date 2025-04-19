import { defineConfig } from 'vite'
import merge from 'deepmerge'
import devConfig from './vite.config.dev'
import prodConfig from './vite.config.prod'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  const baseConfig = {
    define: {
      __APP_ENV__: JSON.stringify(mode),
    },
    server: {
      open: true,
    },
    plugins: [
      tailwindcss(),
    ],
  }

  // menggabungkan base dengan konfigurasi dev/prod
  if (command === 'serve') {
    return merge(baseConfig, devConfig)
  } else {
    return merge(baseConfig, prodConfig)
  }
})
