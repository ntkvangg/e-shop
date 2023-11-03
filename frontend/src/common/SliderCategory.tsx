import React, { useState, useRef, useEffect, createRef, useMemo } from 'react';
import ProductCard from './ProductCard';
import { Box, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import HeaderCategory from './HeaderCategory';


const BoxWrapper = styled(Box)(({ theme }: { theme: any }) => {
    return {
        overflow: 'hidden',
        width: '100%'
    }
})

const BoxSlider = styled(Box)(({ theme }: { theme: any }) => {
    return {
        display: 'flex',
        width: '100%',
        transition: 'transform 0.5s ease',
        '-webkit-transition': '-webkit-transform 0.5s ease',
        '-moz-transition': '-moz-transform 0.5s ease',
        '-ms-transition': '-ms-transform 0.5s ease'
    }
})

const BoxSliderItem = styled(ProductCard)(({ theme }: { theme: any }) => {
    return {
        flex: '0 0 auto',
        marginRight: '10px',
    }
})

interface Props {
    products: any,
    label?: string
}


const ProductSlider = ({ products, label }: Props) => {
    const productRefs: any = useRef([]);
    const sliderContentRef: any = useRef(null);
    const [categoryWidth, setCategoryWidth] = useState(0);
    let offset = 0;
    const [isDisableNextBtn, setIsDisableNextBtn] = useState(false);
    const [isDisablePrevBtn, setIsDisablePrevBtn] = useState(true);    


    useEffect(() => {
        productRefs.current = Array.from({ length: products.length }).map((_, i) => productRefs.current[i] || createRef());
    }, [products.length]);

    useEffect(() => {
        if (productRefs.current.length > 0) {
            setCategoryWidth(productRefs.current[0]?.current?.offsetWidth);
        }
    }, [productRefs.current.length]);

    const countElementVisible = () => {
        let count = 0;
        for (let i = 0; i < productRefs.current.length; i++) {
            if (isElementVisible(productRefs.current[i].current)) {
                count++;
            }
        }
        return count;
    };

    const handlePrevClick = () => {
        let count = countElementVisible();
        offset = offset - ((categoryWidth + 20) * count);
        if (offset < 0) {
            offset = 0;
        }
        setIsDisablePrevBtn(offset === 0);
        setIsDisableNextBtn(false);
        sliderContentRef.current.style.transform = `translateX(-${offset}px)`;

    }

    const handleNextClick = () => {
        let count = countElementVisible();
        offset = offset + ((categoryWidth + 20) * count);
        const contentWidth = sliderContentRef.current.offsetWidth;
        if (offset > contentWidth) {
            offset = contentWidth + 20;
        }
        setIsDisableNextBtn(offset === contentWidth + 20);
        setIsDisablePrevBtn(false);
        sliderContentRef.current.style.transform = `translateX(-${offset}px)`;
    };

    const isElementVisible = (el: any) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    }
    return (
        <Box sx={{marginTop: 3}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                {label && <HeaderCategory label={label}/>}
                <Box>
                    <IconButton onClick={handlePrevClick} disabled={isDisablePrevBtn}><ArrowCircleLeftIcon /></IconButton>
                    <IconButton onClick={handleNextClick} disabled={isDisableNextBtn}><ArrowCircleRightIcon /></IconButton>
                </Box>
            </Box>
            <BoxWrapper className='category-slider' sx={{ position: 'relative' }}>
                <BoxSlider component={'div'}
                    className="slider-content"
                    ref={sliderContentRef}
                >
                    {products.map((product: any, index: number) => (
                        <Box sx={{ marginRight: '20px', width: 275, flex: '0 0 auto' }} key={index} ref={productRefs.current[index]} component={'div'} className={`category-item`}>
                            <BoxSliderItem productItem={product} />
                        </Box>
                    ))}
                </BoxSlider>
            </BoxWrapper>
        </Box>

    );
};

export default ProductSlider;
