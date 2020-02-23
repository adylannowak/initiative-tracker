import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ListItemText from '@material-ui/core/ListItemText';

export default function Character(props)
{
    console.log("character display", props);
    const {character, handleClick} = props;
    return (<>
    <IconButton
      onClick={handleClick}>
      <EditIcon/>
    </IconButton>
    <ListItemText
      primary={character.name}
      secondary={character.initiative}
    />
  </>);
}