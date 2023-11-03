import { Box, Grid, Skeleton } from "@mui/material";

interface Props{
    items?: number,
    isCategory?: boolean
}
const SkeletonView = ({items = 4, isCategory}: Props) => {
    return (
        <Grid container spacing={2}>
            {isCategory && <Grid item xs={12}>
                <Skeleton width="40%" height={50}/>
            </Grid>}
            {Array.from(new Array(items)).map((product: any, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                    <Skeleton variant="rectangular" height={250} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" />
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
};

export default SkeletonView;