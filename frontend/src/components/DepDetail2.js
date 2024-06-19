import React, { Component } from 'react'
import {Button } from '@mui/material';
import './home.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export class DepDetail2 extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextSection();
    }
    back=e=>{
        e.preventDefault();
        this.props.prevSection();
    }
  render() {
    const {values,handleChange} = this.props;
    const check=e=>{
      if((values.leave==null)||(values.mental_health_consequence===null)||(values.phys_health_consequence===null)||(values.coworkers===null)||(values.supervisor===null)){
        alert("All The Field Are Mandatory")
      }
      else{
        this.continue(e);
      }
    }
    return (
      <div className='stylings'>
      <div className='userdetail'>
          <React.Fragment>
          <div style={{width:'100%',color:'#054f99',padding:"1%",fontWeight:"bold"}}><h3 align='left'>4/5</h3></div>
      <FormControl>
      <FormLabel align="left" id="demo-row-radio-buttons-group-label">How easy is it for you to take medical leave for a mental health condition?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.leave}
        onChange={handleChange('leave')}
      >
        <FormControlLabel value={1} control={<Radio />} label="SomeWhat Easy" />
        <FormControlLabel value={3} control={<Radio />} label="SomeWhat Difficult" />
        <FormControlLabel value={2} control={<Radio />} label="Don't Know" />
        <FormControlLabel value={0} control={<Radio />} label="Very easy" />
        <FormControlLabel value={4} control={<Radio />} label="Very Difficult" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel align="left" id="demo-row-radio-buttons-group-label">Do you think that discussing a mental health issue with your senior would have negative consequences?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.mental_health_consequence}
        onChange={handleChange('mental_health_consequence')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Maybe" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel align="left" id="demo-row-radio-buttons-group-label">Do you think that discussing a physical health issue with your senior would have negative consequences?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.phys_health_consequence}
        onChange={handleChange('phys_health_consequence')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Maybe" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Would you be willing to discuss a mental health issue with your coworkers?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.coworkers}
        onChange={handleChange('coworkers')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Some Of Them" />
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Would you be willing to discuss a mental health issue with your direct supervisor(s)?</FormLabel>
    <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={values.supervisor}
        onChange={handleChange('supervisor')}
      >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
        <FormControlLabel value={0} control={<Radio />} label="No" />
        <FormControlLabel value={2} control={<Radio />} label="Some Of Them" />
      </RadioGroup>
    </FormControl>
     <div style={{width:'100%'}}>
     <Button onClick={check}>Continue</Button>
        <Button className='rightBtn' onClick={this.back}>Back</Button>
     </div>
          </React.Fragment>
      </div>
      </div>
    )
  }
}

export default DepDetail2