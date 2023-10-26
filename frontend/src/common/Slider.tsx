import {styled} from '@mui/material/styles';
import React, { useEffect } from "react";
import { Box, CardMedia, IconButton, Stack } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
const SliderContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 400px;
  min-height: 200px;
  overflow: hidden;
  .slider{
    display: flex;
    .slide{
        width: 100%;
        height: 100%;
        transition: all 400s ease-out;
        img{
            width: 100%;
            object-fit: fill;
        }
    }
    .slide:hover{
      cursor: pointer;
    }
  }
`;


const Button = styled(IconButton)(({ theme }: { theme: any })=>{
  return {
    position: 'absolute',
    top: '50%',
    color: theme.palette.grey[500],
    '&:hover':{
      transform: 'scale(1.1)',
    }
  }
})

const StackStyled = styled(Stack)(({ theme }: { theme: any })=>{  
  return {
    position: 'absolute',
    bottom: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiIconButton-root':{
      color: theme.palette.grey[400]
    },
    '& .MuiIconButton-root:hover':{
      transform: 'scale(1.1)',
      color: theme.palette.primary.main
    },
    '.active':{
      color: theme.palette.primary.main
    }
  }
})

const images = [
  {
    id: 1,
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/10/banner/AWCS-2880-800-1920x548.png",
  },
  {
    id: 2,
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/10/banner/7E31D0EF-1D7C-41F0-BDB6-CA1EBFB5C5F3-1920x533.png",
  },
  {
    id: 3,
    image:
      "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/10/banner/IP15-2880-800-1920x533.png",
  },
];
interface Props {
  images?: any;
  isPlaying?: boolean;
}
const Slider = ({isPlaying = false}: Props) => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const onSelectedImage = (index: number) => {
    setCurrentImage(index);
  }

  useEffect(()=>{
    if(isPlaying){
      const intervalId = setInterval(() => {
        nextImage();
      }, 3000);
      return () => clearInterval(intervalId);
    }
  })

  return (
    <SliderContainer className="slider-container">
      <div className="slider">
        <a className="slide">
          <CardMedia 
            component='img'
            key={images[currentImage].id} 
            image={images[currentImage].image}
            height={400} 
            alt={`Image ${images[currentImage].id}`} />
        </a>
      </div>
      <Button sx={{left: 0}}onClick={prevImage} size="large"><ArrowCircleLeftIcon fontSize="inherit" sx={{width: '2.5rem', height: '2.5rem'}}/></Button>
      <Button sx={{right: 0}} onClick={nextImage} size="large"><ArrowCircleRightIcon fontSize="inherit" sx={{width: '2.5rem', height: '2.5rem'}}/></Button>
      <Box>
        <StackStyled direction={'row'}>
          {images.map((image, index) => (
            <IconButton key={index} onClick={()=>onSelectedImage(index)} className={`${currentImage === index ? 'active' : ''}`}><FiberManualRecordOutlinedIcon/></IconButton>
          ))}
        </StackStyled>
      </Box>
      
    </SliderContainer>
  );
};

export default Slider;
