/*============================================================================================
  File Name: form-typeahead.js
  Description: The Typeahead plugin from Twitter's Bootstrap 2 ready to use with Bootstrap 4
  ------------------------------------------------------------------------------------------
  Item Name: Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==============================================================================================*/
(function(window, document, $) {
  'use strict';

  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substrRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  var states = [
    'Square Hospital Ltd',
    'Lab Aid Hospital Ltd',
    'BRB Hospital Ltd',
    'Popular Hospital Ltd',
    'Ibn Sina Hospital Ltd',
    'Al-Ameen Hospital Ltd',
    'Dhaka Medical College Hospital',
    'Hossain Medical College Hospital',
    'Shaheed Smrity Medical College Hospital',
    'Shaheed Tajuddin Medical College Hospital',
    'Comilla Medical College Hospital',
    'Chittagong Medical College Hospital',
    'Khulna Medical College Hospital',
    'Jessore Medical College Hospital',
    'Rajshahi Medical College Hospital',
    'Sylhet Medical College Hospital',
    'Noakhali Medical College Hospital',
    'Dr. Md. Nazmul Islam - DR0121341',
    'Dr. Md. Saiful Islam - DR0921342',
    'Dr. Md. Abdul Hoque - DR0921343',
    'Dr. Md. Abdul Quaium - DR0921344',
    'Dr. Md. Abdul Hamid - DR0921345',
    'Dr. Md. Abdul Karim - DR0921346',
    'Dr. Md. Abu Eusuf - DR0921347',
    'Dr. Md. Sadia Parvin - DR0921348',
    'Dr. Md. Keya Akhter - DR0921349', 
  ];

  $('.typeahead-basic').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });

})(window, document, jQuery);