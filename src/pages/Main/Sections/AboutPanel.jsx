import {
  Badge,
  Box,
  Container,
  Divider,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function AboutPanel() {
  return (
    <Box bg="gray.1" py={80}>
      <Container size="md">
        <Stack gap={48}>

          {/* Section Header */}
          <Stack gap="md" align="center">
            <Title order={2} ta="center" c="dark.8" fz={{ base: 32, md: 40 }}>
              About HHET-BE
            </Title>
            <Divider w={60} color="yellow.5" size="sm" />
          </Stack>

          {/* Founder's Message */}
          <Paper
            p="xl"
            radius="md"
            bg="white"
            withBorder
            shadow="xs"
            style={{ borderLeft: '4px solid var(--mantine-color-yellow-5)' }}
          >
            <Stack gap="md">
              <ThemeIcon size={40} radius="xl" color="yellow" variant="light">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </ThemeIcon>

              <Text size="md" c="gray.7" lh={1.9} fs="italic">
                Having spent many years deployed in post-conflict areas, we observed a marked
                contrast between the way professional armed forces (military and police) and
                civilian international personnel respond to crisis situations.
              </Text>

              <Text size="md" c="gray.7" lh={1.9} fs="italic">
                Civilians often view the world through a different lens: one shaped by humanitarian
                or developmental objectives rather than operational security. As a result, they are
                more likely to become disoriented or overwhelmed during unexpected crises. Their
                perception of early warning signs and potential threats differs significantly from
                that of trained professionals.
              </Text>

              <Text size="md" c="gray.7" lh={1.9} fs="italic">
                As freelance instructors operating within a strong network of experts, we've had
                the privilege of preparing civilian staff from NGOs and governmental organizations
                for the realities of crisis management. By reshaping behavior through mindset
                shifts and heightened situational awareness, we empower individuals to respond
                more effectively when incidents arise.
              </Text>

              <Text size="md" c="gray.7" lh={1.9} fs="italic">
                The creation of HHET-BE Training & Consulting was a natural and necessary
                progression, born from a commitment to share our expertise and support those
                working in high-risk environments.
              </Text>

              <Divider color="gray.2" />

              <Text ta="right" fw={600} c="dark.6" size="sm">
                – L., Founder of HHET-BE
              </Text>
            </Stack>
          </Paper>

        </Stack>
      </Container>
    </Box>
  )
}

export default AboutPanel
