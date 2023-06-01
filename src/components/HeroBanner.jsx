import React from 'react'
import { Button, Box, Typography} from '@mui/material';
import hero from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}}
    position='relative' p='20px'>
      <Typography sx={{color: "#d61615", fontSize: '20px', mb:"35px"}}>Fitness Club</Typography>
      <Typography sx={{fontSize: '30px', fontWeight: 'bolder', mb: '35px'}}>Sweat, Smile <br /> and Repeat</Typography>
      <Typography sx={{mb: '35px', lineHeight: '35px'}}>cheack out the most effective exercises</Typography>
      <Button variant="contained" color="error" 
      sx={{p: '10px',fontSize: '12px', mb: '35px'}}
      >Explore Exercises</Button>
      <Typography sx={{opacity: '0.1', color: "#d61615",fontSize: '250px', fontWeight:"bolder",
        display: {xs: 'none', lg: 'block'}}}>Exercises</Typography>
      <img className='hero-banner-img' src={hero} alt="hero" />
    </Box>
  )
}

export default HeroBanner