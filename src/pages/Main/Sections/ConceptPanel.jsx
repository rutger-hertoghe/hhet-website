import { Anchor, Badge, Box, Container, Divider, Grid, List, Paper, SimpleGrid, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import classes from './ConceptPanel.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCircleCheck, faComments, faTree, faUsers } from '@fortawesome/free-solid-svg-icons'

const trainingMethods = [
  {
    icon: faUsers,
    title: 'Active Participation',
    description:
      'Learners are not passive recipients but engaged contributors—challenged to reflect on their own perceptions, instincts, and decisions.',
  },
  {
    icon: faComments,
    title: 'Peer Dialogue',
    description:
      'Training includes open discussions, idea exchanges, and real-time reflection to deepen understanding and build shared awareness.',
  },
  {
    icon: faBullseye,
    title: 'Real-World Application',
    description:
      'Programs combine lectures, exercises, debates, and field-based simulations for practical, scenario-tested readiness.',
  },
]

const outcomes = [
  'Recognize early warning signs in complex environments',
  'Adapt rapidly to high-stress, dynamic scenarios',
  'Make grounded decisions under pressure',
  'Enhance team safety and organizational resilience',
]

function ConceptPanel() {
  return (
    <Box bg="gray.1" py={80}>
      <Container size="lg">
        <Stack gap={64}>

          {/* Section Header */}
          <Stack align="center">
            <Title order={2} ta="center" c="dark.8" fz={{ base: 32, md: 40 }}>
              Our Training Concept
            </Title>
            <Divider w={60} color="yellow.5" size="sm" />
            <Text size="lg" c="gray.7" ta="center" maw={780} lh={1.7}>
              At HHET-BE, we provide EU-aligned training rooted in the standards of the ENTRi{' '}
              <Text component="span" fw={600} c="dark.7">
                "IN CONTROL"
              </Text>{' '}
              handbook, as endorsed by the European Security and Defence College. Our programs are
              specifically tailored to meet the needs of civilian professionals operating in
              crisis-prone environments—NGO staff, journalists, academics, businesspeople, and
              field researchers alike.
            </Text>
            <Text size="lg" c="dark.6" ta="center" fw={500} fs="italic">
              We don't just deliver content—we shape capability.
            </Text>
            <Text size="md" c="gray.7" ta="center" maw={780} lh={1.7}>
              Every course is designed to empower participants with the awareness, mindset, and
              behavioral tools necessary to stay safe, make sound decisions under pressure, and
              support organizational resilience. Each training is adapted to the objectives of your
              mission or institution, and is built on one foundational principle:{' '}
              <Text component="span" fw={600} c="dark.7">
                personal responsibility in high-risk environments begins with personal readiness.
              </Text>
            </Text>
          </Stack>

          {/* How We Train */}
          <Stack gap="md">
            <Title order={3} c="dark.7" ta="center">
              How We Train
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
              {trainingMethods.map((method) => (
                <Paper key={method.title} p="xl" radius="md" withBorder shadow="xs" bg="white" className={classes.trainingCard}>
                  <ThemeIcon size={52} radius="xl" color="yellow" variant="light" mb="md">
                    <FontAwesomeIcon icon={method.icon} size="lg" />
                  </ThemeIcon>
                  <Title order={4} mb="xs" c="dark.7">
                    {method.title}
                  </Title>
                  <Text size="sm" c="gray.6" lh={1.6}>
                    {method.description}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
            <Text size="sm" c="gray.6" ta="center" mt="xs">
              Courses are typically delivered over multiple consecutive days, hosted at suitable
              venues, and tailored to your organization's needs.
            </Text>
          </Stack>

          {/* Outcomes + Outdoor Training */}
          <Grid gutter="lg" align="stretch">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Paper p="xl" radius="md" withBorder shadow="xs" bg="white" h="100%">
                <Title order={3} mb="lg" c="dark.7">
                  Training Outcomes
                </Title>
                <List
                  spacing="md"
                  icon={
                    <ThemeIcon color="yellow" size={24} radius="xl" variant="light">
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </ThemeIcon>
                  }
                >
                  {outcomes.map((outcome) => (
                    <List.Item key={outcome}>
                      <Text size="md" c="gray.7">
                        {outcome}
                      </Text>
                    </List.Item>
                  ))}
                </List>
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Paper
                p="xl"
                radius="md"
                shadow="xs"
                bg="yellow.0"
                h="100%"
                style={{ borderLeft: '4px solid var(--mantine-color-yellow-5)' }}
              >
                <ThemeIcon size={52} radius="xl" color="yellow" variant="light" mb="md">
                  <FontAwesomeIcon icon={faTree} size="lg" />
                </ThemeIcon>
                <Title order={4} mb="xs" c="yellow.9">
                  Back to Basics – Outdoor Training Option
                </Title>
                <Text size="sm" c="gray.8" lh={1.7}>
                  For sessions held in Belgium, HHET-BE offers an optional outdoor training module
                  in partnership with{' '}
                  <Anchor
                    href="https://outsiderlimburg.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    c="yellow.8"
                    fw={600}
                  >
                    The Outsider Limburg
                  </Anchor>
                  . This add-on transforms the experience into a physically immersive,
                  back-to-basics training—ideal for testing adaptability, teamwork, and leadership
                  in raw conditions.
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>

          {/* Closing Statement */}
          <Paper p="xl" radius="md" ta="center" bg="dark.8">
            <Text size="lg" c="gray.3" lh={1.8} fw={400} fs="italic" maw={720} mx="auto">
              Our participants return more capable, more confident, and more prepared to lead with
              clarity—{' '}
              <Text component="span" c="yellow.4" fw={600} fs="normal">
                when it matters most.
              </Text>
            </Text>
          </Paper>

        </Stack>
      </Container>
    </Box>
  )
}

export default ConceptPanel
