var http=require('http');
var url='http://api.openweathermap.org/data/2.5/weather?q=Hazaribagh,JH,IN&APPID=15b2877f6172e0563431ff02fcccd7d1&units=metric';

var server=http.createServer(function(reqs,resp){

	var request=require('request');
	request(url,function(err,res,body){
		if(res.statusCode==200)
		{
			//console.log("Fine");
			var data=JSON.parse(body);
			resp.write("<html><body><div id='container'>");
			resp.write("<h1>"+ 'City-Name :' + data['name'] + "<br>" +"</h1>");
			resp.write("<h1>"+ 'Temperature :' + data.main['temp'] + "<br>" + "</h1");
			resp.write("<h2>" + 'Sunset-Time :' + new Date(data.sys['sunset']*1000) + "</h2>");
			resp.write("</div></body></html>");
			resp.end();
		}
	});
});

server.listen(8081);