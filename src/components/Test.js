// import React, { Component } from 'react'
// import { Icon,Button,Switch,Overlay,Card,Classes,H3,Code,Intent} from "@blueprintjs/core";
// import './EmailType.css'
// export default class EmailTypes extends Component {
//     state = {
//         isOpen: false,
//         isEnabled : false
//     };
 
//     toggleOverlay = ()=>{
//         this.setState({isOpen : !this.state.isOpen})
//     }
//     handleSwitchChange = (emailType)=>{
//         this.setState({isEnabled : !this.state.isEnabled})
//         emailType.enabled = !emailType.enabled
//         this.props.testRender(emailType,emailType.name)
//     }   
   
//     render() {
       

//         return (
//             <div className="email-types">
//                 <table>
//                     <tbody>
//                     <tr >
//                         <th className="email-type-title">{this.props.title}</th>
//                         <th className="email-icon"><Icon icon="envelope" iconSize={20}/>
//                              <div> EMAIL</div>
//                         </th>
//                         <th className="email-manage-icon"><Icon icon="cog" iconSize={20} />
//                             <div>Manage</div>
//                         </th>
//                     </tr>
//                     {this.props.emailTypes.map((emailType)=>{
//                        return (
//                                 <tr key={this.props.emailTypes.name}>
//                                 <td key={this.props.emailTypes.name} className="report-type">{emailType.name}
//                                     <p style={{color:'#919496'}}>
//                                     {emailType.description}
//                                     </p>
//                                 </td>
//                                 <td key={this.props.emailTypes.name} className="switch-icon">
//                                     <Switch checked={emailType.enabled}  onChange={(e)=>this.props.handleSwitch(emailType, id, e)} />
//                                 </td>
//                                 <td key={this.props.emailTypes.name} className="manage-icon">
//                                     <Button active={false} onClick={this.toggleOverlay}>
//                                         <Icon icon="cog"/>
//                                     </Button>
//                                     <div style={{margin : "20%" }}>
//                                     <Overlay  isOpen={this.state.isOpen} onClose={this.toggleOverlay} canEscapeKeyClose={true} canOutsideClickClose={true} >
//                                         <Card>
//                                             <p>
//                                                 {emailType.name}
//                                             </p>
//                                             <div>
//                                                {emailType.description}
//                                             </div>
//                                         </Card>
//                                     </Overlay>
//                                     </div>
                                    
//                                 </td>
//                             </tr> 
//                        )
//                     })}
                  
//                     </tbody>               
//                 </table>
                    
//             </div>
//         )
//     }
// }
