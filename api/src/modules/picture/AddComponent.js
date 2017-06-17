import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as AddActions from './AddAction'
import SpinnerComponent from '../spinner/SpinnerComponent' 
import {Router, Route, Link,hashHistory} from 'React-Router'
import './Add.scss'
import '../../static/Hui-iconfont/1.0.8/iconfont.css'
import '../../static/styles/common.scss'
import $ from 'jquery'
import form from "../../../libs/jquery/jquery.form"
import './add.js'

// @connect(
//     state => ({
//         loading: state.Add.loading
//     }),
//     AddActions
// ) 

class AddComponent extends React.Component {
    constructor(props){
        super(props)
    }
    // 退出
    Adddel(){
        hashHistory.push('/index/product')
        window.sessionStorage.removeItem('id')
    }
    // 保存
    Addprcture(){
        this.props.Add(this.refs.id.value,this.refs.name.value,this.refs.salesNum.value,this.refs.agioTitle.value,this.refs.imgUrl.value,this.refs.price.value,this.refs.specification.value,this.refs.parameter.value,this.refs.imgFooter.value,this.refs.produce.value,)
        window.sessionStorage.removeItem('id')
         alert("保存成功")
         hashHistory.push('/index/product')
         
    }
    componentWillMount(){
        // if(window.sessionStorage.getItem('id')!=null){
            this.props.indexxun(window.sessionStorage.getItem('id'))
        // }
         
       
        
	}
    // componentDidUpdate(){componentWillMount
    //     let ID,AgioTitle, name,salesNum,imgUrl,price,specification,parameter,imgFooter,produce
    //     if(this.props.datas!=undefined && this.props.datas.length > 0){
            
    //          this.props.datas.map(function(item,index){
    //             ID = item.id
    //             AgioTitle = item.agioTitle
    //             name = item.name
    //             salesNum = item.salesNum
    //             imgUrl = item.imgUrl
    //             price= item.price
    //             specification = item.specification
    //             parameter = item.parameter
    //             imgFooter = item.imgFooter
    //             produce = item.produce
    //          })
    //          
    //         // this.refs.name.value = AgioTitle
    //         // document.getElementById("o").value="AgioTitle";
    //         // $('#o').val(AgioTitle)
    //         $('#t').val(name)
    //         $('#th').val(salesNum)
    //         $('#fqwe').val(imgUrl)
    //         $('.fi').val(price)
    //         $('.s').val(specification)
    //         $('.se').val(parameter)
    //         $('.e').val(imgFooter)
    //         $('#n').val(produce)
    //     }
    // }
    render(){
        // this.props.indexxun(window.sessionStorage.getItem('id'))
        
       let ID,AgioTitle, name,salesNum,imgUrl,price,specification,parameter,imgFooter,produce
        if(this.props.datas!=undefined && this.props.datas.length > 0){
             this.props.datas.map(function(item,index){
                ID = item.id
                AgioTitle = item.agioTitle
                name = item.name
                salesNum = item.salesNum
                imgUrl = item.imgUrl
                price= item.price
                specification = item.specification
                parameter = item.parameter
                imgFooter = item.imgFooter
                produce = item.produce
             })
            // this.refs.name.value = AgioTitle
            // document.getElementById("o").value="AgioTitle";
                $('#o').val(AgioTitle)
            // $('#ss').val(ID)
            $('#t').val(name)
            $('#th').val(salesNum)
            $('#fqwe').val(imgUrl)
            $('.fi').val(price)
            $('.s').val(specification)
            $('.se').val(parameter)
            $('.e').val(imgFooter)
            $('#n').val(produce)
        }
       
        
        return(
             <div className="layui-layer layui-layer-iframe  layer-anim" id="layui-layer2" type="iframe" times="2" showtime="0" contype="string">
                 <div className="layui-layer-title" move="ok">添加商品</div>
                 <div className="layui-layer-setwin" onClick={this.Adddel}><a className="layui-layer-ico layui-layer-close layui-layer-close1" onClick={this.Adddel}>X</a></div>
                 <div className="layui-layer-content">
                      <div className="page-container">
                          <form className="form form-horizontal" id="form-article-add">
                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2"><span className="c-red">*</span>ID：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" className="input-text"value={window.sessionStorage.getItem('id')} id="ss" name="" ref="id" />
                                    </div>
                                    </div>
                                 {/*<div className="row cl">
                                   <label className="form-label col-xs-4 col-sm-2 "><span className="c-red">*</span>表名</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" className="input-text"   id="t" name=""  ref="Tablename"/>
                                    </div>
                                    </div>*/}
                                <div className="row cl">
                                   <label className="form-label col-xs-4 col-sm-2 ">商品名称：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" className="input-text"   id="t" name=""  ref="name"/>
                                    </div>
                                    </div>
                                 <div className="row cl">
                                   <label className="form-label col-xs-4 col-sm-2">销量：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" className="input-text" id="th"   ref="salesNum"/>
                                    </div>
                                    </div>
                                 <div className="row cl">
                                   <label className="form-label col-xs-4 col-sm-2">标题：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" className="input-text" id="o"  ref="agioTitle"/>
                                    </div>
                                    </div>
                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">图片地址：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" className="input-text" id="fqwe" ref="imgUrl" />
                                    </div>
                                    </div>
                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">价格：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" id="datemin" className="input-text Wdate fi" ref="price" />
                                    </div>
                                    </div>
                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">规格：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" id="datemin" className="input-text Wdate s" ref="specification" />
                                    </div>
                                    </div>
                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">参数：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" id="datemin" className="input-text Wdate se" ref="parameter" />
                                    </div>
                                  </div>
                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">其他图片：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <input type="text" id="datemin" className="input-text Wdate e" ref="imgFooter" />
                                    </div>
                                    </div>

                                 <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">商品描述：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <textarea name="" cols="" rows="" className="textarea" datatype="*10-100" dragonfly="true" nullmsg="备注不能为空！" ref="produce" id="n" placeholder="不多于200字"></textarea>
                                    
                                    </div>
                                    </div>
                            
                                <div className="row cl">
                                    <label className="form-label col-xs-4 col-sm-2">图片上传：</label>
                                    <div className="formControls col-xs-8 col-sm-9">
                                        <div className="uploader-list-container"> 
                                            <div className="queueList">
                                                <div id="dndArea" className="placeholder">
                                                    <div id="filePicker-2">
                                                        <div className="webuploader-container">
                                                            <form id="formfile">
                                                                <input type="file" name="photos" value="点击选择图片" />
                                                                <input type="button" name="" value="上传" id="shangchuan" />
                                                            </form>	
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              <div className="row cl">
                                <div className="col-xs-8 col-sm-9 col-xs-offset-4 col-sm-offset-2 col-qwe">
                                    
                                    <button  className="btn btn-primary radius" type="button" onClick={this.Addprcture.bind(this)}>保存并提交审核</button>
                                    <button className="btn btn-default radius" type="button" onClick={this.Adddel}>&nbsp;&nbsp;取消&nbsp;&nbsp;</button>
                                </div>
                               </div>
                          </form>
                      </div>
                 </div>
                 
            
                 {/*<SpinnerComponent show={this.props.loading}/>*/}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // state: state.add.data
    datas:state.Add.datas
   
})
export default connect(mapStateToProps, AddActions)(AddComponent)
// export default AddComponent