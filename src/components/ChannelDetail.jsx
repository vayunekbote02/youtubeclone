import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ background: 'rgb(40,1,1) linear-gradient(168deg, rgba(40,1,1,1) 0%, rgba(252,2,2,1) 46%, rgba(250,36,5,1) 59%, rgba(8,1,1,1) 100%)', zIndex: 10, height: '300px'}}/>
      <ChannelCard channelDetail={channelDetail} marginTop='-93px'></ChannelCard>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: {sm: '100px'}}} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}
