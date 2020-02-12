import React, { Component } from 'react'
import {Overlay,Card} from '@blueprintjs/core'
export default class EmailSchdeule extends Component {
    state={isOpen:false}
    toggleDisplay = ()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <div>
                <button onClick={this.toggleDisplay}>
                    Click me
                </button>
                <Overlay isOpen={this.state.isOpen} onClose={this.toggleOverlay}> 
                    <Card>
                    <div>
                        hey
                    </div><div>
                        hey
                    </div><div>
                        hey
                    </div><div>
                        hey
                    </div>
                    <button onClose={this.toggleDisplay}>
                        Close
                    </button>
                    </Card>
                    
                </Overlay>
            </div>
        )
    }
}
