//purtroppo il metodo da sito handlebars per l importazione non funziona. bisogna fare come qui sotto stando attenti
//anche a mettere il percorso omettendo node_modules, se no non lo trova, perche considera che siamo gia dentro node_modules.
import Handlebars from 'handlebars/dist/cjs/handlebars.js'
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
      // console.log(html);
    }

  }
  //---------------------

  // printSingleData(data) {
  //   for (var i = 0; i < data.length; i++) {
  //
  //   }
  // }





  $.ajax({
    url: 'http://localhost/crud_hotel_ajax/server/server_show.php',
    method: 'GET',
    success: function (data) {
      // console.log(data);
      var data_hosts = JSON.parse(data);
      console.log(data_hosts);
      handlebarsPrintData(data_hosts);
      // printSingleData(data_hosts)
    },
  });



  //cancella id selezionato
  //se schiaccio il bottone, allora fa la chiamata

  $(document).on('click', '.is-danger', function(event) {
    var myId = $(this).attr('data-id')
    console.log(myId);
    $.ajax({
      url: 'http://localhost/crud_hotel_ajax/server/server_delete.php',
      method: 'GET',
      data: {
        id: myId,
      },
      success: function (data) {
        alert(`id ${myId} eliminato`);
        //nascondo il mio elemento eliminato, se no scomparirebbe solo al refresh
        $('tbody').find('tr').each(function(index) {
          // console.log($(this).find('#idd').text());
          // console.log(myId);
          if ($(this).find('#idd').text() == myId) {
            $(this).addClass('nascosto');
          }
        });
      },
    });
  });

});
