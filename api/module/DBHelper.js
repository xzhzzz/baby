var ApiResult = require('./ApiResult')

var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('babyApp', MongoDBServer);
db.open(function(err,db){
    if(err)throw err;
    console.info('mongodb connected');
});
module.exports = {
    get: function(_collection, _condition, _callback){
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                collection.find(condition).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
        //     db.close();
        // })
    },
    insert: function(_collection, _newdata, _callback){
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.insert(_newdata, function(resulterror, result){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, result));
                    }
                })
            })
        //     db.close();
        // })
    },
    //判断是否存在
    exists : function(_collection, data, key, callback){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        callback(docs[0])
                    });
                }
                //db.close();
            })
        //})  
    },
    //添加数据
    saveData : function(_collection, data){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // console.log(123,data)
                    collection.insert(data);
                }
                //db.close();
            })
        //})
    },
    //删除数据
    removeData : function(_collection, data){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    collection.remove({id:data.id},true);
                }
                //db.close();
            })
        //})
    },
    //获取数据
    showData : function(_collection,data,callback){
        // db.open(function(error,db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                console.log(_collection)
                if(error){
                    console.log(error)
                } else {
                    if(data.id != null ){
                        var str = data.id;
                        var arr = str.split(',');
                        db.collection(data.collection,function(error,collection){
                            collection.find({id:{$in: arr}}).toArray(function(error,shops){
                                callback(shops);
                            });
                        })                      
                    }
                    else if(data.name != null){
                        var str = data.name;
                        db.collection(data.collection,function(error,collection){
                            collection.find( { name: { $regex: str, $options: 'i' } } ).toArray(function(error,shops){
                                callback(shops);
                            });
                        })
                    }
                    else if(data.page != null){
                        var num = data.page - 1;
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(5).skip(num*5).toArray(function(error,shops){
                                // console.log(shops);
                                callback(shops);
                            })
                        })

                    }
                    else if(data.id == null && data.name == null){
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(100).toArray(function(error,shops){
                                // console.log(shops);
                                callback(shops);
                            })
                        })          
                    }


                }
               // db.close();
            })      
        //})
    },
    //更新数据
    updatedata : function(_collection, data){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    // collection.remove({id:data.id},true);
                    // collection.insert(data);
                    collection.update({id:data.id},data);
                }
               // db.close();
            })
        //})
    },
    indexGetdata : function(_collection, data, key, callback){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }

            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)  
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        callback(docs)
                    });
                }
                //db.close();
            })
        //})
    },
    showClassifyData:function(_collection,data,callback){
        // db.open(function(error,db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    db.collection(data.collection,function(error,collection){
                        collection.find({'ID':data.id}).toArray(function(error,result){
                            if(error){
                                callback(error);
                            } else {
                                console.log(result)
                                callback(result);
                            }
                        })
                    })    
                        
                }
               // db.close();
            })      
       // })
    },
    
    //主页数据
    index:function(_collection, data, _callback){
       
        // db.open(function(dberror){
        //     if(dberror){
        //         _callback(ApiResult(false, null, dberror));
        //         return;
        //     }

            db.collection(_collection,function(collerror,collection){
                if(collerror){
                   _callback(ApiResult(false, null, collerror));
                    return;
                }
               
                collection.find({'name':data}).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                         
                       
                        _callback(dataset);
                    }
                })
            })
             // db.close();
        // })
       
    },
    Fydata:function(_collection, data, callback){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            db.collection(data.collection,function(error,collection){
                 var num;
                collection.count({}, function(err, count){
                    num=count;
                })
                collection.find().limit(parseInt(data.num)).toArray(function(error,result){
                    if(error){
                        callback(error);
                    } else {
                        callback(result);
                    }
                })
            }) 
        //     db.close();
        // })
    },
    goodsSearch:function(_collection,data,callback){
        // db.open(function(error,db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    var str = data.name
                    db.collection(data.collection,function(error,collection){
                        db.collection(data.collection,function(error,collection){
                            collection.find( { name: { $regex: str, $options: 'i' } } ).toArray(function(error,result){
                                callback(result);
                            });
                        })
                    })    
                }
            //     db.close();
            // })      
        })
    },
    showAccount: function(_collection,data,callback){
        // db.open(function(error,db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    if(data.id != null ){
                        var str = data.id;
                        var arr = str.split(',');
                        db.collection(data.collection,function(error,collection){
                            collection.find({id:{$in: arr}}).toArray(function(error,shops){
                                callback(shops);
                            });
                        })                      
                    }
                    else if(data.name != null){
                        var str = data.name;
                        db.collection(data.collection,function(error,collection){
                            collection.find( { name: { $regex: str, $options: 'i' } } ).toArray(function(error,shops){
                                callback(shops);
                            });
                        })
                    }
                    else if(data.page != null){
                        var num = data.page - 1;
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(20).skip(num*20).toArray(function(error,shops){
                                callback(shops);
                            })
                        })

                    }
                    else if(data.id == null && data.name == null){
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(100).toArray(function(error,shops){
                                callback(shops);
                            })
                        })          
                    }


                }
               // db.close();
            })      
       // })
    },
    exist:function(_collection, data, arr, callback){
        // db.open(function(error, db){
        //     if(error){
        //         console.log('connect db:', error);
        //     }
            //Account => 集合名（表名）
            var obj = {};
            arr.forEach(function (ele) {
                obj[ele] = data[ele]? data[ele] : '';
            });
            
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    // console.log('obj:',obj);
                    collection.find(obj).toArray(function(err, docs){
                        callback(docs);
                    });
                }
            });
        //     db.close();		
        // })	
    },
    del:function(_collection, data){
	// console.log(data)
	// db.open(function(error, db){
	// 	if(error){
	// 		console.log('connect db:', error);
	// 	}
		//Account => 集合名（表名）
		db.collection(_collection, function(error, collection){
			if(error){
				console.log(error)
			} else {
				console.log(data._id);
				collection.remove({_id:(data._id)},true);				
			}				
		})
	// 	db.close();	
	// })	
    },
    updateData : function(_collection,olddata,newdata){
	// db.open(function(error, db){
	// 	if(error){
	// 		console.log('connect db:', error);
	// 	}
		db.collection(_collection,function(error, collection){
            if(error){
                console.log(error)
            } else {

                collection.update(olddata,{$set:newdata},function(error,result){
                	//callback(result);
                	if(error){ console.log(error)}              
                });
            }
        });
    //     db.close();
    // })    
}

}