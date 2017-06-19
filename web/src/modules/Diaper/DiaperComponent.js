import React,{Component} from 'react';
import {connect} from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import LazyLoad from 'react-lazyload';
import './Diaper.scss';
import './../../static/common/rem';
import '../../static/libs/font-awesome-4.7.0/css/font-awesome.min.css'
import BackTopComponent from './../backTop/BackTopComponent'
import FooterComponent from './../footer/FooterComponent'
import * as appActions from './../app/AppAction'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class DiaperComponent extends Component {
    constructor(props){
        super(props)
        
    }

    componentWillMount(){
       this.props.app('纸尿裤')
    }

    render(){
        let num = this.props.count
        let obj = this.props.data
        let title;
        let titleImg;
        let titleLogo;
        let merries;
        let moony;
        let goon;
        let pampers;
        for(let attr in obj){
            console.log(obj[attr])
            title = obj[attr].title
            titleImg = obj[attr].titleImg
            titleLogo = obj[attr].titleLogo
            merries = obj[attr].merries
            moony = obj[attr].moony
            goon = obj[attr].goon
            pampers = obj[attr].pampers
        }
     

        return(
            <div id="container">
                
                <div className="backIndex">
                    <Link to='/'></Link>
                </div>
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
                        //锚点连接
                    }
                    <div className="tabBox">
                        <div className="anchor">
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/diaper.jpg" alt="" useMap="#Map_one"/>
                                </a>
                                <map name="#Map_one" id="#Map_one">
                                    <area shape="rect" onfocus="blur(this)" coords="7,8,73,82" href="#anchor1" alt="" />
                                    <area shape="rect" onfocus="blur(this)" coords="83,8,152,82" href="#anchor2" alt="" />
                                    <area shape="rect" onfocus="blur(this)" coords="159,8,230,82" href="#anchor3" alt="" />
                                    <area shape="rect" onfocus="blur(this)" coords="235,8,309,82" href="#anchor4" alt="" />
                                    
                                    
                                </map>
                        </div>
                    </div>
                    {
                        (titleLogo||[]).map((item)=>{
                            console.log('11111111',item)
                            num++
                            if(num == 1){
                                return <div>
                                        <div className="title_logo">
                                            <a href="javascript:;">
                                                <LazyLoad>
                                                <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId}/>
                                            </LazyLoad>
                                            </a>
                                        </div>
                                        <div className="goods_Info">
                                            <ul className="clearfix">
                                        {
                                            
                                            (merries||[]).map((item)=>{
                                                
                                               return <li>
                                                                <a href="javascript:;">
                                                                   <LazyLoad>
                                                                    <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                </LazyLoad>
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
                                            <LazyLoad>
                                                <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId}/>
                                            </LazyLoad>
                                            </a>
                                        </div>
                                        <div className="goods_Info">
                                            <ul className="clearfix">
                                        {
                                            
                                            (moony||[]).map((item)=>{
                                                
                                               return <li>
                                                                <a href="javascript:;">
                                                                    <LazyLoad>
                                                                    <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                </LazyLoad>
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
                                               <LazyLoad>
                                                <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId}/>
                                            </LazyLoad>
                                            </a>
                                        </div>
                                        <div className="goods_Info">
                                            <ul className="clearfix">
                                        {
                                            
                                            (goon||[]).map((item)=>{
                                                
                                               return <li>
                                                                <a href="javascript:;">
                                                                    <LazyLoad>
                                                                    <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                </LazyLoad>
                                                                </a>
                                                                <p className="goods_name">{item.goodsText}</p>
                                                                <p className="goods_price">{item.goodsPrice}</p>
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
                                              <LazyLoad>
                                                <img  src={`src/static/imgs/index/${item.titleImg}`} alt="" id={item.titleId}/>
                                            </LazyLoad>
                                            </a>
                                        </div>
                                        <div className="goods_Info">
                                            <ul className="clearfix">
                                        {
                                            
                                            (pampers||[]).map((item)=>{
                                                
                                               return <li>
                                                                <a href="javascript:;">
                                                                <LazyLoad>
                                                                    <img src={`src/static/imgs/index/${item.goodsImg}`} alt="" />
                                                                </LazyLoad>    
                                                                </a>
                                                                <p className="goods_name">{item.goodsText}</p>
                                                                <p className="goods_price">{item.goodsPrice}</p>
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
                <SpinnerComponent show={this.props.loading}/>
            </div>
        )
    }
}
// export default DiaperComponent;
const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.app.data,
    count:state.app.count
})
export default connect(mapStateToProps, appActions)(DiaperComponent)
