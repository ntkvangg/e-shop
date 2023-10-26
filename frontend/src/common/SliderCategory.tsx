import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BoxSlider = styled(Box)(({ theme }: { theme: any }) => {
    return {
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        transition: 'transform 0.5s ease',
        '-webkit-transition': '-webkit-transform 0.5s ease',
        '-moz-transition': '-moz-transform 0.5s ease',
        '-ms-transition': '-ms-transform 0.5s ease'
    }
})

const ProductSlider = ({ products }: { products: any }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 4;

    const handleClickNext = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
    };

    const handleClickBack = () => {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
    };

    const transformValue = -currentPage * (100 / productsPerPage);

    return (
        <div>
            <BoxSlider 
                className="product-slider"
                style={{ transform: `translateX(${transformValue}%)` }} // Apply the transform property
            >
                {products.map((product: any, index: number) => (
                    <ProductCard key={index} productItem={product} />
                ))}
            </BoxSlider>
            <div className="slider-controls">
                <button onClick={handleClickBack} disabled={currentPage === 0}>
                    Back
                </button>
                <button
                    onClick={handleClickNext}
                    disabled={currentPage >= products.length / productsPerPage - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductSlider;
