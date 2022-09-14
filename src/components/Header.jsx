import { Flex } from "@chakra-ui/react"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <Flex
            as={'header'}
            backgroundColor={'dark-blue'}
            backgroundImage={'url(src/assets/ribbonOne.png), url(src/assets/ribbonTwo.png)'}
            backgroundPosition={{base: '100% bottom, -5% bottom', md: '100% bottom, -600% bottom', lg: 'right 160%, 135% bottom'}}
            backgroundClip={'content-box'}
            backgroundRepeat={'no-repeat'}
            flexDirection={'column'}
            align={'center'}
        >
            <Navbar />
            <Hero />
        </Flex>
    )
}

export default Header