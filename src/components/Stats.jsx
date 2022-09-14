import { Button, Circle, Flex, HStack, Image, ScaleFade, Stack, Text, VStack } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

import chart from '../assets/chart.png'
import globe from '../assets/globe.png'
import person from '../assets/person.png'
import statImg from '../assets/statImg.png'

const StatItem = ({ icon, title, label }) => {
    return (
        <HStack spacing={6}>
            <Circle
                backgroundColor={'light-gray'}
                size={{ base: '4.5rem', md: '5rem' }}
            >
                <Image src={icon} alt={''} />
            </Circle>

            <VStack alignItems={'start'}>
                <Text
                    fontWeight={'bold'}
                    fontSize={{ base: '32px', lg: '40px' }}
                    fontFamily={'rubik'}
                    color={'white'}
                    lineHeight={{ base: '50px', lg: '60px' }}>
                    {title}
                </Text>
                <Text
                    fontWeight={'normal'}
                    fontSize={{ base: 'sm', lg: 'md' }}
                    marginTop={{ base: 0, lg: 1 }}
                    fontFamily={'rubik'}
                    color={'white'}>
                    {label}
                </Text>
            </VStack>
        </HStack>
    )
}

const Stats = () => {
    const { ref, inView } = useInView()

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
                paddingTop={{ base: '50px', lg: '100px' }}
                paddingBottom={{base: 96, lg: 56}}
                maxWidth={{
                    base: '100%',
                    md: 'container.md',
                    lg: 'container.lg',
                    xl: 'container.xl'
                }}
                paddingX={{ base: 6, md: 28, lg: 16 }}
                flexDirection={'column'}
                justifyItems={'space-between'}>

                <Stack
                    alignItems={{ base: 'start', lg: 'center' }}
                    justifyContent={{ base: 'space-between', lg: 'space-between' }}
                    width={'100%'}
                    spacing={{ base: 5, lg: 0 }}
                    direction={{ base: 'column', lg: 'row' }}
                >
                    <StatItem icon={chart} title={'$30B'} label={'Digital Currency Exchanged'} />
                    <StatItem icon={person} title={'10M+'} label={'Trusted Wallet Investor'} />
                    <StatItem icon={globe} title={'195'} label={'Countries Supported'} />
                </Stack>

                <Flex
                    flexDirection={{ base: 'column', lg: 'row' }}
                    alignItems={'center'}
                    justifyContent={{ base: 'center', lg: 'space-between' }}
                    paddingTop={{ base: '50px', lg: '100px' }}
                    width={'100%'}
                    backgroundImage={'url(src/assets/modelOne.png), url(src/assets/modelTwo.png), url(src/assets/ribbonThree.png)'}
                    backgroundRepeat={'no-repeat'}
                    backgroundPosition={{ base: 'right -15%, 140% 110%, 40% 120%',
                            md: 'right -15%, right 105%, 40% 120%', 
                            lg: 'right top, right bottom, left 130%' }}>

                    <Image
                        src={statImg}
                        alt={''}
                        marginEnd={{ base: 0, lg: 8 }} />

                    <Flex
                        flexDirection={'column'}
                        justifyContent={'space-between'}>

                        <Text
                            fontWeight={'bold'}
                            fontSize={{ base: '36px', lg: '40px' }}
                            fontFamily={'rubik'}
                            color={'white'}
                            marginTop={{ base: 6, lg: 0 }}
                            lineHeight={'60px'}>
                            Why you should choose CRAPPO
                        </Text>

                        <Text
                            fontWeight={'normal'}
                            fontSize={'md'}
                            marginTop={{ base: 3, lg: 6 }}
                            fontFamily={'rubik'}
                            color={'white'}
                            maxWidth={'408'}>
                            Experience the next generation
                            cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                        </Text>

                        <Button
                            variant={'primary'}
                            fontSize={'18px'}
                            marginTop={{ base: 6, lg: 8 }}
                            maxWidth={'146'}
                            paddingY={7}
                            boxShadow={'xl'}>
                            Learn More
                        </Button>

                    </Flex>

                </Flex>

                <Text
                    fontWeight={'bold'}
                    fontSize={{ base: '36px', lg: '40px' }}
                    fontFamily={'rubik'}
                    color={'white'}
                    lineHeight={'60px'}
                    paddingTop={'100px'}>
                    Check how much you can earn
                    </Text>

                <Text
                    fontWeight={'normal'}
                    fontSize={{ base: 'md', lg: '18px' }}
                    marginTop={{ base: 3, lg: 6 }}
                    fontFamily={'rubik'}
                    color={'white'}
                    maxWidth={'622'}
                    textAlign={{ base: 'start', md: 'center' }}>
                    Let’s check your hash rate to see how much you will earn today,
                    Exercitation veniam consequat sunt nostrud amet.
                </Text>

            </Flex>
        </ScaleFade>
    )
}

export default Stats