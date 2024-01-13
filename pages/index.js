//index.js
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio.js'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWebComponent,
  IoLogoYoutube
} from 'react-icons/io5'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m an AI Engineer in Singapore!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Heng Kim Rui
            </Heading>
            <p>
              AI Enthusiast and Developer - Scientist / AI Engineer / Artist
            </p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/kimrui.jpg"
                alt="Profile image"
                borderRadius="full"
                width="80"
                height="118"
              />
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Kim Rui is a versatile professional based in Singapore, excelling as
            a Data Scientist and AI Engineer while concurrently honing his
            skills as a full-stack web app developer. With a passion for
            AI-driven applications, he dedicated his free time to work on
            numerous projects to bridge the gap between concept and
            implementation. Beyond coding, Kim Rui expresses his creativity
            through charcoal drawing, digital art, and photography. Motivated by
            his enthusiasm for data science and AI, he transitioned from a Post
            Doctorate role to pursue a career dedicated to making technology
            accessible and impactful.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="yellow">
                My Portforlio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>1991</BioYear> Born in Singapore
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed a Doctorate Program at Nanyang Technology Unversity,
            Singapore, earning a Ph.D. in Mechanical Engineering
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked in National Unversity of Singapore as a Research Fellow for
            Data Center Sustainability
          </BioSection>
          <BioSection>
            <BioYear>2023 to Present</BioYear>
            Working as an Associate AI Engineer in AI Singapore
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies ♥
          </Heading>
          <Paragraph>
            Machine Learning, AI, Art, Music,{' '}
            <Link href="https://www.instagram.com/hkr0014/" target="_blank">
              Drawing and Photography
            </Link>
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>

          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/kim-rui-heng-ph-d-5225aa1b2/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @KimRui
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/krheng14" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @krheng14
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.instagram.com/hkr0014/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @hkr0014
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>

        <Section>
          <Heading as="h3" variant="section-title">
            Disclaimer
          </Heading>
          This website was developed following the guidance of Takuya Matsuyama,
          a renowned full-stack developer, through his comprehensive tutorial.
          <List>
            <ListItem>
              <Link
                href="https://www.youtube.com/watch?v=bSMZgXzC9AA&t=3032s"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoYoutube />}
                >
                  Takuya's Tutorial
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.craftz.dog" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoWebComponent />}
                >
                  @craftzdog
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://github.com/craftzdog/craftzdog-homepage/tree/master"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  Source
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
// Specialized in Data Science, Machine Learning and LLM Prompt
// Engineering. Enthusiast in Web Development integrating Generative
// AI, (Ph.D. in Mechanical Engineering)
