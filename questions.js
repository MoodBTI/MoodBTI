//const intro = document.getElementById('intro');
//const questions = document.getElementById('questions');
const result = document.getElementById('result');

const question = document.getElementById('Question');
const answer1 = document.getElementById('Answer1');
const answer2 = document.getElementById('Answer2');

const result_text = document.getElementById('result_text');
const result_img = document.getElementById('result_img');


var index = 0;
var endnum = 12;

function calculate(value, index){
  //스코어 ++1
  if (value == "one"){
    score[parseInt(index / 3)][0]++;
    console.log(score[parseInt(index / 3)][0]);
  }
  else if (value == "two"){
    score[parseInt(index / 3)][1]++;
    
    console.log(score[parseInt(index / 3)][1]);
  }
  else {}
}

function start(){

  intro.style.display = "none";
  questions.style.display = "flex";
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
  console.log(result_mbti);
  result_img.innerHTML = "<img src='./img/"+result_mbti+".PNG' width = 20%>";
  for(var i = 0; i < 16; i++){
    if(resultData[i].mbti == result_mbti){
      result_text.innerText = resultData[i].main;
    }
  }
}

function next(button){
  /* endnum == 12 */
  if(index === endnum) {
    /* 주어진 질문에 모두 대답을 마쳤으면 end() 호출 후 함수 종료 */
    end();
    return ;
  }
  //버튼 value를 인자로 점수 계산 함수 호출 
  calculate(button.value, index);

  //화면에 띄우기
  question.innerText = QnA[index].Q;
  answer1.innerText = QnA[index].A1;
  answer2.innerText = QnA[index].A2;

  //다음 질문
  index++;
}
