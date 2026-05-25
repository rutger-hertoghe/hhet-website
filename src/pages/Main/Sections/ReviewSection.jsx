import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Box, Button, Container, Divider, Group, Paper, Stack, Text, ThemeIcon, Title } from "@mantine/core";

const reviews = [
  {
    reviewer: "Angelina Feustel",
    content: "I had a security training with Luc and Tanja and I truly feel safer and very well prepared for my next destination. They are a great trainer team, came very well prepared, were kind and friendly in any situation and brought a lot of patience and time for their clients. Thank you so much!",
    stars: 5
  },
  {
    reviewer: "Sarah Iglesias",
    content: "We had training as part of our work in an asylum seeker center and I can only recommend it! 8 hours of training: interesting and fun! Thank you again for coming",
    stars: 5
  },
  {
    reviewer: "Irania Borrego",
    content: "Excellent and constructive training, thank you.",
    stars: 5
  }
]

function ReviewSection(){
  return(
    <Box bg="gray.1" py={80}>
      <Container size="md">
        <Stack gap="md" align="center">
          <Title order={2} ta="center" c="dark.8" fz={{ base: 32, md: 40 }}>
            Reviews
          </Title>
          <Divider w={60} color="yellow.5" size="sm" />
          { reviews.map(({reviewer, content, stars}) => 
            <Paper
              p="xl"
              radius="md"
              w="100%"
              bg="white"
              withBorder
              shadow="xs"
              style={{ borderLeft: '4px solid var(--mantine-color-yellow-5)' }}
            >
              <Group>
                <Badge color="yellow.9" variant="light">
                  {Array.from({length: stars}).map((_, index) =>
                    <FontAwesomeIcon key={index} icon={faStar}/>
                  )}
                  {Array.from({length: 5 - stars}).map((_, index) => 
                  <FontAwesomeIcon icon={faStar} color="white"/>)}
                </Badge>
                <Title order={4}>{reviewer}</Title>
                
              </Group>
              <Text>{content}</Text>
            </Paper>
          )
          }
          <Button 
            component="a"
            href="https://g.page/r/CX8_Q0ugQBbZEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            color="yellow.5"
            leftSection={<FontAwesomeIcon icon={faGoogle}/>}
          >
            Leave a review
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default ReviewSection;