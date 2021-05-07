import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Frame, withSounds, withStyles } from 'arwes';

const styles = () => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    margin: 'auto',
  },
  centered: {
    flex: 1,
    paddingTop: '20px',
    paddingBottom: '10px',
  },
});

const AppLayout = (props) => {
  return <div></div>;
};

export default withSounds()(withStyles(styles)(AppLayout));
