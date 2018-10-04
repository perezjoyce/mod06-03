// document.getElementById('btn').onclick = () => {

// 	// declare variables
// 	let num = document.getElementById('input').value;

	// ================ CODE ALONG 1: PASS OR FAIL

	// note that default data type of variable is string so convert
	// let grade = parseInt(num);

	// set condition
	// if (grade >= 70) {
	// 	alert('You passed. Congratulations!');
	// }

	// else if (grade < 70) {
	// 	alert('You are a failure!');
	// }


	// ================== CODE ALONG 2: WHAT GROUP; RANGE


	// num = parseInt(num);


	// if (num >= 1 && num < 6) {
	// 	alert ('Group A');
	// }

	// else if (num >= 6 && num <= 10) {
	// 	alert ('Group B');
	// }

	// else {
	// 	alert ('You do not belong to any group');
	// }

// }


// ================== CODE ALONG 3: CHOICES

// document.getElementById('btnSubmit').onclick = () => {
// 	let choice = document.getElementById('input').value;

// 	if (choice == 1) {
// 		alert('login');
// 	}

// 	else if (choice == 2) {
// 		alert('menu');
// 	}

// 	else if (choice == 3) {
// 		alert('check balance');
// 	}

// 	else if (choice == 4) {
// 		alert('close application');
// 	}

// 	// ang tunay na programmer advance mag-isip
// 	else {
// 		alert('invalid input');
// 	}
// }


// ================== CODE ALONG 4: SWITCH-CASE STATEMENT

// document.getElementById('btnSubmit').onclick = () => {

// 	let choice = document.getElementById('input').value;

// 	choice = parseInt(choice);

// 	switch(choice) {
// 		case 1: 
// 			alert('log in');
// 			// if walang break, mababasa pati code sa baba even when the only # pressed is 1
// 			break;
// 		case 2: 
// 			alert('menu');
// 			break;
// 		case 3:
// 			alert('balance');
// 			break;
// 		case 4: 
// 			alert('close');
// 			break;
// 	}

// }

// declare variables


// ================== ACT 5: AVERAGE AND STATUS
document.getElementById('btnAverage').onclick = () => {

	// declare variables For grades
	let projectGrade = document.getElementById('projectInput').value;
	let midtermGrade = document.getElementById('midtermInput').value;
	let finalGrade = document.getElementById('finalInput').value;

	// 
	projectGrade = parseInt(projectGrade);
	midtermGrade = parseInt(midtermGrade);
	finalGrade = parseInt(finalGrade);
	
	let average = (projectGrade + midtermGrade + finalGrade) / 3;

	// display
	document.getElementById('averageInput').value = average;


}




document.getElementById('btnConvert').onclick = () => {

	let average = parseInt(document.getElementById('averageInput').value);
	

	if (average <= 100 && average >= 91) {
		alert('Excellent');
	}

	else if (average <= 90 && average >= 81) {
		alert('Very Satisfactory');
	}

	else if (average <= 80 && average >= 70) {
		alert('Satisfactory');
	}

	else if (average <= 69) {
		alert('Failed');
	}

	else {
		alert('Invalid Input');
	}

}


// ================== ACT 6: ODD & EVEN


document.getElementById('btnSubmit').onclick = () => {

	let num = document.getElementById('numberInput').value;

	num = parseInt(num);
	even = parseInt(num)
	odd = parseInt(++even);
	result = parseInt(num / 2);

	if (result >= 2 ) {
		alert('even');
	}

	// else if (num >=1 && ) {
	// 	alert('odd');
	// }

	else {
		alert('invalid input');
	}



}

	



