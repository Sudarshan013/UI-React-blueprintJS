import React from 'react';
import './App.css'
import {Button} from 'antd'
import EmailType from './EmailType';
import EmailSchdeule from './EmailSchdeule';


class App extends React.Component
{
  state = {
            reportsArray:[],
            alertsArray:[],
            developerAlertsArray :[],
          
            
          }
  componentDidMount = async ()=>{
    const api =[
                {
                  "name": "Store-wide Reports",
                  "email": [
                    {
                      "name": "Product Segment Report",
                      "description": "Info about Product Segment Report",
                      "type": "Reports",
                      "preference_id": 3,
                      "enabled": false,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    },
                    {
                      "name": "Tag Report",
                      "description": "Info about tag Report",
                      "type": "Reports",
                      "preference_id": 6,
                      "enabled": true,
                      "frequency": "every week",
                      "day_of_the_week": "nil"
                    }
                  ]
                },
                {
                  "name": "Alerts",
                  "email": [
                    {
                      "name": "Boosting Alerts",
                      "description": "Info about Boosting alerts",
                      "type": "Alerts",
                      "preference_id": 3,
                      "enabled": false,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    }
                  ]
                },
                {
                  "name": "Search Reports",
                  "email": [
                    {
                      "name": "No Results Searches",
                      "description": "Info about tag Report",
                      "type": "Reports",
                      "preference_id": 1,
                      "enabled": true,
                      "frequency": "every week",
                      "day_of_the_week": 2
                    },
                    {
                      "name": "Top Searches",
                      "description": "Info about tag Report",
                      "type": "Reports",
                      "preference_id": 2,
                      "enabled": true,
                      "frequency": "every 2 week",
                      "day_of_the_week": 1
                    }
                  ]
                },
                {
                  "name": "Listing Page Reports",
                  "email": [
                    {
                      "name": "Listing Page Reports",
                      "description": "Info about Listing Page Report",
                      "type": "Reports",
                      "preference_id": 2,
                      "enabled": true,
                      "frequency": "every 2 week",
                      "day_of_the_week": 1
                    }
                  ]
                },
                {
                  "name": "Developer Alerts",
                  "email": [
                    {
                      "name": "Developer Alerts",
                      "description": "Info about Developer Alerts",
                      "type": "Developer Alerts",
                      "preference_id": 4,
                      "enabled": true,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    }
                  ]
                }
              ]
          const reportsArray=[],alertsArray=[],developerAlertsArray=[]
           api.map(
           (ele)=>{
               ele.email.map(
                   (email)=>{
                       switch(email.type.toLowerCase())
                       {
                         case "reports" : reportsArray.push(email)
                                          break;
                         case "alerts" : alertsArray.push(email)
                                          break
                         case "developer alerts" : developerAlertsArray.push(email)
                                          break
                       }
               })
           })
          this.setState({reportsArray,alertsArray,developerAlertsArray})
   }
  testRender = (emailType,emailTypeName)=>{
    this.setState({
      reportsArray: this.state.reportsArray.map(el => (el.name === emailTypeName ? {...el, emailType} : el))
    });
  }
  renderMail = (emailType)=>{
     if(emailType.length) 
     {
       return <EmailType title={emailType[0].type} emailTypes={emailType} testRender={this.testRender}/>
     }
   }
 
  render()
  {
    
    return(
    <div className="main-container">
      <div className="email-pref-header">
        Customize your mail preference
      </div>
      <div className="email-type"> 
       {
         console.log( this.state.reportsArray)
       }
        {
          this.renderMail(this.state.reportsArray)           
        }
        {
          this.renderMail(this.state.alertsArray)          
        }
        {          
         this.renderMail(this.state.developerAlertsArray)          
        }
      </div>
     
     <div>
       <Button type="primary">
         hey
       </Button>
     </div>
    </div>
  )
  }
}

export default App;
