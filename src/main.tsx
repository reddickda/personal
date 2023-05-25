import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MantineProvider theme={{
    colorScheme: 'dark', colors: {
      // override dark colors to change them for all components
      dark: [
        '#d5d7e0',
        '#acaebf',
        '#8c8fa3',
        '#666980',
        '#4d4f66',
        '#34354a',
        '#2b2c3d',
        '#1d1e30',
        '#0c0d21',
        '#01010a',
      ],
    }
  }}
    withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>,
)
