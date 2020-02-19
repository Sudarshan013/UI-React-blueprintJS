import React from 'react'
import {Button,Switch,Popover,Collapse,Menu,Card, MenuItem,Toaster} from '@blueprintjs/core'
import produce from "immer"
import {SubEmailType,EmailDescription,Preferences,ManagePreferences,SubEmailWrapper,SwitchWrapper,PopoverWrappper,Day,Days,CollapseCard} from './StyledComponents'

export const notifyToaster = Toaster.create({
    className: "notify-toaster",
    position: 'top',
    maxToasts: 2
});

export default class SubEmailTypes extends React.PureComponent {
        state = {
            toggleSwitch : this.props.subEmail.enabled,
            isOpen : false,
            frequency : this.props.subEmail.frequency,
            settings : 'Show options',
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
                {
                    selectedDayId: day.id, dayBgColor: "#1a73e8",
                    textColor: "white"
                }
            )
            this.setState(
                produce(draft => {
                    draft.days.map((d)=>{
                    return d.id===day.id?d.selected=mode:d.selected=false        
                })
                })
            )
            this.props.handlePreferenceChanges(this.props.subEmail,'day_of_the_week',day.id)
            notifyToaster.show({ message: 'Your changes has been successfully saved.',  intent: 'primary',timeout : 2000,icon : "tick" })
        }
    
        toggleSettings = ()=>{
            this.setState(
                            {
                                isOpen: !this.state.isOpen,
                                settings:this.state.settings==="Show options"?"Hide options":"Show options",
                            }
                        )
            }
    
        handleFrequencyChange=(frequency)=> {
            if(frequency==="every week" || frequency==="every two weeks")
            {
                this.setState({showDays:true})
            }
            else {
                notifyToaster.show({ message: 'Your changes have been successfully saved.',  intent: 'primary',timeout : 2000,icon : "tick" })
                this.setState({showDays:false})
            }
            this.setState({frequency});
            this.props.handlePreferenceChanges(this.props.subEmail,'frequency',frequency)
        }
    
        handleSwitchChange=(mode)=>{
            if(this.state.isOpen && this.state.toggleSwitch )
            {
                this.setState({
                               isOpen: !this.state.isOpen,
                               toggleSwitch:!this.state.toggleSwitch,
                               settings: this.state.settings === "Show options" ? "Hide options" : "Show options"
                              })
            }
            else
            {
              this.setState({toggleSwitch:!this.state.toggleSwitch})    
            }
            this.props.handlePreferenceChanges(this.props.subEmail,'enabled',mode)
        }
    
        renderDays =()=>{
            return this.state.days.map((day)=>{
                let preEnabledDayId=this.props.subEmail.day_of_the_week
                if(preEnabledDayId)
                {
                    this.setState(
                        produce(draft => {
                          draft.days.map((d)=>{
                            return (preEnabledDayId===d.id?d.selected=true:d)
                          })
                        }))
                }
                return (                    
                    <Day key={day.id} onClick={() => { this.onDaySelect(day, !day.selected) }}
                        style={{ color: day.selected ? 'white' : '#8C9196', 
                        backgroundColor: day.selected ? '#1a73e8' : '#F1F3F4' }} >
                        {day.label}
                    </Day>
                )
            })
        }
        
    render() {
        const viewSettings = this.props.subEmail.enabled
        return (
            <div key={"sub"+this.props.subEmail.name}>
                
                <SubEmailWrapper>
                        <SubEmailType>
                            <div>
                                {this.props.subEmail.name}
                                    <EmailDescription>
                                        {this.props.subEmail.description}
                                    </EmailDescription>
                            </div>                                                             
                        </SubEmailType>
                        <SubEmailType>
                            { this.props.subEmail.type==='Developer Alert'?
                                <SwitchWrapper>
                                    <Switch 
                                        large={true} 
                                        checked={this.state.toggleSwitch} 
                                        onChange={() => { this.handleSwitchChange(!this.state.toggleSwitch) }}
                                    />
                                </SwitchWrapper>
                                :
                                    <div style={{display:'flex'}}>
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
                                    <SwitchWrapper>
                                        <Switch 
                                            large={true} 
                                            checked={this.state.toggleSwitch} 
                                            onChange={() => { this.handleSwitchChange(!this.state.toggleSwitch) }}
                                        />
                                    </SwitchWrapper>
                                </div>
                                
                            }                 
                        </SubEmailType>                                         
            </SubEmailWrapper>       
                  <CollapseCard>
                    <Collapse isOpen={this.state.isOpen} >
                        <Card elevation={0}>             
                                    <Preferences>
                                            <div style={{marginRight : '10px'}}>
                                                Receive
                                            </div>
                                            <PopoverWrappper>                                               
                                                <Popover  content={
                                                    <div style={{display:'inline'}}>
                                                        <Menu >
                                                                <MenuItem text="Every week" onClick={()=>{this.handleFrequencyChange('every week')}} />
                                                                <MenuItem text="Every two weeks" onClick={()=>{this.handleFrequencyChange('every two weeks')}}/>
                                                                <MenuItem text="First of every month" onClick={()=>{this.handleFrequencyChange('first of every month')}}/>
                                                                <MenuItem text="Last of every month" onClick={()=>{this.handleFrequencyChange('last of every month')}}/>                                                        
                                                        </Menu>
                                                    </div>} 
                                                        position={'bottom'}
                                                   >
                                                 <Button  icon="calendar"  text={this.state.frequency.charAt(0).toUpperCase()+this.state.frequency.slice(1) } style={{fontWeight:'700'}} />
                                                </Popover>
                                            </PopoverWrappper>
                                                    <div>
                                                        {
                                                            this.props.subEmail.frequency==='every week' || this.props.subEmail.frequency==='every two weeks' ?
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
            </div>                                 
        )
    }
  
}
