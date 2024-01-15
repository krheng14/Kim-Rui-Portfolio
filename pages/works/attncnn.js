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
  <Layout title="CNN with Self-Attention">
    <Container>
      <Title>
        How Attention Improves a CNN’s performance <Badge>2023</Badge>
      </Title>
      <Paragraph>
        This project delves into an advanced image classification system by
        incorporating self-attention mechanisms within the transformative
        architecture of transformers, broadening its application in computer
        vision. Utilizing a dataset of 10,000 cat and dog images from Kaggle,
        the system enhances a VGG16 model through self-attention for heightened
        accuracy. Demonstrating a keen ability to focus on distinctive features
        of images, such as a dog's snout or a cat's eye, the system
        significantly improves model interpretability and classification
        performance.
      </Paragraph>
      <UnorderedList my={4}>
        <ListItem>
          Enhanced Discernment of Distinct Features Through The Integration of
          Self-Attention Mechanism
        </ListItem>
        <ListItem>Utilization of Kaggle's Cat and Dog Image Dataset</ListItem>
        <ListItem>PyTorch Implementation for Model Training</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Field</Meta>
          <span>
            Computer Vision, Classification using VGG-16, Dense Layer with
            Self-Attention{' '}
          </span>
        </ListItem>
        <ListItem>
          <Meta>Libraries</Meta>
          <span>Torch, Torchvision, Grad-CAM</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/krheng14/How-Attention-Improves-a-CNN-s-Performance">
            github.com/krheng14/CNN-with-Self-Attention{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/AttnCNN.png" alt="attncnn" />
      <WorkImage src="/images/works/AttnCNN_02.png" alt="attncnn" />
      <WorkImage src="/images/works/AttnCNN_03.png" alt="attncnn" />
      <WorkImage src="/images/works/AttnCNN_04.png" alt="attncnn" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
