import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'

const Work = () => (
  <Layout title="Sign Talk">
    <Container>
      <Title>
        SignTalk: AI-powered Sign Language Interpreter <Badge>2023</Badge>
      </Title>
      <Paragraph>
        SignTalk is an innovative, ML-powered sign language interpreter designed
        to bridge communication gaps. Employing MediaPipe for real-time
        detection of body and hand signs, integrated with an advanced LSTM
        model, our system adeptly translates sign language into its
        corresponding text. This instantaneous translation process not only
        captures the essence of the communication but also displays the textual
        interpretation of each sign, bridging communication gaps effectively.
        Such groundbreaking technology promises to enhance communication for the
        deaf and hard of hearing, making interactions more inclusive and
        accessible.
      </Paragraph>
      <UnorderedList my={4}>
        <ListItem>Real-Time Sign Language Detection</ListItem>
        <ListItem>LSTM-Powered Action Detection</ListItem>
        <ListItem>Intuitive TensorFlow and Keras Integration</ListItem>
        <ListItem>User-Friendly Application Interface</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Field</Meta>
          <span>Computer Vision, LSTM Neural Network</span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>MediaPipe, Keras, Tensorflow</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/krheng14/SignTalk-An-AI-Powered-Sign-Language-Interpreter">
            github.com/krheng14/SignTalk <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/SignTalk_02.png" alt="signtalk" />
      <WorkImage src="/images/works/SignTalk.gif" alt="signtalk" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
