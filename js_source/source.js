//purtroppo il metodo da sito handlebars per l importazione non funziona. bisogna fare come qui sotto stando attenti
//anche a mettere il percorso omettendo node_modules, se no non lo trova, perche considera che siamo gia dentro node_modules.
import Handlebars from 'handlebars/dist/cjs/handlebars.js'

//per jquery invece tutto come sempre
var $ = require('jquery');

$(document).ready(function() {




  //funzione che mi chiama tutti i dati della pagina indice.
   function callData() {

     //questo controllo mi dice che se il body ha la classe indice (ovvero, se il relativo oggetto jquery ha lunghezza maggiore di 1)
     //allora faccio la chiamata, in alternativa, ovvero se per esempio siamo in un altra pagina , per esempio form, la chiamata non viene neppure fatta,
     //cosi si evita di fare una chiamata ajax inutilmente.
     if ($('body.indice').length > 0) {

       $.ajax({
         url: 'http://localhost/crud_hotel_ajax/server/server_indice.php',
         method: 'GET',
         success: function (data) {
           // console.log(data);
           var data_hosts = JSON.parse(data);
           console.log(data_hosts);
           handlebarsPrintData(data_hosts);
         },
       });
     }

   }


  //chiamata ajax principale per mostrare tutti gli ospiti nella pagina iniziale
   callData();




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

  function printSingleData(data) {
    var source = $('#row-ospite').html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < data.length; i++) {
      var my_template = {
        id_: data[i]['id'],
        name_: data[i]['name'],
        last_name: data[i]['lastname'],
      };
      var html = template(my_template);

      $('.container.card').append(html);
      console.log(html);
    }
  }







 //mostra id selezionato
 //questo if mi serve perche cosi fa la chiamata solo se siamo nella pagina che mostra il singolo ospite.
 //non avrei potuto farlo con il click jquery perche quel bottone su cui bisogna cliccare e' relativo ad un altra pagina precedente.
   if ($('body.show_single').length > 0) {

   var myId = $('.card').attr('data-id')
   console.log(myId);
     $.ajax({
       url: 'http://localhost/crud_hotel_ajax/server/server_show_single.php',
       data: {
         id: myId,
       },
       method: 'GET',
       success: function (data) {
         console.log(data);
         var data_hosts = JSON.parse(data);
         console.log(data_hosts);
         printSingleData(data_hosts)
       },
       error: function (data) {
         console.log('errore');
       }
     });
   }




  //cancella id selezionato
  //se schiaccio il bottone, allora fa la chiamata ajax che punta al file php con la query della cancellazione

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



        // nascondo il mio elemento eliminato, se no scomparirebbe solo al refresh
        // $('tbody').find('tr').each(function(index) {
        //   // console.log($(this).find('#idd').text());
        //   // console.log(myId);
        //   if ($(this).find('#idd').text() == myId) {
        //     $(this).addClass('nascosto');
        //   }
        // });

        //in alternativa, richiamo tutto il dataset
        $('tbody').children('tr').remove();
        callData();

      },
    });
  });

});
