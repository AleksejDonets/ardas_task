import React from 'react';
import Moment from 'moment';
import { PropTypes } from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './style';

const ConvTime = ({ baseDate, convertTime, convert, classes }) => {
  if (!convert) {
    const timeCreate = Moment(baseDate);
    const timeConvert = Moment(baseDate);
    timeConvert.add(convertTime, 'hours');
  
    const c = Moment.duration(timeConvert.diff(timeCreate));
    const { _data: { hours, minutes } } = c;
    return (
      <Typography inline component="span" className={classes.timeText}>
        { hours }
        :
        { minutes }
      </Typography>
    );
  }
  const base = Moment(baseDate);
  const baseDateConvert = base.calendar();
  return (
    <Typography inline component="span" className={classes.timeText}>
      {baseDateConvert}
    </Typography>
  );
};
ConvTime.propTypes = {
  baseDate: PropTypes.string,
  convertTime: PropTypes.number,
  convert: PropTypes.bool,
}

export default withStyles(style)(ConvTime);