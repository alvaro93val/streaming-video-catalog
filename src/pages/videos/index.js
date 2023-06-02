// @ts-nocheck
import { Box, Button, Grid } from '@mui/material';
import Cover from 'components/Cover';
import VideoInfo from 'components/PopupInfo';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../../data/sample.json';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [videoStream, setVideoStream] = useState();
  const type = useLocation().pathname.slice(1);
  const handleClosePopup = () => setOpenPopup(false);
  const handleClickOpenPopup = (video) => {
    setVideoStream(video);
    setOpenPopup(true);
  };

  useEffect(() => {
    setVideos(
      data.entries
        .filter((video) => video.programType === type && video.releaseYear >= 2010)
        .slice(0, 20)
        .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0))
    );

    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <div>
      {showLoader ? (
        <Box height={200}>Loading...</Box>
      ) : videos.length ? (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
          {videos.map((video) => {
            return (
              <Grid key={video.title} item xs={2}>
                <Button onClick={() => handleClickOpenPopup(video)}>
                  <Cover title={video.title} image={video.images['Poster Art'].url} />
                </Button>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Box height={200}>Oops, something went wrong...</Box>
      )}
      {videoStream ? (
        <VideoInfo
          open={openPopup}
          handleClose={handleClosePopup}
          title={videoStream.title}
          image={videoStream.images['Poster Art'].url}
          description={videoStream.description}
          releaseYear={videoStream.releaseYear}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Videos;
