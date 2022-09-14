import { Flex, Text, Button, Image, ScaleFade } from "@chakra-ui/react"

import featureImageOne from '../assets/featureImgOne.png'
import featureImageTwo from '../assets/featureImgTwo.png'
import featureImageThree from '../assets/featureImgThree.png'
import { useInView } from "react-intersection-observer"

const InvestFeature = () => {

    return (
        <Flex
            alignItems={{ base: 'start', lg: 'center' }}
            justifyContent={'space-between'}
            marginTop={{ base: '50px', lg: '100px' }}
            maxWidth={{
                base: '100%',
                md: 'container.md',
                lg: 'container.lg',
                xl: 'container.xl'
            }}
            paddingX={{ base: 6, md: 28, lg: 16 }}
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            marginX={'auto'}
            width={'100%'}>

            <Flex
                flexDirection={'column'}
                justifyContent={'space-between'}>

                <Text
                    fontWeight={'bold'}
                    fontSize={'32px'}
                    fontFamily={'rubik'}
                    color={'white'}
                    marginTop={{ base: 6, lg: 0 }}
                    lineHeight={'48px'}>
                    Invest Smart
                </Text>

                <Text
                    fontWeight={'normal'}
                    fontSize={'md'}
                    marginTop={{ base: 4, lg: 6 }}
                    fontFamily={'rubik'}
                    color={'white'}
                    maxWidth={'408'}>
                    Get full statistic information
                    about the behaviour of buyers and sellers will help you to make the decision.
                </Text>

                <Button
                    variant={'primary'}
                    fontSize={'18px'}
                    marginTop={8}
                    maxWidth={'146'}
                    paddingY={7}
                    borderRadius={'32px'}
                    boxShadow={'xl'}>
                    Learn More
                </Button>

            </Flex>

            <Image
                src={featureImageOne}
                alt={''}
            />

        </Flex>
    )
}

const StatsFeature = () => {

    return (

        <Flex
            alignItems={{ base: 'start', lg: 'center' }}
            justifyContent={'start'}
            marginTop={{ base: '60px', lg: '120px' }}
            marginEnd={'auto'}
            flexDirection={{ base: 'column', lg: 'row' }}
            maxWidth={{
                base: '100%',
                md: 'container.md',
                lg: 'container.lg',
                xl: 'container.xl'
            }}
            paddingStart={{ base: 6, md: 28, lg: 0 }}
            paddingEnd={{ base: 6, md: 28, lg: 0 }}
            width={'100%'}>

            <Image
                src={featureImageTwo}
                alt={''}
                marginEnd={{ base: 0, lg: 20 }} />

            <Flex
                flexDirection={'column'}
                justifyContent={'space-between'}>

                <Text
                    fontWeight={'bold'}
                    fontSize={'32px'}
                    fontFamily={'rubik'}
                    marginTop={{ base: 6, lg: 0 }}
                    color={'white'}
                    lineHeight={'48px'}>
                    Detailed Statistics
                </Text>

                <Text
                    fontWeight={'normal'}
                    fontSize={'md'}
                    marginTop={{ base: 4, lg: 6 }}
                    fontFamily={'rubik'}
                    color={'white'}
                    maxWidth={'408'}>
                    View all mining related information in realtime,
                    at any point at any location and decide which polls you want to mine in.
                </Text>

                <Button
                    variant={'primary'}
                    fontSize={'18px'}
                    marginTop={8}
                    maxWidth={'146'}
                    paddingY={7}
                    borderRadius={'32px'}
                    boxShadow={'xl'}>
                    Learn More
                </Button>

            </Flex>

        </Flex>
    )
}

const GrowFeature = () => {
    return (
        <Flex
            alignItems={{ base: 'start', lg: 'center' }}
            justifyContent={{ base: 'start', lg: 'space-between' }}
            marginTop={{ base: '60px', lg: '120px' }}
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            paddingX={{ base: 6, md: 28, lg: 16 }}
            maxWidth={{
                base: '100%',
                md: 'container.md',
                lg: 'container.lg',
                xl: 'container.xl'
            }}
            width={'100%'}>

            <Flex
                flexDirection={'column'}
                justifyContent={'space-between'}>

                <Text
                    fontWeight={'bold'}
                    fontSize={'32px'}
                    fontFamily={'rubik'}
                    color={'white'}
                    marginTop={{ base: 6, lg: 0 }}
                    lineHeight={'40px'}>
                    Grow your profit and track your investments
                </Text>

                <Text
                    fontWeight={'normal'}
                    fontSize={'md'}
                    marginTop={{ base: 4, lg: 6 }}
                    fontFamily={'rubik'}
                    color={'white'}
                    maxWidth={'408'}>
                    Use advanced analytical tools.
                    Clear TradingView charts let you track current and historical profit investments.
                </Text>

                <Button
                    variant={'primary'}
                    fontSize={'18px'}
                    marginTop={8}
                    maxWidth={'146'}
                    paddingY={7}
                    borderRadius={'32px'}
                    boxShadow={'xl'}>
                    Learn More
                </Button>

            </Flex>

            <Image
                src={featureImageThree}
                alt={''} />

        </Flex>
    )
}

const Features = () => {
    const { ref, inView, entry } = useInView();

    return (
        <ScaleFade ref={ref} in={inView} initialScale={0.7}>
            <Flex
                as={'section'}
                alignItems={'center'}
                width={'100%'}
                paddingY={{ base: '50px', lg: '100px' }}
                backgroundImage={'url(src/assets/featureOne.png), url(src/assets/featureTwo.png)'}
                backgroundPosition={'left top, right bottom'}
                backgroundRepeat={'no-repeat'}
                fontFamily={'rubik'}
                flexDirection={'column'}>
                <Text
                    fontWeight={'bold'}
                    fontSize={{ base: '28px', lg: '32px' }}
                    lineHeight={'48px'}
                    paddingX={{ base: 6, md: 28, lg: 16 }}
                    textAlign={{ base: 'start', lg: 'center' }}
                    color={'white'}
                    maxWidth={{ base: '100%', lg: '758px' }}>
                    Market sentiments, portfolio,
                    and run the infrastructure of your choice
                </Text>

                <InvestFeature />
                <StatsFeature />
                <GrowFeature />
            </Flex>
        </ScaleFade>
    )
}

export default Features