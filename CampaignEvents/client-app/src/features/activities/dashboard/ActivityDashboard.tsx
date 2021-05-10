//import { Card } from '@material-ui/core';

import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Feed, Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/loadingComponent';
import { Button, Card, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import { infoCardHeader } from '../../../assets/jss/material-kit-react';



import ActivityList from './ActivityList';
import ActivityFilters from './ActivityFilters';


export default observer( function ActivityDashboard()
{
  const {activityStore} = useStore();
const {loadActivities,activityRegistry} = activityStore;
  

useEffect(() => {
   if(activityRegistry.size <= 1) loadActivities();
  },[activityRegistry.size, loadActivities])
 
  
 
  
 
  
 if(activityStore.loadingInitial) return <LoadingComponent content='loading app'/>
    return  (
      
      <Grid>
      <Grid.Column width={10}>
      <ActivityList 
       />
      </Grid.Column>
      <Grid.Column width='6'>
        <h2>ACTIVITY FILTER</h2>
  
        <ActivityFilters/>
      
)


      </Grid.Column>
    </Grid>
      
      )
    }
)
  