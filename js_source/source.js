import Handlebars from 'handlebars/dist/cjs/handlebars.js'
//purtroppo il metodo da sito handlebars per l importazione non funziona. bisogna fare come qui sopra stando attenti
//anche a mettere il percorso omettendo node_modules, se no non lo trova, perche considera che siamo gia dentro node_modules.
var $ = require('jquery');

$(document).ready(function() {


  // funzione che stampa i dati degli ospiti utilizzando handlebars
  // QUesta funzione e' proprio un esempio tipo di utilizzo di Handlebars come template engine
  function handlebarsPrintData(data) {

    var source = $('#row-ospite').html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < data.length; i++) {

      var my_template = {
        id_: data[i]['id'],
        name_: data[i]['name'],
        last_name: data[i]['lastname'],
      };
      var html = template(my_template);
      $('tbody').append(html);
      console.log(html);
    }

  }
  //---------------------




  $.ajax({
    url: 'http://localhost/crud_hotel_ajax/server/show.php',
    method: 'GET',
    success: function (data) {
      // console.log(data);
      var data_hosts = JSON.parse(data);
      console.log(data_hosts);
      handlebarsPrintData(data_hosts);
    },
  });

});
