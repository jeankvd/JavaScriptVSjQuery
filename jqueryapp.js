$('#registrar').on('submit', function(e) {
	e.preventDefault();
	
	var invitedList = $('#invitedList');
	var input = $('#registrar input');
	var listItem = $('<li></li>');
	var span = $('<span></span>');
	var editButton = $('<button>edit</button>');
	var removeButton = $('<button>remove</button>');
	var checkbox = $('<label>Confirmed<input type="checkbox"></label>')


	span.text(input.val());
	input.val('');

	listItem.append(span);
	listItem.append(checkbox);
	listItem.append(editButton);
	listItem.append(removeButton);
	invitedList.append(listItem);
});

$('#invitedList').on('click', 'button',function() {
	if ($(this).text() == 'remove') {
		$(this).parent().remove();
	} else if ($(this).text() == 'edit') {
		var input = $('<input type="text" ">');
		var span = $(this).parent('li').find('span');
		input.val(span.text());
		input.insertBefore(span);
		span.remove();
		$(this).text('save');
	} else if ($(this).text() == 'save') {
		var span = $('<span></span>');
		var input = $(this).siblings('[type="text"]');
		span.text(input.val());
		span.insertBefore(input);
		input.remove();
		$(this).text('edit');
	} 
});

$('#invitedList').on('click', 'input',function() {
	if ($(this).attr('type') == 'checkbox') {
		if ($(this).prop('checked')) {
			$(this).parent().parent().addClass('responded');
		} else {
			$(this).parent().parent().removeClass('responded');
		}
	}
});

$('#hide').on('click', function() {
	ulList = $('#invitedList').children();
	if ($(this).prop('checked')) {
		for (var i = 0; i < ulList.length; i++) {
			if ($(ulList[i]).hasClass('responded')) {
				$(ulList[i]).css('display', '');
			} else {
				$(ulList[i]).css('display', 'none');
			}
		}
	} else {
		for (var i = 0; i < ulList.length; i++) {
			$(ulList[i]).css('display', '');
		}
	}
});




