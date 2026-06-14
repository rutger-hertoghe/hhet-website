import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Group, Stack, Text, Title } from "@mantine/core";

export default function CarouselCardTextPanel({title, content}){
  return(
    <Box flex={1} p={{ base: 'md', md: 50 }}>
      <Stack>
        <Title order={2}>{title}</Title>
        {content}
      </Stack>
    </Box>
  )
}