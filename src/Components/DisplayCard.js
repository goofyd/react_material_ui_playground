import React from "react"
import {Card, CardActionArea, CardContent, CardActions, CardMedia,
        Button, Typography} from '@material-ui/core';

const DisplayCard = (props) =>{

    const {login, repos_url:url, avatar_url, type} = props.data

    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            src={avatar_url}
            title={login}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {login}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component="a" href={url}>
            Share
          </Button>
        </CardActions>
      </Card>
    )
}

export default DisplayCard