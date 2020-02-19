import styled from 'styled-components'
export const EmailPreferenecesHeader = styled.div`
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
export const EmailPreferencesSection = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #2A3375;
`
export const Wrapper = styled.div`
    padding: 0;
    margin-left: 10%;
    margin-top: 2%;
    margin-right: 10%;
    background-color: white;
    border-radius: 3px;
    width : 80% !important;
`
export const EmailCard = styled.div`
    font-family: arial, sans-serif;
    margin : 0;
    border-collapse: collapse;
    width: 100%;
`
export const EmailHeader = styled.div`
        color: black;
        font-weight: bold;
        text-transform: none;
        width: 50%%;
        padding: 20px 10px 20px 30px;
        font-size: 19px;
        
`
export const SubEmailType = styled.div`
    padding: 15px 10px 15px 30px;
    font-size : 14px;
    display:flex;
    flex-direction:row;
    align-items: center;
     
`
export const Preferences = styled.div`
    align-items : center;
    display : flex;
    height : 43px;
    width : 880px;
    flex-direction : row;
`
export const ManagePreferences = styled.div`
  padding-right: 15px;
`

export const SubEmailWrapper = styled.div`
    :hover {
        background-color: #edf9ff;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;   
    border-top: 1.2px solid #f0f0f0;

`
export const SwitchWrapper = styled.div`
    .bp3-control {
        margin-bottom: 0;
       
    }
`
export const EmailDescription = styled.div`
    color:'#919496';
    margin-top:'1px !important',
    padding-top : '3px'
`
export const PopoverWrappper = styled.div`

    align-items: center;
    display : inline;
    // height : 70px;
    // width : 70px;
    display: flex;
    margin-right: 10px;

`
export const Day = styled.span`
    text-align : center;
    text-decoration : none;
    font-weight : 400;
    justify-content : center;
    font-size : 14px;
    line-height : 2;
    list-style-type: none;
    margin : 3px;   
    border-radius : 50%;
    height: 32px;
    width: 32px;
    padding : 2px;
    // background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    :hover {
        cursor : pointer;
    }
`
export const Days = styled.div`
        display : flex;
        margin : 5px;
        flex-direction : row;
`
export const CollapseCard = styled.div`
    .bp3-collapse-body {
       padding : 10px;
       padding-top : 5px;
        margin : 0px 10px 10px 10px;
        
    }
    .bp3-card {
        margin : 0;
    }
`