import {
  Badge,
  Box,
  Container,
  Divider,
  Group,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faLanguage,
  faMedkit,
  faShieldAlt,
  faStar,
  faUserShield,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import classes from './ExpertPanel.module.css'

function ExpLine({ icon, children }) {
  return (
    <List.Item
      icon={
        <ThemeIcon color="yellow" size={22} radius="xl" variant="light">
          <FontAwesomeIcon icon={icon} style={{ fontSize: 11 }} />
        </ThemeIcon>
      }
    >
      <Text size="sm" c="gray.7">
        {children}
      </Text>
    </List.Item>
  )
}

function ExpertCard({ name, mainExp, languages, children }) {
  return (
    <Paper
      p="xl"
      radius="md"
      withBorder
      shadow="xs"
      bg="white"
      className={classes.expertCard}
    >
      <Stack gap="sm">
        {/* Card Header */}
        <Group gap="md" align="flex-start" wrap="nowrap">
          <ThemeIcon size={52} radius="xl" color="dark" variant="light" style={{ flexShrink: 0 }}>
            <FontAwesomeIcon icon={faUserTie} size="lg" />
          </ThemeIcon>
          <Stack gap={4}>
            <Title order={4} c="dark.7">
              {name}
            </Title>
            <Group gap="xs" wrap="nowrap">
              <FontAwesomeIcon
                icon={faShieldAlt}
                style={{ color: 'var(--mantine-color-yellow-6)', fontSize: 12, flexShrink: 0 }}
              />
              <Text size="sm" c="gray.6" fw={500}>
                {mainExp}
              </Text>
            </Group>
          </Stack>
        </Group>

        <Divider color="gray.2" />

        {/* Expertise Lines */}
        <List spacing={6} listStyleType="none">
          {children}
        </List>

        <Divider color="gray.2" />

        {/* Languages */}
        <Group gap="xs" align="center" wrap="nowrap">
          <ThemeIcon size={22} radius="xl" color="yellow" variant="light" style={{ flexShrink: 0 }}>
            <FontAwesomeIcon icon={faLanguage} style={{ fontSize: 11 }} />
          </ThemeIcon>
          <Text size="sm" c="gray.6">
            <Text component="span" fw={600} c="gray.7">
              Proficient in:{' '}
            </Text>
            {languages}
          </Text>
        </Group>
      </Stack>
    </Paper>
  )
}

function ExpertPanel() {
  return (
    <Box bg="gray.1" py={80}>
      <Container size="lg">
        <Stack gap={48}>

          {/* Section Header */}
          <Stack gap="md" align="center">
            <Title order={2} ta="center" c="dark.8" fz={{ base: 32, md: 40 }}>
              Our Experts
            </Title>
            <Divider w={60} color="yellow.5" size="sm" />
            <Text size="lg" c="gray.7" ta="center" maw={680} lh={1.7}>
              HHET-BE brings together a select network of certified trainers with extensive law
              enforcement, crisis response, and international deployment backgrounds.
            </Text>
          </Stack>

          {/* Expert Cards */}
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            <ExpertCard
              name="Trainer L. (Belgium)"
              mainExp="International operations & law enforcement"
              languages="Dutch, French, German, English"
            >
              <ExpLine icon={faStar}>Firearms Specialist & EU Range Officer</ExpLine>
              <ExpLine icon={faUserShield}>Tactical & Emergency Care Instructor</ExpLine>
              <ExpLine icon={faGlobe}>Hostile Environment Awareness Trainer</ExpLine>
              <ExpLine icon={faMedkit}>FPOS BTEC Level 2, Breacher</ExpLine>
              <ExpLine icon={faStar}>Crisis Management & ASP Certified</ExpLine>
            </ExpertCard>

            <ExpertCard
              name="Trainer T.Z. (Germany)"
              mainExp="International operations & law enforcement"
              languages="German, English, Dutch"
            >
              <ExpLine icon={faGlobe}>WPS, Gender & Human Rights</ExpLine>
              <ExpLine icon={faUserShield}>HEAT Trainer, Close Protection</ExpLine>
              <ExpLine icon={faMedkit}>First Aid & TCCC Certified</ExpLine>
            </ExpertCard>

            <ExpertCard
              name="Trainer T. (Belgium)"
              mainExp="Law enforcement"
              languages="English, French, Dutch"
            >
              <ExpLine icon={faUserShield}>Use of Force & Tactical Intervention</ExpLine>
              <ExpLine icon={faMedkit}>TECC & Martial Arts Certified</ExpLine>
              <ExpLine icon={faStar}>Breacher & ASP Instructor</ExpLine>
            </ExpertCard>
          </SimpleGrid>

        </Stack>
      </Container>
    </Box>
  )
}

export default ExpertPanel
