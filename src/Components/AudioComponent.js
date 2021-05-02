import { Button, Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingTop: theme.spacing(10),
  },
}))

const AudioComp = () => {
  const classes = useStyles()
  const [key, setKey] = useState()

  const playSound = (freq) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    let mainGainNode = audioContext.createGain()
    mainGainNode.connect(audioContext.destination)
    //mainGainNode.gain.value = 100
    let osc = audioContext.createOscillator()
    osc.connect(mainGainNode)
    let type = 'sine'
    osc.type = type
    osc.frequency.value = freq
    osc.start()
    setKey(osc)
  }

  const notePress = (e) => {
    playSound(e)
  }
  
  const noteRelease = () => {
    key.stop()
  }
  
  return (
    <>
      <Grid container className={classes.root} spacing={0}>
        {
          [{name:'C7', id: 2093},
            {name:'D7', id: 2349},
            {name:'E7', id: 2637},
            {name:'F7', id: 2794},
            {name:'G7', id: 3135},
            {name:'A7', id: 3520},
            {name:'B7', id: 3951},
            {name:'C8', id: 4186},  
          ].map(x=>(
            <Grid key={x.name} item xs={1}>
              <Button variant='outlined' onMouseDown={()=> notePress(x.id)} onMouseUp={noteRelease} className={classes.paper}>{x.name}</Button>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default AudioComp