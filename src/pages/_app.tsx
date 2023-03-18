import '@/styles/globals.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layouts } from '@/components/Layouts/Layouts';
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import { lightTheme } from '@/themes';
import { UiProvider } from '@/context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'primary.light',
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <UiProvider>
          <Component {...pageProps} />
        </UiProvider>
      </ThemeProvider>
    </ Box>
  )
}
