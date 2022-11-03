
import './App.css';
import TourCard from './components/TourCard';
import Grid from '@mui/material/Grid';
import  Container from '@mui/material/Container';
import NavBar from './components/NavBar';
import {useState, useEffect} from 'react';



function App() {
  const [images, setImages]= useState([]);
  const [loading, setLoading]= useState(true);
  useEffect(()=>{
    fetchCats()

  }, [])

  const fetchCats= async () => {
    const response = await fetch(`${process.env.REACT_APP_CAT_API_URL}`, {
      headers: {
        'x-api-key': process.env.REACT_APP_CAT_API_KEY
      }
    });
    const data = await response.json()
    setImages(data);
  }


  return (
    <>
      <NavBar/>
      
      <Container sx={{marginTop: 13}}>
      <Grid container spacing={3}>
      { images.map((image) => ( <TourCard key={image.id} image={image}/>)) }
    
  
      
      </Grid>
      </Container>
      </>

  
      
  );
}

export default App;
