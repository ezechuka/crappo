import { Flex, Image, Text, VStack, Button, Stack, Circle, Input, ScaleFade } from "@chakra-ui/react"
import { HiChevronRight } from "react-icons/hi";

import bitcoin from '../assets/bitcoin.png'
import ethereum from '../assets/ethereum.png'
import litecoin from '../assets/litecoin.png'
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const CryptoCard = ({ image, title, abbr, desc, selected, handleClick }) => {

    return (
        <Flex
            flexDirection={'column'}
            borderRadius={'16px'}
            backgroundColor={selected ? 'very-dark-blue' : 'white'}
            backdropFilter={'blur(250px)'}
            padding={8}
            alignItems={'center'}
            onClick={handleClick}
            _hover={{ cursor: 'pointer' }}
            transition='all .4s'
            transform={{base: selected ? 'scale(1.05)' : 'scale(1)', lg: selected ? 'scale(1.1)' : 'scale(1)'}}
        >
            <Image src={image} alt={title} />

            <Text
                fontWeight={'bold'}
                fontSize={'32px'}
                lineHeight={'48px'}
                textAlign={'center'}
                marginTop={12}
                color={selected ? 'white' : 'dark-blue'}>
                {title}
                <Text
                    as={'sup'}
                    fontWeight={'medium'}
                    fontSize={'18px'}
                    opacity={'0.7'}
                    color={selected ? 'white' : 'dark-gray'}>
                    {' ' + abbr}
                </Text>
            </Text>

            <Text
                fontWeight={'normal'}
                fontSize={'md'}
                lineHeight={'28px'}
                marginTop={4}
                color={selected ? 'white' : 'dark-gray'}
                maxWidth={'322'}
                textAlign={'center'}>
                {desc}
            </Text>

            {selected ?
                <Button
                    variant={'primary'}
                    fontSize={'18px'}
                    paddingY={8}
                    iconSpacing={4}
                    paddingStart={6}
                    paddingEnd={4}
                    marginTop={6}
                    maxWidth={'202px'}
                    boxShadow={'xl'}
                    lineHeight={'27px'}
                    rightIcon={
                        <Circle size={'2.2rem'} bg={'white'}>
                            <HiChevronRight size={'1.5rem'} color={'hsl(220, 80%, 56%)'} />
                        </Circle>
                    }>
                    Start mining
            </Button> :
                <Circle
                    size={'3rem'}
                    bg={'white'}
                    marginTop={6}
                    border={'2px solid rgba(43, 7, 110, 0.2)'}
                >
                    <HiChevronRight size={'2rem'} color={'hsl(220, 80%, 56%)'} />
                </Circle>
            }

        </Flex>
    )
}

