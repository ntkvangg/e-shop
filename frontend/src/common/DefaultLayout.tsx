import Header from "@common/NavigationMenu";
import Footer from "@common/Footer";
import TopHeader from "@common/TopHeader";
import styled from "styled-components";
import { Container, Box } from '@mui/material';

const WrapperHeader = styled(Box)`
    
`

const WrapperApp = styled.div`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
`

const WrapperContent = styled.div`
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 10px;
    }
`
function DefaultLayput({ children }: {children: any}) {
    return (
        <WrapperApp className="wrapper-app">
            <div>
                <TopHeader/>
                <Header />
            </div>
            <Box className="content" sx={{minHeight: 'calc(100vh - 65px)'}}>
                {children}
            </Box>
            <Footer/>  
        </WrapperApp>
    );
}

export default DefaultLayput;
