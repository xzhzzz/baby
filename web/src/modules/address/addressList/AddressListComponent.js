import {Router,Route,Link,HashHistory} from 'React-Router'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as AddressListActions from './AddressListAction'

import './AddressList.scss'


class AddressListComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            addressInfo: ''
        }
    }
    componentWillMount(){
        this.props.addressListAction('account',window.localStorage.getItem('userphone')).then(response=>{

        })

    }
    componentDidMount(){
        let addressArr,address;
        if(this.props.addressData != undefined && this.props.addressData.length >0&&this.props.addressData[0].address!=''){
            addressArr = JSON.parse(this.props.addressData[0].address);
            address = addressArr.map(function(item,index){
                return <ul>
                        <li>地址 {index+1}</li>
                        <li>收件人： <span>{item.addressee}</span></li>
                        <li>详细地址： <span>{item.fullAddress}</span></li>
                        <li>手机号码： <span>{item.phoneNum}</span></li>
                </ul>
            })
        }
        this.setState({addressInfo:address})   
    }

    render(){
        // console.log(this.props.addressData)


        return(
            <div className="addressList">
                <div className="addAddress">
                    {this.state.addressInfo}
                    <Link to="address/addressAdd"><span>+</span></Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    addressData: state.addressList.data
})
export default connect(mapStateToProps,AddressListActions)(AddressListComponent)