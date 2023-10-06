import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    background-color: #000;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    font-size: 14px;
    p{
        margin: 0;
    }

    @media (max-width: 600px) {
        display: block;
        padding: 5px 0;
        text-align: center;
    }
`
const TopHeader = () => {
    return <Wrapper>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a>Shop Now</a>
    </Wrapper>

};

export default TopHeader;