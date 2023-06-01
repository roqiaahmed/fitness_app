import React from 'react'
import Icon from '../assets/icons/gym.png'
import { Stack, Typography } from '@mui/material';
const BadyPart = ({item, bodyPart, setBodyPart}) => {
    return (
        <Stack 
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
        >
            <img style={{width: '40px', height: '40px'}} src={Icon} alt={item} />
            <Typography>{item}</Typography>
        </Stack>
)
}

export default BadyPart