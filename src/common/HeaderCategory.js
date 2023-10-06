import styled from "styled-components";
import { faCircleArrowRight, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Icon from "./FontAwesomeIcon";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const TitleWrapper = styled.div`
    display: flex;
    color: #DB4444;
    align-items: center;
`;

const Tag = styled.div`
    background-color: #DB4444;
    width: 10px;
    height: 2rem;
    border-radius: 2px;
    margin-right: 5px;
`;

const Title  = styled.span`
    font-family: Poppins;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; /* 125% */
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const CategoryName = styled.span`
    color: var(--Text2, #000);
    font-family: Inter;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 3rem; /* 133.333% */
    letter-spacing: 0.09rem;
`





const HeaderCategory = ({label, title}) => {

    return <Wrapper className="wrapper-category">
        <TitleWrapper>
            <Tag></Tag>
            <Title>{label}</Title>
        </TitleWrapper>
        <CategoryName>{title}</CategoryName>    
    </Wrapper>
};

export default HeaderCategory;