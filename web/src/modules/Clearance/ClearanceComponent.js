import React,{Component} from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './Clearance.scss';
import './../../static/common/rem';
import '../../static/libs/font-awesome-4.7.0/css/font-awesome.min.css'
import BackTopComponent from './../backTop/BackTopComponent'
import FooterComponent from './../footer/FooterComponent'
import * as appActions from './../app/AppAction'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class ClearanceComponent extends Component {
    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        this.props.app('母婴淘')
    }
    render(){
        let num = this.props.count
        let obj = this.props.data
        let title;
        let titleImg;
        let titleLogo;
        let sale;
        let milk;
        let clean;
        let feed;
        let safety;
        let tool;
      
        for(let attr in obj){
            title = obj[attr].title
            titleImg = obj[attr].titleImg
            titleLogo = obj[attr].titleLogo
            sale = obj[attr].sale
            milk = obj[attr].milk
            clean = obj[attr].clean
            feed = obj[attr].feed
            safety = obj[attr].safety
            tool = obj[attr].tool
        
        }
        return(
            <div id="container">
                <SpinnerComponent show={this.props.loading}/>
                <BackTopComponent />
                    
                <div className="header">
                    <a href="javascript:history.go(-1);" className="backPrev fa fa-angle-left"></a>
                    <span className="title">{title}</span>
                </div>
                <div className="main">
                    <div className="title_img">
                        <a href="javascript:;">
                            <img src={`src/static/imgs/index/${titleImg}`} alt="" />
                        </a>
                    </div>
                    {
                        (titleLogo||[]).map((item)=>{
                            num++
                            if(num == 1){
                                return <div>
                                            <div className="title_logo">
                                                <a href="javascript:;">
                                                    <img  src={`src/static/imgs/index/${item}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="clearance_Info">
                                                <ul className="clearfix">
                                                {
                                                    (sale||[]).map((item)=>{
                                                        return <li>
                                                                    <a href="javascript:;">
                                                                        <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                    </a>
                                                                    <p className="clearance_name">
                                                                        {item.goodsText}
                                                                    </p>
                                                                    <p className="clearance_sale">{item.goodsTips}</p>
                                                                    <a href="javascript:;" className="clearance_buy clearfix">
                                                                        <span>{item.goodsPrice}</span>
                                                                        <span>立即抢购</span>
                                                                    </a>
                                                                </li>
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                        
                            }else if(num == 2){
                                return <div>
                                            <div className="title_logo">
                                                <a href="javascript:;">
                                                    <img  src={`src/static/imgs/index/${item}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="clearance_Info">
                                                <ul className="clearfix">
                                                {
                                                    (milk||[]).map((item)=>{
                                                        return <li>
                                                                    <a href="javascript:;">
                                                                        <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                    </a>
                                                                    <p className="clearance_name">
                                                                        {item.goodsText}
                                                                    </p>
                                                                    <p className="clearance_sale">{item.goodsTips}</p>
                                                                    <a href="javascript:;" className="clearance_buy clearfix">
                                                                        <span>{item.goodsPrice}</span>
                                                                        <span>立即抢购</span>
                                                                    </a>
                                                                </li>
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                        
                            }else if(num == 3){
                                return <div>
                                            <div className="title_logo">
                                                <a href="javascript:;">
                                                    <img  src={`src/static/imgs/index/${item}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="clearance_Info">
                                                <ul className="clearfix">
                                                {
                                                    (clean||[]).map((item)=>{
                                                        return <li>
                                                                    <a href="javascript:;">
                                                                        <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                    </a>
                                                                    <p className="clearance_name">
                                                                        {item.goodsText}
                                                                    </p>
                                                                    <p className="clearance_sale">{item.goodsTips}</p>
                                                                    <a href="javascript:;" className="clearance_buy clearfix">
                                                                        <span>{item.goodsPrice}</span>
                                                                        <span>立即抢购</span>
                                                                    </a>
                                                                </li>
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                        
                            }else if(num == 4){
                                return <div>
                                            <div className="title_logo">
                                                <a href="javascript:;">
                                                    <img  src={`src/static/imgs/index/${item}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="clearance_Info">
                                                <ul className="clearfix">
                                                {
                                                    (feed||[]).map((item)=>{
                                                        return <li>
                                                                    <a href="javascript:;">
                                                                        <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                    </a>
                                                                    <p className="clearance_name">
                                                                        {item.goodsText}
                                                                    </p>
                                                                    <p className="clearance_sale">{item.goodsTips}</p>
                                                                    <a href="javascript:;" className="clearance_buy clearfix">
                                                                        <span>{item.goodsPrice}</span>
                                                                        <span>立即抢购</span>
                                                                    </a>
                                                                </li>
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                        
                            }else if(num == 5){
                                return <div>
                                            <div className="title_logo">
                                                <a href="javascript:;">
                                                    <img  src={`src/static/imgs/index/${item}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="clearance_Info">
                                                <ul className="clearfix">
                                                {
                                                    (safety||[]).map((item)=>{
                                                        return <li>
                                                                    <a href="javascript:;">
                                                                        <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                    </a>
                                                                    <p className="clearance_name">
                                                                        {item.goodsText}
                                                                    </p>
                                                                    <p className="clearance_sale">{item.goodsTips}</p>
                                                                    <a href="javascript:;" className="clearance_buy clearfix">
                                                                        <span>{item.goodsPrice}</span>
                                                                        <span>立即抢购</span>
                                                                    </a>
                                                                </li>
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                        
                            }else if(num == 6){
                                return <div>
                                            <div className="title_logo">
                                                <a href="javascript:;">
                                                    <img  src={`src/static/imgs/index/${item}`} alt="" />
                                                </a>
                                            </div>
                                            <div className="clearance_Info">
                                                <ul className="clearfix">
                                                {
                                                    (tool||[]).map((item)=>{
                                                        return <li>
                                                                    <a href="javascript:;">
                                                                        <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                    </a>
                                                                    <p className="clearance_name">
                                                                        {item.goodsText}
                                                                    </p>
                                                                    <p className="clearance_sale">{item.goodsTips}</p>
                                                                    <a href="javascript:;" className="clearance_buy clearfix">
                                                                        <span>{item.goodsPrice}</span>
                                                                        <span>立即抢购</span>
                                                                    </a>
                                                                </li>
                                                    })
                                                }
                                                </ul>
                                            </div>
                                        </div>
                                        
                            }
                        })
                    }
                </div>

                 <FooterComponent/>
            </div>
        )
    }
}

// export default ClearanceComponent
const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.app.data,
    count:state.app.count
})
export default connect(mapStateToProps, appActions)(ClearanceComponent)