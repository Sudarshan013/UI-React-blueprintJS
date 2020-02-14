import React from 'react';
import './App.css'
import produce from "immer"
import EmailType from './EmailType';
import {Spinner} from '@blueprintjs/core'
import styled from 'styled-components'

const EmailPrefHeader = styled.div`
  font-size: 27px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 16px;
  margin: 0;
  font-family: 'Roboto';
  font-weight: 300;
  color: #333;
  background: #fff;
  background-color : white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`
class App extends React.PureComponent
{
  state = {
            emailTypesCollection:[],
            dayOfTheWeek:'',
            frequency:''
          }
  componentDidMount = async ()=>{
    const emailTypesCollection =[
                {
                  "name": "Store wide reports",
                  "email": [
                    {
                      "name": "Product Segment Report",
                      "id": "product_segment_reports",
                      "description": "Info about Product Segment Report",
                      "type": "reports",
                      "preference_id": 3,
                      "enabled": false,
                      "frequency": "Every two weeks",
                      "day_of_the_week": "   "
                    },
                    {
                      "name": "Tag Report",
                      "id": "tag_report",
                      "description": "Info about tag Report",
                      "type": "reports",
                      "preference_id": 6,
                      "enabled": true,
                      "frequency": "Every week",
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
                      "frequency": "Every week",
                      "day_of_the_week": 2
                    },
                    {
                      "name": "Top Searches",
                      "description": "Info about tag Report",
                      "type": "Reports",
                      "preference_id": 2,
                      "enabled": true,
                      "frequency": "Every two weeks",
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
                      "frequency": "Every two weeks",
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
                      "type": "developer_alerts",
                      "preference_id": 4,
                      "enabled": true,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    }
                  ]
                }
              ]
              this.setState({emailTypesCollection})

            }

   renderPageHeader = ()=>{
          return(
                      <EmailPrefHeader>
                        Customize your mail preferences
                      </EmailPrefHeader>
                )
   }

 handlePreferenceChanges = (emailType,attr,mode)=>{
      this.setState(
        produce(draft => {
          draft.emailTypesCollection.map((mailName)=>{
            return mailName.email.map((subMailType)=>(subMailType.name === emailType.name)?(subMailType[attr]=mode):subMailType)
          })
        }))
 }
  render()
  {
    if(this.state.emailTypesCollection.length)
    {
      // console.log(this.state.emailTypesCollection[0].email[0].enabled)
      {console.log(this.state.emailTypesCollection)}
      return (
        <div className="email-type">
          {this.renderPageHeader()}
          <EmailType 
            emailCollection={this.state.emailTypesCollection} 
            onSwitchHandle={this.onSwitchHandle} 
            onClickMailPreferences={this.onClickMailPreferences}
            onFrequencyUpdate={this.onFrequencyUpdate}
            onDayUpdate={this.onDayUpdate}
            handlePreferenceChanges={this.handlePreferenceChanges}
          />
          {console.log(this.state.emailTypesCollection)}
        </div>
       )
    } else
    {
      return(
        <div>
         <Spinner/>
        </div>
      )
    }
  }
}
export default App;
