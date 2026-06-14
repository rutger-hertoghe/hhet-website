import { Box } from "@mantine/core";

export default function CarouselCardImgPanel({imgPath}){
  return(
    <Box flex={1} h={{ base: 180, md: 'auto' }} style={{ backgroundImage: `url(${imgPath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
  )
}