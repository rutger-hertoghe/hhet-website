import { Carousel } from '@mantine/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Box, Button, Card, Flex, Stack, Text, Title } from '@mantine/core';
import '@mantine/carousel/styles.css';
import deterImg from "../../../assets/images/deter_placeholder.png"
import travelRiskImg from "../../../assets/images/travel_risk_placeholder.jpg"
import emergencyCareImg from "../../../assets/images/emergency_care_placeholder.jpg"
import firstAidImg from "../../../assets/images/first_aid_placeholder.jpg"
import heatImg from "../../../assets/images/heat_placeholder.webp"
import { ScrollToElement } from '../../../utilities';

function CoursesPanel() {

  const bigYellow = function (string) {
    return (
      <span className="text-5xl text-yellow-400">{string}</span>
    )
  }

  return (
    <Box id="courses" bg="gray.1" h="100vh">
      <Stack align='center'>
        <Title size={36}>
          Our Courses
        </Title>
        <Text ta="center" size="lg" w="50%" c="gray.7">
          Each of our courses is built to reshape instinct, raise awareness, and embed practical skills — equipping individuals to respond with clarity when the unexpected becomes reality.
        </Text>

        <Carousel withIndicators emblaOptions={{ loop: true }} slideGap="lg" w="90%">
          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} style={{ backgroundImage: `url(${deterImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                <Box flex={1} p={50}>
                  <Title order={2}>{bigYellow("D")}E-ESCALATION  {bigYellow("T")}ECHNIQUES & {bigYellow("R")}ESOURCES</Title>
                  <Text c="gray.7" mb="lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve
                  </Text>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 1 Day
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} p={50}>
                  <Title order={2}>{bigYellow("T")}RAVEL {bigYellow("S")}ECURITY {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</Title>
                  <Text c="gray.7" mb="lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve
                  </Text>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 1 Day
                </Box>
                <Box flex={1} style={{ backgroundImage: `url(${travelRiskImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
              </Flex>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} style={{ backgroundImage: `url(${emergencyCareImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                <Box flex={1} p={50}>
                  <Title order={2}>{bigYellow("E")}MERGENCY {bigYellow("C")}ASUALTY {bigYellow("C")}ARE</Title>
                  <Text c="gray.7" mb="lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve
                  </Text>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 2 Days
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} p={50}>
                  <Title order={2}>{bigYellow("F")}IRST {bigYellow("A")}ID {bigYellow("T")}RAINING</Title>
                  <Text c="gray.7" mb="lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve
                  </Text>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 2 Days
                </Box>
                <Box flex={1} style={{ backgroundImage: `url(${firstAidImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
              </Flex>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} style={{ backgroundImage: `url(${heatImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                <Box flex={1} p={50}>
                  <Title order={2}>{bigYellow("H")}OSTILE {bigYellow("E")}NVIRONMENT {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</Title>
                  <Text c="gray.7" mb="lg">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve
                  </Text>
                  <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 3-7 Days
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>
        </Carousel>

        <Button 
          leftSection={<FontAwesomeIcon icon={faEnvelope}/>}
          onClick={() => ScrollToElement("contact")}
          variant = "outline"
          color = "gray.7"
          size = "md"
          radius = "md"
        >
          Contact us
        </Button>
      </Stack>
    </Box>
  )
}

export default CoursesPanel;
