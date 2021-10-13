// alert("loadig");
function addNewWeField()
{
	let newNode=document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('weField');
	newNode.classList.add("mt-2");
	newNode.setAttribute("placeholder", "Enter Here");
	let weOb= document.getElementById("we");
	let weAddButtonObj = document.getElementById("weAddButton");
    
    weOb.insertBefore(newNode, weAddButtonObj);
}

function addNewInField()
{
	let newNode=document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('intField');
	newNode.classList.add("mt-2");
	newNode.setAttribute("placeholder", "Enter Here");
	let intOb= document.getElementById("int");
	let intAddButtonObj = document.getElementById("internButton");
    
    intOb.insertBefore(newNode, intAddButtonObj);

}

function addNewAcadField()
{
	let newNode=document.createElement('textarea');
	newNode.classList.add('form-control');
	newNode.classList.add('acadField');
	newNode.classList.add("mt-2");
	newNode.setAttribute("placeholder", "Enter Here");
	let acadOb= document.getElementById("acad");
	let acadAddButtonObj = document.getElementById("acadbutton");
    
    acadOb.insertBefore(newNode, acadAddButtonObj);

}

function generateCV()
{
	let nameField=document.getElementById("nameField").value;
	let nameT1=document.getElementById('nameT1');
	nameT1.innerHTML=nameField;

	document.getElementById('nameT2').innerHTML=nameField;
	document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;
	document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;
	document.getElementById('fbT').innerHTML=document.getElementById("fbField").value;
	document.getElementById('linkT').innerHTML=document.getElementById("linkField").value;

	document.getElementById('objectiveT').innerHTML=document.getElementById("objectiveField").value;

	let wes= document.getElementsByClassName("weField");
	let str='';

	for(let e of wes)
	{
		str=str+`<li> ${e.value} </li>`;	
	}
	document.getElementById('workexT').innerHTML=str;

	let ins= document.getElementsByClassName("intField");
	let str1='';

	for(let e of ins)
	{
		str1=str1+`<li> ${e.value} </li>`;	
	}
	document.getElementById('internT').innerHTML=str1;

	let acd= document.getElementsByClassName("acadField");
	let str2='';

	for(let e of acd)
	{
		str2=str2+`<li> ${e.value} </li>`;	
	}
	document.getElementById('acadT').innerHTML=str2;
	let file=document.getElementById('imgField').files[0];
	console.log(file);
	let reader= new FileReader();
	reader.readAsDataURL(file);
	console.log(reader.result);
	reader.onloadend= function(){
		document.getElementById('imgTemplate').src= reader.result;
	}

	

	document.getElementById('cv-form').style.display='none';
	document.getElementById('cv-template').style.display='block';

	// console.log('hello');
}

function printCV()
{
	window.print();
}