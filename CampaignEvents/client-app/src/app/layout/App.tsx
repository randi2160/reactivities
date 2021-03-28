import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import Navbar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

import agent from '../api/agent';
import LoadingComponent from './loadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
 
 const {activityStore} = useStore();
 const [loading, setLoading]= useState(true);


 useEffect(() => {
  activityStore.loadActivities();
 },[activityStore])

 

 

 
if(activityStore.loadingInitial) return <LoadingComponent content='loading app'/>

  return (
   
    <Fragment >
     
    <Navbar/>
    <Container style= {{marginTop: '7em'}}>
      
      <ActivityDashboard 
      />
      
    </Container>
     
    </Fragment>


  );
}

export default observer (App);
