<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php
// database
// include 'index/database_ospiti_list.php';

// html
include 'partials/_head.php';
include 'partials/_nav.php';

?>
  <body class="indice">
    <div class="title container-fluid">
      <h2>Lista degli Ospiti</h2>
    </div>
    <table class="table is-fullwidth" >
      <thead>
        <tr>
          <th style="width: 20%"><abbr>id</abbr></th>
          <th style="width: 20%"><abbr>Name</abbr></th>
          <th style="width: 20%"><abbr>Last Name</abbr></th>
          <th style="width: 20%"><abbr></abbr></th>
          <th style="width: 20%"><abbr></abbr></th>
        </tr>
      </thead>
      <tbody>
        <script id="row-ospite" type="text/x-handlebars-template">
          <tr>
            <td id="idd">{{id_}}</td>
            <td>{{name_}}</td>
            <td>{{last_name}}</td>
            <td> <a href="http://localhost/crud_hotel_ajax/other_pages/view.php?id={{id_}}"><button type="submit" name="mostra" class="form-control button is-link is-normal">View</button></a></td>
            <td> <a href="#"><button type="submit" name="cancella" class="form-control button is-danger is-normal" data-id="{{id_}}">Delete Selected ID</button></a></td>
            <!-- {{id_}} e' utilissimo, posso sfruttare handlebars per usare js come php dentro all html -->
          </tr>
        </script>
      </tbody>
    </table>
    <!-- <script src="js_source/source.js"></script> -->
    <script src="js_compiled/app.js"></script>

    <?php include 'partials/_footer.php'; ?>
  </body>
</html>
