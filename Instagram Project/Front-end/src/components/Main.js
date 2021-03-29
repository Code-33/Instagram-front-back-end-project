import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, CardContent} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import React, {useEffect, useState} from 'react';

const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 614,
          
        },
        media: {
          height: 0,
          paddingTop: '170.77%', // 16:9
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        content: {
          padding: 10,
        },
        mediaWrapper: {
          marginTop: 90
        }
      }));



const Main = () => {
    const classes = useStyles();
    
   const [photos, setPhotos] = useState([]);

   const [exp, setExp] = useState('posts');

   const [comments, setComments] = useState([]);

   useEffect(()=>{
    async function fetchPhotos(){
      const response = await fetch(`http://localhost:5000/api/${exp}/`)
      const data = await response.json();
      const photoArray = data.posts_data.map(element => {
            return {
              id: element.id,
              photo_cap : element.photo_cap,
              user_id: element.users_id,
              url: element.url,
            }
      });
      setPhotos(photoArray);
    }

    async function fetchComments(){
      const response = await fetch('http://localhost:5000/api/comments/')
      const data = await response.json();
      
      const commentArray = data.data.map(element =>{
        return {
          id: element.id,
          users_id: element.users_id,
          posts_id: element.posts_id,
          comment_text: element.comment_text
        }
        
      });
      setComments(commentArray);
    }
    
    fetchPhotos();
    fetchComments();
    
   }, [exp])

   const checkIfCommentExists = (index)=>{
     if(comments[index]){
      if (photos[index].id === comments[index].posts_id){

        return (
          <p>{comments[index].users_id} : {comments[index].comment_text}</p>
        )
      }else{
        return (
          null
        )
      }
     }
   }

    const putOnWindow = ()=>{
      const displayArr = [];
     
      if(photos.length > 0){
         for(let i=0; i<photos.length; i++){
    
           displayArr.push(

            <Card className={classes.root} key={photos[i].id}>
            <CardHeader title={photos[i].photo_cap}>
               {/* show username */}
            </CardHeader>
            <CardMedia
              //  insert post image here
                className={classes.media}
                image={photos[i].url}
            >    
            </CardMedia>
            <CardContent className={classes.content}>
                 {/* Insert comments here
                  will probably need expand to load more comments 
                  <TextField className={classes.root}id='outlined-basic' label='Add a comment...' variant='outlined' ></TextField>
                 <p>{element.posts_data.comment}</p>
                 {photos[i].id === comments[i].posts_id ? <p>{comments[i].comment_text}</p> : null} 
                 <li key={element.id}>{element.name}</li>*/}
                  {checkIfCommentExists(i)} 
            </CardContent>
        </Card>
           )
         }
      }

  return displayArr;
  }

    return (
         
        <div>
            {/*MAIN*/}
            {putOnWindow()}
        </div>
    )
}

export default Main
