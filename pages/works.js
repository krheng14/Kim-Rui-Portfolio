//works.js
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbStudyKaki from '../public/images/works/StudyKaki.png'
import thumbSignTalk from '../public/images/works/SignTalk.jpg'
import thumbAttnCNN from '../public/images/works/AttnCNN.png'
import thumbMeetingEasy from '../public/images/works/MeetingEasy.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="studykaki"
              title="Study Kaki: AI-enhanced study tool"
              thumbnail={thumbStudyKaki}
            >
              LLM-driven platform for interactive video content comprehension
              and study question creation.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="signtalk"
              title="Sign Talk: AI-powered Sign Language Interpreter"
              thumbnail={thumbSignTalk}
            >
              A real-time sign language Interpreter using MediaPipe and LSTM
              action detection model.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="attncnn"
              title="How Attention Improves a CNN’s Performance"
              thumbnail={thumbAttnCNN}
            >
              Enhanced Computer Vision VGG-16 model with self-attention for
              robust cat and dog image classification.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="meetingeasy"
              title="Meeting Easy: AI-powered Meeting Assistant"
              thumbnail={thumbMeetingEasy}
            >
              AI-driven web app for meeting management, offering advanced audio
              transcription, speaker diarization, and LLM-assisted discussion
              analysis.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
export default Works
export { getServerSideProps } from '../components/chakra'
