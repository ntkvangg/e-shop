import Header from "@common/NavigationMenu";
import Footer from "@common/Footer";
import TopHeader from "@common/TopHeader";
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const WrapperApp = styled(Box)`
    display: inline-flex;
    flex-direction: column;
    width: 100%;
`


function DefaultLayput({ children }: {children: any}) {
    return (
        <WrapperApp className="wrapper-app">
            <div>
                <TopHeader/>
                <Header />
            </div>
            <Box className="content" sx={{minHeight: '100vh'}}>
                {children}
            </Box>
            <Footer/>  
        </WrapperApp>
    );
}

export default DefaultLayput;
