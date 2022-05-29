
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
        'Abul Kalam - 1809876527',
        'Abu Sufian - 1806687528',
        'Rafid Uddin Ahmed - 1806667629',
        'Md. Abdul Karim - 1801867690',
        'Md. Abdul Quaium - 1801857671',
        'Md. Abdul Hamid - 1801167642',
        'Md. Abu Eusuf - 1802167661',
        'Ms. Sadia Parvin - 1801267241',
        'Md. Keya Akhter - 2211297241',
        'Md. Nazmul Islam - 4801297222',
        'Md. Saiful Islam - 4809217513',
        'Md. Abdul Hoque - 4806782714',
        'Maruf Ahmed - 4816782750',
    ];
  
    $('#the-basic').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      source: substringMatcher(states)
    });

    $(".select2").select2({
        // the following code is used to disable x-scrollbar when click in select input and
        // take 100% width in responsive also
        dropdownAutoWidth: true,
        width: '100%'
      });
  
  })(window, document, jQuery);

/********************************************
*               Accepted Files              *
********************************************/
Dropzone.options.dpAcceptFiles = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 50, // MB
    acceptedFiles: 'image/*',
    autoProcessQueue: false,
    init: function() {
        this.on("thumbnail", (file, dataURL) => {
            console.log("A file has been added");
            $('#file-upload-dropzone').removeClass('col-12');
            $('#file-upload-dropzone').addClass('col-5');
            $('.hide-before-upload').removeClass('d-none');
            $('.basic-cropper').attr('src', file.dataURL);
            $('.basic-cropper').cropper({
                viewMode: 1,
                restore: false,
                movable: false,
                zoomOnWheel: false
            });
        });
    }
}

