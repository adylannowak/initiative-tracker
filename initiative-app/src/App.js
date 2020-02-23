import React, {useState, useEffect} from 'react';


import { makeStyles } from '@material-ui/core/styles';

import './App.css';

import AddCharacter from './AddCharacter/AddCharacter'
import RoundAndTurn from './RoundAndTurn/RoundAndTurn'
import InitiativeList from './InitiativeList'
import { getItem, setItem } from './Storage';

const useStyles = makeStyles(theme => ({
  root: {
    width:'100%',
    maxWidth: 360
  },
  characterList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  characterAdd: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));


function App(props) {

  const classes = useStyles();

  const [initiativeList, setInitiativeList] = useState([(props.initiativeList)?props.initiativeList:[]]);
  const handleInitiativeListAdd = (name="Bob",initiative=1)=>event=>{const sortedList =sortByInitiative(initiativeList.concat({name, initiative, editing:false})); setInitiativeList(sortedList);setItem('initiativeList',JSON.stringify(sortedList));}

  const sortByInitiative=(list)=>{list.sort((a,b)=>b.initiative-a.initiative);return list;}

  const [currentTurn, setCurrentTurn]=useState(0);

  useEffect(()=>{
    let old = getItem('initiativeList');
    console.log("old",old);
    setInitiativeList((old)?old:[]);
    return ()=>console.log("setting to", initiativeList)||setItem('initiativeList',JSON.stringify(initiativeList));
  },[]);

  return (
    <div className={classes.root}>
      <AddCharacter handleClick={handleInitiativeListAdd} />
      <RoundAndTurn count={initiativeList.length} currentTurn={currentTurn} setCurrentTurn={setCurrentTurn} />
      <InitiativeList initiativeList={initiativeList} setInitiativeList={setInitiativeList} currentTurn={currentTurn}/>
    </div>
  );
}

export default App;
