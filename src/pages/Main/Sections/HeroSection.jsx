import { faEnvelope, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackgroundImage, Box, Button, Flex, Grid, Group, Stack, Text, Title } from "@mantine/core";
import heroImage from '../../../assets/images/hero_placeholder.png';


function HeroSection() {
  function ScrollToElement(elementId) {
    const el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Box id="home" bg="gray.1" h="100vh" pt={80}>
      <BackgroundImage
        src={heroImage}
        h="100%"
      >
      <Box p="xl" h="100%" style={{ background: 'rgba(0, 0, 0, 0.72)' }}>
        <Stack align="center" justify="center">
          <Title c="gray.3" size = {48}>From Reaction to Response</Title>

          <Title c="gray.4" order={3} >Real-world crisis training for those who don't wear uniforms.</Title>

          <Text c="gray.3" w="50%" ta="center" size="lg" mb="xl">At HHET-BE Training & Consulting, we don't teach textbook theory. We transform mindset and behavior through immersive, experience-driven training led by instructors who've served in the world's most volatile environments.</Text>

          <Text c='gray.3' w="50%" ta="center" size="lg" mb="xl">Prepare your people — not with fear, but with readiness.</Text>

          <Group>
            <Button 
              size="md" 
              radius="md"
              leftSection={<FontAwesomeIcon icon={faListUl}/>} 
              color ="yellow.5" 
              onClick={()=>{ScrollToElement("courses")}}
            >
              Explore our programs
            </Button>
            <Button 
              size="md" 
              variant="outline" 
              radius="md"
              color ="gray.3"
              leftSection={<FontAwesomeIcon icon={faEnvelope}/>}
            >
              Contact us
            </Button>
          </Group>
        </Stack>
        </Box>
      </BackgroundImage>
    </Box>
  )
}

export default HeroSection;
