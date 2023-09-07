import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
  <Box p={2} sx={{overflowY: 'auto', height: '90vh', fkex: 2}}>
    <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: 'white'}}>
      Showing results for: {searchTerm}<span style={{ color: '#FC1503'}}> videos</span>
    </Typography>

    <Videos videos={videos} />
  </Box>
  )
}
