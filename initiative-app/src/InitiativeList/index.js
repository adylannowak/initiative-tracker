import React, {useState, useEffect} from 'react';

import {setItem} from '../Storage'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import ListItemText from '@material-ui/core/ListItemText';

import Character from './Character';
import EditCharacter from './EditCharacter';
import MyDivider from './MyDivider';

const useStyles = makeStyles(theme => ({
    InitiativeList: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function InitiativeList(props) {

    const {initiativeList, setInitiativeList, currentTurn, nextRound} = props;
    const classes = useStyles();

    const sortByInitiative=(list)=>{list.sort((a,b)=>b.initiative-a.initiative);return list;}

    const handleInitiativeToggleEdit = index=>event=>{console.log("toggle edit!",index,event);initiativeList[index].editing=!initiativeList[index].editing; const sortedList=sortByInitiative(initiativeList.slice());setInitiativeList(sortedList);setItem('initiativeList',JSON.stringify(sortedList));}
    const handleInitiativeListRemove = index=>event=>{initiativeList.splice(index,1);setInitiativeList(initiativeList.slice());setItem('initiativeList',JSON.stringify(initiativeList));}
    const handleInitiativeListEdit = (index,character)=>event=>{
      console.log("editing...",index,character, event.target.value, event.target);
      let key = event.target.id.slice(event.target.id.indexOf("-")+1,event.target.id.lastIndexOf("-"));
      console.log("replacing", key, event.target.value);
      initiativeList.splice(index,1,{...character,[key]:event.target.value});
      setInitiativeList(initiativeList.slice());console.log("replaced with",initiativeList)
    }

    const rearrangeList = (array, offset)=>{let tmp = array.slice();let removed = tmp.splice(0,offset);console.log("array returning",offset,[...tmp,...removed] ); return [...tmp,...removed]}

    const count = initiativeList.length;    

    return (
        <List className={classes.characterList}>
        {
        rearrangeList(initiativeList,currentTurn).map((character,index)=>(
        <>
          {(index===0)?<MyDivider message={(currentTurn===0)?"Current Turn Top of the Round":"Current Turn"}/>:(index===count-currentTurn)?<MyDivider message={"Top of the Round"}/>:null}
          <ListItem key={'character-'+index} alignItems='flex-start'>
            {(character.editing)?
            <EditCharacter index={index} character={character} handleToggleEdit={handleInitiativeToggleEdit(index)} handleChange={handleInitiativeListEdit}/>
            :<Character character={character} handleClick={handleInitiativeToggleEdit(index)}/>
            }
            <ListItemSecondaryAction>
              <IconButton
                onClick={handleInitiativeListRemove(index)}>
                <DeleteIcon/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          </>))
        }
      </List>
      );
}