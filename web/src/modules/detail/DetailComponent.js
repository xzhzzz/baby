import {Router,Route,Link,hashHistory} from 'React-Router'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as detailActions from './DetailAction'
import Slider from '../app/Slider/Slider';
import './Detail.scss'



class DetailComponent extends React.Component{
    constructor(props){
        super(props)
    }
    //获取商品ID显示内容
    componentWillMount() {
        let id = window.localStorage.getItem('id');
        id ? id : "p1";
        this.props.getInfo(id).then(reponse =>{

        });
    }
    //添加到购物车表
    addUsershopinfo(){
        if ( window.localStorage.getItem('userphone') != null && this.props.detailInfo != undefined&&this.props.detailInfo.length>0 ){
            let shopObj = this.props.detailInfo[0];
            shopObj.userPhone = window.localStorage.getItem('userphone')
            shopObj.qty = this.props.num;
            shopObj.collection = "address";
            shopObj.check = "true";
            shopObj.color = "#f60";
            this.props.addUsershop(shopObj)
            hashHistory.push('goodsList')
        }else{
            hashHistory.push('login')
        }
    }
    //返回键
    goBack(){
        window.history.back()
    }

    render(){
        //数据生成信息
        let price,name,agioTitle,produce,specification,parameter,imgFooter,imgUrl,IMAGE_DATA = []
        if (this.props.detailInfo != undefined&&this.props.detailInfo.length>0){
            price = this.props.detailInfo[0].price[0];
            name = this.props.detailInfo[0].name;
            agioTitle = this.props.detailInfo[0].agioTitle;
            produce = this.props.detailInfo[0].produce;
            specification = this.props.detailInfo[0].specification.map(function(item){
                return <span>{item}</span>
            });
            parameter = this.props.detailInfo[0].parameter.split(",").map(function(item){
                return <p>{item}</p>
            });
            imgFooter = this.props.detailInfo[0].imgFooter.map(function(item){
                return <img src={'src/static/imgs/goods/'+item+''}/>
            });
            imgUrl = this.props.detailInfo[0].imgUrl.map(function(item,index){
                IMAGE_DATA.push({
                    src:'../../src/static/imgs/goods/'+item+'',
                    alt:'images-'+(index+1)+''
                })
            })
        }
        const { increment, decrement, detail } = this.props;
        return(
            <div className="detail">
                <div className="top">
                    <Link className="fa fa-angle-left" onClick={this.goBack}></Link>
                    <span>{name}</span>
                </div>
                <div className="show_img">
                    <Slider
                        items={IMAGE_DATA}
                        speed={1.2}
                        delay={2.1}
                        pause={true}
                        autoplay={true}
                        dots={true}
                        arrows={true}
                    />
                </div>
                <div className="show_detail">
                    <ul>
                        <li>￥ {price}</li>
                        <li>{agioTitle}</li>
                        <li><p>{produce}</p></li>
                    </ul>
                </div>
                <div className="specification">
                    <p>规格</p>
                    {specification}
                </div>
                <div className="show_comment">
                    <div>其它妈妈怎么说<span> 99% </span>好评（1084人）</div>
                    <ul>
                        <li>Joe 五星 时间</li>
                        <li><p>一直是我信赖的奶粉，对宝宝各方面都很好</p></li>
                    </ul>
                </div>
                <div className="show_ad">
                    <img src="src/static/imgs/new_customer.png" alt=""/>
                </div>
                <div className="show_parameter">
                    <div>商品参数和使用指南</div>
                    {parameter}
                </div>
                <div className="show_imgFooter">
                    {imgFooter}
                </div>
                <div className="to_car">
                    <ul>
                        <li><Link to="shopCar"><i className="iconfont icon-gouwuche"></i></Link></li>
                        <li>
                            <button className="btn_l" onClick={decrement}>-</button>
                            <input type="text" value={this.props.num}></input>
                            <button className="btn_r" onClick={increment}>+</button>
                        </li>
                        <li><Link to=""><p onClick={this.addUsershopinfo.bind(this)}>加入购物车</p></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    num: state.detail.num,
    detailInfo:state.detail.detailInfo
})

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         num: state.detail.num,
//         detailInfo:state.detail.detailInfo        
//     }
// }
export default connect(mapStateToProps, detailActions)(DetailComponent)