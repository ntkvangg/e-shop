import { Box, Grid, Skeleton } from "@mui/material";

const SkeletonView = () => {
    return (
        <Grid container spacing={2}>
            {Array.from(new Array(8)).map((product: any, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                    <Skeleton variant="rectangular" width={345} height={200} />
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