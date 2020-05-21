//version 1
//var fs = require('fs');
//var data = fs.readFileSync('input.txt');
//console.log(data.toString());
//console.log("program has ended");

//version1 과 vsersion2 의 차이점
//version1은 blocking code로 code의 순서대로 실행되어진다
//version2는 non-blocking code로 callback 함수가 사용되어졌고 해당 작업이 다음 작업의 실행을 늦추지 않고 자신의 실행이 끝나면 알아서 출력한다.
//해당 장점은 version2 사용시 다른 code의 실행을 막지않고 같은 시간동안 더 많은 요청을 처리할 수 있다.

//version 2
var fs = require('fs');

fs.readFile('input.txt',function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("program has ended");
