import styled from "styled-components";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5.5rem;
`

const ColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

const ContainerIconStyeled = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #DB4444;
    display: flex;
    justify-content: center;
    align-items: center;
}
`


const CustomerService = ()=>{
    return <WrapperStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <LocalShippingIcon className="icon"/>
            </ContainerIconStyeled>
            <h2 className="text-center">Free AND FAST DELIVERY</h2>
            <span>Free delivery for all orders over $140</span>
        </ColumnStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <HeadphonesIcon className="icon"/>
            </ContainerIconStyeled>
            <h2 className="text-center">24/7 CUSTOMER SERVICE</h2>
            <span>Friendly 24/7 customer support</span>
        </ColumnStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <VerifiedUserIcon className="icon"/>
            </ContainerIconStyeled>
            <h2 className="text-center">MONEY BACK GUARANTEE</h2>
            <span>We return money within 30 days</span>
        </ColumnStyled>
    </WrapperStyled>
}

export default CustomerService;