import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import * as React from 'react';

const VideoInfo = (props) => {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <DialogTitle id="title">{props.title}</DialogTitle>
        <DialogContent>
          <img
            src={props.image}
            alt={'cover-' + props.title}
            width="120px"
            height="140px"
            style={{ backgroundColor: '#414141' }}
          />
          <DialogContentText id="description">{props.description}</DialogContentText>
          <DialogContentText id="year">{props.releaseYear}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VideoInfo;
