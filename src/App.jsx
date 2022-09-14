import { Box, Flex } from "@chakra-ui/layout";
import CryptoMine from "./components/CryptoMine";
import Features from "./components/Features";
import StartMine from "./components/StartMine";
import Stats from "./components/Stats";

function App() {

  return (
    <Flex direction={'column'}>
      <Box backgroundColor={'dark-blue'}>
        <Stats />
      </Box>

      <Box backgroundColor={'white'}>
        <CryptoMine />
      </Box>

      <Box backgroundColor={'very-dark-blue'}>
        <Features />
      </Box>

      <Box 
        bgGradient={'linear(to-b, very-dark-blue, dark-blue)'}>
        <StartMine />
      </Box>

    </Flex>
  )
}

export default App