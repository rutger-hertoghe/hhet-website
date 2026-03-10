import {
  Anchor,
  Badge,
  Box,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import classes from './NetworkPanel.module.css'
import inspiration4YouImg from '../../../assets/images/partners/Inspiration4You.webp'
import wodanImg from '../../../assets/images/partners/Wodan.webp'
import cdoImg from '../../../assets/images/partners/CDO.webp'
import krisenWerkImg from '../../../assets/images/partners/krisenwerk.webp'
import theOutsiderLimburgImg from '../../../assets/images/partners/TheOutsiderLimburg.webp'

const partners = [
  { src: inspiration4YouImg, alt: 'Inspiration4You', href: 'https://www.inspiration4you.eu/' },
  { src: wodanImg, alt: 'Wodan', href: 'https://www.wodaninternational.com/' },
  { src: cdoImg, alt: 'CDO', href: 'https://cdotraining.eu/' },
  { src: krisenWerkImg, alt: 'Krisenwerk', href: 'https://krisenwerk.de/' },
  { src: theOutsiderLimburgImg, alt: 'The Outsider Limburg', href: 'https://outsiderlimburg.be' },
]

function PartnerLogo({ src, alt, href }) {
  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
      <Paper radius="lg" withBorder shadow="xs" bg="white" className={classes.partnerCard}>
        <Image src={src} alt={alt} h={56} w="auto" fit="contain" />
      </Paper>
    </Anchor>
  )
}

function NetworkPanel() {
  return (
    <Box bg="gray.1" py={80}>
      <Container size="lg">
        <Stack gap={56}>

          {/* Section Header */}
          <Stack gap="md" align="center">
            <Title order={2} ta="center" c="dark.8" fz={{ base: 32, md: 40 }}>
              Our Network
            </Title>
            <Divider w={60} color="yellow.5" size="sm" />
            <Text size="lg" c="gray.7" ta="center" maw={780} lh={1.7}>
              HHET-BE's trainer network brings together several decades of combined experience across
              national and international executive services, civilian cooperation organizations, EU
              CSDP missions, United Nations peacekeeping operations, peace-building efforts, and
              CivPol missions around the globe.
            </Text>
            <Text size="md" c="gray.6" ta="center" maw={740} lh={1.7}>
              Our team members have been deployed in both military and civilian capacities to
              post-conflict zones in regions such as the{' '}
              <Text component="span" fw={600} c="gray.7">Middle East</Text>{' '}
              (Iraq, Yemen),{' '}
              <Text component="span" fw={600} c="gray.7">South Asia</Text>{' '}
              (Afghanistan, Pakistan),{' '}
              <Text component="span" fw={600} c="gray.7">Central Africa</Text>{' '}
              (Mali, DRC, Niger), and the{' '}
              <Text component="span" fw={600} c="gray.7">Balkans</Text>,{' '}
              among others.
            </Text>
          </Stack>

          {/* Partners */}
          <Stack gap="lg" align="center">
            <Title order={3} c="dark.7" ta="center">
              Our Partners
            </Title>
            <Group justify="center" gap="lg" wrap="wrap">
              {partners.map((partner) => (
                <PartnerLogo key={partner.alt} {...partner} />
              ))}
            </Group>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default NetworkPanel
