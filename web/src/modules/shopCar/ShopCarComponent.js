import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Router, Route, hashHistory, Link } from 'react-router'
import {bindActionCreators} from 'redux'
import * as ShopCarActions from './ShopCarAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './shopCar.scss'

// @connect(
//     state => ({
//         loading: state.ShopCar.loading
//     }),
//     ShopCarActions
// )

class ShopCarComponent extends React.Component {
    constructor(props){
        super(props)      
    }

    componentDidMount() {  
        this.props.shopCar(localStorage.getItem('userphone','value'))
	}
    componentDidUpdate(){
        var arr1 = document.getElementsByClassName('ischeck')  
        if(arr1.length>0){
            var check = true;
            for(var i=0;i<arr1.length;i++){
                if(arr1[i].getAttribute('data-ischeck') != 'true'){ check=false}   
            }
            if(check){
                document.getElementById('check_all').style.background='#f60';
            }else{
                document.getElementById('check_all').style.background='#fff';
            }
        }

        var arr = document.getElementsByClassName('introduce1')
        //console.log(arr)
        var maxwidth = 18;
        if(arr.length > 0){
            for(var i=0;i<arr.length;i++){
                var oldText = arr[i].innerText;
                if (oldText.length > maxwidth) {  
                    var newText = oldText.substring(0,maxwidth)+"...";  
                    arr[i].innerText = newText;
                }  
            }
        }
        
        var arrtext = document.getElementsByClassName('zongji')
        if(arrtext.length>0){
            if(arrtext[0].innerText != 0.00 ){
                document.getElementById('gobtn1').style.display = 'block';
                document.getElementById('gobtn2').style.display = 'none';
            }else{
                document.getElementById('gobtn1').style.display = 'none';
                document.getElementById('gobtn2').style.display = 'block';
            }
        }
    }

	increment(id,qty){
        let arr =  Number(qty) +1
        this.props.decrement({'_id':id,'data':JSON.stringify({"qty":arr})}).then(reponse =>{
             this.props.shopCar(localStorage.getItem('userphone','value'))
        });      
	}

	decrement(id,qty){
        if(qty >1){qty -=1}
        else{qty =1}
        this.props.decrement({"_id":id,"data":JSON.stringify({"qty":qty})}).then(reponse =>{
             this.props.shopCar(localStorage.getItem('userphone','value'))
        });      
	}

    remove(id,index){
        console.log(id,index)
        console.log(localStorage.getItem('userphone'))
        this.props.remove({"_id":id}).then(reponse =>{
             this.props.shopCar(localStorage.getItem('userphone','value'))
        });      
    }

    check(id,check){
        if(check == 'false'){
            this.props.check({"_id":id,"data":JSON.stringify({"check":'true',"color":"#f60"})}).then(reponse =>{
                this.props.shopCar(localStorage.getItem('userphone','value'))
            });      
        }else{
            this.props.check({"_id":id,"data":JSON.stringify({"check":'false',"color":"#fff"})}).then(reponse =>{
                 this.props.shopCar(localStorage.getItem('userphone','value'))
            });      
        }
    }

    checkall(){
        if((document.getElementById('check_all').style.background) == 'rgb(255, 102, 0)'){
            this.props.checkall({'phone':localStorage.getItem('userphone','value'),"data":JSON.stringify({"check":'false',"color":"#fff"})}
                ).then(reponse =>{
                    this.props.shopCar(localStorage.getItem('userphone','value'))
            });    
        }else{
            this.props.checkall({'phone':localStorage.getItem('userphone','value'),"data":JSON.stringify({"check":'true',"color":"#f60"})}
                ).then(reponse =>{
                    this.props.shopCar(localStorage.getItem('userphone','value'))
            });   
        }
    }

    order(){
        var phone = window.localStorage.getItem('userphone','value')
        window.sessionStorage.setItem('phone',phone);
        hashHistory.push('/order')
    }

    linkto(id){
        window.localStorage.setItem('id',id);
    }

    goback(){
       history.back();
    }

