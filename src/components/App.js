import React from 'react';
import produce from "immer"
import EmailType from './EmailType';
import {Spinner} from '@blueprintjs/core'
import { EmailPreferenecesHeader, EmailPreferencesSection } from './StyledComponents'

class App extends React.PureComponent
{
  state = {
            emailTypesCollection:[],
            handleChanges:{
                id: '',
                updated_settings: {
                    enabled: null,
                    frequency: "",
                    day_of_the_week: ""
                }
              }
          }
  componentDidMount = async ()=>{
    const emailTypesCollection =[
                {
                  "name": "Store-wide Reports",
                  "emails": [
                    {
                      "name": "Product Segment Report",
                      "type": "Report",
                      "id": 2,
                      "enabled": false,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    },
                    {
                      "name": "Tag Report",
                      "type": "Report",
                      "id": 5,
                      "enabled": true,
                      "frequency": "every week",
                      "day_of_the_week": 4
                    }
                  ]
                },
                {
                  "name": "Search Reports",
                  "emails": [
                    {
                      "name": "No Results Searches",
                      "type": "Report",
                      "id": 1,
                      "enabled": true,
                      "frequency": "every week",
                      "day_of_the_week": 1
                    },
                    {
                      "name": "Top Searches",
                      "type": "Report",
                      "id": 6,
                      "enabled": true,
                      "frequency": "first day of every month",
                      "day_of_the_week": "nil"
                    }
                  ]
                },
                {
                  "name": "Listing Page Reports",
                  "emails": [
                    {
                      "name": "Boosting Alerts",
                      "type": "Alert",
                      "id": 3,
                      "enabled": true,
                      "frequency": "first day of the month",
                      "day_of_the_week": "nil"
                    }
                  ]
                },
                {
                  "name": "Developer Alerts",
                  "emails": [
                    {
                      "name": "Developer Alerts",
                      "type": "Developer Alert",
                      "id": 4,
                      "enabled": false,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    },
                    {
                      "name": "Stack check Final check",
                      "type": "Developer Alert",
                      "id": 34,
                      "enabled": false,
                      "frequency": "nil",
                      "day_of_the_week": "nil"
                    },
                    {
                      "name": "Serialize check",
                      "type": "Developer Alert",
                      "id": 35,
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
                      <EmailPreferenecesHeader>
                        Customize your mail preferences
                      </EmailPreferenecesHeader>
                )
   }
    handlePreferenceChanges = (emailType,attr,mode)=>{   
          this.setState(
            produce(draft => {
              draft.emailTypesCollection.map((email)=>{
                return email.emails.map((mailDetails)=>{
                  if(mailDetails.name === emailType.name){
                    draft.handleChanges.id = emailType.id;
                    draft.handleChanges.updated_settings.enabled =mailDetails.enabled;
                    draft.handleChanges.updated_settings.frequency= mailDetails.frequency;
                    draft.handleChanges.updated_settings.day_of_the_week=mailDetails.day_of_the_week;
                    draft.handleChanges.updated_settings[attr] = mode;
                    return mailDetails[attr]=mode;
                  }else
                  {
                    return mailDetails;
                  }
                })
              })
            }),()=>{this.updatePreferences()})
          
    }
    updatePreferences=()=>{
      console.log(JSON.stringify(this.state.handleChanges))
    }
  render()
  {
        if(this.state.emailTypesCollection.length)
        {
          return (
            <EmailPreferencesSection>
                {this.renderPageHeader()}
                <EmailType 
                  emailCollection={this.state.emailTypesCollection}
                  handlePreferenceChanges={this.handlePreferenceChanges}
                />
            </EmailPreferencesSection>
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
