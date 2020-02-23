import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    characterAdd: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function AddCharacter(props) {
    const [newName, setNewName] = useState('');
    const handleNewNameChange = event =>setNewName(event.target.value);
  
    const [newInitiative, setNewInitiative] = useState(1);
    const handleNewInitiativeChange = event =>setNewInitiative(event.target.value);

    const {handleClick} = props;
    const classes = useStyles();



    return (
        <div className={classes.characterAdd} autoComplete="off">
            <TextField 
            id="character-name" 
            label="Name"
            value={newName}
            onChange={handleNewNameChange}
            />
            <TextField
            id="initiative-result"
            label="Initiative"
            type="number"
            value={newInitiative}
            onChange={handleNewInitiativeChange}
            />
            <Button
            onClick={handleClick(newName,newInitiative)}
            >Add</Button>  
        </div>);
}