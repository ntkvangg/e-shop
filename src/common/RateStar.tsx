import React from 'react';
import Rating from '@mui/material/Rating';


const RateStar = ({value, readOnly = true}: {value: number, readOnly?: boolean})=>{
    return <Rating
            name="half-rating-read"
            value={value}
            size='small'
            readOnly = {readOnly}
            onChange={(event, newValue) => {
                
            }}
            precision={0.5}
        />
}

export default RateStar;