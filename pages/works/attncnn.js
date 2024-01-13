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
        This project explores an advanced image classification system employing
        deep learning techniques. It leverages a dataset of 10,000 cat and dog
        images from Kaggle, integrating a VGG16 model with self-attention
        mechanisms for improved accuracy. The system shows capability in
        focusing on distinctive image regions (e.g. Dog's snout vs Cat's eye),
        enhancing model interpretability and classification performance.
      </Paragraph>
      <UnorderedList my={4}>
        <ListItem>Advanced Image Classification with Deep Learning</ListItem>
        <ListItem>
          Attention Mechanism Integration for Improved Accuracy
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
