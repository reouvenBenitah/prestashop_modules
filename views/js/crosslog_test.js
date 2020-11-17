$(document).ready(function () {
    var btn_gestion = `
    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#exampleModal" data-whatever=""><i class="icon-ticket"></i> Gestion de retour</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
    <div class="modal-content">
    <div class="modal-header">
       <h2 class="modal-title text-center" id="exampleModalLabel">Gestion de retour</h2>
       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
       </button>
    </div>
    <div class="modal-body">
       <form>
          <div class="row">
             <div class="form-group col-md-6">
                <label for="numeroRetour" class="col-form-label">Numéro de retour:</label>
                <input type="text" class="form-control" id="numeroRetour">
             </div>
          </div>
          <div class="row">
             <div class="form-group col-md-6 float-md-left">
                <label for="motifRetour" class="col-form-label">Motif de retour</label>
                <input type="text" class="form-control" id="motifRetour">
             </div>
          </div>
          <div class="row">
             <div class="form-group">
                <label for="messageText" class="col-form-label">Message:</label>
                <textarea class="form-control" id="messageText"></textarea>
             </div>
          </div>
          <div class="row">
             <div class="table-responsive table-scrollable">
                <table class="table table-hover table-sortable col-md-12">
                   <thead class="thead-inverse">
                      <tr>
                         <th>Image Produit</th>
                         <th>Product</th>
                         <th>Prix</th>
                         <th>Quantité</th>
                         <th>Quantité retourner</th>
                      </tr>
                   </thead>
                   <tbody>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                      <tr>
                         <td scope="row">
                            <img src="http://localhost/prestashop-no-clear_1.7.6.9/img/tmp/product_mini_10_25.jpg?time=1605610186" alt="" srcset="">
                         </td>
                         <td>Hummingbird printed sweater - Size : S <br>
                            Reference number: demo_3
                         </td>
                         <td>5,60 €</td>
                         <td>4</td>
                         <td style="width: 15%;">
                            <input type="number" class="form-control" name="" id="">
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>
       </form>
       </div>
       <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send</button>
       </div>
    </div>
  

`
    $("#add_voucher").after(btn_gestion);
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('Gestion de retour')
        modal.find('.modal-body input').val(recipient)
    })
});