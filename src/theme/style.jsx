import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        'dark-blue': 'hsla(240, 54%, 11%, 1)',
        'very-dark-blue': 'hsla(261, 88%, 23%, 1)',
        'light-blue': 'hsl(220, 80%, 56%)',
        'light-gray': 'hsla(0, 0%, 100%, 0.1)',
        'very-light-gray': 'hsla(220, 60%, 99%, 1)',
        'gray': 'hsla(0, 0%, 88%, 1)',
        'dark-gray': 'hsla(0, 0%, 51%, 1)'
    },
    fonts: {
        inter: `'Inter', sans-serif`,
        rubik: `'Rubik', sans-serif`
    },
    components: {
        Button: {
            variants: {
                primary: {
                    fontSize: 'md',
                    fontWeight: 'medium',
                    fontFamily: 'rubik',
                    color: '#FFFFFF',
                    bg: 'light-blue',
                    borderRadius: '32px',
                    paddingX: 8,
                    paddingY: 6,
                    _hover: {
                        cursor: 'pointer',
                        color: 'gray',
                        transition: 'all .3s',
                        transform: 'scale(1.04)'
                    }
                },
                secondary: {
                    fontSize: 'md',
                    fontWeight: 'medium',
                    fontFamily: 'rubik',
                    color: 'dark-blue',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '32px',
                    paddingX: 8,
                    paddingY: 3.5,
                    _hover: {
                        cursor: 'pointer',
                        color: 'light-blue',
                        transition: 'all .3s',
                        transform: 'scale(1.04)'
                    }
                },
                ghost: {
                    fontSize: 'md',
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    _hover: {
                        color: 'light-blue',
                        bg: 'transparent'
                    }
                }
            }
        }
    }
})

export default theme