import React from 'react'
import { Box } from "@mui/material";
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useState } from "react";
const Home = () => {

  const[exercise, setExercise] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercise={setExercise}
      setBodyPart={setBodyPart}
      bodyPart={bodyPart}
      />
      <Exercises 
      setExercise={setExercise}
      exercise={exercise}
      bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home