import {makeAutoObservable, runInAction} from 'mobx';

import agent from '../api/agent';
import { Activity } from '../models/activity';
import {v4 as uuid} from 'uuid';
 

export default class ActivityStore{
    activityRegistry = new Map<string,Activity>();
    //activities: Activity[] = [];
    selectedActivity: Activity | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial= true;

    constructor()
    {
        makeAutoObservable(this)
    }
    
    get activitiesByDate(){
        return Array.from(this.activityRegistry.values())
        .sort((a, b)=> Date.parse(a.date)-Date.parse(b.date));
    }
    

    get groupedActivities() {

        return Object.entries(
            this.activitiesByDate.reduce((activities, activity)=> {
                const date = activity.date;
                activities[date] = activities[date] ? [...activities[date], activity] :[activity];
                return activities;
            }, {}as {[key:string]: Activity[]} )
        )
    }
    
    loadActivities = async () => {
     this.loadingInitial=true;
     try{
         const activities = await agent.Activities.list();
        
            activities.forEach(activity=>{
                this.setActivity(activity);
                //this.activities.push(activity);
              })
              this.SetLoadingInitial(false);  

     } catch (error) {
        console.log(error);
            this.SetLoadingInitial(false);
     }

    }

  loadActivity = async (id: string) => {
     // this.loadingInitial =false;
   let activity = this.getActivity(id);
   if(activity){
       this.selectedActivity = activity;
       return activity;
   }else
   {
       this.loadingInitial=true;
       try{

        activity = await agent.Activities.details(id);
        this.setActivity(activity);
        runInAction(()=>{
            this.selectedActivity=activity;
        })
        this.SetLoadingInitial(false);
        return activity;

       }catch (error){
           console.log(error);
           this.SetLoadingInitial(false);
       }

       
   }
  }
  
  private setActivity =(activity: Activity) => {
    activity.date= activity.date.split('T')[0];
    this.activityRegistry.set(activity.id, activity);
  }
  //create a private helper method

  private getActivity = (id: string) => {
    return this.activityRegistry.get(id);
  }


    SetLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
    }
/*
    selectActivity = (id:string) => {
        this.selectedActivity = this.activityRegistry.get(id);

    }
    cancelSelectedActivity =() =>{
        this.selectedActivity = undefined;

    }

    openForm = (id?: string) => {
        id ? this.selectActivity(id) : this.cancelSelectedActivity();
        this.editMode =true;
    }
    closeForm = ()=>{
        this.editMode =false;
    }*/

    createActivity = async (activity: Activity) =>{
    this.loading= true;
   // activity.id = uuid();
    try{
        await agent.Activities.create(activity);
        runInAction(()=> {
            this.activityRegistry.set(activity.id,activity);
            this.selectedActivity = activity;
            this.editMode=false;
            this.loading= false;

        })
    }catch (error) {
     console.log(error);
     runInAction(()=> {
         this.loading=false;
     })
    }

}
    updateActivity = async (activity: Activity) =>{
        this.loading= true;
        activity.id = uuid();
        try{
            await agent.Activities.update(activity);
            runInAction(()=> {
               // this.activities = [...this.activities.filter(x => x.id !== activity.id),activity];
               this.activityRegistry.set(activity.id, activity);
                this.selectedActivity = activity;
                this.editMode=false;
                this.loading= false;
    
            })
        }catch (error) {
         console.log(error);
         runInAction(()=> {
             this.loading=false;
         })
        }
    }
    deleteActivity = async (id: string) =>{
        this.loading= true;
        try{
              await agent.Activities.delete(id);
              runInAction(()=> {
               // this.activities = [...this.activities.filter(x => x.id !== id)];
               this.activityRegistry.delete(id);
                
                this.loading=false;
            })
        }
        
        catch(error) {
          console.log(error);
          runInAction(()=> {
            this.loading=false;
        })
        }
        
       
    }
}