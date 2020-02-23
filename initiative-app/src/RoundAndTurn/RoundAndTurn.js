import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    characterAdd: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}));

export default function RoundAndTurn(props) {
    const {count, currentTurn, setCurrentTurn} = props;
    //const [currentTurn, setCurrentTurn]=useState(0);
    const [roundNumber, setRoundNumber]=useState(1);

    return (
        <div>
        <Typography noWrap>Round: {roundNumber}</Typography>
        {(count)?
        <>
            <Button
            onClick={e=>{
                console.log('current turn is', currentTurn)
                const nextTurn = (currentTurn+1)%count;
                setCurrentTurn(nextTurn);
                console.log("Advancing to turn", nextTurn);
                if(nextTurn===0) setRoundNumber(roundNumber+1)
            }}>Next Turn</Button>
            <Button
            onClick={e=>{
                const prevTurn = (currentTurn===0)?count-1:currentTurn-1;
                setCurrentTurn(prevTurn);
                console.log("Prev turn", prevTurn);
                if(currentTurn===0){ setRoundNumber(roundNumber-1) }
            }}
            disabled={(roundNumber<=1&&currentTurn===0)?true:false}
            >Prev Turn</Button>
            <Button
            onClick={e=>{setRoundNumber(0);setCurrentTurn(0)}}>Reset</Button>
         </>
          :<Typography noWrap>Add a Character</Typography>}
        </div>);
}