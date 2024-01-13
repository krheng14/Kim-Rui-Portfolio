//logo.js
import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 400ms ease;
  }

  &:hover > svg {
    transform: rotate(50deg) scale(1.25);
  }
`

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <FootprintIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M Plus Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Heng Kim Rui
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
