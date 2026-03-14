import {
  Anchor,
  Badge,
  Box,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAt,
  faBuilding,
  faEnvelope,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons'

const contactDetails = [
  {
    icon: faAt,
    label: 'Email',
    value: <Anchor href="mailto:info@hhet.be" c="yellow.7" fw={500}>info@hhet.be</Anchor>,
  },
  {
    icon: faBuilding,
    label: 'Registered Office',
    value: <Text>Kalisgroenstraat 6<br/> 3404 Attenhoven<br/>Belgium</Text>,
  },
  {
    icon: faFileInvoice,
    label: 'VAT',
    value: 'BE 0803.790.597',
  },
]

function ContactForm() {
  return (
    <Box bg="gray.1" py={80}>
      <Container size="sm">
        <Stack>
          {/* Section Header */}
          <Stack gap="md" align="center">
            <Title order={2} ta="center" c="dark.8" fz={{ base: 32, md: 40 }}>
              Contact Details
            </Title>
            <Divider w={60} color="yellow.5" size="sm" />
            <Text size="lg" c="gray.7" ta="center" lh={1.7}>
              Please note that HHET-BE responds exclusively to inquiries via email.
            </Text>
          </Stack>

          {/* Contact Card */}
          <Paper p="xl" radius="md" withBorder shadow="xs" bg="white">
            <Stack gap="lg">
              <Group gap="sm">
                <ThemeIcon size={36} radius="xl" color="yellow" variant="light">
                  <FontAwesomeIcon icon={faEnvelope} />
                </ThemeIcon>
                <Title order={4} c="dark.7">
                  HHET-BE Training & Consulting
                </Title>
              </Group>

              <Divider color="gray.2" />

              <Stack gap="md">
                {contactDetails.map(({ icon, label, value }) => (
                  <Group key={label} gap="md" align="flex-start" wrap="nowrap">
                    <ThemeIcon size={28} radius="xl" color="yellow" variant="light" style={{ flexShrink: 0 }}>
                      <FontAwesomeIcon icon={icon} style={{ fontSize: 12 }} />
                    </ThemeIcon>
                    <Stack gap={2}>
                      <Text size="xs" c="gray.5" fw={600} tt="uppercase" lts={0.5}>
                        {label}
                      </Text>
                      <Text size="sm" c="gray.7">
                        {value}
                      </Text>
                    </Stack>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </Paper>

          <Text size="sm" c="gray.6" ta="center">
            Due to the operational nature of our work and the intensity of our training schedules,
            response times may vary. We will attend to your message as promptly as possible.
          </Text>
          <Text size="sm" c="gray.6" ta="center">
            Thank you for your interest in our training programs. We look forward to assisting you.
          </Text>

        </Stack>
      </Container>
    </Box>
  )
}

export default ContactForm
