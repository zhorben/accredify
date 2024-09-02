import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4174',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--no-sandbox')
          launchOptions.args.push('--allow-file-access-from-files')
          launchOptions.args.push('--use-fake-ui-for-media-stream')
          launchOptions.args.push('--use-fake-device-for-media-stream')
        }

        return launchOptions
      })
      return config
    },
    env: {
      VITE_PERSONAL_USER_URL:
        'https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/user-personal.json',
      VITE_REGULAR_USER_URL:
        'https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/user.json',
      VITE_DOCUMENTS_URL:
        'https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/documents.json',
      VITE_CAREER_GOALS_URL:
        'https://raw.githubusercontent.com/Phangster/Accredify-FE-Interview-Endpoint/main/goals.json',
    },
  },
  viewportWidth: 1536, // Macbook-16
  viewportHeight: 960, // Macbook-16
})
