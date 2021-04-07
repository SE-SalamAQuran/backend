import React,{useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./styles/Layout.module.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Grid from "@material-ui/core/Grid";


export default function App() { 


  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }

function Mybutton(){
  return 
<Button href="http://localhost:3000/appointment" size="small" color="primary">
          book appiotment
        </Button>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Mybutton />;
  }
  return null;
}


  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 300,
    },
  });

     
      const [spacing, setSpacing] = React.useState(2);
     
    
      const handleChange = (event) => {
      setSpacing(Number(event.target.value));
       
    
      };



    

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);





    const classes = useStyles();

    const [data, setData] = useState([]);
  

    http://localhost:5000/properties/lands
    useEffect(() => {
      fetch("http://localhost:5000/properties/roofs")
        .then(res => res.json())
        .then((data)=> setData(data));

       
       
       
    }, []);


    
        return (


         
       

  <Container> 
  <Typography color="textPrimary" gutterBottom variant="h2" align="center">
    Roof
  </Typography>
  <Grid container spacing={3}>
          {data.map((character) => (
            <Grid item xs={12} sm={4} key={character.id}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={character.imgPath}
                />
                <CardContent>
                  <Typography color="primary" variant="h5">
                
                    {character.city}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    Price : {character.price}
                  </Typography>
                  <CardActions>
        
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>


  </Container>

      




    
       
        );
      
         

    
          }