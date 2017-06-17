import {Router, Route, Link,hashHistory} from 'React-Router'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as registerActions from './RegisterAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './Register.scss'

class RegisterComponent extends React.Component {
    constructor(props){
        super(props)
    }
    goBack(){
        window.history.back()
    }
    registerHandler(){
        if(/^1\d{10}$/.test(this.refs.userphone.value) && /^[\w.]{6,20}$/.test(this.refs.password.value)){
            this.props.register(this.refs.nickname.value,this.refs.userphone.value, this.refs.password.value).then(reponse => {
                let msgObj = JSON.parse(this.props.message);
                if(msgObj.status == true){
                    hashHistory.push('login')
                }else{
                    alert('该用户名已注册!')
                }
            })
        }else{
            alert('请输入正确的手机号和密码')
        }
    }

    render(){
        return(
            <div className="register">
                <div className="header">
                    <a href="" className="fa fa-angle-left" onClick={this.goBack}></a>
                </div>
                <ul>
                    <li><input type="text" ref="nickname" placeholder="请输入昵称"/></li>
                    <li><input type="text" ref="userphone" placeholder="请输入手机号"/></li>
                    <li><input type="password" ref="password" placeholder="请输入密码(6-20位数字、字母、符号)"/></li>
                    <li><input type="button" value="注册" className="btn_register" onClick={this.registerHandler.bind(this)}/></li>
                    <li><a href="#/login">用户登录</a><a href="">手机验证码登录</a></li>
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
export default connect(mapStateToProps, registerActions)(RegisterComponent)