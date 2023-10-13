import React, {forwardRef, ForwardRefRenderFunction, useImperativeHandle, Ref} from 'react';
import styled from 'styled-components';
import { Image } from './Slider';
import RateStar from './RateStar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Card, CardMedia, CardContent, Typography, Stack, Badge, Button, Box } from '@mui/material';
import Helper from '@utils/index';


const ContainerImage = styled(Box)`
    &:hover{
        .add-to-cart{
            transform: scale(1);
            opacity: 1;
            visibility: visible;
            cursor: pointer;
        }
    }
`

const AddToCartContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    &:hover{
        opacity: 1;
        visibility: visible;
        cursor: pointer;
    }
    button{
        width: 100%;
        background-color: #000;
        color: #fff;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
        border-radius: 2px;
        transition: background-color 0.3s ease;
        &:hover{
            background-color: #000;
            border: none;
        }
    }
`
interface ProductItem {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: any

}
interface Props {
    productItem?: ProductItem;
}

const CardProduct = forwardRef<HTMLDivElement, Props>(function CardProduct(props, ref){
    const {productItem} = props;
    return (
    <Card sx={{ maxWidth: 345, minWidth: 300, boxShadow: 'none', borderRadius: 0 }} ref={ref}>
        <ContainerImage sx={{position: 'relative', cursor: 'pointer'}}>
            <CardMedia
            component="img"
            height="250"
            image={productItem?.thumbnail}
            alt={productItem?.title}
            />
            <Badge color="error" badgeContent={`${productItem?.discountPercentage}%`} sx={{color: "#DB4444", position: 'absolute', top: '1.2rem', left: '2.5rem', '.MuiBadge-badge': {borderRadius: '3px', padding: '0.75rem'}}}/>
            <AddToCartContainer>
                <Button variant="outlined" startIcon={<AddShoppingCartIcon className='icon'/>} className='add-to-cart'>
                     Add to cart
                </Button>
            </AddToCartContainer>
        </ContainerImage>
        <CardContent sx={{padding: '16px 5px'}}>
          <Typography gutterBottom variant="subtitle1" sx={{lineHeight: 1.5, fontFamily: "Poppins"}}>
            {productItem?.title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography variant="body1" color="error" sx={{lineHeight: 1.5, fontFamily: "Poppins"}}>
                ${productItem?.price}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{lineHeight: 1.5, fontFamily: "Poppins"}}>
                ${Helper.caclulatePrice(productItem?.price, productItem?.discountPercentage || 0)}
            </Typography>
          </Stack>
          <RateStar value={productItem?.rating || 5} />
        </CardContent>
    </Card>
    )
});

export default CardProduct;
