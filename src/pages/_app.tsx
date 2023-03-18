import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layouts } from '@/components/Layouts/Layouts';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from '@/themes';
import { UiProvider } from '@/context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <UiProvider>

          <Component {...pageProps} />
        </UiProvider>

      </ThemeProvider>
    </>
  )
}
