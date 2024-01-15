import {
  Box,
  Container,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { FaPenNib } from 'react-icons/fa'
import { IoDocumentText } from 'react-icons/io5'
import { IoSchool } from 'react-icons/io5'

const Publications = () => (
  <Layout title="Publications">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        My Publications
      </Heading>

      <Section delay={0.1}>
        <List>
          <ListItem>
            <HStack>
              <FaPenNib size="5.7%" />
              <Link
                href="https://www.sciencedirect.com/science/article/abs/pii/S0140700721004655?via%3Dihub"
                target="_blank"
              >
                <Box
                  borderRadius="lg"
                  p={2}
                  textAlign="left"
                  whiteSpace="normal"
                  maxWidth="100%"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <Text>
                    Experimental study of an oil-free swing vane compressor -{' '}
                    <Text as="i">
                      International Journal of Refrigeration · Mar 1, 2022
                    </Text>
                  </Text>
                </Box>
              </Link>
            </HStack>
          </ListItem>

          <br></br>
          <ListItem>
            <HStack>
              <IoDocumentText size="12%" />
              <Link
                href="https://iifiir.org/en/fridoc/performance-of-a-non-uniform-width-rotating-discharge-valve-in-the-35002"
                target="_blank"
              >
                <Box
                  borderRadius="lg"
                  p={2}
                  textAlign="left"
                  whiteSpace="normal"
                  maxWidth="100%"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <Text>
                    Performance of a non-uniform width rotating discharge valve
                    in the revolving vane (RV) compressor -{' '}
                    <Text as="i">
                      Proceedings of 25th IIR International Congress of
                      Refrigeration ICR 2019 Conference · Aug 24, 2019
                    </Text>
                  </Text>
                </Box>
              </Link>
            </HStack>
          </ListItem>

          <br></br>
          <ListItem>
            <HStack>
              <IoSchool size="7%" />
              <Link href="https://hdl.handle.net/10356/147359" target="_blank">
                <Box
                  borderRadius="lg"
                  p={2}
                  textAlign="left"
                  whiteSpace="normal"
                  maxWidth="100%"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <Text>
                    Development of an oil-free swing vane compressor with liquid
                    refrigerant injection -{' '}
                    <Text as="i">Ph.D Thesis · 2020</Text>
                  </Text>
                </Box>
              </Link>
            </HStack>
          </ListItem>

          <br></br>
          <ListItem>
            <HStack>
              <FaPenNib size="11%" />
              <Link href="https://doi.org/10.1063/1.4983036" target="_blank">
                <Box
                  borderRadius="lg"
                  p={2}
                  textAlign="left"
                  whiteSpace="normal"
                  maxWidth="100%"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <Text>
                    Dielectric elastomer fingers for versatile grasping and
                    nimble pinchingDielectric elastomer fingers for versatile
                    grasping and nimble pinching -{' '}
                    <Text as="i">
                      Applied Physics Letters/ AIP Publishing LLC · May 1, 2017
                    </Text>
                  </Text>
                </Box>
              </Link>
            </HStack>
          </ListItem>

          <br></br>
          <ListItem>
            <HStack>
              <IoDocumentText size="5.3%" />
              <Link href="https://hdl.handle.net/10356/105857" target="_blank">
                <Box
                  borderRadius="lg"
                  p={2}
                  textAlign="left"
                  whiteSpace="normal"
                  maxWidth="100%"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <Text>
                    Strong dielectric-elastomer grippers with tension arch
                    flexures - <Text as="i">Proc. SPIE · Apr 17, 2017</Text>
                  </Text>
                </Box>
              </Link>
            </HStack>
          </ListItem>

          <br></br>
          <ListItem>
            <HStack>
              <IoDocumentText size="8.8%" />
              <Link
                href="https://rpsonline.com.sg/proceedings/9789810904456/html/120.xml"
                target="_blank"
              >
                <Box
                  borderRadius="lg"
                  p={2}
                  textAlign="left"
                  whiteSpace="normal"
                  maxWidth="100%"
                  bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                  css={{ backdropFilter: 'blur(10px)' }}
                >
                  <Text>
                    Soft Actuators and their Fabrication for Bio-Inspired Mobile
                    Robots -{' '}
                    <Text as="i">
                      1st International Conference on Progress in Additive
                      Manufacturing · Jan 1, 2014
                    </Text>
                  </Text>
                </Box>
              </Link>
            </HStack>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Publications
