// theme.ts (tsx file with usage of StyleFunctions, see 4.)
import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const theme = extendTheme({
  colors: {
    primaryButton: {
      100: '#bd5d04',
      200: '#a34f02',
    },
    primary: {
      100: 'rgb(255, 123, 0)',
    },
    secondary: {
      100: '#fff',
    },
  },
})

export default theme
