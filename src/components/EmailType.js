import React, { Component } from 'react'
import SubEmailTypes from './SubEmailTypes'
import './EmailType.css';
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 10px;
    margin-left: 10%;
    margin-top: 2%;
    margin-right: 10%;
    background-color: white;
    border-radius: 3px;
    width : 80% !important;
`
const EmailCard = styled.div`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`
const EmailHeader = styled.div`
        color: black;
        font-weight: bold;
        text-transform: none;
        width: 50%%;
        padding: 20px 10px 20px 30px;
        font-size: 19px;
        
`

export default class EmailType extends Component {
    renderEmailTypes = (emailCollection)=>{
            console.log('hey')
            return emailCollection.map((emailType, index)=>{
                return (                       
                         <Wrapper key={"email"+index}>
                            <EmailCard>
                                   <EmailHeader>
                                        {emailType.name}
                                    </EmailHeader>                                
                                {emailType.email.map((subEmailTypes, index)=>{
                                    return(
                                                <SubEmailTypes key={"subemail"+ index} subEmail={subEmailTypes} onSwitchHandle={this.props.onSwitchHandle} onClickMailPreferences={this.props.onClickMailPreferences}/>                                       
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
                    this.renderEmailTypes(this.props.emailCollection)
                }
            </div>
                
        ) 
        
          
}
}
