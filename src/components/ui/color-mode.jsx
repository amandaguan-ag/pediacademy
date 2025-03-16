'use client'

import { ThemeProvider, useTheme } from 'next-themes'

export function ColorModeProvider({ children }) {
  return (
    <ThemeProvider 
      attribute='class' 
      disableTransitionOnChange 
      forcedTheme="light" 
      enableSystem={false} 
    >
      {children}
    </ThemeProvider>
  )
}

export function useColorMode() {
  return {
    colorMode: 'light',
    toggleColorMode: () => {}, 
  }
}
