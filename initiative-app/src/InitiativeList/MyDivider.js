import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

export default function MyDivider(props)
{
    return (<> <Divider/>
        <li>
          <Typography
            color="textSecondary"
            display="block"
            variant="caption"
          >
            {props.message}
          </Typography>
        </li>
        </>);
}