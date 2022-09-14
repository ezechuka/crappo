import { Button, Flex, HStack, Image, Text, Circle, ScaleFade } from "@chakra-ui/react"
import { useEffect, useRef } from "react";
import { HiChevronRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";

import heroImg from '../assets/hero.png'

const Hero = () => {

    const keyElement = useRef()
    const { ref, inView } = useInView()

    useEffect(() => {
        const typed = new Typed(keyElement.current, {
            strings: ['Fastest', 'Secure'],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 500,
            showCursor: false,
            smartBackspace: true,
            fadeOut: false,
            loop: true
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <ScaleFade 
            in={inView} 
            initialScale={0.3}>
            <Flex
                ref={ref}
                as={'section'}
                alignItems={'center'}
                width={'100%'}
                marginX={'auto'}
                paddingTop={{ base: 8, lg: 16 }}
                maxWidth={{
                    base: '100%',
                    md: 'container.md',
                    lg: 'container.lg',
                    xl: 'container.xl'
                }}
                paddingX={{ base: 6, md: 28, lg: 16 }}
                flexDirection={{ base: 'column-reverse', lg: 'row' }}
                justifyItems={'space-between'}>

                <Flex
                    flexDirection={'column'}
                >
                    <HStack
                        borderRadius={'32px'}
                        backgroundColor={'light-gray'}
                        spacing={4}
                        paddingY={1}
                        paddingStart={1}
                        paddingEnd={4}
                        marginTop={{ base: 10, lg: 0 }}
                        maxWidth={{ base: '100%', md: '60%', lg: '365px' }}>
                        <Button
                            variant={'secondary'}
                            fontSize={{ base: 'sm', lg: 'md' }}
                            paddingX={4}
                            paddingY={1}>
                            75% SAVE
                    </Button>

                        <Text
                            fontFamily={'rubik'}
                            fontWeight={'normal'}
                            fontSize={{ base: 'sm', lg: 'md' }}
                            color={'white'}>
                            For the Black Friday weekend
                    </Text>
                    </HStack>

                    <Text
                        marginTop={{ base: 0, lg: 6 }}
                        fontWeight={'bold'}
                        fontSize={{ base: '48px', lg: '64px' }}
                        fontFamily={'rubik'}
                        color={'white'}
                        lineHeight={{ base: '60px', lg: '75.8px' }}>
                        <Text
                            css={{
                                '::before': {
                                    'content': '"\\200b\\200b"'
                                }
                            }}
                            as={'span'}
                            display={'block'}
                            marginTop={6}
                            fontWeight={'bold'}
                            fontSize={{ base: '48px', lg: '64px' }}
                            fontFamily={'rubik'}
                            color={'green.400'}
                            lineHeight={{ base: '60px', lg: '75.8px' }}
                            ref={keyElement}>
                        </Text>

                        platform to invest in crypto
                    </Text>

                    <Text
                        fontWeight={'normal'}
                        fontSize={'md'}
                        fontFamily={'rubik'}
                        color={'gray'}
                        marginTop={6}
                        maxWidth={'435px'}>
                        Buy and sell cryptocurrencies, trusted by
                        10M wallets with over $30 billion in transactions.
                    </Text>

                    <Button
                        variant={'primary'}
                        fontSize={'18px'}
                        paddingY={8}
                        iconSpacing={4}
                        paddingStart={6}
                        paddingEnd={1}
                        marginTop={8}
                        maxWidth={'202px'}
                        boxShadow={'xl'}
                        aria-label={'discount button'}
                        rightIcon={
                            <Circle size={'2.2rem'} bg={'white'}>
                                <HiChevronRight size={'1.5rem'} color={'hsl(220, 80%, 56%)'} />
                            </Circle>
                        }>
                        Try for FREE
                </Button>

                </Flex>

                <Image src={heroImg}
                    maxWidth={{ base: '100%', lg: '604' }}
                    maxHeight={{ base: '100%', lg: '585' }}
                    alt={''} />

            </Flex>
        </ScaleFade>
    )
}

export default Hero