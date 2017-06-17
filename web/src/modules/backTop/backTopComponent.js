import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './backTop.scss';
import './../../static/common/rem';

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class BackTopComponent extends Component {
    constructor(props){
        super(props)
    }

    //组件加载后监听滚动事件
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll.bind(this))
    }


    
    onScroll(){
        if(window.scrollY<=50){
            this.refs.backTop?this.refs.backTop.style.display = 'none':'';
        }else{
            this.refs.backTop?this.refs.backTop.style.display = 'block':'';
        }
    }

    backTop(){

        var time=setInterval(function(){
               //获取滚动条高度
                var osTop=document.documentElement.scrollTop||document.body.scrollTop;
                //每次上升高度
                var ispeed=Math.floor(-osTop/10);
                
                document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
                if(osTop==0){
                    clearInterval(time);
                }
            },30);
    }
    render(){
        return(
            <div className="back_btn" ref="backTop" style={{display:'none'}}>
                <div className="backIndex">
                    <Link to='/' className="fa fa-home"></Link>
                </div>
                <div className="backTop " onClick={this.backTop.bind(this)}>
                    <a href="javascript:;" className="fa fa-arrow-up"></a>
                </div>
            </div>
            
        )
    }
}        

export default BackTopComponent