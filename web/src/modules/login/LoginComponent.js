import {Router, Route, Link,hashHistory} from 'React-Router'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as loginActions from './LoginAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Login.scss'
// var ReactRouter = require('react-router');
// var {Router,Route,hashHistory,Link,IndexRoute,browserHistory} = ReactRouter;

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
    }
    goBack(){
        window.history.back()
    }
    componentWillMount(){
        if(window.localStorage.getItem('userphone') != null){
            hashHistory.push('personal')
        }else{
            hashHistory.push('login')
        }
    }
    loginHandler(){
        if(/^1\d{10}$/.test(this.refs.userphone.value) && /^[\w.]{6,20}$/.test(this.refs.password.value)){
            window.localStorage.setItem('userphone',this.refs.userphone.value)
            this.props.login(this.refs.userphone.value, this.refs.password.value).then(reponse => {
                let msgObj = JSON.parse(this.props.message);
                if(msgObj.status == true){
                    hashHistory.push('classify')
                }else{
                    alert(msgObj.message)
                }
            })
        }else{
            alert('请输入正确的帐号和密码')
        }
    }

    render(){
        return(
            <div className="login">
                <div className="header">
                    <a href="" className="fa fa-angle-left" onClick={this.goBack}></a>
                </div>
                <ul>
                    <li><input type="text" ref="userphone" placeholder="请输入手机号"/></li>
                    <li><input type="password" ref="password" placeholder="请输入密码(6-20位数字、字母、符号)"/></li>
                    <li><input type="button" value="登录" className="btn_login" onClick={this.loginHandler.bind(this)}/></li>
                    <li><a href="#/register">新用户注册</a><a href="">手机验证码登录</a></li>
                </ul>
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    message: state.login.message
})
export default connect(mapStateToProps, loginActions)(LoginComponent)