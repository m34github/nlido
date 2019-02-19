import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import Header from './Header.jsx';

const Top = props => {
  const state = {
    codeRef: React.createRef()
  };

  return (
    <>
      <Header />
      <section style={styles.container}>
        <Grid container spacing={16} justify="center">
          <Grid item xs={7}>
            <TextField
              inputRef={state.codeRef}
              placeholder="Enter event code"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => {
                if (state.codeRef.current.value) {
                  props.history.push(`/${state.codeRef.current.value}/chat`)
                }
              }}
            >
              Join
            </Button>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

const styles = {
  container: {
    padding: 24
  }
};

export default Top;
