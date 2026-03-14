import { Carousel } from '@mantine/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Box, Button, Card, Divider, Flex, Group, Stack, Text, Title } from '@mantine/core';
import '@mantine/carousel/styles.css';
import deterImg from "../../../assets/images/DETER_color.jpeg"
import tsatImg from "../../../assets/images/TSAT_color.jpeg"
import emergencyCareImg from "../../../assets/images/emergency_care_placeholder.jpg"
import firstAidImg from "../../../assets/images/first_aid_placeholder.jpg"
import heatImg from "../../../assets/images/HEAT_grey.jpeg"
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

        <Divider w={60} color="yellow.5" size="sm" />

        <Text ta="center" size="lg" w="50%" c="gray.7">
          Each of our courses is built to reshape instinct, raise awareness, and embed practical skills — equipping individuals to respond with clarity when the unexpected becomes reality.
        </Text>

        <Carousel 
          withIndicators 
          emblaOptions={{ loop: true }} 
          slideGap="lg" 
          w="90%"
          styles={{
            indicator: {
              background: 'orange',
              width: 6,
              height: 6,
              '&[data-active]': {
                background: 'red',
              },
            },
            control: {
              background: "white"
            }
          }}
        >
          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} p={50}>
                  <Stack>
                    <Title order={2}>{bigYellow("T")}RAVEL {bigYellow("S")}ECURITY {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</Title>
                    <Text c="gray.7">
                      Training focused on recognizing and managing personal safety and security risks while traveling, including situational awareness, risk assessment, and emergency response.
                    </Text>
                    <Group>
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/>
                        <Text c="gray.9">Duration: 1 Day</Text>
                    </Group>
                    <Button maw={120} color="yellow.5" rightSection={<FontAwesomeIcon icon={faCaretRight}/>}>More info</Button>
                  </Stack>
                </Box>
                <Box flex={1} style={{ backgroundImage: `url(${tsatImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
              </Flex>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} style={{ backgroundImage: `url(${deterImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                <Box flex={1} p={50}>
                  <Stack>
                    <Title order={2}>{bigYellow("D")}E-ESCALATION  {bigYellow("T")}ECHNIQUES & {bigYellow("R")}ESOURCES</Title>
                    <Text c="gray.7">
                      Training focused on recognizing and safely diffusing potentially aggressive or high-conflict situations using communication, conflict management, and situational awareness techniques.
                    </Text>
                    <Group>
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/>
                        <Text c="gray.9">Duration: 1 Day</Text>
                    </Group>
                    <Button maw={120} color="yellow.5" rightSection={<FontAwesomeIcon icon={faCaretRight}/>}>More info</Button>
                  </Stack>
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} style={{ backgroundImage: `url(${emergencyCareImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
                <Box flex={1} p={50}>
                  <Stack>
                    <Title order={2}>{bigYellow("E")}MERGENCY {bigYellow("C")}ASUALTY {bigYellow("C")}ARE</Title>
                    <Text c="gray.7">
                      Training in providing immediate of (non medical) life-saving care in emergency situations, including casualty assessment, massive bleeding, airways management, bleed, and basic trauma management.
                    </Text>
                    <Group>
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/>
                        <Text c="gray.9">Duration: 2 Days</Text>
                    </Group>
                    <Button maw={120} color="yellow.5" rightSection={<FontAwesomeIcon icon={faCaretRight}/>}>More info</Button>
                  </Stack>
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <Card h='50vh' withBorder p={0} radius="lg">
              <Flex h="100%">
                <Box flex={1} p={50}>
                  <Stack>
                    <Title order={2}>{bigYellow("F")}IRST {bigYellow("A")}ID {bigYellow("T")}RAINING</Title>
                    <Text c="gray.7">
                      Basic emergency care training covering life-saving skills such as CPR, bleeding control, and responding to medical emergencies until professional help arrives.
                    </Text>
                    <Group>
                      <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/>
                      <Text c="gray.9">Duration: 2 Days</Text>
                    </Group>
                    <Button maw={120} color="yellow.5" rightSection={<FontAwesomeIcon icon={faCaretRight}/>}>More info</Button>
                  </Stack>
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
                  <Stack>
                    <Title order={2}>{bigYellow("H")}OSTILE {bigYellow("E")}NVIRONMENT {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</Title>
                    <Text c="gray.7">
                      Safety training focused on risk assessment, personal security, and emergency response in high-risk or unstable environments.
                    </Text>
                    <Group>
                        <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/>
                        <Text c="gray.9">Duration: 3-7 Days</Text>
                    </Group>
                    <Button maw={120} color="yellow.5" rightSection={<FontAwesomeIcon icon={faCaretRight}/>}>More info</Button>
                  </Stack>
                </Box>
              </Flex>
            </Card>
          </Carousel.Slide>
        </Carousel>

        <Button 
          leftSection={<FontAwesomeIcon icon={faEnvelope}/>}
          onClick={() => ScrollToElement("contact")}
          color = "yellow.5"
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
