import { Flex, Grid, HStack, Image, Stack, Text } from "@chakra-ui/react"

import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

import logo from '../assets/logo.png'
import btc from '../assets/bitcoin2.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'

const CTALink = ({ label }) => {
    return (
        <Text
            fontWeight={'normal'}
            fontSize={'md'}
            lineHeight={'38px'}
            color={'white'}
            transition={'all .4s'}
            _hover={{
                color: 'light-blue',
                cursor: 'pointer'
            }}>
            {label}
        </Text>
    )
}

const CTAContainer = ({ headerText, subText }) => {
    return (
        <Flex
            flexDirection={'column'}
            fontFamily={'rubik'}
            justifyContent={'space-between'}
            alignItems={{base: 'center', lg: 'start'}}>

            <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                color={'white'}
                marginTop={{base: 12, lg: 0}}
                marginBottom={6}
                lineHeight={'30px'}
            >
                {headerText}
            </Text>

            {subText.map(text => <CTALink key={text} label={text} />)}
        </Flex>
    )
}

const FooterCTA = () => {
    return (
        <Grid
            gridTemplateColumns={{base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)'}}
            columnGap={20}>
            <CTAContainer
                headerText={'Quick Link'}
                subText={['Home', 'Products', 'About', 'Features', 'Contact']} />

            <CTAContainer
                headerText={'Resources'}
                subText={['Download Whitepaper', 'Smark Token', 'Blockchain Explorer', 'Crypto API', 'Interest']} />
        </Grid>
    )
}

const FooterPayment = () => {
    return (
        <Flex
            flexDirection={'column'}
            fontFamily={'rubik'}
            justifyContent={'space-between'}
            alignItems={{base: 'center', lg: 'start'}}>
            <Text
                fontWeight={'medium'}
                fontSize={'32px'}
                lineHeight={'48px'}
                color={'white'}
                maxW={{base: 'full', lg: '355'}}
                textAlign={{base: 'center', lg: 'start'}}
                marginTop={{base: 10, lg: 0}}
                marginBottom={10}>
                We accept following payment systems
            </Text>

            <Stack 
                spacing={6}
                direction={{base: 'column', lg: 'row'}}>
                <Image src={visa} alt={'visa'} />
                <Image src={mastercard} alt={'master card'} />
                <Image src={btc} alt={'bitcoin'} />
            </Stack>
        </Flex>
    )
}

const TopContent = () => {
    return (
        <Flex
            alignItems={{base: 'center', lg: 'start'}}
            justifyContent={'space-between'}
            fontFamily={'rubik'}
            width={'100%'}
            flexDirection={{base: 'column', lg: 'row'}}>

            <HStack spacing={4}>
                <Image
                    src={logo}
                    alt={'Crappo Logo'}
                    borderRadius={'50%'}
                    boxShadow={'dark-lg'} />
                <Text
                    color={'white'}
                    fontSize={'md'}
                    fontFamily={'inter'}
                    fontWeight={'semibold'}
                    letterSpacing={'wider'}>
                    CRAPPO
                </Text>
            </HStack>

            <FooterCTA />

            <FooterPayment />

        </Flex >
    )
}

const BottomContent = () => {
    return (
        <Flex
            justifyContent={'space-between'}
            alignItems={'center'}
            marginTop={{base: 14, lg: 28}}
            width={'100%'}
            flexDirection={{base: 'column-reverse', lg: 'row'}}>
            <Text
                color={'white'}
                fontSize={'md'}
                fontFamily={'rubik'}
                fontWeight={'normal'}
                lineHeight={'28px'}
                marginTop={{base: 6, lg: 0}}>
                ©2021 CRAPPO. All rights reserved
            </Text>

            <HStack spacing={8}>
                <FaFacebookF
                    color={'white'}
                    onMouseOver={({ target }) => { target.style.color = 'hsl(220, 80%, 56%)' }}
                    onMouseOut={({ target }) => target.style.color = 'white'}
                />
                <FaInstagram color={'white'}
                    onMouseOver={({ target }) => { target.style.color = 'hsl(220, 80%, 56%)' }}
                    onMouseOut={({ target }) => target.style.color = 'white'} />
                <FaYoutube color={'white'}
                    onMouseOver={({ target }) => { target.style.color = 'hsl(220, 80%, 56%)' }}
                    onMouseOut={({ target }) => target.style.color = 'white'} />
                <FaTwitter color={'white'}
                    onMouseOver={({ target }) => { target.style.color = 'hsl(220, 80%, 56%)' }}
                    onMouseOut={({ target }) => target.style.color = 'white'} />
                <FaLinkedin color={'white'}
                    onMouseOver={({ target }) => { target.style.color = 'hsl(220, 80%, 56%)' }}
                    onMouseOut={({ target }) => target.style.color = 'white'} />
            </HStack>
        </Flex>
    )
}

const Content = () => {
    return (
        <Flex
            alignItems={'start'}
            justifyContent={'space-between'}
            paddingY={{base: '44px', lg: '88px'}}
            maxWidth={{
                base: '100%',
                md: 'container.md',
                lg: 'container.lg',
                xl: 'container.xl'
            }}
            paddingX={{ base: 6, md: 28, lg: 16 }}
            marginX={'auto'}
            fontFamily={'rubik'}
            width={'100%'}
            flexDirection={'column'}>
            <TopContent />

            <BottomContent />
        </Flex>
    )
}

const Footer = () => {
    return (
        <Flex
            as={'header'}
            backgroundColor={'dark-blue'}
            flexDirection={'column'}
            align={'center'}
        >
            <Content />
        </Flex>
    )
}

export default Footer