import React from 'react'
import { Stack, Box, TextField, Typography, Button} from "@mui/material";
import { useState, useEffect } from 'react';
import { fetchData, exerciseOptions } from "../utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercise, bodyPart, setBodyPart}) => {

  const[search, setSearch] = useState('');
  const[BodyParts, setBodyParts] = useState([]);

  const HandleSearch = async() => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      const searchedExercise = exercisesData.filter((exercise)=>exercise.name.toLocaleLowerCase().includes(search)||
            exercise.equipment.toLocaleLowerCase().includes(search)||
            exercise.target.toLocaleLowerCase().includes(search)||
            exercise.bodyPart.toLocaleLowerCase().includes(search)
          )
          setSearch(' ');
          setExercise(searchedExercise);
    }
  }
  
  useEffect(() => {
    const FetchexercisesData = async()=> { 
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
    }
    FetchexercisesData();
  }, [])
  return (
    <Stack alignItems='center'
    alignContent={'center'}
    >
      <Typography sx={{textAlign: 'center', fontSize: '35px', fontWeight: 'bolder', mb: '30px'}}>
        Awesome Exercises U <br />Shoude Know
      </Typography>
      <Box
      position='relative'
      >
        <TextField value={search} onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        sx={{width: {lg:"1100px", sm: '750px'}, mb: '50px',backgroundColor: '#fff', borderRadius: '40px', input: {border: 'none', borderRadius: '4px'}}}
        />
        <Button className='search-btn' sx={{ position: 'absolute',
    background: '#d32f2f',
    color: '#fff',
    width: '100px',
    fontSize:'16px',
    padding: '14px',
    right: '0'}} 
    onClick={HandleSearch}
    >
          search
        </Button>
      </Box>
      <Box>
        < HorizontalScrollbar 
        data={BodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        BodyParts={BodyParts}
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises