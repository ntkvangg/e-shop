import { Badge, Box, Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors';
import { Help } from '@mui/icons-material';
import Helper from '@root/utils';



const CardOred = styled(Card)(({ theme }: { theme: any }) => {
    console.log(theme);
    return {
        borderRadius: 0,
        boxShadow: 'none'
    }
});

const FormVoucher = styled(Box)(({ theme }: { theme: any }) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        padding: '1rem 0',
        borderTop: `1px solid ${theme.palette.grey[300]}`,
        marginTop: '1rem'
    }
});

const BoxContent = styled(Box)(({ theme }: { theme: any }) => {
    return {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 0',
        marginTop: '1rem',
        borderTop: `1px solid ${theme.palette.grey[300]}`
    }
})
interface Props {
    items?: any
}
const products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        count: 2,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": ["https://i.dummyjson.com/data/products/1/1.jpg", "https://i.dummyjson.com/data/products/1/2.jpg", "https://i.dummyjson.com/data/products/1/3.jpg", "https://i.dummyjson.com/data/products/1/4.jpg", "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]
    }
]
const CheckOut = ({ items = products }: Props) => {
    return (
        <Container maxWidth={'lg'}>
            <Grid container direction={'row'} spacing={2}>
                <Grid item xs={4}>
                    <Typography component={'h4'}>Thông tin nhận hàng</Typography>
                    <Box component={'form'}>
                        <Grid container>
                            <Grid item>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Typography component={'h4'}>Vận chuyển</Typography>
                    <Typography component={'h4'}>Thanh toán</Typography>
                </Grid>
                <Grid item xs={4}>
                    <CardOred>
                        <CardHeader title={<Typography component={'h4'}>Đơn hàng</Typography>} />
                        <CardContent sx={{ borderTop: '1px solid #d8d8d8' }}>
                            {items.map((item: any, index: number) => (
                                <Stack direction={'row'} justifyContent={'space-between'} key={index} alignItems={'center'}>
                                    <CardMedia image={item.thumbnail} title="product" sx={{ height: 50, width: 50 }} />
                                    <Typography>{item.count} x {Helper.caclulatePrice(item.price, item.discountPercentage)}</Typography>
                                </Stack>
                            ))}
                            <FormVoucher component={'form'} sx={{}}>
                                <TextField
                                    label=""
                                    variant='outlined'
                                    size='small'
                                    placeholder='coupon'
                                    fullWidth
                                />
                                <Button variant='contained' color="primary">Apply</Button>
                            </FormVoucher>

                            <BoxContent >
                                <Typography>Tạm tính</Typography>
                                <Typography></Typography>
                            </BoxContent>
                            <BoxContent>
                                <Typography component={'h4'}>Tổng cổng</Typography>
                                <Typography color={'primary'}>{Helper.caclulateBill(500, 18)}</Typography>
                            </BoxContent>
                        </CardContent>
                    </CardOred>

                </Grid>
            </Grid>
        </Container>
    )
}

export default CheckOut;