import React, { Component, forwardRef } from 'react'
import {Button,Switch,Popover,Collapse,Menu,Card, MenuItem} from '@blueprintjs/core'
import {Select} from '@blueprintjs/select'
import styled from 'styled-components'
import produce from "immer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SubEmailType = styled.div`
    padding: 10px 10px 10px 30px;
    font-size : 14px;
    display:flex;
    flex-direction:row;
    align-items: center;
     
`
const Preferences = styled.div`
    display : flex;
    flex-direction : row;
`
const ManagePreferences = styled.div`
  padding-right: 15px;
`

const SubEmailWrapper = styled.div`
    :hover {
        background-color: #edf9ff;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;   
    border-top: 1.2px solid #f0f0f0;

`
const SelectPreferences = styled.select`
    background-color : white;
    margin-left : 0px;
    margin-right : 3px;
`
const SwitchOverrite = styled.div`
    .bp3-control{
        margin-bottom: 0;
    }
`
const PopoverWrappper = styled.span`

    align-items: center;
    display : inline;
    display: flex;
    margin-right: 10px;

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
const CollapseCard = styled.div`
    // margin-left:10px;
    // margin-right : 10px;

`

export default class SubEmailTypes extends React.PureComponent {
        state = {
            textColor:"#8C9196",
            dayBgColor: "#F1F3F4",
            isOpen : false,
            showDays : false,
            frequency : 'Recieve',
            settings : 'Manage',
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
            this.setState(
               {selectedDayId:day.id,dayBgColor:"#1a73e8",textColor : "white"}
            )
            this.setState(
                produce(draft => {
                    draft.days.map((d)=>{
                    return d.id==day.id?d.selected=mode:d.selected=false        
                })
                })
            )
            // this.props.onDayUpdate(this.props.subEmail,day.id)
            this.props.handlePreferenceChanges(this.props.subEmail,'day_of_the_week',day.id)
            toast('Changes saved..')   
        }
        toggleSettings = ()=>{
            this.setState({isOpen:!this.state.isOpen,switchDisable:!this.state.switchDisable,
                           settings:this.state.settings==="Manage"?"Hide":"Manage"}
                        )
        }
        handleFrequencyChange=(frequency)=> {
            // console.log(frequency)
            if(frequency==="Every week" || frequency==="Every two weeks")
            {
                this.setState({showDays:true})
            }
            else{
                this.setState({showDays:false})
            }
            this.setState({frequency});
            // this.props.onFrequencyUpdate(this.props.subEmail,frequency)
            this.props.handlePreferenceChanges(this.props.subEmail,'frequency',frequency)

        }
        handleSubmit=(event)=> {
            
            // this.setState({settings:this.state.settings==="Manage"?"Hide":"Manage"})
            // this.setState({isOpen:!this.state.isOpen})
            // this.setState({switchDisable : !this.state.switchDisable})
            // this.props.onClickMailPreferences(this.props.subEmail,this.state.value,this.state.selectedDayId)
            // event.preventDefault();
        }
        renderDays =()=>{
            return this.state.days.map((day)=>{
                return (                    
                    <Day key={day.id} onClick={()=>{this.onDaySelect(day,!day.selected)}} style={{color:day.selected||(this.props.subEmail.day_of_the_week==day.id)?'white':'#8C9196', backgroundColor:day.selected||(this.props.subEmail.day_of_the_week==day.id)?'#1a73e8':'#F1F3F4'}} >
                        {day.label}
                    </Day>
                )
            })

        }
  
    render() {
        const viewSettings = this.props.subEmail.enabled
        const showDays = this.state.showDays
        // console.log(this.state.days)
        return (
            <div key={"sub"+this.props.subEmail.name}>
                <SubEmailWrapper>
                        <SubEmailType>
                            <div>
                            {this.props.subEmail.name}
                            <p style={{color:'#919496'}}>
                            
                            {this.props.subEmail.description}
                            </p>
                            </div>                                                             
                        </SubEmailType>
                        <SubEmailType>
                            <ManagePreferences>
                                {
                                    viewSettings?
                                            <a  onClick={this.toggleSettings}>
                                                {this.state.settings}
                                            </a>
                                            :
                                        undefined
                                        
                                } 
                            </ManagePreferences>
                            <SwitchOverrite>
                                <Switch large={true} checked={this.props.subEmail.enabled} onChange={()=>{this.props.handlePreferenceChanges(this.props.subEmail,'enabled',!this.props.subEmail.enabled)}} disabled={this.state.switchDisable}/>
                            </SwitchOverrite>
                         
                        </SubEmailType>
                                                  
            </SubEmailWrapper>       
            <CollapseCard>
                    <Collapse isOpen={this.state.isOpen} >
                        <Card elevation={0}>             
                                    <Preferences>
                                    
                                            {/* <SelectPreferences className="select-option" value={this.state.value} onChange={this.handleChange}>
                                                <option value="every_week">Every week</option>
                                                <option value="every_two_weeks">Every two weeks</option>
                                                <option value="start_of_every_month">Start of every month</option>
                                                <option value="end_of_every_month">End of every month</option>
                                                
                                            </SelectPreferences> */}
                                        
                                            {/* <div style={{float : 'right'}}> 
                                                    <Button intent="success" text="Save" type="submit" style={{backgroundColor:'#2A3375'}}/>
                                            </div> */}
                                            <PopoverWrappper>                                               
                                                <Popover  content={
                                                    <div style={{display:'inline'}}>
                                                        <Menu >
                                                                <MenuItem text="Every week" onClick={()=>{this.handleFrequencyChange('Every week')}} />
                                                                <MenuItem text="Every two weeks" onClick={()=>{this.handleFrequencyChange('Every two weeks')}}/>
                                                                <MenuItem text="Start of every month" onClick={()=>{this.handleFrequencyChange('Start of every month')}}/>
                                                                <MenuItem text="End of every month" onClick={()=>{this.handleFrequencyChange('End of every month')}}/>                                                        
                                                        </Menu>
                                                        </div>} 
                                                        position={'bottom'}
                                                >
                                                        <Button icon="calendar" text={this.state.frequency} style={{fontWeight:'700'}} />
                                                </Popover>
                                            </PopoverWrappper>
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
                                    </Preferences>                      
                            </Card>
                        </Collapse>
                    </CollapseCard>  
                    <div style={{color:'red'}}>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={2000}
                        hideProgressBar={true}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnVisibilityChange
                       
                     />
                    </div>
            </div>                                 
        )
    }
}
