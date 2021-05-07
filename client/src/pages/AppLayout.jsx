import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Frame, withSounds, withStyles } from 'arwes';

import Header from '../components/Header';

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

const AppLayout = ({ sounds, classes }) => {
  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onAbortSound = () => sounds.abort && sounds.abort.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();

  return (
    <div className={classes.content}>
      <Header />
    </div>
  );
};

export default withSounds()(withStyles(styles)(AppLayout));
