import React,{Component} from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './GoodsWeal.scss';
import './../../static/common/rem';
import '../../static/libs/font-awesome-4.7.0/css/font-awesome.min.css'
import BackTopComponent from './../backTop/BackTopComponent'
import FooterComponent from './../footer/FooterComponent'
import * as appActions from './../app/AppAction'

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'


class GoodsWealComponent extends Component {
    constructor(props){
        super(props)
       
    }
  componentWillMount(){
       this.props.app('奶粉')
    }
    render(){
        let num = this.props.count
        let obj = this.props.data
        let title;
        let titleImg;
        let titleLogo;
        let aptamil;
        let nutrilon;
        let hipp;
        let bellamys;
        let a2;
        let msje;
        let yapei;
        let mzc;
        let quec;
        for(let attr in obj){
            title = obj[attr].title
            titleImg = obj[attr].titleImg
            titleLogo = obj[attr].titleLogo
            aptamil = obj[attr].aptamil
            nutrilon = obj[attr].nutrilon
            hipp = obj[attr].hipp
            bellamys = obj[attr].bellamys
            a2 = obj[attr].a2
            msje = obj[attr].msje
            yapei = obj[attr].yapei
            mzc = obj[attr].mzc
            quec = obj[attr].quec
        }
        return(
            <div id="container">
                
                <BackTopComponent />
                 
                <div className="header">
                    <a href="javascript:history.back(-1);" className="backPrev  fa fa-angle-left"></a>
                    <span className="title">{title}</span>
                </div>
                <div className="main">
                    <div className="title_img">
                        <a href="javascript:;">
                            <img src={`src/static/imgs/index/${titleImg}`} alt="" />
                        </a>
                    </div>
                    {
                        //锚点连接
                    }
                    <div className="tabBox">
                        <div className="anchor">
                            <a href="javascript:;">
                                <img src="src/static/imgs/index/anchor1.jpg" alt="" useMap="#Map_one"/>
                            </a>
                            <map name="#Map_one" id="#Map_one">
                                <area shape="rect" onfocus="blur(this)" coords="7,8,73,82" href="#anchor1" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="83,8,152,82" href="#anchor2" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="159,8,230,82" href="#anchor3" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="235,8,309,82" href="#anchor4" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="7,97,73,173" href="#anchor5" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="83,97,152,173" href="#anchor6" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="159,97,230,173" href="#anchor7" alt="" />
                                
                            </map>
                        </div>
                        <div className="anchor">
                            <a href="javascript:;">
                                <img src="src/static/imgs/index/anchor2.jpg" alt="" useMap="#Map_two"/>
                            </a>
                            <map name="#Map_two" id="#Map_two" >
                                <area shape="rect" onfocus="blur(this)" coords="7,10,73,82" href="#anchor8" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="83,5,152,82" href="#anchor9" alt="" />       
                                <area shape="rect" onfocus="blur(this)" coords="235,5,309,82" href="#anchor10" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="7,97,73,173" href="#anchor11" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="83,97,152,173" href="#anchor12" alt="" />
                                <area shape="rect" onfocus="blur(this)" coords="159,97,230,173" href="#anchor13" alt="" />
                            
                            </map>
                        </div>
                    </div>

                    {
                        (titleLogo||[]).map((item)=>{
                            num++;
                            if(num == 1){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (aptamil||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
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
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (nutrilon||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
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
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div> 
                                </div>
                                
                            }else if(num == 4){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (hipp||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
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
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (bellamys||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
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
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    
                                </div>
                            }else if(num == 7){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (a2||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
                                                    </li>       
                                        })
                                    }
                                        </ul>
                                    </div>
                                </div>
                            }else if(num == 8){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (msje||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
                                                    </li>       
                                        })
                                    }
                                        </ul>
                                    </div>
                                </div>
                            }else if(num == 9){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (yapei||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
                                                    </li>       
                                        })
                                    }
                                        </ul>
                                    </div>
                                </div>
                            }else if(num == 10){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (mzc||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
                                                    </li>       
                                        })
                                    }
                                        </ul>
                                    </div>
                                </div>
                            }else if(num == 11){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                    <div className="goods_Info">
                                        <ul className="clearfix">
                                    {
                                        (quec||[]).map((item)=>{
                                           
                                            return <li>
                                                        <a href="javascript:;">
                                                            <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                        </a>
                                                        <p className="goods_name">{item.goodsText}</p>
                                                        <p className="goods_price">{item.goodsPrice}</p>
                                                    </li>       
                                        })
                                    }
                                        </ul>
                                    </div>
                                </div>
                            }else if(num == 12){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>

                                </div>
                            }else if(num == 13){
                                return <div>
                                    <div className="title_logo">
                                        <a href="javascript:;">
                                            <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId} />
                                        </a>
                                    </div>
                                   
                                </div>
                            }

                        })
                    }
        
                </div>
                
                 <FooterComponent />
                 <SpinnerComponent show={this.props.loading}/>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.app.data,
    count:state.app.count
})
export default connect(mapStateToProps, appActions)(GoodsWealComponent)