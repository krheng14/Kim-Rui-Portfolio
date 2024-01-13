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
  <Layout title="Meeting Talk">
    <Container>
      <Title>
        Meeting Easy: AI-powered Meeting Assistant <Badge>2023</Badge>
      </Title>
      <Paragraph>
        Enhancing Meeting Productivity with AI - MeetingEasy is an AI-powered
        web application which transforms the dynamics of meeting management.
        Leveraging Whisper models for precise audio transcription and GPT-4 for
        in-depth analysis, it brings an unprecedented level of efficiency to
        meetings. From transcribing spoken words to extracting actionable
        insights, MeetingEasy is designed to streamline meeting processes and
        enhance collaborative decision-making.
      </Paragraph>
      <UnorderedList my={4}>
        <ListItem>Accurate Audio Transcription with Whisper Models</ListItem>
        <ListItem>
          Insightful Analysis using GPT-4 for Key Points and Actionable Items -
          [In Progress]
        </ListItem>
        <ListItem>
          Speaker Diarization to Attribute Speech Effectively - [In Progress]
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>Vite, React</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Python, HTML, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Models</Meta>
          <span>OpenAI Whisper</span>{' '}
          <Link href="https://github.com/openai/whisper#available-models-and-languages">
            github.com/openai/whisper
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/krheng14/MeetingEasy-AI-Powered-Meeting-Assistant">
            github.com/krheng14/MeetingEasy
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/MeetingEasy.png" alt="meetingeasy" />
      <WorkImage src="/images/works/MeetingEasy_02.png" alt="meetingeasy" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
