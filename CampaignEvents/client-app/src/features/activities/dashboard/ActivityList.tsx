
import { observer } from 'mobx-react-lite';
import React, { Fragment } from 'react';
import {Header,  Item,  Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

import ActivityListItem from './ActivityListItem';


var cardStyle = {
    cardskhem: {
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "6px",
      color: "rgba(0, 0, 0, 0.87)",
      background: "#fff",
      width: "100%",
      boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      minWidth: "0",
      wordWrap: "break-word",
      fontSize: ".875rem",
      transition: "all 300ms linear"
    },
    cardPlain: {
      background: "transparent",
      boxShadow: "none"
    },
    cardCarousel: {
      overflow: "hidden",
      border: "0",
      marginBottom: "30px",
      marginTop: "30px",
      borderRadius: "6px",
      color: "rgba(0, 0, 0, 0.87)",
      background: "#fff",
      width: "100%",
      boxShadow:
        "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        display: "flex",
        minWidth: "0",
        fontSize: ".875rem",
        transition: "all 300ms linear"
    },
   
    
}

  

export default observer( function ActivityList(){
   
    //const [target,setTarget] =useState('');
    const {activityStore} = useStore();
    const {groupedActivities}= activityStore;
    const cardBodyStyle = {
        cardBody: {
          padding: "0.9375rem 1.875rem",
          flex: "1 1 auto"
        }
      };
  
    return (
        <>
       
       
        {groupedActivities.map(([group,activities])=> (
            
            <Fragment key={group}>
                     <Header sub color='teal'>
                         {group}
                     </Header>
                     
             {activities.map(activity=>( 
                 <ActivityListItem key={activity.id} activity={activity}
                 />
             ))}
          
            </Fragment>
            
        )
            
            
            )}
        </>
         
    )
})