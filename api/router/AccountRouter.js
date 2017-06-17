var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var multer = require ('multer');
var bodyParser = require('body-parser');
var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, './upload')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
})
var upload = multer({ storage: storage })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/logins', urlencodedParser, function(request, response){ 
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });    
    app.post('/login', urlencodedParser, function(request, response){
        if(!request.body || !request.body.userphone){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('account', {userphone: request.body.userphone}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });
    // 注册
     app.post('/register', urlencodedParser, function(request, response){
        if(!request.body || !request.body.userphone){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        }
        else if(!request.body || !request.body.nickname){
            response.send(ApiResult(false, '昵称不能为空！'));
        }
         else {
            delete request.body.repassword;
            DB.get('account', {userphone: request.body.userphone}, function(result){
                var obj = request.body;
                obj.id = obj.userphone;
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        DB.insert('account',obj, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }        
    })

    //保存地址
    app.post('/updateAccount',urlencodedParser,function(request,response){
        var obj = request.body;
        console.log(obj)
        DB.updatedata(obj.collection, request.body);
        response.send('{state: true}');
    });

  //增加数据
    app.post('/indexData', urlencodedParser, function(request, response){
        var obj = request.body;
        DB.exists(obj.collection, request.body, 'id', function(result){
            if(result){
                response.send('{state: false, message: "用户名已存在"}');
            } else {
                DB.saveData(obj.collection, request.body);
                response.send('{state: true}');
            }
        })
    })

    app.post('/personal',urlencodedParser,function(request,response){
        var obj = request.body;
        DB.showAccount(obj.collection,request.body,function(result){
            response.send(result);
        });
    });
   
    // 增加数据
    app.post('/showAdd',urlencodedParser,function(request,response){
        console.log(request.body)
        var obj = request.body;
        DB.exists('goods', request.body, 'id', function(result){
            if (result) {
                DB.updatedata('goods',request.body)
                response.send('{state: true}');
            }else if(obj.id != ''){
                DB.saveData('goods', request.body);
                response.send('{state: true}');
            }
        })
    });
    // 删除数据
    app.post('/showRemove',urlencodedParser,function(request,response){
    
        DB.exists('goods',request.body,'id',function(result){
            if(result){
                DB.removeData('goods',request.body);
                response.send('{state:true}');
            }else{
                response.send('{state:false,message:"商品不存在"}');
            }
        })
    });
    //获取数据
    app.post('/showData',urlencodedParser,function(request,response){
        var obj = request.body;
        DB.showData(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    });
    // 上传
    app.post('/upload',upload.array('photos', 12), function(req, res) {
        // console.log(123)
	console.log(req.files[0].filename);  
	// console.log(req.body); 	 	
	 res.send(req.files[0].filename); 
    });

    //获取classify数据
    app.post('/showClassifyData',urlencodedParser,function(request,response){
        var obj = request.body;
        console.log(obj.collection)
        console.log(request.body)
        DB.showClassifyData(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    })
     //获取goodslist数据
    app.post('/showGoodsData',urlencodedParser,function(request,response){
        var obj = request.body;
        console.log(obj.collection)
        console.log(request.body)
        DB.showClassifyData(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    })
    //分页获取数据
    app.post('/goods-Fy',urlencodedParser,function(request,response){
        var obj = request.body;
        console.log(obj.collection)
        console.log(request.body)
        DB.Fydata(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    });
    //搜索
    app.post('/goodsSearch',urlencodedParser,function(request,response){
        var obj = request.body;
        DB.goodsSearch(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    });




//


//
app.post('/updataadress', urlencodedParser, function(request, response){
		console.log(request.body);
	    //需要修改的数据
	    var data = JSON.parse(request.body.data);
	    var isUpdate = false;
	    DB.exist('address',{},[],function(result){
	    	//console.log(result);
	      	result.forEach(function(item){	 	      		
		        if(item._id == request.body._id){
		        	//console.log(item._id == request.body._id);
		          	isUpdate = true; 
		          	//console.log(item._id);  		         
		          	DB.updateData('address',item,data);
		          	return false;
		        }
	      	});
	    });
	    // //返回修改状态
	    !isUpdate ? response.send(apiResult(true, '修改成功',request.body)):response.send(apiResult(false, '修改失败'));
	});


	app.post('/getaddress', urlencodedParser, function(request, response){
		//console.log(request.body)
		DB.exist('address', {} ,[],function(result){
			var arr = []
			result.forEach(function(item,index){	 	      		
		        if(item.userPhone == request.body.phone){		        	
					arr.push(item);				
		        }		
			})		
			response.send(ApiResult(false, '资料修改成功',arr));		
		})
	});

	app.post('/deladdress', urlencodedParser, function(request, response){
		 DB.exist('address',{},[],function(result){
	      	result.forEach(function(item){	 	      		
		        if(item._id == request.body._id){
		        	DB.del('address',item);
					response.send(result);
		        }
	      	});
	    });
	});

    //主页数据
     app.post('/app', urlencodedParser, function(request, response){
    //    console.log('222222',request.body)
       var collection = request.body.collection;
     
       var obj = request.body.name
    //    console.log('============',obj)
        DB.index(collection,obj,function(result){
         
           console.log('------=============',result)
                response.send(result);
           
        })
    })

    app.post('/checkall', urlencodedParser, function(request, response){
        var data = JSON.parse(request.body.data);
        var isUpdate = false;
        DB.exist('address',{},[],function(result){
            result.forEach(function(item){	 	      		
                if(item.userPhone == request.body.phone){
                    isUpdate = true;  		         
                    DB.updateData('address',item,data);
                    return false;
                }
            });
        });
        !isUpdate ? response.send(apiResult(true, '修改成功',request.body)):response.send(apiResult(false, '修改失败'));
    });

    app.post('/getaccount', urlencodedParser, function(request, response){
        //console.log(request.body)
        DB.exist('account', {} ,[],function(result){
            console.log(result)
            var arr = []
            result.forEach(function(item,index){                    
                if(item.userphone == request.body.phone){
                    console.log(item)                   
                    arr.push(item);             
                }       
            })
            //console.log(arr)      
            response.send(ApiResult(false, '资料修改成功',arr));      
        })
    });
    
    
}