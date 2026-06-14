import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "@mantine/carousel";
import { Card, Flex, Box, Stack, Title, Text, Group } from "@mantine/core";

function CarouselCard({leftPanel, rightPanel}){
  return(
    <Card h={{ md: '50vh' }} withBorder p={0} radius="lg">
      <Flex h="100%" direction={{ base: 'column', md: 'row' }}>
        {leftPanel}
        {rightPanel}
      </Flex>
    </Card>
  )
}

export default CarouselCard;