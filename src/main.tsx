import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'
import 'mantine-react-table/styles.css'
import './index.css'

import App from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)
const queryClient = new QueryClient()

const theme = createTheme({})

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>,
)
