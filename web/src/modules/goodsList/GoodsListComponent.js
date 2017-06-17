import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link} from "react-router"
import * as goodsListActions from './GoodsListAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../classify/commonrem.js'
import './GoodsList.scss'
 var ajax=false;
 var index;
class GoodsListComponent extends React.Component {
    constructor(props){
        super(props)
    }
    //判断其他页面是否有触发搜索事件
    componentWillMount(){
        console.log(window.localStorage.getItem("search"))
        if(window.localStorage.getItem("search")){
            this.props.search(window.localStorage.getItem("search"))
            window.localStorage.removeItem("search")
        }else{
            if(this.props.index == "0"){
                this.props.fyGetData(this.props.num);
            }else{
                this.props.goodsGetData();
            }
        }
    }
    //监听滚动事件
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
    //tab标签
    goodsListHandler(event){
        this.props.goodsList(event.target.getAttribute('data-index'))
        this.props.goodsGetData();
    }
    //筛选触发事件
    select(event){
        this.props.goodsList(event.target.getAttribute('data-index'))
        this.refs.mask.className="mask"
        this.refs.rightSlide.style.right=0;
    }
    //遮罩层
    delmask(){
        this.refs.mask.className=""
        this.refs.rightSlide.style.right=this.refs.rightSlide.style.width;
    }
    //传参详情页
    localStorageHandler(event){
        window.localStorage.setItem("id",event.target.getAttribute('data-id'))
    }
    //分页请求
    onScroll(){
        var height = this.refs.main?this.refs.main.offsetHeight:30000
        if(window.scrollY>height- window.innerHeight - 20 && !ajax && this.props.index==0  && this.props.num<=21){
            ajax=true
            this.props.fyGetData(this.props.num).then(reponse =>{
                    ajax=false
                });
        }
        if(window.scrollY>50){
            if(this.refs.top){
                this.refs.top.style.display='block'
            }
        }
        if(window.scrollY<50){
           if(this.refs.top){
                this.refs.top.style.display='none'
            }
        }
    }
    //返回顶部
    returnTop(){
        //阻止返回顶部时触发鼠标滚动事件
        window.onmousewheel=function(){
            return false
        }
        var timer = setInterval(()=>{
            // 先获取滚动过的距离
            var scrollTop = window.scrollY;
            // 利用滚动过的距离计算速度
            var speed = Math.ceil(scrollTop/5);
            // 设置滚动条滚动距离
            var _scrollTop = scrollTop - speed;
            if(_scrollTop <= 20){
                clearInterval(timer);
                _scrollTop = 0;
                //滚动完成后重新开启鼠标滚动事件
                window.onmousewheel=function(){
                    return true
                }
            }
            window.scrollTo(0,_scrollTop);   
        },30);
    }
    //搜索
    search(){
        if(this.refs.goodsSearch){
            if(this.refs.goodsSearch.value){
                this.props.search(this.refs.goodsSearch.value).then(reponse =>{
                });
            }else{
                alert('搜索不能为空')
            }
        }
    }
    //右边滑动侧栏
    rightSlide(event){
        event.stopPropagation();
        index=event.target.getAttribute('data-slide')
        document.querySelectorAll('.r-rightLink')[index].style.right=0;
    }
    slideBottom(event){
        document.querySelectorAll('.r-rightLink')[index].style.right=document.querySelectorAll('.r-rightLink')[index].style.width;
    }
    logoSel(event){
        document.querySelectorAll('.span1')[index].innerHTML=event.target.innerHTML;
        event.stopPropagation();
        document.querySelectorAll('.r-rightLink')[index].style.right=document.querySelectorAll('.r-rightLink')[index].style.width;
    }
    confirm(){
        alert('接口还没有写好,完善中！')
    }
    render(){
        return(
            <div className="goodsList">
            <div ref="mask" onClick={this.delmask.bind(this)}></div>
            <div className="right-slide" ref="rightSlide">
                <div className="slide-top">
                    <div className="slide-back"><span onClick={this.delmask.bind(this)}>返回</span></div>
                    <div className="slide-checked"><span onClick={this.confirm.bind(this)}>确定</span></div>
                </div>
                <div className="slide-bottom" onClick={this.slideBottom.bind(this)}>
                    <div className="slide-section move1" onClick={this.rightSlide.bind(this)} data-slide="0">
                        <span data-slide="0">品牌</span>
                        <div className="rightLink" data-slide="0">
                            <span data-slide="0" className="span1">全部</span>
                            <i className="fa fa-angle-right" data-slide="0"></i>
                        </div>
                    </div>
                    <div className="slide-section" onClick={this.rightSlide.bind(this)} data-slide="1">
                        <span data-slide="1">产地</span>
                        <div className="rightLink" data-slide="1">
                            <span data-slide="1" className="span1">全部</span>
                            <i className="fa fa-angle-right" data-slide="1"></i>
                        </div>
                    </div>
                    <div className="slide-section" onClick={this.rightSlide.bind(this)} data-slide="2">
                        <span data-slide="2">产品</span>
                        <div className="rightLink" data-slide="2">
                            <span data-slide="2" className="span1">全部</span>
                            <i className="fa fa-angle-right" data-slide="2"></i>
                        </div>
                    </div>
                    <div className="slide-section" onClick={this.rightSlide.bind(this)} data-slide="3">
                        <span data-slide="3">价格</span>
                        <div className="rightLink" data-slide="3">
                            <span data-slide="3" className="span1">全部</span>
                            <i className="fa fa-angle-right" data-slide="3"></i>
                        </div>
                    </div>
                    <div className="r-rightLink" ref="logoSlide">
                        <span onClick={this.logoSel.bind(this)}>新贝</span>
                        <span onClick={this.logoSel.bind(this)}>阿美达</span>
                        <span onClick={this.logoSel.bind(this)}>美得乐</span>
                        <span onClick={this.logoSel.bind(this)}>兰思诺</span>
                        <span onClick={this.logoSel.bind(this)}>爱莫可</span>
                        <span onClick={this.logoSel.bind(this)}>小白熊</span>
                    </div>
                    <div className="r-rightLink" ref="logoSlide">
                        <span onClick={this.logoSel.bind(this)}>中国</span>
                        <span onClick={this.logoSel.bind(this)}>墨西哥</span>
                        <span onClick={this.logoSel.bind(this)}>马来西亚</span>
                        <span onClick={this.logoSel.bind(this)}>泰国</span>
                        <span onClick={this.logoSel.bind(this)}>土耳其</span>
                        <span onClick={this.logoSel.bind(this)}>瑞士</span>
                        <span onClick={this.logoSel.bind(this)}>英国</span>
                    </div>
                    <div className="r-rightLink" ref="logoSlide">
                        <span onClick={this.logoSel.bind(this)}>奶粉</span>
                        <span onClick={this.logoSel.bind(this)}>奶嘴</span>
                        <span onClick={this.logoSel.bind(this)}>纸尿裤</span>
                    </div>
                    <div className="r-rightLink" ref="logoSlide">
                        <span onClick={this.logoSel.bind(this)}>0~300</span>
                        <span onClick={this.logoSel.bind(this)}>300~600</span>
                        <span onClick={this.logoSel.bind(this)}>600~1000</span>
                    </div>
                </div>
            </div>
            <div className="return-top" onClick={this.returnTop} ref="top"><i className="fa fa-arrow-circle-up"></i></div>
            <SpinnerComponent show={this.props.loading}/>
                <div className="goodsList-top">
                <Link to="classify">
                    <div className="main-logo">
                        <i className="fa fa-angle-left"></i>
                    </div>
                </Link>   
                    <div className="top-search">
                        <span onClick={this.search.bind(this)}>
                            <i className="fa fa-search"></i>
                        </span>
                        <input type="text" placeholder="搜索" id="search" ref="goodsSearch"/>
                    </div>
                </div>
                <div className="goodsList-sel">
                    <ul>
                        {
                            this.props.text.map(function(ele,index){
                                if(index==3){
                                    return <li onClick={this.select.bind(this)} data-index={index} data-id={index} className={this.props.index==index?'active':'none'}><span data-index={index}>{ele}<i data-index={index} className="fa fa-filter"></i></span></li>
                                }
                                return <li onClick={this.goodsListHandler.bind(this)} data-index={index} data-id={index} className={this.props.index==index?'active':'none'}><span data-index={index}>{ele}</span></li>               
                            }.bind(this))
                        } 
                    </ul>
                </div>
                <div className="goodsList-main" ref="main">
                    {
                        (this.props.goodsdata||[]).map((ele,index)=>{
                            if(this.props.goodsdata.length>1 && this.props.goodsdata[0].hasOwnProperty('imgUrl')){
                                return <Link to="detail"><div className="main-section" data-id={ele.id} onClick={this.localStorageHandler}>
                                        <img data-id={ele.id} src={"../../../src/static/imgs/goods/"+(ele.imgUrl)[0]} onClick={this.localStorageHandler}/>
                                        <div data-id={ele.id} className="section-right" onClick={this.localStorageHandler}>
                                            <p data-id={ele.id} className="goodsName" onClick={this.localStorageHandler}>{(ele.name)[0]}</p>
                                            <p data-id={ele.id} className="goodsPrice" onClick={this.localStorageHandler}>¥{(ele.price)[0]}</p>
                                            <p data-id={ele.id} className="goodsSalenum" onClick={this.localStorageHandler}>销量:{ele.salesNum}</p>
                                        </div>
                                    </div></Link>
                            }
                        })
                    }
                     <h1 className={this.props.display?'active1':'none'}>亲，没有商品了！</h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    active:state.goodsList.active,
    text:state.goodsList.text,
    index:state.goodsList.index,
    goodsdata:state.goodsList.goodsdata,
    loading:state.goodsList.loading,
    num:state.goodsList.num,
    display:state.goodsList.display
})
export default connect(mapStateToProps, goodsListActions)(GoodsListComponent)
