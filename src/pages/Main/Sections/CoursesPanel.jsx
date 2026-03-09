import { Carousel } from '@mantine/carousel';
import RightHandPanel from "../../../components/RightHandPanel";
import LeftHandPanel from '../../../components/LeftHandPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { BackgroundImage, Card, Grid, Stack, Text, Title } from '@mantine/core';
import '@mantine/carousel/styles.css';
import deterImg from "../../../assets/images/deter_placeholder.png"

function CoursesPanel() {

  const bigYellow = function (string) {
    return (
      <span className="text-5xl text-yellow-400">{string}</span>
    )
  }

  function ScrollToElement(elementId) {
    const el = document.getElementById(elementId);
    el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Stack align='center'>
        <Title size={36}>
          Our Courses
        </Title>
        <Text ta="center" size="lg" w="50%" c="gray.7">
          Each of our courses is built to reshape instinct, raise awareness, and embed practical skills — equipping individuals to respond with clarity when the unexpected becomes reality.
        </Text>

        <Carousel withIndicators emblaOptions={{ loop: true }} slideGap="lg" w="90%">
          <Carousel.Slide>
            <Card h={400} withBorder p={0} radius="lg">
              <Grid>
                <Grid.Col span={6}>
                  <BackgroundImage h="100%" src={deterImg}/>
                </Grid.Col>
                <Grid.Col span = {6}>
                <Title order={2}>{bigYellow("D")}E-ESCALATION  {bigYellow("T")}ECHNIQUES & {bigYellow("R")}ESOURCES</Title>
                <Text c="gray.7">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve
                </Text>
                <FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 1 Day
                </Grid.Col>
              </Grid>
            </Card>
          </Carousel.Slide>

          <Carousel.Slide>
            <LeftHandPanel imageLink={`${import.meta.env.BASE_URL}travel_risk_placeholder.jpg`}>
              <h2 className="text-3xl font-bold mb-6">{bigYellow("T")}RAVEL {bigYellow("S")}ECURITY {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</h2>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
              <br />
              <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 1 Day</span>
            </LeftHandPanel>
          </Carousel.Slide>

          <Carousel.Slide>
            <RightHandPanel imageLink={`${import.meta.env.BASE_URL}emergency_care_placeholder.jpg`}>
              <h2 className="text-3xl font-bold mb-6">{bigYellow("E")}MERGENCY {bigYellow("C")}ASUALTY {bigYellow("C")}ARE</h2>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
              <br />
              <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 2 Days</span>
            </RightHandPanel>
          </Carousel.Slide>

          <Carousel.Slide>
            <LeftHandPanel imageLink={`${import.meta.env.BASE_URL}first_aid_placeholder.jpg`}>
              <h2 className="text-3xl font-bold mb-6">{bigYellow("F")}IRST {bigYellow("A")}ID {bigYellow("T")}RAINING</h2>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
              <br />
              <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 2 Days</span>
            </LeftHandPanel>
          </Carousel.Slide>

          <Carousel.Slide>
            <RightHandPanel imageLink={`${import.meta.env.BASE_URL}heat_placeholder.webp`}>
              <h2 className="text-3xl font-bold mb-6">{bigYellow("H")}OSTILE {bigYellow("E")}NVIRONMENT {bigYellow("A")}WARENESS {bigYellow("T")}RAINING</h2>
              <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, ve</p>
              <br />
              <span><FontAwesomeIcon icon={faClock} className="mr-2 text-gray-500"/> Duration: 3-7 Days</span>
            </RightHandPanel>
          </Carousel.Slide>
        </Carousel>
      </Stack>

      
      <div className="flex justify-center">
        <button type="button"
          onClick={() => { ScrollToElement("contact") }}
          className="bg-white border border-gray-300 hover:border-gray-500 text-gray-700 font-semibold py-3 px-6 rounded-xl transition duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Contact Us
        </button>
      </div>
    </>
  )
}

export default CoursesPanel;