const CryptoMine = () => {
    const { ref, inView } = useInView()

    const [selected, setSelected] = useState({
        'btc': true,
        'eth': false,
        'ltc': false
    })

    const handleSelected = (coin) => {
        setSelected(() => {
            if (coin === 'btc') {
                return { 'btc': true, 'eth': false, 'ltc': false }
            } else if (coin === 'eth') {
                return { 'btc': false, 'eth': true, 'ltc': false }
            } else {
                return { 'btc': false, 'eth': false, 'ltc': true }
            }
        })
    }

    return (
        <ScaleFade 
            in={inView}  
            initialScale={0.85}>
            <Flex
                ref={ref}
                as={'section'}
                alignItems={'center'}
                width={'100%'}
                marginX={'auto'}
                maxWidth={{
                    base: '100%',
                    md: 'container.md',
                    lg: 'container.lg',
                    xl: 'container.xl'
                }}
                paddingX={{ base: 6, md: 28, lg: 16 }}
                flexDirection={'column'}
                justifyItems={'space-between'}>

                <Flex
                    width={{base: '100%', lg: '70%'}}
                    marginTop={{base: '-280px', lg: '-152px'}}
                    css={{
                        'filter': 'drop-shadow(0px 20px 200px rgba(57, 23, 119, 0.05))'
                    }}
                    zIndex={'docked'}
                    flexDirection={'column'}
                >
                    <Stack
                        backgroundColor={'very-light-gray'}
                        alignItems={'center'}
                        padding={12}
                        spacing={{base: 6, lg: 12}}
                        fontFamily={'rubik'}
                        roundedTop={'xl'}
                        direction={{base: 'column', lg: 'row'}}
                    >
                        <Input
                            placeholder={'Enter your hash rate'}
                            variant={'flushed'}
                            fontSize={'20px'}
                            borderColor={'gray'}
                            focusBorderColor={'dark-blue'}
                            _placeholder={{ opacity: '.7', color: 'dark-blue' }}
                        />

                        <Input
                            placeholder={'TH/s'}
                            variant={'flushed'}
                            fontSize={'20px'}
                            borderColor={'gray'}
                            focusBorderColor={'dark-blue'}
                            _placeholder={{ opacity: '.7', color: 'dark-blue' }}
                        />

                        <Button
                            variant={'primary'}
                            fontSize={'18px'}
                            marginTop={8}
                            maxWidth={{base: '100%', lg: '146'}}
                            paddingY={7}
                            paddingX={14}>
                            Calculate
                        </Button>

                    </Stack>

                    <VStack
                        backgroundColor={'white'}
                        justifyContent={'center'}
                        alignItems={'start'}
                        padding={12}
                        fontFamily={'rubik'}
                        roundedBottom={'xl'}
                        marginBottom={8}
                    >

                        <Text
                            fontSize={{base: 'sm', lg: 'md'}}
                            fontWeight={'medium'}
                            color={'light-blue'}>
                            ESTIMATED 24 HOUR REVENUE:
                        </Text>

                        <Text
                            color={'dark-blue'}
                            fontSize={{base: 'md', lg: '32px'}}
                            fontWeight={'bold'}
                            lineHeight={'48px'}
                            marginTop={4}
                            marginBottom={1}
                        >
                            0.055 130 59 ETH
                            <Text
                                as={'span'}
                                color={'light-blue'}
                                fontWeight={'bold'}
                                lineHeight={'48px'}
                            > ($1275)</Text>

                        </Text>

                        <Text
                            fontSize={{base: 'sm', lg: 'md'}}
                            fontWeight={'normal'}
                            lineHeight={'28px'}
                            color={'dark-gray'}>
                            Revenue will change based on mining difficulty and Ethereum price.
                        </Text>

                    </VStack>

                </Flex>

                <Flex
                    flexDirection={'column'}
                    fontFamily={'rubik'}
                    alignItems={'center'}
                    paddingY={{base: '50px', lg: '100px'}}
                >
                    <Text
                        fontWeight={'bold'}
                        fontSize={{base: '30px', lg: '40px'}}
                        lineHeight={{base: '50px', lg: '60px'}}
                        textAlign={{base: 'start', md: 'center'}}
                        color={'dark-blue'}
                        maxWidth={{base: '100%', lg: '740px'}}>
                        Trade securely and market the high growth cryptocurrencies.
                    </Text>

                    <Stack
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        marginTop={16}
                        spacing={14}
                        direction={{base: 'column', lg: 'row'}}>
                        <CryptoCard
                            image={bitcoin}
                            title={'Bitcoin'}
                            abbr={'BTC'}
                            desc={
                                'Digital currency in which a record of transactions is maintained.'
                            }
                            selected={selected.btc}
                            handleClick={(e) => handleSelected('btc')} />

                        <CryptoCard
                            image={ethereum}
                            title={'Ethereum'}
                            abbr={'ETH'}
                            desc={
                                'Blockchain technology to create and run decentralized digital applications.'
                            }
                            selected={selected.eth}
                            handleClick={(e) => handleSelected('eth')} />

                        <CryptoCard
                            image={litecoin}
                            title={'Litecoin'}
                            abbr={'LTC'}
                            desc={
                                'Cryptocurrency that enables instant payments to anyone in the world.'
                            }
                            selected={selected.ltc}
                            handleClick={(e) => handleSelected('ltc')} />
                    </Stack>

                </Flex>

            </Flex>
        </ScaleFade>
    )
}

export default CryptoMine