<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php
// database
// include 'index/database_ospiti_list.php';

// html
include 'partials/_head.php';
include 'partials/_nav.php';

?>
  <body>
    <div class="title container-fluid">
      <h2>Lista degli Ospiti</h2>
    </div>
    <div class="crea container">
      <a href="http://localhost/php_sql_crud_hotel/create/create.php"><button type="button" class="button is-info" style="width: 300px">Add Host</button></a>

      <!-- cancella id selezionato -->
      <form class="" action="http://localhost/php_sql_crud_hotel/delete_selected_id/database_delete_selected.php" method="post">
        <!-- per passare l id da cancellare, lo metto direttamente nel VALUE di un input nascosto -->
        <input type="text" name="iddd_show_input" value="<?php echo $value['id']; ?>">
        <td> <a href="#"><button type="submit" name="Cancella" class="form-control button is-danger">Delete Selected ID</button></a></td>
      </form>
    </div>
    <table class="table is-fullwidth" >
      <thead>
        <tr>
          <th><abbr>id</abbr></th>
          <th><abbr>Name</abbr></th>
          <th><abbr>Last Name</abbr></th>
          <th><abbr></abbr></th>
          <th><abbr></abbr></th>
        </tr>
      </thead>
      <tbody>
        <script id="row-ospite" type="text/x-handlebars-template">
          <tr>
            <td>{{id_}}</td>
            <td>{{name_}}</td>
            <td>{{last_name}}</td>
            <td> <a href="#"><button type="submit" name="Cancella" class="form-control button is-link is-normal">View</button></a></td>
            <td> <a href="#"><button type="submit" name="vedi" class="form-control button is-danger is-normal">Delete Selected ID</button></a></td>
          </tr>
        </script>
      </tbody>
    </table>
    <!-- <script src="js_source/source.js"></script> -->
    <script src="js_compiled/app.js"></script>

    <?php include 'partials/_footer.php'; ?>
  </body>
</html>
