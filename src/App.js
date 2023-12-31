import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components';

export default function App() {
  return (
    <Router>
        <Box sx={{ backgroundColor: '#000',  }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetail />} />
                <Route path="/channel/:id" element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Box>
    </Router>
  )
}
