import React from 'react';
import { Avatar, Fab, Grid, Icon, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import moment from 'moment';

import Header from './Header.jsx';

const Chat = props => {
  const state = {
    nameRef: React.createRef(),
    commentRef: React.createRef(),
    initComment: {
      timestamp: 0,
      name: '',
      comment: ''
    }
  };

  if (props.match.params.code !== '0222') {
    props.history.push('/');
  }

  return (
    <>
      <Header />
      <Tabs value={0} indicatorColor="primary" textColor="primary" variant="fullWidth">
        <Tab label="Chat" />
        <Tab label="Polls" disabled />
      </Tabs>

      <section style={styles.container}>
        {
          data.comments.map((comment, i) => (
            <section key={i} style={{ paddingBottom: 12 }}>
              <section style={styles.balloon}>
                <Grid container spacing={16} alignItems="center">
                  <Grid item>
                    <Avatar src={`https://avatars.dicebear.com/v2/male/${comment.name}.svg`} style={styles.avatar} />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">{ comment.name || '社員番号７７４' }</Typography>
                  </Grid>
                </Grid>
                <section style={styles.comment}>
                  <Typography variant="h6">
                    { comment.comment }
                  </Typography>
                </section>
              </section>
              <section style={styles.timestamp}>
                <Typography variant="body1">
                  { moment(comment.timestamp).format('LT') }
                </Typography>
              </section>
            </section>
          ))
        }
      </section>

      <section style={styles.submit}>
        <section>
          <TextField inputRef={state.nameRef} placeholder="name" />
        </section>
        <section>
          <Grid container spacing={16}>
            <Grid item xs={8}>
              <TextField inputRef={state.commentRef} placeholder="comment *" variant="outlined" margin="dense" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <Fab color="secondary" onClick={() => {
                const name = state.nameRef.current.value;
                const comment = state.commentRef.current.value;

              }}>
                <Icon>create</Icon>
              </Fab>
            </Grid>
          </Grid>
        </section>
      </section>
    </>
  );
};

const styles = {
  container: {
    padding: 24,
    paddingBottom: 90 + 24 + 24
  },
  balloon: {
    background: '#eee',
    padding: 12
  },
  avatar: {
    height: 36,
    width: 36
  },
  comment: {
    paddingTop: 12
  },
  timestamp: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  submit: {
    background: '#eee',
    position: 'fixed',
    bottom: 0,
    height: 90,
    width: '100vw',
    padding: 24
  }
};

const data = {
  comments: [
    {
      timestamp: 1410715640,
      name: '',
      comment: 'Hello'
    },
    {
      timestamp: 1410715640,
      name: 'Test',
      comment: 'ham'
    },
    {
      timestamp: 1410719620,
      name: 'Spam',
      comment: 'all your base are belong to us'
    },
    {
      timestamp: 1410719640,
      name: 'Spam',
      comment: 'all your base are belong to us'
    },
  ]
};

export default Chat;
