/**Created by Administrator on 2016-10-7.*/
$(function () {
    $("#input").bind("keyup",function () {
        var searchText = $("#input").val();
        $.get("http://api.bing.com/qsonhs.aspx?q=?"+searchText,function(d){
            var d = d.AS.Results[0].Suggests;
            var html="";
            for(var i=0,i<d.length,i++){
                html+="<li>"+d[i].Txt+"</li>";
            }
            $("#results").html(html);
            $("#list").show();
        },"json");
    })
})