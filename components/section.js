import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  //filter out style props and only forward valid HTML attributes to DOM element `motion.div`
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 15, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
// shouldForwardProp(prop): This part calls a function shouldForwardProp with prop as its argument. The function determines if the prop should be forwarded based on its own logic.
// prop === 'transition': This part checks if the prop is specifically the 'transition' prop.
