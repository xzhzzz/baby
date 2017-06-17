import $ from 'jquery'
import "../../../libs/jquery/jquery.form"

$(function(){
    // location.reload() history.go(0)  
//     $('#shangchuan').on('click',function(){
       	
//     })
// })
	$('#shangchuan').click(function(){
         console.log(123)
        $('#formfile').ajaxSubmit({
            type: 'post',
            url: 'http://10.3.133.43:7000/upload',
            success:function(data){
                console.log(data);
                $('#fqwe').val(data)
            },
            error:function(XmlHttpRequest,textStatus,errorThrown){
                console.log(XmlHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
        })	
    })
})