import React, { useRef } from 'react';
import styled from 'styled-components';
import { Button, IconButton, Stack } from '@mui/material';
import HeaderCategory from '@common/HeaderCategory';
import CardProduct from '@common/ProductCard';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SkeletonView from '@common/SkeletonView';
import TimeCountDown from '@common/TimeCountDown';

const WrapperHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

`

const WrapperProductStyle = styled.div`
    display: flex;
    overflow: hidden;

`

const ProductsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  transition: transform 0.3s ease;
`;

export const ButtonStyled = styled(Button)`
    color: var(--Text, #FAFAFA);
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    margin: 0 auto;
    margin-top: 2rem;
    width: fit-content;
    align-self: center;
`

export const ContainerButtons = styled.div`
    display: flex;
    color: #666666;

    .icon{
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;    
    }
    .icon-left{
        margin-right: 10px;
    }

`

export const HeaderSectionStyle = styled.div`
    display: flex;  
    justify-content: space-between;
    align-items: end;
`

interface Props {
  data?: any;
}

function FlashSales({data}: Props  ) {
  const productRef: any = useRef<HTMLDivElement>(null);
  const containerRef: any = useRef(null);
  const loading = false;

  let currentIndex = 0;
  const [numSlides, setNumSlides] = React.useState(0);
  React.useEffect(() => {
    setNumSlides(containerRef?.current?.childElementCount - 4);
  }, []);

  const showSlide = (index: number) => {
    const translateX = index * productRef?.current?.offsetWidth;
    containerRef.current.style.transform = `translateX(-${translateX}px)`;
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    } else {
      currentIndex = numSlides - 1;
      showSlide(currentIndex);
    }
  }

  const handleNextClick = () => {

    if (currentIndex < numSlides - 1) {
      currentIndex++;
      showSlide(currentIndex);
    } else {
      currentIndex = 0;
      showSlide(currentIndex);
    }
  };

  return (
    <>
      {loading ?
        <SkeletonView /> :
        <WrapperHeader>
          <HeaderSectionStyle className='header'>
            <HeaderCategory label="Today's" title="Flash Sales" />
            <TimeCountDown endTime={new Date('2023-12-31T23:59:59').getTime()}/>
            <Stack direction="row">
              <IconButton size="large" onClick={handlePrevClick}><ArrowCircleLeftIcon /></IconButton>
              <IconButton size="large" onClick={handleNextClick}><ArrowCircleRightIcon /></IconButton>
            </Stack>
          </HeaderSectionStyle>
          <WrapperProductStyle className='product-list'>
            <ProductsContainer ref={containerRef}>
              {data.map((product: any, index: number) => (
                <CardProduct key={index} ref={productRef} productItem={product} />
              ))}
            </ProductsContainer>
          </WrapperProductStyle>
          <ButtonStyled className='btn btn-danger' color='error' variant='contained'>View All Products</ButtonStyled>
        </WrapperHeader>
      }
    </>

  );
}

export default FlashSales;