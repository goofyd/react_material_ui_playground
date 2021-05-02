import {useState} from 'react';
import TopBar from '../Components/TopBar'
import DisplayName from '../Components/DisplayNames'
import {Container, AppBar, Badge, Dialog, Tabs, Tab, Paper, DialogTitle,
  DialogContent, DialogContentText, DialogActions, Button} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import FavoriteIcon from '@material-ui/icons/Favorite'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import MailIcon from '@material-ui/icons/Mail'

const SamplePage = () =>{
  const defaultState = {
    textFieldName: "",
    selectFieldName: "India"
  }

  const handleOpenDialog = ()=>{
    setOpenDialog(true)
  }

  const handleCloseDialog = ()=>{
    setOpenDialog(false)
  }

  const handleClick = ()=>{
    if(state.textFieldName){
      setIsLoggedOut(!isLoggedOut)
    }else{
      handleOpenDialog(true)
    }
    if(isLoggedOut === false){
      setState({
        textFieldName: '',
        selectFieldName: 'India'
      })
    }
  }

  const handleChange = (e)=>{
    const {name, value} = e.target
    setState({
      ...state,
      [name] : value.trim()
    })
  }

  const handleTab = (e, n) =>{
    setTabValue(n)
  }

  

  const [state, setState] = useState(defaultState)
  const [isLoggedOut, setIsLoggedOut] = useState(true)
  const [tabValue, setTabValue] = useState(0)
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <TopBar status={isLoggedOut} country={state.selectFieldName} name={state.textFieldName}
      handleClick={handleClick} handleChange={handleChange} />
      <Container>
        {!isLoggedOut && <DisplayName />}
      </Container>
      <AppBar position="fixed" color="primary" style={{top:'auto', bottom:'0'}}>
        <Paper square style={{flexGrow:'1', backgroundColor: '#333333'}}>
          <Tabs
              value={tabValue}
              onChange={handleTab}
              variant="fullWidth"
              indicatorColor="primary"
              style={{color: '#fff'}}
              aria-label="icon label tabs example"
            >
              <Tab icon={<PhoneIcon />} aria-label="RECENTS" />
              <Tab icon={<FavoriteIcon />} aria-label="FAVORITES" />
              <Tab icon={<PersonPinIcon />} aria-label="NEARBY" />
              <Tab icon={<Badge badgeContent={2} color="secondary"><MailIcon /></Badge>} aria-label="Mail" />
          </Tabs>
        </Paper>
      </AppBar>
      <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="responsive-dialog-title"
        >
        <DialogTitle id="responsive-dialog-title">{"Input Not Entered!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Enter your Name and Click on Login Button
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SamplePage