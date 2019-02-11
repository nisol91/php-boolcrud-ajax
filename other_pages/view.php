<!DOCTYPE html>
<html lang="en" dir="ltr">

<?php
// database
// include '../server/server_show_single.php';

// html
include '../partials/_head.php';
include '../partials/_nav.php';


$id_ = $_GET['id'];
?>
  <body class="show_single">
    <div class="title container-fluid">
      <h2>Ospite con id: <?php echo $id_ ?> </h2>
    </div>
    <div class="container card" data-id="<?php echo $id_?>">
      <script id="row-ospite" type="text/x-handlebars-template">
        <tr class='tab'>
          <td id="idd">ID: {{id_}}</td>
          <td>Nome: {{name_}}</td>
          <td>Cognome: {{last_name}}</td>
        </tr>
      </script>
    </div>

    <!-- <script src="js_source/source.js"></script> -->
    <script src="../js_compiled/app.js"></script>

    <?php include '../partials/_footer.php'; ?>
  </body>
</html>
