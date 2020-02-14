import React, { Component } from 'react'
import SubEmailTypes from './SubEmailTypes'
import './EmailType.css';
import styled from 'styled-components'

const Email = styled.div`
    padding: 10px;
    margin-left: 10%;
    margin-top: 2%;
    margin-right: 10%;
    background-color: white;
    border-radius: 10px;
    width : 80% !important;
`
const Table = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`
const TableHeader = styled.th`
        color: black;
        font-weight: bold;
        text-transform: none;
        width: 50%%;
        padding: 20px 10px 20px 30px;
        font-size: 19px;
        
`
const TableRow = styled.th`    
`

export default class EmailType extends Component {
    renderEmailTypes = (emailCollection)=>{
            console.log('hey')
            return emailCollection.map((emailType, index)=>{
                return (                       
                         <Email key={"email"+index}>
                            <Table>
                                <tbody key={emailType.name}>
                                <TableRow key={emailType.name}>
                                   <TableHeader>
                                        {emailType.name}
                                    </TableHeader>
                                </TableRow>
                                {emailType.email.map((subEmailTypes, index)=>{
                                    return(
                                                <SubEmailTypes key={"subemail"+ index} subEmail={subEmailTypes} onSwitchHandle={this.props.onSwitchHandle} onClickMailPreferences={this.props.onClickMailPreferences}/>                                       
                                          )
                                })
                                }
                                </tbody>               
                            </Table>                           
                         </Email>
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
