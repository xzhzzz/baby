import {Router,Route,Link,hashHistory} from 'React-Router'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as AddressAddActions from './AddressAddAction'

import './AddressAdd.scss'

class AddressAddComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:''
        }
    }
    componentWillMount(){
       this.props.personal('account',window.localStorage.getItem('userphone')).then(response =>{
            this.setState({user:response.body[0]})
            // console.log(response.body[0],"response.body[0]")
        })
    }
    preserve(){

 
        let dataObj = this.state.user,addressObj = {},addressArr = [];
        delete dataObj._id;

        dataObj.address? dataObj.address : dataObj.address="[]";
        addressArr = JSON.parse(dataObj.address)
        
        dataObj.collection = "account";

        addressObj.addressee = document.getElementsByClassName('addressee')[0].value
        addressObj.fullAddress = document.getElementsByClassName('fullAddress')[0].value
        addressObj.phoneNum = document.getElementsByClassName('phoneNum')[0].value
        addressArr.push(addressObj);

        // console.log(addressObj,addressArr,"addressArr")
         
        dataObj.address = JSON.stringify(addressArr);
       
        // console.log(dataObj.address,"dataObj.address")
        // console.log(dataObj,"dataObj")
        this.props.address(dataObj)
        
        hashHistory.push('address/addressList')
       
    }
    render(){
        return(
            <div className="addressAdd">
                <ul>
                    <li><input type="text" placeholder="收件人姓名" className="addressee"/></li>
                    <li><input type="text" placeholder="详细地址" className="fullAddress"/></li>
                    <li><input type="text" placeholder="手机号码" className="phoneNum"/></li>
                    <li><input type="button" value="保存" className="preserve" onClick={this.preserve.bind(this)}/></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    data:state.personal.data

})
export default connect(mapStateToProps,AddressAddActions)(AddressAddComponent)