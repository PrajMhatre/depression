import React, { Component } from 'react'
import UserDetail from './UserDetail';
import DepDetail from './DepDetail';
import Confirm from './Confirm';
import DepDetail1 from './DepDetail1';
import DepDetail2 from './DepDetail2';
import DepDetail3 from './DepDetail3';
export class Survey extends Component {
  state={
      step: 1,
      givenName:null,
      age:null,
      gender:null,
      self_employed:null,
      family_history:null,
      work_interfere:null,
      remote_work:null,
      tech_company:null,
      benefits:null,
      care_options:null,
      wellness_program:null,
      seek_help:null,
      anonymity:null,
      leave:null,
      mental_health_consequence:null,
      phys_health_consequence:null,
      coworkers:null,
      supervisor:null,
      mental_health_interview:null,
      phys_health_interview:null,
      mental_vs_physical:null,
      obs_consequence:null,
      treatment:null
  }
  nextSection=()=>{
      const{step}=this.state;
      this.setState({
          step:step+1
      });
  }
  prevSection=()=>{
    const{step}=this.state;
    this.setState({
        step:step-1
    }); 
  }
  revert=()=>{
    const{step}=this.state;
    this.setState({
        step:1
    }); 
  }
  handleChange=input=>e=>{
      this.setState({[input]:e.target.value});
  }
  handleTreat=vals=>{
      this.setState({['treatment']:vals});
  }
  render() {
      const{ step }=this.state;
      const{ givenName,age,gender,self_employed,family_history, work_interfere,remote_work,tech_company,benefits,care_options, wellness_program,seek_help,anonymity,leave,mental_health_consequence,
        phys_health_consequence,coworkers,supervisor,mental_health_interview,
        phys_health_interview,mental_vs_physical,obs_consequence,treatment} = this.state;
      const values = {step,givenName,age,gender,self_employed,family_history, work_interfere,remote_work,tech_company,benefits,care_options, wellness_program,seek_help,anonymity,leave,mental_health_consequence,
        phys_health_consequence,coworkers,supervisor,mental_health_interview,
        phys_health_interview,mental_vs_physical,obs_consequence,treatment }
   switch(step){
       case 1:
           return(
               <UserDetail nextSection={this.nextSection} handleChange={this.handleChange} values={values}></UserDetail>
           )
       case 2:
           return(
            <DepDetail nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></DepDetail>
           )
        case 3:
            return(
                <DepDetail1 nextSection={this.nextSection} 
                prevSection={this.prevSection} handleChange={this.handleChange} values={values}></DepDetail1>
            )
       case 4:
           return(
            <DepDetail2 nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></DepDetail2>
           )
           case 5:
           return(
            <DepDetail3 nextSection={this.nextSection} 
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></DepDetail3>
           )
           case 6:
           return(
            <Confirm nextSection={this.nextSection} revert={this.revert}
            prevSection={this.prevSection} handleChange={this.handleChange} values={values}></Confirm>
           )
           default:
            (console.log('This is a multi-step form built with React.'))
   }
  }
}

export default Survey