import React, { useRef } from 'react';
import styled from 'styled-components';
import { Button, Grid} from '@mui/material';
import HeaderCategory from '@common/HeaderCategory';
import CardProduct from '@common/ProductCard';
import SkeletonView from '@common/SkeletonView';
import TimeCountDown from '@common/TimeCountDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
  onViewAll?: () => void;
}

function FlashSales({ data, onViewAll }: Props) {
  const loading = false;
  return (
    <>
      {loading ?
        <SkeletonView /> :
        <WrapperHeader>
          <HeaderSectionStyle className='header'>
            <HeaderCategory label="Today's" title="Flash Sales" />
            <TimeCountDown endTime={new Date('2023-12-31T23:59:59').getTime()} />
            <Button color='error' endIcon={<ArrowForwardIosIcon/>} onClick={onViewAll}>View All Products</Button>
          </HeaderSectionStyle>
          <Grid container spacing={2}>
            {data.map((product: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                <CardProduct key={index} productItem={product} />
              </Grid>
            ))}
          </Grid>
        </WrapperHeader>
      }
    </>

  );
}

export default FlashSales;