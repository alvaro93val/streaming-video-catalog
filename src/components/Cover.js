import { List, ListItem, Typography } from '@mui/material';
import * as React from 'react';

const Cover = (props) => {
  return (
    <List
      style={{
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <ListItem>
        <img
          src={props.image}
          alt={'cover-' + props.title}
          width="120px"
          height="140px"
          style={{ backgroundColor: '#414141' }}
        />
      </ListItem>
      <ListItem>
        <Typography variant="subtitle2" color="text.secondary">
          {props.title}
        </Typography>
      </ListItem>
      {props.subtitle ? (
        <Typography
          variant="h5"
          color="white"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {props.subtitle}
        </Typography>
      ) : (
        <></>
      )}
    </List>
  );
};

export default Cover;
