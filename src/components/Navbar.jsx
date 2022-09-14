import { Box, Button, Divider, Flex, HStack, Image, Slide, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import '@fontsource/inter/600.css'

import logo from '../assets/logo.png'
import { useState } from "react";

const NavItem = ({ text, color }) => {
    return (
        <Text
            color={color}
            fontSize={'md'}
            fontWeight={'normal'}
            transition={'all .2s'}
            _hover={{
                color: 'light-blue',
                cursor: 'pointer'
            }}>
            {text}
        </Text>
    )
}

const Navbar = () => {
    const [open, setIsOpen] = useState(false)
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Flex
            as={'nav'}
            align={'center'}
            width={'100%'}
            maxWidth={{
                base: '100%',
                md: 'container.md',
                lg: 'container.lg',
                xl: 'container.xl'
            }}
            marginX={'auto'}
            paddingX={{ base: 6, md: 28, lg: 16 }}
            paddingTop={{ base: 8, lg: 16 }}
            justifyContent={'space-between'}
        >
            <HStack spacing={{ base: 2, lg: 4 }}>
                <Image
                    src={logo}
                    alt={'Crappo Logo'}
                    borderRadius={'50%'}
                    boxShadow={'dark-lg'} />
                <Text
                    color={'white'}
                    fontSize={{ base: 'sm', lg: 'md' }}
                    fontFamily={'inter'}
                    fontWeight={'semibold'}
                    letterSpacing={'wider'}>
                    CRAPPO
                </Text>
            </HStack>

            <HStack
                spacing={14}
                fontFamily={'rubik'}
                display={{ base: 'none', lg: 'flex' }}>
                <HStack
                    spacing={8}>
                    <NavItem text={'Products'} color={'white'} />
                    <NavItem text={'Features'} color={'white'} />
                    <NavItem text={'About'} color={'white'} />
                    <NavItem text={'Contact'} color={'white'} />
                </HStack>

                <Flex
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <Text
                        color={'white'}
                        fontSize={'md'}
                        fontWeight={'medium'}
                        transition={'all .2s'}
                        _hover={{
                            color: 'light-blue',
                            cursor: 'pointer'
                        }}
                    >
                        Login
                    </Text>

                    <Divider
                        orientation={'vertical'}
                        marginX={4}
                        height={'20px'} />

                    <Button
                        variant={'primary'}
                        aria-label={'register button'}
                        boxShadow={'xl'}
                    >
                        Register
                    </Button>
                </Flex>
            </HStack>

            {/* Mobile Menu */}
            <Button
                display={{ base: 'block', lg: 'none' }}
                zIndex={'overlay'}
                leftIcon={ isOpen ?
                    <IoCloseOutline 
                        color={'white'}
                        size={'1.8rem'} /> :
                    <IoMenuOutline
                        color={'white'}
                        size={'1.8rem'} />
                     }
                onClick={onToggle}
            >
            </Button>

            <Slide 
                in={isOpen} 
                direction={'right'}
                display={{ base: 'block', lg: 'none' }}>
                <Box
                    fontFamily={'rubik'}
                    position={'absolute'}
                    backgroundColor={'white'}
                    rounded={'md'}
                    top={24}
                    left={{base: 7, md: 32}}
                    right={{base: 10, md: 36}}
                    paddingY={10}>
                    <VStack
                        spacing={4}>
                        <NavItem text={'Products'} color={'dark-blue'} />
                        <NavItem text={'Features'} color={'dark-blue'} />
                        <NavItem text={'About'} color={'dark-blue'} />
                        <NavItem text={'Contact'} color={'dark-blue'} />
                    </VStack>

                    <Flex
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        marginTop={8}
                    >
                        <Text
                            color={'dark-blue'}
                            fontSize={'md'}
                            fontWeight={'medium'}
                            marginBottom={4}
                        >
                            Login
                    </Text>

                        <Button
                            variant={'primary'}
                            aria-label={'register button'}
                            boxShadow={'xl'}
                        >
                            Register
                    </Button>
                    </Flex>
                </Box>
            </Slide>

        </Flex>
    )
}

export default Navbar