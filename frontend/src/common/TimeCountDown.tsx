import React, { useEffect, useState } from 'react';
import { Stack, Typography } from "@mui/material";

interface Props {
    endTime: number;
}

const TimeCountDown = ({ endTime }: Props) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        return Math.max(0, endTime - now); // Ensure timeLeft is not negative
    };

    const [timeLeft, setTimeLeft] = useState(()=>calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            if (newTimeLeft <= 0) {
                clearInterval(intervalId);
            } else {
                setTimeLeft(newTimeLeft);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (time: number) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <Stack direction="row" justifyContent={'center'} spacing={3} alignItems={'center'}>
            <Stack direction={'column'}>
                <Typography>Days</Typography>
                <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>{formatTime(Math.floor(timeLeft / (1000 * 60 * 60 * 24)))}</Typography>
            </Stack>
            <Stack direction={'column'}>
                <Typography>Hours</Typography>
                <Typography variant='h6' sx={{ fontSize: '2rem', fontWeight: 700 }}>{formatTime(Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))}</Typography>
            </Stack>
            <Stack direction={'column'}>
                <Typography>Minutes</Typography>
                <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>{formatTime(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)))}</Typography>
            </Stack>
            <Stack direction={'column'}>
                <Typography>Seconds</Typography>
                <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>{formatTime(Math.floor((timeLeft % (1000 * 60)) / 1000))}</Typography>
            </Stack>
        </Stack>
    );
};

export default TimeCountDown;
