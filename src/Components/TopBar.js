import React from 'react'
import {Button, TextField, AppBar, Toolbar, Typography, Box, Container, Card, CardContent, CardActions, Select, InputLabel} from '@material-ui/core'

const TopBar = (props) =>{  

  const inputText = () =>{
    return(
      <Card>
        <CardContent>
          <Typography variant="h6">
            Login Form
          </Typography>
          <TextField style={{marginBottom:'10px'}} name="textFieldName" id="standard-basic" label="Your Name" onChange={props.handleChange} />
          <InputLabel htmlFor="country-select">Country</InputLabel>
          <Select native value={props.country} name="selectFieldName" onChange={props.handleChange}>
            <option value="India">India</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Nepal">Nepal</option>
          </Select>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={props.handleClick}>{statusText}</Button>
        </CardActions>
      </Card>
    )
  }

    let displayText = props.status?
          "You're Logged Out"
          :
          (props.name)?
          `Welcome ${props.name[0].toUpperCase()}${props.name.slice(1)}! from ${props.country || 'India'}`
          :
          'Anonymous User'
    let statusText = props.status?"Login":"Logout"
    return (
      <>
        <Box>
          <Box>
            <AppBar style={{display:'flex'}}>
              <Toolbar style={{flexGrow: '1'}}>
                <Typography varaint="h5" style={{flexGrow:'1'}}>
                  {displayText}
                </Typography>
                {!props.status && <Button variant="contained" color="primary" onClick={props.handleClick}>{statusText}</Button>}
              </Toolbar>
            </AppBar>
          </Box>
          <Box style={{marginTop:'80px'}}>
            <Container>
              {props.status && inputText()}
            </Container>
          </Box>
        </Box>

      </>
    )

}

export default TopBar