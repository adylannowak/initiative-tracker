import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

export default function EditCharacter(props)
{
    const {index, character, handleToggleEdit, handleChange} = props;
    return (
    <>
      <IconButton
        onClick={handleToggleEdit}>
        <SaveIcon/>
      </IconButton>
      <ListItemText
        primary={<TextField 
          id={"edit-name-"+index} 
          label="Name"
          value={character.name}
          onChange={handleChange(index,character)}
          />}
        secondary={
          <TextField
            id={"edit-initiative-"+index}
            type="number"
            value={character.initiative}
            onChange={handleChange(index,character)}
          />}
      />
      </>);
}