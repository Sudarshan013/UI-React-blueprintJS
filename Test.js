<tr>
<th className="email-type-title">Reports</th>
<th className="email-icon"><Icon icon="envelope" iconSize={20}/><div>
    EMAIL                            </div></th>
<th className="email-manage-icon"><Icon icon="cog" iconSize={20} />
    <div>
        Manage
    </div>
</th>

</tr>
<tr>
<td className="report-type">No Result Reports 
    <p style={{color:'#919496'}}>
    Get results of the searches which ended in no man's land
    </p>
    <Collapse isOpen={this.state.isOpen} >
        <div className="bp3-card bp3-elevation-3" >
            We build products that make people better at their most important work.
        </div>
     </Collapse>
</td>
<td className="switch-icon"><label className="bp3-control bp3-switch .modifier">
    <input type="checkbox"  />
    <span className="bp3-control-indicator"></span>   
    </label>
</td>   
<td className="manage-icon">
    <Button active={false} onClick={this.handleClick}>
        <Icon icon="cog"/>
    </Button>
</td>
</tr>
<tr>
<td className="report-type">Product Segment Report
    <p style={{color:'#919496'}}>
    Get results of the searches which ended in no man's land
    </p>
    <Collapse isOpen={this.state.isOpen}>
    <div className="bp3-card bp3-elevation-3" >
        We build products that make people better at their most important work.
    </div>
</Collapse>
</td>
<td className="switch-icon"><label className="bp3-control bp3-switch .modifier">
    <input type="checkbox"  />
    <span className="bp3-control-indicator"></span>   
    </label>
</td>
<td className="manage-icon">
    <Button active={false} onClick={this.handleClick}>
        <Icon icon="cog"/>
    </Button>
</td> 
</tr>
<tr>
<td className="report-type">Tag Reports
    <p style={{color:'#919496'}}>
    Get results of the searches which ended in no man's land
    </p>
    <Collapse isOpen={this.state.isOpen}>
    <div className="bp3-card bp3-elevation-3" >
        We build products that make people better at their most important work.
    </div>
</Collapse>
</td>
<td className="switch-icon"><label className="bp3-control bp3-switch .modifier">
    <input type="checkbox"  />
    <span className="bp3-control-indicator"></span>   
    </label>
</td>
<td className="manage-icon">
    <Button active={false} onClick={this.handleClick}>
        <Icon icon="cog"/>
    </Button>
</td>
</tr>
</table>
<div>
<table>
<tr>
<th className="email-type-title">Alerts</th>
</tr>
<tr>
<td className="report-type">No Result Reports 
    <p style={{color:'#919496'}}>
    Get results of the searches which ended in no man's land
    </p>
    <Collapse isOpen={this.state.isOpen}>
        <div className="bp3-card bp3-elevation-3" >
            We build products that make people better at their most important work.
        </div>
    </Collapse>
</td>
<td className="switch-icon"><label className="bp3-control bp3-switch .modifier">
    <input type="checkbox"  />
    <span className="bp3-control-indicator"></span>   
    </label>
</td>
<td className="manage-icon">
    <Button active={false} onClick={this.handleClick}>
        <Icon icon="cog"/>
    </Button>
</td>
</tr>                
</table>
<table>
<tr>
 <th className="email-type-title">Developer Alerts</th>
</tr>
<tr>
<td className="report-type">
    Get Developer Alerts
</td>
<td>

</td>
<td className="checkbox-icon">
<Checkbox/>  
</td>
</tr>
</table>