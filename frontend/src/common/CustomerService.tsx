import styled from "styled-components";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Typography } from "@mui/material";

const WrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5.5rem;
    padding: 2rem 0;
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
            <Typography className="text-center" variant="h6">Free AND FAST DELIVERY</Typography>
            <Typography variant="subtitle1" component="span">Free delivery for all orders over $140</Typography>
        </ColumnStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <HeadphonesIcon className="icon"/>
            </ContainerIconStyeled>
            <Typography variant="h6" className="text-center">24/7 CUSTOMER SERVICE</Typography>
            <Typography variant="subtitle1" component="span">Friendly 24/7 customer support</Typography>
        </ColumnStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <VerifiedUserIcon className="icon"/>
            </ContainerIconStyeled>
            <Typography variant="h6" className="text-center">MONEY BACK GUARANTEE</Typography>
            <Typography variant="subtitle1" component="span">We return money within 30 days</Typography>
        </ColumnStyled>
    </WrapperStyled>
}

export default CustomerService;