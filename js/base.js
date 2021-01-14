var wuxing = [{ //code取余5 +1生 +2克 +3被克 +4被生 +5自身
	"code":"1",
	"name":"金",
},{
	"code":"2",
	"name":"水"
},{
	"code":"3",
	"name":"木"
},{
	"code":"4",
	"name":"火"
},{
	"code":"5",
	"name":"土"
}]
var bagua = [{
	'code': '111',
	"name": "乾",
	"num": 1,
	"main": "天",
	"wuxing":"1"
}, {
	'code': '010',
	"name": "坎",
	"num": 6,
	"main": "水",
	"wuxing":"2"
}, {
	'code': '100',
	"name": "艮",
	"num": 7,
	"main": "山",
	"wuxing":"5"
}, {
	'code': '001',
	"name": "震",
	"num": 4,
	"main": "雷",
	"wuxing":"3"
}, {
	'code': '110',
	"name": "巽",
	"num": 5,
	"main": "风",
	"wuxing":"3"
}, {
	'code': '101',
	"name": "离",
	"num": 3,
	"main": "火",
	"wuxing":"4"
}, {
	'code': '000',
	"name": "坤",
	"num": 8,
	"main": "地",
	"wuxing":"5"
}, {
	'code': '011',
	"name": "兑",
	"num": 2,
	"main": "泽",
	"wuxing":"1"
}]


function getGua() {
	var now = new Date();
	var y = now.getFullYear();
	var m = now.getMonth() + 1;
	m = m >= 10 ? m : '0' + m;
	var d = now.getDate();
	d = d >= 10 ? d : "0" + d;
	var t = now.getHours();
	var b = calendar.solar2lunar(y, m, d, t);

	var num1 = b.y + b.m + b.d;
	var num2 = num1 + b.t;
	
	var shanggua = getNum(num1,8);
	var xiagua = getNum(num2,8);
	var dongyao = getNum(num2,6);
	var code = "";
	bagua.filter(function (item) {
		if(item.num == shanggua){
			code += item.code 
		}
	})
	bagua.filter(function (item) {
		if(item.num == xiagua){
			code += item.code 
		}
	})
	
	var temp = code.split("");
	var hugua = [temp[1],temp[2],temp[3],temp[2],temp[3],temp[4]].join("");
	temp[dongyao-1]==0?temp[dongyao-1] = 1:temp[dongyao-1] = 0;
	
	return {
		gua : code,
		biagua:temp.join(""),
		hugua:hugua,
		dongyao: dongyao
	}
}

function getNum(n,c){ //n是输入的数，c是被除数
	var r = n % c ;
	if(r >= c){
		getNum(r,c);
	}else{
		return r
	}
	
}