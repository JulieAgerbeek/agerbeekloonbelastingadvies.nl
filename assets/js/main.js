
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	//Filter
	document.addEventListener('DOMContentLoaded', function() {
		const horizontalList = document.querySelector('.horizontal-list');
		const horizontalListItems = horizontalList.getElementsByTagName('li');
		const verticalLists = document.querySelectorAll('.vertical-list');
	  
		// Select the "All" container by default
		const allBox = document.getElementById('box1');
		allBox.classList.add('selected');
		allBox.style.color = 'white'; // Set text color to white
	  
		// Show all vertical lists
		verticalLists.forEach(function(list) {
		  list.classList.add('show');
		});
	  
		horizontalList.addEventListener('click', function(event) {
		  const selectedBox = event.target;
		  const selectedBoxId = selectedBox.id;
	  
		  // Deselect previously selected box
		  for (let i = 0; i < horizontalListItems.length; i++) {
			if (horizontalListItems[i].classList.contains('selected')) {
			  horizontalListItems[i].classList.remove('selected');
			  horizontalListItems[i].style.color = 'black'; // Set text color to black
			}
		  }
	  
		  if (selectedBoxId === 'box1') {
			verticalLists.forEach(function(list) {
			  list.classList.toggle('show', true);
			});
		  } else {
			verticalLists.forEach(function(list) {
			  list.classList.remove('show');
			});
			const selectedVerticalList = document.getElementById(selectedBoxId + '-list');
			selectedVerticalList.classList.toggle('show', true);
		  }
	  
		  selectedBox.classList.add('selected');
		  selectedBox.style.color = 'white'; // Set text color to white
		});
	  });
	  

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);