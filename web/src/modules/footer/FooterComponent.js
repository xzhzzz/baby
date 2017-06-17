import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './footer.scss'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
class FooterComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="footer">
                <ul>
                    <li className="login">
                        <Link  href="index.html#/login">
                            <span></span>
                            <span>登录</span>
                        </Link>
                    </li>
                    <li className="register">
                        <Link  href="index.html#/register">
                            <span></span>
                            <span>注册</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FooterComponent