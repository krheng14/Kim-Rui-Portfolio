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
  <Layout title="Study Kaki">
    <Container>
      <Title>
        Study Kaki: AI-enhanced study tool <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Study Kaki revolutionizes digital learning by allowing learners to
        'chat' with educational videos through an advanced Large Language Model
        (LLM). This innovative web application uses Whisper for speech
        recognition and video-content's transcription and uses OpenAI GPT-4 to
        provide context-aware responses to learner's content-specific queries.
        It transforms the way users interact with educational videos by offering
        features like direct timestamp navigation, transcriptions, quick
        summarization, and simplified explanations in an "Explain Like I'm 5"
        style. Furthermore, GPT-4's ability to generate test questions enhances
        the learning experience, allowing learners to test and reinforce their
        understanding of video content.
      </Paragraph>
      <UnorderedList my={4}>
        <ListItem>"Chat" with Video</ListItem>
        <ListItem>Video Transcription and Summarization</ListItem>
        <ListItem>Quick Timestamp Navigation</ListItem>
        <ListItem>"Explain Like I'm 5" for Simplified Explanations</ListItem>
        <ListItem>Automated Test Question Generation</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>Django, React</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Python, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/krheng14/Study-Kaki">
            github.com/krheng14/Study-Kaki <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/StudyKaki_01.gif" alt="studykaki" />
      <WorkImage src="/images/works/StudyKaki_02.gif" alt="studykaki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
