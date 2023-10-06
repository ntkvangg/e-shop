import React, {forwardRef} from 'react';
import styled from 'styled-components';
import { Image } from './Slider';
import RateStar from './RateStar';
import Icon from './FontAwesomeIcon';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CardProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    position: relative;
    height: 350px; /* Set the fixed height */
    margin: 10px;
    transition: transform 0.3s ease;
    max-width: 350px;
    min-width: 250px;
`
const TagDiscount = styled.div`
    position: absolute;
    left: 1rem;
    top: 1rem;
`

const ContainerImage = styled.div`
    border-radius: 0.25rem;
    background: #efe9e7;
    overflow: hidden;
    width: 100%;
    flex: 1; /* Make this div flex to take available vertical space */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        .add-to-cart{
            // transform: scale(1.05);
            opacity: 1;
            visibility: visible;
            cursor: pointer;
        }
    }
`

const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .2rem;
`

const ProductNameStyle = styled.div`
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
`

const PriceStyle = styled.span`
    color: var(--Secondary-2, #DB4444);
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
`

const PriceDiscountStyle = styled.span`
    color: var(--Button, #000);
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    text-decoration-line: strikethrough;
    opacity: 0.5;
`

const AddToCartContainer = styled.div`
    position: absolute;
    top: 68%;
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
        }
        .icon{
            margin-right: 5px;
        }
    }
`

const CardProduct = forwardRef(function({product}, ref) {
    return <CardProductWrapper className='product-card' ref={ref}>
        <TagDiscount className='label label-danger'>40%</TagDiscount>
        <ContainerImage>
            <Image src="https://images.pexels.com/photos/9842750/pexels-photo-9842750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <AddToCartContainer className='add-to-cart'>
                <button className='btn'>
                    <Icon icon={faShoppingCart} className='icon' />
                    <span>Add to cart</span>
                </button>
            </AddToCartContainer>
        </ContainerImage>
        <CardFooter>
            <ProductNameStyle>HAVIT HV-G92 Gamepad</ProductNameStyle>
            <div className='d-flex'>
                <PriceStyle>$120</PriceStyle>
                <PriceDiscountStyle>$160</PriceDiscountStyle>
            </div>
            <RateStar number={5} />
        </CardFooter>
    </CardProductWrapper>
});

export default CardProduct;
