import React from 'react'
import { Stack, Typography, Box } from '@mui/material'

import ExerciseCard from './ExerciseCard';

const Esercises = ({bodyPart, setExercise, exercise}) => {
  return (
    <Box sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Resoults</Typography>
      <Stack direction={'row'}>
        {exercise.map((exercise, index)=> (
          <ExerciseCard exercise={exercise} key={index} />
        )
        )}
      </Stack>
    </Box>
  )
}


export default Esercises