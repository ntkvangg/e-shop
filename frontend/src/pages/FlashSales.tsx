import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Skeleton, Stack, Tab, Tabs, Typography } from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';
import CardProduct from "@common/ProductCard";
import ProductService from "@root/api/services/Product";
import SkeletonView from "@common/SkeletonView";
import {useSelector} from 'react-redux';
import {isLoading} from '../stores/slices/loadingSlice';

const FlashSales = () => {
    const [value, setValue] = useState('one');
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [limit, setLimit] = useState(8);
    const {loading} = useSelector(isLoading);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        if (newValue === "one") {
            setSkip(0);
            setLimit(8);
        } else {
            setSkip(90);
            setLimit(8);
        }

    };

    const getProductsFashSales = async (skip: number, limit: number) => {
        try {
            const data = await ProductService.getFlashSaleProducts({ skip: skip, limit: limit });
            setProducts(data.products);
        } catch {
            console.log("error");
        }

    }
    const onViewMoreProducts = () => {
        setSkip(skip);
        setLimit(limit + 10);
    }
    useEffect(() => {
        getProductsFashSales(skip, limit);
    }, [skip, limit])
    return (
        <Box sx={{ display: "flex", flexDirection: 'column', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <Box sx={{ marginBottom: 5 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="wrapped label tabs example"
                    centered
                >
                    <Tab
                        value="one"
                        label="10:00 10/23 On Sale"
                        wrapped
                        color="warning"
                        icon={<BoltIcon color="warning" />}
                    />
                    <Tab
                        value="two"
                        label="10:00 24/10 Coming Soon"
                        icon={<BoltIcon color="warning" />}
                    />
                </Tabs>
            </Box>
            <Container maxWidth="xl">
                {
                    loading ? <SkeletonView /> : <Grid container spacing={2}>
                        {products.map((product: any, index: number) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                                <CardProduct key={index} productItem={product} />
                            </Grid>
                        ))}
                    </Grid>
                }
            </Container>
            {
                loading ? null : <Box textAlign={'center'}>
                    <Button color="error" variant="contained" onClick={onViewMoreProducts}>View more 10 items</Button>
                </Box>
            }

        </Box>
    )
};

export default FlashSales;

