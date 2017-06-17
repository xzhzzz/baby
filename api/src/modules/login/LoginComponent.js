// var React = require('react')
// var Component = React.Component;
// var React, {Component} = require('react');

// var ReactRouter = require('react-route');

// var {Router, Route, Link} = ReactRouter

// var Router = ReactRouter.Router
// var Route = ReactRouter.Route
// var Link = ReactRouter.Link

// import {Router, Route, Link} from 'React-Router'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import {Router, Route, Link,hashHistory} from 'React-Router'
import './Login.scss'
import '../../static/Hui-iconfont/1.0.8/iconfont.css'
import '../../static/styles/common.scss'
// @connect(
//     state => ({
//         loading: state.login.loading
//     }),
//     loginActions
// )

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }

    loginHandler(){
       
        this.props.login(this.refs.username.value, this.refs.password.value).then(request=>{
            let datas = JSON.parse(JSON.stringify(this.props.data))
            // console.log(datas)
            if (datas.status==true) {
                 hashHistory.push('/index/welcome')
                 var nikname = this.refs.username.value
                 window.sessionStorage.setItem('nikname',nikname)
                //  this
                 // hashHistory.replace('../../../H-ui.admin_3.1./index.html')
                 // window.location.href='../../../H-ui.admin_3.1./index.html'
            }else{
                alert("帐号或密码错误")
            }
        })
       // console.log(this.props)
    }

    render(){
        return(
            <div className="login">
                <div className="header">
                    
                </div>
                <div className="main">
                    <ul>
                        <li>
                            <label className="shiliang1"><i className="Hui-iconfont">&#xe60d;</i></label>
                            <input type="text" ref="username" className="useinput" placeholder="账户"/>
                        </li>
                        <li>
                            <label className="shiliang2"><i className="Hui-iconfont">&#xe60e;</i></label>
                            <input type="password" ref="password" className="psd" placeholder="密码"/>
                        </li>
                        <li className="dli">
                            <input type="button" value="&nbsp;登&nbsp;&nbsp;&nbsp;&nbsp;录&nbsp;" className="denglu" onClick={this.loginHandler.bind(this)}/>
                            <input type="button" value="&nbsp;取&nbsp;&nbsp;&nbsp;&nbsp;消&nbsp;" className="quxiao" />
                        </li>
                    </ul>
                     <SpinnerComponent show={this.props.loading}/>
                </div>
                <div className="footer">Copyright &copy; by baby</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.login.data
   
})
export default connect(mapStateToProps, loginActions)(LoginComponent)
// export default LoginComponent