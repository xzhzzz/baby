import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Router, Route, hashHistory, Link } from 'react-router'
import {bindActionCreators} from 'redux'
import * as OrderActions from './OrderAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './order.scss'


class OrderComponent extends React.Component {
    constructor(props){
        super(props)      
    }
    componentDidMount() {
       this.props.shopCar(localStorage.getItem('userphone','value'))
        .then(res =>{
            console.log(res.body.data[0].address);
            let arr = JSON.parse(res.body.data[0].address);
            if(res.body.data[0] != undefined && arr != undefined && arr.length>0 ){
                document.getElementById('dizhi').style.display='block';
                document.getElementById('noaddress').style.display='none';
                document.getElementById('dizhi').innerHTML = '<p>收货人：<span>'+arr[0].addressee+'</span></p><p>手&nbsp;&nbsp;&nbsp;机：<span className="phone">'+arr[0].phoneNum+'</span></p><p>地&nbsp;&nbsp;&nbsp;址：<span>'+arr[0].fullAddress+'</span></p>';
            }else{document.getElementById('dizhi').style.display='none';document.getElementById('noaddress').style.display='block';}
            this.props.address(sessionStorage.getItem('phone','value'))   
        })  
	}
  
    componentDidUpdate(){
        var arr = document.getElementsByClassName('introduce1')
        //console.log(arr)
        var maxwidth = 20;
        if(arr.length > 0){
            for(var i=0;i<arr.length;i++){
                var oldText = arr[i].innerText;
                if (oldText.length > maxwidth) {  
                    var newText = oldText.substring(0,maxwidth)+"...";  
                    arr[i].innerText = newText;
                }  
            }
        }
        var arr1 = document.getElementsByClassName('phone')
        if(arr1.length>0){
           console.log(arr1)
           var value = arr1[0].innerText;
           //console.log(value)
           arr1[0].innerText = value.substring(0,3) + "****"+ value.substring(7,11)
        }

        var arrtext = document.getElementsByClassName('zongji')
        if(arrtext.length>0){
            if(arrtext[0].innerText == 0.00 ){
                document.getElementById('show-hide').style.transform ='rotate(90deg)'
            }else{
                document.getElementById('show-hide').style.transform ='rotate(270deg)'
            }
        }  
    }
    
    goback(){
       history.back();
    }
    toadd(){
        hashHistory.push('address/addressAdd')
    }
    hide(){ 
        if(document.getElementById('goods').style.display == 'block'){
            document.getElementById('show-hide').style.transform ='rotate(90deg)'
            document.getElementById('goods').style.display = 'none'
        }else{
            document.getElementById('show-hide').style.transform ='rotate(270deg)'
            document.getElementById('goods').style.display = 'block'
        }
    }

    render(){
        var res = 0;
        var idx = 0;
        var arr = [];
        if((sessionStorage.getItem('phone','value') != null) && (this.props.dataing.data !=undefined) && (this.props.dataing.data.length>0)){
            //console.log(this.props.dataing.data)
            var items = this.props.dataing.data
            var itemHtml = items.map(function(item,index){
                if(item.check == 'true'){
                    //console.log(item)
                    res +=  Number(item.price*item.qty);
                    arr.push(index)
                    return <li key={index} className="goods-shop" id={"product"+index}>
                        <div className="img1"><img src={'src/static/imgs/goods/'+item.imgUrl[0]} /></div>
                        <div className="introduce1">{item.name}</div>
                        <div className="qty">{"x"+item.qty}</div>
                        <div className="toprice1"><span>￥</span><span className="price">{item.price}</span></div> 
                    </li>;
                }
            })
        } 
        //console.log(arr)
        return(
            <div className="order">
                <header><i className="go-back fa fa-angle-left" onClick={this.goback.bind(this)}> </i><span>确认订单</span></header>
                <div className="shouhuo"><span>收货人信息</span><img src="src/static/imgs/pic_go.png" onClick={this.toadd.bind(this)}/></div>
                <div className="dizhi" id="dizhi"></div>
                <div id="noaddress" onClick={this.toadd.bind(this)}>您还没有添加地址,点击添加地址</div>
                <div className="pays"><span>购买商城物品</span><span style={{"color":"#f60"}}>{"("+arr.length+")"}</span><img src="src/static/imgs/pic_go.png" id="show-hide" onClick={this.hide.bind(this)}/></div>               
                <ul className="goods" id="goods" style={{"display":"block"}}>{itemHtml}</ul>
                <SpinnerComponent show={this.props.loading}/>                   
                <div className="totalPrice1">
                    <div className="jiage">
                        <p>应付金额：<span>￥</span><span className="zongji" id="zongji">                    
                          {Number(res).toFixed(2)}                     
                            </span></p>
                        <span className="yunfei">(含运费、综合税)</span>
                    </div>
                    <a href="javascript:void(0)" className="gobtn" style={{"display":"block","background":"#f60"}}>提交订单</a> 
                </div>                
            </div>
        )                
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
export default connect(mapStateToProps, OrderActions)(OrderComponent)
