// const submitButton = document.querySelector('button');
// const form = document.querySelector('#registrar');
// const ul = document.querySelector('#invitedList');
// const hide = document.querySelector('#hide');


// hide.addEventListener('change', (e) => {
// 	var ulChildren = ul.children;
//   if (hide.checked) {
// 	  for (var i = 0; i < ulChildren.length; i++) {
// 	  	if (ulChildren[i].className == 'responded') {
// 	  		ulChildren[i].style.display = '';
// 	  	} else {
// 	  		ulChildren[i].style.display = 'none';
// 	  	}
// 	  }
// 	} else {
// 		for (var i = 0; i < ulChildren.length; i++) {
// 			ulChildren[i].style .display = '';
// 		}
// 	}
// });

// function createLi(name) {
// 	var li = document.createElement('li');
// 	var span = document.createElement('span');
// 	var label = document.createElement('label');
// 	var checkbox = document.createElement('input');
// 	checkbox.type = 'checkbox';
	
// 	label.textContent = 'compromised';
// 	label.appendChild(checkbox);
// 	var removeButton = document.createElement('button');
// 	var editButton = document.createElement('button');

// 	removeButton.textContent = 'remove';
// 	editButton.textContent = 'edit';

// 	span.textContent = name;
// 	li.appendChild(span);
// 	li.appendChild(label);
// 	li.appendChild(removeButton);
// 	li.appendChild(editButton);


// 	return li;
// };


// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	input = form.querySelector('input');
// 	var name = input.value;
// 	input.value = '';
// 	var li = createLi(name);
// 	ul.appendChild(li);
// });

// ul.addEventListener('click', (e) => {
//   if (e.target.tagName == 'BUTTON') {
//   	if (e.target.textContent == 'remove') {
//   		ul.removeChild(e.target.parentNode);
//   	} else if (e.target.textContent == 'edit') {
//   		var input = document.createElement('input');
//   		var li = e.target.parentNode;
//   		var span = li.querySelector('span');
//   		input.type = 'text';
//   		input.value = span.textContent;
//   		li.insertBefore(input, span);
//   		li.removeChild(span);
//   		e.target.textContent = 'save';
//   	} else if (e.target.textContent == 'save') {
//   		var span = document.createElement('span');
//   		var li = e.target.parentNode;
//   		var input = li.querySelector('input');
//   		span.textContent = input.value;
//   		li.insertBefore(span, input);
//   		li.removeChild(input);
//   		e.target.textContent = 'edit';
//   	}
//   } else if (e.target.tagName == 'INPUT') {
//   	if (e.target.checked) {
//   		e.target.parentNode.parentNode.className = 'responded';
//   	} else {
//   		e.target.parentNode.parentNode.className = '';
//   	}
//   };
// });