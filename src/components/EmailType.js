import React, { Component } from 'react'
import SubEmailTypes from './SubEmailTypes'
import { EmailCard, EmailHeader, Wrapper } from './StyledComponents';

export default class EmailType extends Component {
    renderEmailDetails = (emailCollection)=>{
            return emailCollection.map((emailType, index)=>{
                return (                       
                         <Wrapper key={"email"+index}>
                            <EmailCard>
                                   <EmailHeader>
                                        {emailType.name}
                                    </EmailHeader>                                
                                {emailType.emails.map((subEmailTypes, index)=>{
                                    return(
                                            <SubEmailTypes 
                                                key={"subemail"+ index} 
                                                subEmail={subEmailTypes}
                                                handlePreferenceChanges={this.props.handlePreferenceChanges}
                                            />                                       
                                    )
                                })}                
                            </EmailCard>                           
                         </Wrapper>
                     )
            })
    }
    render() {
        return(
            <div>
                {
                    this.renderEmailDetails(this.props.emailCollection)
                }
            </div>                
        )         
}
}
