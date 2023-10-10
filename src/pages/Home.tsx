import React, { useEffect, useState } from 'react';
import Slider from '@common/Slider';
import styled from 'styled-components';
import FlashSales from '@components/FlashSales';
import BestSellingProducts from '@components/BestSellingProducts';
import ExploreOurProduct from "@components/ExploreOurProduct";
import CustomerService from '@common/CustomerService';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import IconButton from '@mui/material/IconButton';

const WrapperHomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const ButtonUp = styled(IconButton)`
    position: fixed !important;
    font-size: 2.5rem !important;
    right: 1rem;
    bottom: 8rem;
    z-index: 1000;
    transition: all .3s ease-in-out !important;
    &:hover{   
        transform: scale(1.1);
    }
`



function Home() {
    const [showTop, setShowTop] = useState(false);

    const handleScroll = () => {
        setShowTop(window.scrollY > 200) ;
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <WrapperHomeStyle className='home-page'>
            <section className='section-header container-fuild'>
                <Slider />
            </section>
            <section>
                <FlashSales/>
            </section>
            <section>
                <BestSellingProducts/>
            </section>
            <section>
                <ExploreOurProduct/>
            </section>
            <section className='customer-service-section'>
                <CustomerService/>
            </section>
            { showTop ? <ButtonUp size="large" onClick={handleScrollToTop} color='error'>
                    <ArrowCircleUpIcon fontSize="inherit" />
                </ButtonUp> : null}
        </WrapperHomeStyle>
    );
}

export default Home;
