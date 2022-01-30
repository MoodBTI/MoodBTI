//const intro = document.getElementById('intro');
//const questions = document.getElementById('questions');
const result = document.getElementById('result');

const question = document.getElementById('Question');
const answer1 = document.getElementById('Answer1');
const answer2 = document.getElementById('Answer2');

const result_text = document.getElementById('result_text');
const result_img = document.getElementById('result_img');

const bar = [];
for(var i = 0; i<12;i++)
  bar[i] = document.getElementById(i);

var index = 0;
var endnum = 12;

function calculate(value, index){
  //스코어 ++1
  if (value == "one"){
    score[parseInt(index / 3)][0]++;
  }
  else if (value == "two"){
    score[parseInt(index / 3)][1]++;
  }
  else {}
}

function next(button){
  
  //버튼 value를 인자로 점수 계산 함수 호출 
  calculate(button.value, index);

  //바 채우기
  bar[index].style.backgroundColor = 'grey';
  
  //다음 질문
  index++;
  
  /* endnum == 12 */
  if(index == endnum) {
    /* 주어진 질문에 모두 대답을 마쳤으면 end() 호출 후 함수 종료 */
    end();
    return ;
  }

  //화면에 띄우기
  question.innerText = QnA[index].Q;
  answer1.innerText = QnA[index].A1;
  answer2.innerText = QnA[index].A2;


}

function start(){
  /*
  intro.style.display = "none";
  result.style.display = "flex";
  result_img.innerHTML = "<img src='./img/ENFP.PNG' class='img-responsive'>";

  */
  intro.style.opacity = "0";
  intro.style.transition = "1s";
  setTimeout(function(){intro.style.display = "none"}, 1000);
  questions.style.opacity = "1";
  questions.style.transition = "1s";
  setTimeout(function(){questions.style.display = "flex"}, 1000);
  question.innerText = QnA[index].Q;
  answer1.innerText = QnA[index].A1;
  answer2.innerText = QnA[index].A2;
}

function end(){
  result.style.display = "flex";
  questions.style.display = "none";

  var result_mbti = '';

  for (var i = 0; i < 4; i++) {

		if (score[i][0] > score[i][1]) {
      result_mbti += mbti[i][0];
		}
		else if (score[i][0] < score[i][1]) {
			result_mbti += mbti[i][1];
		}
		else {
		}
	}
  result_img.innerHTML = "<img src='./img/"+result_mbti+".PNG' width='80%' class='img-responsive'>";
  
  for(var i = 0; i < 16; i++){
    if(resultData[i].mbti == result_mbti){]
      result_text.innerHTML = "<span><b>" + resultData[i].main + "</b></span><span>같은 사람이네요.</span><br><br><span>" + resultData[i].sub + "</span>";
    }
  }
}

function onclickEvent(){
  var copyText = document.getElementById('Input');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("Copy");
  alert('주소가 복사되었습니다!');
}


