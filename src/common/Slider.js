import styled from "styled-components";
import React from "react";
import Icon from "@/common/FontAwesomeIcon";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px; /* Set the height of the slider */
  overflow: hidden; /* Hide overflow for images that are larger than the container */
  .slider{
    display: flex;
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    .slide{
        flex: 0 0 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  color: #666666;

  &:hover {
    color: #000;
  }
  
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
`;

const images = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer className="slider-container">
        <div className="slider">
            <div className="slide">
                <Image key={images[currentImage].id} src={images[currentImage].image} alt={`Image ${images[currentImage].id}`} />
            </div>
        </div>
      <PrevButton onClick={prevImage}><Icon icon={faArrowAltCircleLeft} className="icon fa-2xl"></Icon></PrevButton>
      <NextButton onClick={nextImage}><Icon icon={faArrowAltCircleRight} className="icon fa-2xl"></Icon></NextButton>
    </SliderContainer>
  );
};

export default Slider;
