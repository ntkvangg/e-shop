import { Box, Grid, Skeleton } from "@mui/material";

const SkeletonView = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                {Array.from(new Array(6)).map((product: any, index) => (
                    <div key={index}>
                        <Skeleton variant="rectangular" width={345} height={200} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </div>
                ))}
            </Grid>
        </Grid>
    )
};

export default SkeletonView;