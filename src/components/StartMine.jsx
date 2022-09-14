import { Flex, VStack, Text, Input, Button, Stack, ScaleFade } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer";

const StartMine = () => {
    const { ref, inView } = useInView();

    return (
        <ScaleFade ref={ref} in={inView} initialScale={0.5}>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                paddingY={{ base: '44px', lg: '88px' }}
                maxWidth={{
                    base: '100%',
                    md: 'container.md',
                    lg: 'container.lg',
                    xl: 'container.xl'
                }}
                paddingX={{ base: 6, md: 28, lg: 16 }}
                backgroundImage={'url(src/assets/ribbonFour.png), url(src/assets/ribbonFive.png)'}
                backgroundPosition={{base: '50% center, 80%, center', md: '-50% center, 250% center', lg: 'left center, right center'}}
                backgroundRepeat={'no-repeat'}
                marginX={'auto'}
                fontFamily={'rubik'}
                width={'100%'}>

                <Flex
                    backgroundColor={'light-blue'}
                    borderRadius={'16px'}
                    width={'100%'}
                    padding={{ base: 6, lg: 12 }}
                    backgroundImage={'url(src/assets/eth.png), url(src/assets/btc.png)'}
                    backgroundPosition={{base: 'left top, right 130%', lg: 'left 120%, right 125%'}}
                    backgroundRepeat={'no-repeat'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={{ base: 'column', lg: 'row' }}>

                    <VStack
                        align={'start'}
                        width={{ base: 'full', lg: '50%' }}>
                        <Text
                            fontWeight={'bold'}
                            fontSize={{ base: '20px', lg: '32px' }}
                            lineHeight={'48px'}
                            color={'white'}
                            textAlign={{ base: 'center', lg: 'start' }}
                            maxWidth={{ base: 'full', lg: '758px' }}>
                            Start mining now
                    </Text>

                        <Text
                            fontWeight={'normal'}
                            fontSize={'md'}
                            marginTop={6}
                            fontFamily={'rubik'}
                            color={'white'}
                            maxWidth={{ base: 'full', lg: '348px' }}>
                            Join now with CRAPPO to get the latest news and start mining now
                    </Text>
                    </VStack>

                    <Stack
                        spacing={{ base: 8, lg: 10 }}
                        alignItems={'start'}
                        width={{ base: 'full', lg: '50%' }}
                        direction={{ base: 'column', lg: 'row' }}>
                        <Input
                            placeholder={'Enter your email'}
                            variant={'flushed'}
                            fontSize={'md'}
                            color={'white'}
                            marginTop={{ base: 4, lg: 0 }}
                            borderColor={'light-gray'}
                            focusBorderColor={'hsla(0, 0%, 100%, 0.4)'}
                            _placeholder={{ opacity: '.9', color: 'white' }}
                        />

                        <Button
                            variant={'secondary'}>
                            Subscribe
                    </Button>
                    </Stack>

                </Flex>

            </Flex>
        </ScaleFade>
    )
}

export default StartMine