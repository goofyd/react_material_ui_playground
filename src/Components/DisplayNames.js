import React , {useState, useEffect} from 'react'
import DisplayCard from './DisplayCard'
import {Grid, Box, Button, Paper} from '@material-ui/core'

const DisplayName = () =>{

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const getData = async()=>{
      let url = {page}?`https://api.github.com/users?page=${page}`:'https://api.github.com/users'
      console.log(url)
      const data = await (await fetch(url)).json()
      const newUsers = data.map(x=>{
        return (
        <Grid key={x.id} item xs={12} sm={6} md={3}>
          <DisplayCard data={x} key={x.id} />
        </Grid>
        )
      })
      setIsLoading(false)
      setUsers([...users, newUsers])
    }
    getData()
  }, [page])

  const getUsers = ()=>{
    setPage(page+1)
  }

  return (
    <Box>
      <Button color="primary" onClick={getUsers} aria-label="outlined primary button group">Fetch Users</Button>
      <Paper>
        <Grid spacing={3} container>
          {isLoading?"Loading....":users}
        </Grid>
      </Paper>
    </Box>
  )

}

export default DisplayName