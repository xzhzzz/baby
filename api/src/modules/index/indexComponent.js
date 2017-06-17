
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as indexActions from './indexAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import {Router, Route, Link,hashHistory} from 'React-Router'



import './index.scss'
import '../../static/Hui-iconfont/1.0.8/iconfont.css'
// import '../../static/styles/common.scss'
// import '../../static/h-ui.admin/skin/default/skin.css'
// import '../../static/h-ui.admin/css/H-ui.admin.css'
// import '../../static//h-ui.admin/css/style.css'
// import '../../static/h-ui/css/H-ui.css'



class indexComponent extends React.Component {
    constructor(props){
        super(props)
    }
	
	// 退出
	indexOut(){
		window.sessionStorage.removeItem('nikname')
	}
	// 查询
	idnexqwe(){
		if(this.refs.id.value!=''){
			this.props.indexxun(this.refs.id.value)
		}
		
	}
	
	// 获取数据
	componentWillMount(){
		let sdf = window.sessionStorage.getItem('nikname')
		if(sdf == null){
			hashHistory.push('/login')
		}
		this.props.index('goods',1)
		
	}

	
    render(){
		
		
			return(
				<div>
					<header className="navbar-wrapper">
						<div className="navbar navbar-fixed-top">
							<div className="container-fluid cl"> <a className="logo navbar-logo-m f-l mr-10 visible-xs" href="javascript:;">baby后台管理系统</a> 
								<nav id="Hui-userbar" className="nav navbar-nav navbar-userbar hidden-xs">
									<ul className="cl">
										<li>管理员</li>
										<li className="dropDown dropDown_hover">
											<a href="javascript:;" className="dropDown_A">{window.sessionStorage.getItem('nikname')}</a>
										</li>
										<li className="dropDown dropDown_hover" onClick={this.indexOut}><a href="javascript:;" className="dropDown_A"onClick={this.indexOut}>切换账户</a></li>
										<li className="dropDown dropDown_hover" onClick={this.indexOut}><Link to="/login" className="dropDown_A" onClick={this.indexOut}>退出</Link></li>
										
									</ul>
								</nav>
							</div>
						</div>
					</header>
					<aside className="Hui-aside">
						<div className="menu_dropdown bk_2">
							
							<dl id="menu-picture">
								<dt><i className="Hui-iconfont">&#xe613;</i> 产品管理<i className="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
								<dd>
									<ul>
										<li><Link to="/index/product">产品列表</Link></li>
									</ul>
								</dd>
							</dl>
						</div>
					</aside>
					<div className="dislpayArrow hidden-xs"><a className="pngfix" href="javascript:void(0);"></a></div>
					<section className="Hui-article-box">
						<div id="Hui-tabNav" className="Hui-tabNav hidden-xs">
							<div className="Hui-tabNav-wp">
								<ul id="min_title_list" className="acrossTab cl">
									<li className="active">
										<Link to="/index/welcome">首页</Link>
									</li>	
									<li className="active">
										<Link to="/index/product">产品管理</Link>
										{/*<span title="产品管理" data-href="welcome.html">产品管理</span>*/}
									</li>								
							</ul>
						</div>
							<div className="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" className="btn radius btn-default size-S" href="javascript:;"><i className="Hui-iconfont">&#xe6d4;</i></a><a id="js-tabNav-next" className="btn radius btn-default size-S" href="javascript:;"><i className="Hui-iconfont">&#xe6d7;</i></a></div>
						</div>
							<div id="iframe_box" className="Hui-article">
								{this.props.children}
								{/*{<div className="show_iframe1">
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
												<span onClick={this.prevPage.bind(this)}>上一页</span>
												<span onClick={this.nextPage.bind(this)}>下一页</span>
											</div>
										</div>								
									</div>
								</div>}*/}
						</div>
					</section>
					
				</div>
			)
    }
	
}

const mapStateToProps = state => ({
    // loading: state.index.loading,
   datas:state.index.datas,
   num:state.index.num
   
})
export default connect(mapStateToProps, indexActions)(indexComponent)
// export default LoginComponent