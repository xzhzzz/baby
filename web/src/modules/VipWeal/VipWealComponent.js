import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './VipWeal.scss';
import './../../static/common/rem';
import '../../static/libs/font-awesome-4.7.0/css/font-awesome.min.css'
import BackTopComponent from './../backTop/BackTopComponent'
import FooterComponent from './../footer/FooterComponent'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class VipWealComponent extends Component {
     constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="container">

                <BackTopComponent/>
                    
                <div className="header">
                    <a href="javascript:history.go(-1);" className="backPrev fa fa-angle-left"></a>
                    <span className="title">新人福利</span>
                </div>
                <div className="main">
                    <div className="weal_Msg">
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/vipweal01.jpg" alt="" />
                        </a>
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/vipweal02.jpg" alt="" />
                        </a>
                    </div>
                </div>
                <FooterComponent />
            </div>
        )
    }
}

export default VipWealComponent
// const mapStateToProps = state => ({
//     loading: state.login.loading
// })
// export default connect(mapStateToProps, appAction)(AppComponent)