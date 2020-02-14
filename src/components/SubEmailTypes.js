import React, { Component } from 'react'
import {Button,Switch,Popover,Collapse,Menu,Card, MenuItem} from '@blueprintjs/core'
import {Select} from '@blueprintjs/select'
import styled from 'styled-components'
import produce from "immer"


const TableData = styled.td`
    padding: 10px 10px 10px 30px;
    font-size : 14px;
    border-top: 1.2px solid #f0f0f0;`
const TabelRow = styled.tr`
    :hover {
        background-color: #edf9ff;
        // cursor: pointer;
    }
`
const SelectPreferences = styled.select`
    background-color : white;
    margin-left : 5px;
    margin-right : 3px;
`
const Day = styled.li`
    padding : 10px;
    text-align : center;
    text-decoration : none;
    font-weight : 400;
    justify-content : center;
    font-size : 14px;
    list-style-type: none;
    margin : 3px;

    
    border-radius : 50%;
`
const Days = styled.div`
        display : flex;
        margin : 5px;
        flex-direction : row;
`

export default class SubEmailTypes extends React.PureComponent {
  state = {
      textColor:"#8C9196",
      dayBgColor: "#F1F3F4",
      isOpen : false,
      showDays : true,
      settings : 'Manage',
      value : 'every two weeks',
      switchDisable : false,
      selectedDayId : '',
      days:[{
          label: 'S',
          id : 0,
          selected: false
      },{
        label: 'M',
        id : 1,
        selected: false
    },{
        label: 'T',
        id : 2,
        selected: false
    },{
        label: 'W',
        id : 3,
        selected: false
    },{
        label: 'T',
        id : 4,
        selected: false
    },{
        label: 'F',
        id : 5,
        selected: false
    },{
        label: 'S',
        id : 6,
        selected: false
    }]
  } 
  onDaySelect = (day,mode)=>{
      console.log(day)
      this.setState({selectedDayId:day.id})
      this.setState({dayBgColor:"#1a73e8",textColor : "white"})
      this.setState(
        produce(draft => {
            draft.days.map((d)=>{
              return d.id==day.id?d.selected=mode:d.selected=false        
           })
        })
    )
        
  }
  toggleSettings = ()=>{
      this.setState({isOpen:!this.state.isOpen})
      this.setState({switchDisable:!this.state.switchDisable})
      this.setState({settings:this.state.settings==="Manage"?"Hide":"Manage"})
  }
  handleChange=(event)=> {
    console.log(event.target.value)
    if(event.target.value==="every_week" || event.target.value==="every_two_weeks")
    {
        this.setState({showDays:true})
    }
    else{
        this.setState({showDays:false})
    }
    this.setState({value: event.target.value});
  }
  handleSubmit=(event)=> {
    this.props.onClickMailPreferences()
    this.setState({settings:this.state.settings==="Manage"?"Hide":"Manage"})
    this.setState({isOpen:!this.state.isOpen})
    this.setState({switchDisable : !this.state.switchDisable})
    this.props.onClickMailPreferences(this.props.subEmail,this.state.value,this.state.selectedDayId)
    event.preventDefault();
  }
  renderDays =()=>{
     return this.state.days.map((day)=>{
          return (
             
              <Day key={day.id} onClick={()=>{this.onDaySelect(day,!day.selected)}} style={{color:day.selected||(this.props.subEmail.day_of_the_week==day.id)?'white':'#8C9196', backgroundColor:day.selected||(this.props.subEmail.day_of_the_week==day.id)?'#1a73e8':'#F1F3F4'}} >
                  {console.log(day.selected)} {day.label}
              </Day>
          )
      })

  }
  
    render() {
        const viewSettings = this.props.subEmail.enabled
        const showDays = this.state.showDays
        console.log(this.state.days)

        return (
            
                <TabelRow>
                        <TableData>
                            <div>
                            {this.props.subEmail.name}
                            <p style={{color:'#919496'}}>
                            
                            {this.props.subEmail.description}
                            </p>
                            </div>
                            <div>
                            <Collapse isOpen={this.state.isOpen}>
<Card>
    <form onSubmit={this.handleSubmit}>
    <label>
        Recieve
        <Popover content={
        <Menu text="ooo">
                <MenuItem text="Custom SVG icon"/>
                <MenuItem text="sam"/>
                <MenuItem text="bam"/>
               
        </Menu>} position={'bottom'}>
            <Button icon="share" text="Recieve every." />
        </Popover>
        <SelectPreferences className="select-option" value={this.state.value} onChange={this.handleChange}>
            <option value="every_week">Every week</option>
            <option value="every_two_weeks">Every two weeks</option>
            <option value="start_of_every_month">Start of every month</option>
            <option value="end_of_every_month">End of every month</option>
        </SelectPreferences>
        <div style={{float : 'right'}}>
                <Button intent="success" text="Save" type="submit" style={{backgroundColor:'#2A3375'}}/>
        </div>
        <div>
            {
                showDays?
                <Days>
                   {
                    this.renderDays()  
                   }
                </Days>
                :
                ""
            }
              
        </div>  
        </label>
    </form>
</Card>
</Collapse>
                            </div>
                            
                            
                        </TableData>
                        <TableData style={{textAlign : "center"}}>
                            <Switch checked={this.props.subEmail.enabled} onChange={()=>{this.props.onSwitchHandle(this.props.subEmail,!this.props.subEmail.enabled)}} disabled={this.state.switchDisable}/>
                        </TableData>
                        <TableData>
                            {
                                viewSettings?
                                        <a active={false} onClick={this.toggleSettings}>
                                            {this.state.settings}
                                        </a>
                                        :
                                    undefined
                                    
                            } 
                        </TableData>
                                      
            </TabelRow>
           
               
            
            
            
        )
    }
}
