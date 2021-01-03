import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import land1 from './images/land1.jpg';
import land2 from './images/land2.jpg';
import land3 from './images/land3.jpg';
import land4 from './images/land4.jpg';
import land5 from './images/land5.jpg';
import land6 from './images/land6.jpg';
import land7 from './images/land7.jpg';
import land8 from './images/land8.jpg';
import land9 from './images/land9.jpg';
import land10 from './images/land10.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
  icon: {
    color: '#ffff',
    fontSize: 12,
  },

}));

const tileData = [
    {
        img: land1,
        title: 'Surda',
        price: '170,000$',
        area: '2000 square meters'
    },
    {
        img: land2,
        title: 'Birzeit',
        price: '100,000$',
        area: '500 square meters'
    },
    {
        img: land3,
        title: 'Ramallah',
        price: '1000,000$',
        area: '600 square meters'
    },
    {
        img: land4,
        title: 'Al-Bireh',
        price: '1,200,000$',
        area: '800 square meters'
    },
    {
        img: land5,
        title:  'Jericho',
        price: '400,000$',
        area: '900 square meters'
    },
    {
      img: land6,
      title: 'Beit Rima',
      price: '50,000$',
      area: '1340 square meters'
    }
    ,{
      img: land7,
      title: 'Kobar',
      price: '30,000 JOD',
      area: '650 square meters'
    },
    {
      img: land8,
      title: 'Hebron',
      price: '500,000$',
      area: '2190 square meters'
    },
    {
      img: land9,
      title: 'Betonia',
      price: '250,000$',
      area: '1510 square meters'
    },
    {
      img: land10,
      title: 'Jerusalem',
      price: '90,000 JOD',
      area: '1800 square meters'
    }
]

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Lands for sale</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>
                  Price: {tile.price} <br></br>
                  Area: {tile.area}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  More Info 
                </IconButton>
                
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}


