import React from 'react';
import { Typography, Chip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

const TagBlock = ({ listTags, classes }) => {
  if (listTags) {
    return (
      <Typography component="span" className={classes.blockTag}>
        Теги:
        {
          listTags.map(tag => (
            <Chip label={tag} key={tag} className={classes.blockTag} />
          ))
        }
      </Typography>
    );
  }
  return (
    ''
  );
};

export default withStyles(style)(TagBlock);
