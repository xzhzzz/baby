import React, {Component} from 'react'
import {connect} from 'react-redux'
// import * as indexActions from './indexAction'
// import SpinnerComponent from '../spinner/SpinnerComponent'
import {Router, Route, Link,hashHistory} from 'React-Router'
class welcomeComponent extends React.Component {
    render() {
        return(
            <div className="show_iframe">
                <div className="page-container">
                    <p>用户：{window.sessionStorage.getItem('nikname')}</p>
                    <p className="f-20 text-success">欢迎使用bady后台管理系统 <span className="f-14"></span></p>
                </div>
                <div className="indeximg"></div>
                <footer className="footer mt-20">
                    <div className="container">
                        <p>Copyright &copy;2015-2017 baby </p>
                        <p>本后台系统由baby前端框架提供前端技术支持</p>
                        
                    </div>
                </footer>
            </div>
        )
    }
}
module.exports = welcomeComponent;