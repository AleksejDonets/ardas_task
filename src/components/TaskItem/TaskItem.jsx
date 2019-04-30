import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import EditableLabel from 'react-inline-editing';
import { PropTypes } from 'prop-types';
import { ConvTime } from '../ConvTime';
import { TagBlock } from '../TagBlock';

import style from './style';

const TaskItem = ({ task, classes, location }) => {
  const tagsList = task.tags;
  return (
    <Card className={classes.blockTask}>
      <CardContent>
        <NavLink to={`/task/${task.id}`} className={classes.noDecoration} >
          {
            task.is_high_priority ?
              (
                <Typography color="textPrimary" component="h2" gutterBottom className={classes.headTask}>
                  <EditableLabel
                    text={task.name}
                    labelClassName={classes.headTask}
                    inputFontSize="18px"
                    labelFontWeight="700"
                    isEditing={false}
                  />
                </Typography>
              )
              :(
                <Typography color="textSecondary" component="h2" gutterBottom className={classes.headTask}>
                  <EditableLabel
                    text={task.name}
                    labelClassName={classes.headTask}
                    inputFontSize="18px"
                    labelFontWeight="400"
                    isEditing={false}
                  />
                </Typography> 
              )
          }
        </NavLink>
        <Typography>
          Затраченое а задачу время:
          <ConvTime baseDate={task.creation_date} convertTime={task.actual_effort} />
          часов
        </Typography>
        <Typography>
          Общая оценка задачи:
          <ConvTime baseDate={task.creation_date} convertTime={task.estimated_effort} />
          часов
        </Typography>
        <Typography>
          Дата окончания задачи:
          <ConvTime baseDate={task.due_date} convert />
        </Typography>
        {
          location === '/' ?
            (
              <Typography>
                Описание :
                {task.description}
              </Typography>
            )
            : ('')
        }     
        <TagBlock listTags={tagsList} />
      </CardContent>
    </Card>
  );
};


export default withStyles(style)(TaskItem);
