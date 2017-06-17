import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as indexActions from './indexAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import {Router, Route, Link,hashHistory} from 'React-Router'
// import './index.scss'
import '../../static/Hui-iconfont/1.0.8/iconfont.css'
class productComponent extends React.Component {
	constructor(props){
        super(props)
		this.state ={
			value: 1
		}
    }
	//  state ={
	// 	'value': 1
	// }
    // 跳转
    indexHandler(){
       hashHistory.push('/add')
	   
	   // window.location.reload()
    }
    // 查询
	idnexqwe(){
		if(this.refs.id.value!=''){
			this.props.indexxun(this.refs.id.value)
		}
		
	}
	// 更新
	gengxin(qwe){
		window.sessionStorage.setItem('id',qwe)
		hashHistory.push('/Add')
	}
	// 删除
	shanchu(asd){
		this.props.indexdel(asd)
		 alert("删除成功")
		 this.props.index('goods',this.state.value)
	}
	// 刷新
	shua(){
		window.location.reload()
	}
	// 获取数据
	componentWillMount(){
		let sdf = window.sessionStorage.getItem('nikname')
		if(sdf == null){
			hashHistory.push('/login')
		}
		// console.log(this.state.value)
		this.props.index('goods',this.state.value)
		
	}
    // 限制字数
	componentDidUpdate(){
		// console.log(123)
		let  arr = document.getElementsByClassName('th')
		let  arr1 = document.getElementsByClassName('n')
		let  arr2 = document.getElementsByClassName('t')
		let  arr3 = document.getElementsByClassName('s')
		if(arr3.length>0){
			for(let  i = 0;i < arr3.length;i++){
				let oldText = arr3[i].innerText;  
				if (oldText.length > 1) {  
					let newText = oldText.substring(0,24)+"...";  
					arr3[i].innerText = newText;
				}  
			}
		}
		if(arr2.length>0){
			for(let  i = 0;i < arr2.length;i++){
				let oldText = arr2[i].innerText;  
				if (oldText.length > 1) {  
					let newText = oldText.substring(0,4)+"...";  
					arr2[i].innerText = newText;
				}  
			}
		}
		if(arr1.length>0){
			for(let  i = 0;i < arr1.length;i++){
				let oldText = arr1[i].innerText;  
				if (oldText.length > 1) {  
					let newText = oldText.substring(0,4)+"...";  
					arr1[i].innerText = newText;
				}  
			}
		}
		if(arr.length>0){
			for(let  i = 0;i < arr.length;i++){
				let oldText = arr[i].innerText;  
				if (oldText.length > 1) {  
					let newText = oldText.substring(0,7)+"...";  
					arr[i].innerText = newText;
				}  
			}
		}
	}
	// 下一页
	nextPage(){
		++this.state.value
		this.setState({value:this.state.value})
		this.props.index('goods',this.state.value)
	}
	// 上一页
	prevPage(){
		--this.state.value
		if(this.state.value<1){
			this.state.value=1
		}
		this.setState({value:this.state.value})
		this.props.index('goods',this.state.value)
		// console.log(this.state.value)
	}
	// 首页
	indexStart(){
		this.setState({value:1})
		this.props.index('goods',1)
	}
    render() {
		// console.log(this.state.value)
        var itemhtml
		var length
		if(this.props.datas!=undefined && this.props.datas.length > 0){
			length = this.props.datas.length
			// console.log(this.props.datas)
			itemhtml = this.props.datas.map(function(item,index){
					return <tr className="text-c odd" role="row" key={index}>
						<td className="sorting_1"  className="o" ref="delid">{item.id}</td>
						<td  className="n">{item.agioTitle}</td>
						<td  className="t">{item.name}</td>
						<td  className="th">{item.imgUrl}</td>
						<td className="text-l"  className="f">{item.price}</td>
						<td className="text-c"  className="fi">{item.specification}</td>
						<td  className="s">{item.produce}</td>
						<td className="td-manage"  className="e"><a className="ml-5" href="javascript:;" title="编辑" onClick={this.gengxin.bind(this,item.id)}><i className="Hui-iconfont"></i></a> <a className="ml-5" href="javascript:;" title="删除" onClick={this.shanchu.bind(this,item.id)}><i className="Hui-iconfont"></i></a></td>
					</tr>
				}.bind(this))
		}
        return(
            <div className="show_iframe1">
                <nav className="breadcrumb"><i className="Hui-iconfont">&#xe67f;</i> 首页 <span className="c-gray en">&gt;</span> 产品管理 <span className="c-gray en">&gt;</span> 产品列表 <a className="btn btn-success radius r" href="javascript:location.replace(location.href);" title="刷新"  onClick={this.shua}><i className="Hui-iconfont">&#xe68f;</i></a></nav>
                <div className="page-container">
                    <div className="text-c">
                        <input type="text" name="" id="" placeholder="ID" className="input-text" ref="id"/>
                        <button name="" id="" className="btn btn-success" type="submit" onClick={this.idnexqwe.bind(this)}><i class="Hui-iconfont">&#xe665;</i> 搜商品</button>
                            
                    </div>
                    
                    <div className="cl pd-5 bg-1 bk-gray mt-20"> <span className="l"><a className="btn btn-primary radius" href="javascript:;" onClick={this.indexHandler}><i className="Hui-iconfont"  ref='name'>&#xe600;</i> 添加商品</a></span> <span className="r">共有数据：<strong>{length}</strong> 条</span> 
                    </div>
                    <div className="mt-20">
                        <table className="table table-border table-bordered table-bg table-hover table-sort">
                            <thead>
                                <tr className="text-c">
                                    <th className="o1">ID</th>
                                    <th className="n1">标题</th>
                                    <th className="t1">商品名称</th>
                                    <th className="th1">图片地址</th>
                                    <th className="f1">价格</th>
                                    <th className="fi1">规格</th>
                                    <th className="s1">商品描述</th>
                                    <th className="e1">操作</th>
                                </tr>
                            </thead>
                            <tbody>{itemhtml}</tbody>
                        </table>
                        <div className="page">
							<span onClick={this.indexStart.bind(this)}>首页</span>
                            <span onClick={this.prevPage.bind(this)}>上一页</span>
							<span>{this.state.value}</span>
                            <span onClick={this.nextPage.bind(this)}>下一页</span>
                        </div>
                    </div>								
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    // loading: state.index.loading,
   datas:state.index.datas,
//    num:state.index.num
   
})
export default connect(mapStateToProps, indexActions)(productComponent)
// module.exports = productComponent;