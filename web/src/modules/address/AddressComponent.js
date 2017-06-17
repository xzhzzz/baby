import {Router,Route,Link,HashHistory} from 'React-Router'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as AddressActions from './AddressAction'

import './Address.scss'

class AddressComponent extends React.Component{
    constructor(props){
        super(props)
    }
    //返回键
    goBack(){
        window.history.back()
    }
    render(){
        return(
            <div className="address">
                <div className="top">
                    <Link  className="fa fa-angle-left" onClick={this.goBack}></Link>
                    <span>地址管理</span>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps,AddressActions)(AddressComponent)