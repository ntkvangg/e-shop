import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardActionArea, CardMedia, Container, Divider, Grid, IconButton, Rating, Skeleton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductService, { IProduct } from "@root/api/services/Product";
import { styled } from '@mui/material/styles';
import Helper from "@root/utils";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SliderCategory from "@common/SliderCategory";
import { useSelector } from "react-redux";
import { isLoading } from "@root/stores/slices/loadingSlice";
import SkeletonView from "@common/SkeletonView";
import { useNavigate } from "react-router-dom";

const InStock = styled(Typography)(({ theme }: { theme: any }) => {
    return {
        color: theme.palette.success.main
    }
})

const ColorButton = styled(Box)(({ theme }: { theme: any }) => {
    return {
        height: '30px',
        width: '30px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        borderRadius: '50%',
        cursor: 'pointer',
        '&.active': {
            border: `1px solid ${theme.palette.primary.main}`
        }
    }
})
const ProductDetail = () => {
    const { id } = useParams<{ id: any }>();
    const [product, setProduct] = useState({} as IProduct);
    const [currentImage, setCurrentImage] = useState('' as string);
    const [selectedColor, setSelectedColor] = useState('#fff' as string);
    const [category, setCategory] = useState('' as string);
    const [productsRelated, setProductsRelated] = useState([] as IProduct[]);
    const { loading } = useSelector(isLoading);
    const navigate = useNavigate();
    const getProductDetail = async () => {
        try {
            const data = await ProductService.getProductDetail(id);
            setCategory(data.category);
            data.colors = ["#fff", "#000", "#f00", "#0f0", "#00f", "#ff0"];
            setCurrentImage(data.thumbnail);
            setProduct(data);
        } catch (error) {

        }
    }

    const getProductsRelated = async () => {
        try {
            const data = await ProductService.getProductsRelated(category);
            setProductsRelated(data.products);
        } catch (error) {

        }
    }

    const onNavigateCheckout = ()=>{
        navigate("/check-out");
    }

    const onSelectedImage = (img: string) => {
        setCurrentImage(img);
    }

    useEffect(() => {
        if (id) {
            getProductDetail();
        }
        if (category) {
            getProductsRelated();
        }
    }, [category, id])
    return (
        <Container maxWidth="lg">
            <Grid container direction={'row'} spacing={2} sx={{ marginTop: 1 }}>
                {loading ?

                    <>
                        <Grid item xs={6}>
                            <Skeleton variant="rounded" height={300} />
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ width: 300 }}>
                                <Skeleton />
                                <Skeleton animation="wave" />
                                <Skeleton animation={false} />
                            </Box>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={6}>
                            <Card sx={{ maxWidth: 600, backgroundColor: 'transparent', boxShadow: 'none', borderRadius: 0 }}>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={currentImage}
                                    alt={product.title}
                                />
                            </Card>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
                                {product.images?.map((image: any, index: number) => (
                                    <Card key={index} sx={{ maxWidth: 80, padding: '8px' }} onClick={() => onSelectedImage(image)}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="50"
                                                loading="lazy"
                                                sx={{ width: '50px' }}
                                                image={image}
                                                alt={product.title}
                                            />
                                        </CardActionArea>
                                    </Card>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <Typography variant="h4" component="h1" gutterBottom>
                                    {product.title}
                                </Typography>
                                <Stack direction="row" spacing={1} alignItems="center" divider={<Divider orientation="vertical" flexItem />}>
                                    <Rating name="read-only" value={product.rating || 5} readOnly />
                                    <InStock variant="body1" gutterBottom color="">In Stock</InStock>
                                </Stack>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography variant="h5" component={'h2'} gutterBottom sx={{ fontWeight: 600 }}>
                                        ${Helper.caclulatePrice(product.price, product.discountPercentage)}
                                    </Typography>
                                    <Typography variant="h6" component="h4" gutterBottom sx={{ textDecoration: 'line-through' }}>
                                        ${product.price}
                                    </Typography>
                                </Stack>
                                <Typography variant="body1" gutterBottom>
                                    {product.description}
                                </Typography>
                                <Box sx={{ marginBottom: 5 }}>
                                    <Typography variant="body1" gutterBottom>
                                        Colors:
                                    </Typography>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        {product.colors?.map((color: any, index: number) => (
                                            <ColorButton onClick={() => setSelectedColor(color)} sx={{ backgroundColor: color }} key={index} className={`${selectedColor === color ? 'active' : ''}`} />
                                        ))}
                                    </Stack>
                                </Box>
                                <Button variant="contained" color="primary" onClick={onNavigateCheckout}>BUY NOW</Button>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <VerifiedUserIcon />
                                        <Typography variant="body1" gutterBottom>
                                            Bảo hành chính hãng 12 tháng
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <ElectricRickshawIcon />
                                        <Typography variant="body1" gutterBottom>
                                            Giao hàng toàn quốc
                                        </Typography>
                                    </Stack>
                                    <Stack direction={'row'} spacing={1}>
                                        <LocalPhoneIcon />
                                        <Typography variant="body1" gutterBottom>
                                            Tổng đài hỗ trợ: 1900.000.000
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </>

                }
            </Grid>
            {
                loading ?
                    <Box component={'div'} sx={{ marginTop: 8 }}>
                        <SkeletonView isCategory={true} />
                    </Box> :
                    <SliderCategory products={productsRelated} label="Related Items" />


            }
        </Container>
    );
}

export default ProductDetail;