    render(){
        if((localStorage.getItem('userphone','value') != null) && (this.props.dataing.data !=undefined) && (this.props.dataing.data.length>0)){
            //console.log(this.props.dataing.data)
            var res = 0;
            var arr = [];
            var items = this.props.dataing.data
            var itemHtml = items.map(function(item,index){
                return <li key={index} className="product" id={"product"+index}>
                    <div className="checkbox_add"><span className="ischeck" style={{'background':item.color}} data-ischeck={item.check} onClick={this.check.bind(this,item._id,item.check)}></span></div>
                    <div className="img"><Link to="detail" onClick={this.linkto.bind(this,item.id)} ><img src={'src/static/imgs/goods/'+item.imgUrl[0]} alt=""/></Link></div>
                    <div className="introduce"><Link to="detail" className="introduce1" onClick={this.linkto.bind(this,item.id)}>{item.name}</Link>
                    <span className="btnMinus" onClick={this.decrement.bind(this,item._id,item.qty)}>-</span>
                    <input type="text" value={item.qty} ref='value'/><span className="btnAdd" onClick={this.increment.bind(this,item._id,item.qty)}>+</span></div>
                    <div className="toprice"><span>￥</span><span className="price">{item.price}</span></div> 
                    <div className="del" onClick={this.remove.bind(this,item._id,index)}>x</div>
                    {/*{<div className="zhekou">满3减50</div>}*/}
                </li>;
            }, this)
            return(
                <div className="shopCar">
                    <header><i className="go-back fa fa-angle-left" onClick={this.goback.bind(this)}> </i><span>购 物 车</span></header>               
                    <ul className="shopadd">{itemHtml}</ul>
                    <SpinnerComponent show={this.props.loading}/>                   
                    <div className="totalPrice">
                        <div className="checkall"><span id="check_all"  onClick={this.checkall.bind(this)}></span><p>全选</p></div>
                        <div className="jiage">
                            <p>总计：<span>￥</span><span className="zongji" id="zongji">{                      
                               items.map(function(item,index){
                                   if(item.check=='true'){
                                        res +=  Number(item.price*item.qty)
                                        {/*if(item.qty>2){
                                            res -= 50
                                        }*/}
                                   }                                   
                                })}{res.toFixed(2)}
                                </span></p>
                            <span className="yunfei">(不含运费、综合税)</span>
                        </div>
                        <Link className="gobtn" id="gobtn1" style={{"display":"block","background":"#f60"}} onClick={this.order.bind(this)}>去结算</Link>
                        <a href="javascript:void(0)"  className="gobtn" id="gobtn2" style={{"display":"none","background":"#ccc","color":"#82737A"}}>去结算</a>
                    </div>                
                    <footer>
                        <ul>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon1.png" alt=""/>
                                <span>首页</span>
                                </Link>
                            </li>
                            <li><Link to="classify">
                                <img src="src/static/imgs/m-icon2.png" alt=""/>
                                <span>分类</span>
                                </Link>
                            </li>
                            <li><a href="javascript:void(0)">
                                <img src="src/static/imgs/m-icon3-1.png" alt=""/>
                                <span style={{'color':"#f60"}}>购物车</span>
                                </a>
                            </li>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon4.png" alt=""/>
                                <span>账户</span>
                                </Link>
                            </li>
                        </ul> 
                    </footer>
                </div>
            )           
        }
        else{
            return(
                <div className="shopCar">
                    <header><i className="go-back fa fa-angle-left" onClick={this.goback.bind(this)}> </i><span>购 物 车</span></header>
                    <div className="shopnull">
                        <img src="src/static/imgs/img_null.png" alt=""/>
                        <p>您的购物车空空如也~</p>
                        <Link to="/">去首页看看</Link>
                    </div>          
                    <footer>
                         <ul>
                            <li><Link to="/">
                                <img src="src/static/imgs/m-icon1.png" alt=""/>
                                <span>首页</span>
                                </Link>
                            </li>
                            <li><Link to="classify">
                                <img src="src/static/imgs/m-icon2.png" alt=""/>
                                <span>分类</span>
                                </Link>
                            </li>
                            <li><a href="javascript:void(0)">
                                <img src="src/static/imgs/m-icon3-1.png" alt=""/>
                                <span style={{'color':"#f60"}}>购物车</span>
                                </a>
                            </li>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon4.png" alt=""/>
                                <span>账户</span>
                                </Link>
                            </li>
                        </ul> 
                    </footer>
                </div>
            )
        }

    }
}
//将reducer绑定到props上
const mapStateToProps = state => ({
    loading: state.shopCar.loading,
    dataing: state.shopCar.dataing,
    //checking: state.check.loading
    //return state
})
  
// //将action的所有方法绑定到props上
// const mapDispatchToProps = dispatch => {
// 	//console.log(bindActionCreators(ShopCarActions, dispatch));
//   	return bindActionCreators(ShopCarActions, dispatch)
// }
export default connect(mapStateToProps, ShopCarActions)(ShopCarComponent)
