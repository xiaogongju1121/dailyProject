var wuxing = [{ //code取余5 +1生 +2克 +3被克 +4被生 +5自身
	"code": "1",
	"name": "金",
}, {
	"code": "2",
	"name": "水"
}, {
	"code": "3",
	"name": "木"
}, {
	"code": "4",
	"name": "火"
}, {
	"code": "5",
	"name": "土"
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

	var shanggua = getNum(num1, 8);
	var xiagua = getNum(num2, 8);
	var dongyao = getNum(num2, 6);

	var code = "";
	bagua.filter(function(item) {
		if (item.num == shanggua) {
			code += item.code
		}
	})
	bagua.filter(function(item) {
		if (item.num == xiagua) {
			code += item.code
		}
	})

	var temp = code.split("");
	var hugua = [temp[1], temp[2], temp[3], temp[2], temp[3], temp[4]].join("");


	temp[6 - dongyao] == 0 ? temp[6 - dongyao] = 1 : temp[6 - dongyao] = 0;

	return {
		gua: code,
		biangua: temp.join(""),
		hugua: hugua,
		dongyao: dongyao,
		str: b.str
	}
}

function getNum(n, c) { //n是输入的数，c是被除数
	var r = n % c;
	if (r >= c) {
		getNum(r, c);
	} else if (r == 0) {
		return c
	} else {
		return r
	}

}

function getGuaInfo(code) {
	var info = guaData.filter(function(item) {
		if (item.code === code) {
			return true;
		}
	})
	return info[0]
}

function drawPic(id, str) {
	var arr = str.split("");
	var html = "";
	for (var i = 0; i < arr.length; i++) {
		var type = "yin";
		var col = "";
		if (arr[i] == 1) {
			type = 'yang'
		}
		if ((i % 2 == 0 && arr[i] == 1) || (i % 2 == 1 && arr[i] == 0)) {
			col = "budang"
		}
		html += '<div class="' + type + ' ' + col + '"></div>'
	}
	document.querySelector("#" + id).innerHTML = html;
}
