import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { Button} from '@mui/material';
import HeaderCategory from '@common/HeaderCategory';
import CardProduct from '@common/ProductCard';
import SkeletonView from '@common/SkeletonView';

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
  gap: 1rem;
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


const products = [
    {
        "id": 1,
        "name": "Product 1",
        "price": 49.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "product1.jpg"
    },
    {
        "id": 2,
        "name": "Product 2",
        "price": 29.99,
        "description": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "product2.jpg"
    },
    {
        "id": 3,
        "name": "Product 3",
        "price": 39.99,
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "image": "product3.jpg"
    },
    {
        "id": 4,
        "name": "Product 4",
        "price": 59.99,
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "image": "product4.jpg"
    }
]


interface Props {
    
}

function BestSellingProducts() {
   const loading = false;
    return (
        <>
            {loading ?
                <SkeletonView /> :
                <WrapperHeader>
                    <HeaderSectionStyle className='header'>
                        <HeaderCategory label="Our Products" title="Explore Our Products" />
                    </HeaderSectionStyle>
                    <Grid container spacing={2}>
                        {products.map((product: any, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                                <CardProduct key={index} data={product} />
                            </Grid>
                        ))}
                    </Grid>
                    <ButtonStyled className='btn btn-danger' color='error' variant='contained'>View All Products</ButtonStyled>
                </WrapperHeader>
            }
        </>

    );
}

export default BestSellingProducts;