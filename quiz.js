function check(){
	
	var c = 0;
	var q1 = document.quiz.question1.value;
	var q2 = document.quiz.question2.value;
	var q3 = document.quiz.question3.value;
	var q4 = document.quiz.question4.value;
	var q5 = document.quiz.question5.value;
	var q6 = document.quiz.question6.value;
	var q7 = document.quiz.question7.value;

	var result = document.getElementById('result');
	var quiz = document.getElementById("quiz");
	if(q1 == "Yes"){c++};
	if(q2 == "Yes"){c++}
	if(q3 == "Yes"){c++}
	if(q4 == "Yes"){c++}
	if(q5 == "Yes"){c++}
	if(q6 == "Yes"){c++}
	if(q7 == "Yes"){c++}
		
	quiz.style.display="none";
	result.textContent = `${c}`;
}