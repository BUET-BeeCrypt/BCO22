/*=========================================================================================
    File Name: fullcalendar.js
    Description: Fullcalendar
    --------------------------------------------------------------------------------------
    Item Name: Robust - Responsive Admin Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


$(document).ready(function(){


	/****************************************
	*				Basic Views				*
	****************************************/
	var calendarE2 = document.getElementById('fc-basic-views');
    var fcBasicViews = new FullCalendar.Calendar(calendarE2, {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		defaultDate: '2016-06-12',
		editable: true,
		plugins: ["dayGrid", "timeGrid", "interaction"],
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'X-Ray Report',
				start: '2016-06-01'
			},
			{
				title: 'ICU',
				start: '2016-06-07',
				end: '2016-06-10'
			},
			{
				title: 'Prescription',
				start: '2016-06-16T16:00:00'
			},
			{
				title: 'Ward Admitted',
				start: '2016-06-11',
				end: '2016-06-13'
			},
			{
				title: 'CT Scan',
				start: '2016-06-12T10:30:00',
				end: '2016-06-12T12:30:00'
			},
			{
				title: 'PET Scan',
				start: '2016-06-18T12:00:00'
			},
			{
				title: 'Prescription',
				start: '2016-06-29T17:30:00'
			},
			{
				title: 'CBC Test',
				start: '2016-06-22T20:00:00'
			},
			{
				title: 'ECG Report',
				url: './document-ecg.jpeg',
				start: '2016-06-30'
			}
		]
	});

	fcBasicViews.render();

});
