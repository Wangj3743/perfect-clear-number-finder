var input1 = document.getElementById('pieceCount1')
var input2 = document.getElementById('pieceCount2')


input1.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
		numNormal()
  }
});

input2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
		numAdvanced()
  }
});
	

function numNormal() {
	var p = document.getElementById('pieceCount1').value;
	var ans = document.getElementById('ans');
	solveForPCNum(p, ans)
}

function numAdvanced() {
	var p = (document.getElementById('pieceCount2').value)*10;
	var ans = document.getElementById('ans');
	solveForPCNum(p, ans)
}

function numAdvanced1() {
	var p = (document.getElementById('pieceCount3').value)*10+5;
	var ans = document.getElementById('ans');
	solveForPCNum(p, ans)
}


function solveForPCNum(p, ans) {
	num = ((p)*5)%7+1   // from https://youtu.be/2ee1eLGqdWA?si=NsNt5DMEPv_OuHZj&t=422 
	console.log(num)
	if (p % 5 != 0 || p < 0) {
		ans.innerHTML = "incorrect value"
	} else if (num == 1) {
		if (p == 0) {
			ans.innerHTML = "1st (0 pieces)"
		}	else {
			ans.innerHTML = "1st ("+p+" pieces)"
		}
	} else if (num == 2) {
		ans.innerHTML = "2nd ("+p+" pieces)"
	} else if (num == 3) {
		ans.innerHTML = "3rd ("+p+" pieces)"
	} else {
		ans.innerHTML = num+"th ("+p+" pieces)"
	}
	
	console.log(num,p)
}