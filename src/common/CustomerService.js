import styled from "styled-components";
import {faTruck, faHeadphones, faShield} from "@fortawesome/free-solid-svg-icons";
import Icon from "./FontAwesomeIcon";

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
                <Icon icon={faTruck} className="icon"/>
            </ContainerIconStyeled>
            <h2 className="text-center">Free AND FAST DELIVERY</h2>
            <span>Free delivery for all orders over $140</span>
        </ColumnStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <Icon icon={faHeadphones} className="icon"/>
            </ContainerIconStyeled>
            <h2 className="text-center">24/7 CUSTOMER SERVICE</h2>
            <span>Friendly 24/7 customer support</span>
        </ColumnStyled>
        <ColumnStyled>
            <ContainerIconStyeled>
                <Icon icon={faShield} className="icon"/>
            </ContainerIconStyeled>
            <h2 className="text-center">MONEY BACK GUARANTEE</h2>
            <span>We return money within 30 days</span>
        </ColumnStyled>
    </WrapperStyled>
}

export default CustomerService;