window.addEventListener("load", function () {
    crosslogTest();
    $(document).ready(function () {
        $("#add_voucher").after(btn);
        $(".open").click(function (e) {
            e.preventDefault();
            $(".pop-outer").fadeIn("slow");
        });
        $(".close").click(function (e) {
            e.preventDefault();
            $(".pop-outer").fadeOut("slow");
        });
    });
});

function crosslogTest() {
    if (document.createStyleSheet) {
        document.createStyleSheet(
            "https://prestashop17.cms.crossdesk.com/modules/crosslogtest/views/css/crosslog_test.css"
        );
    } else {
        var styles =
            "@import url('https://prestashop17.cms.crossdesk.com/modules/crosslogtest/views/css/crosslog_test.css');";

        var newSS = document.createElement("link");
        newSS.rel = "stylesheet";
        newSS.href = "data:text/css," + escape(styles);
        document.getElementsByTagName("head")[0].appendChild(newSS);
    }

    var btn = `
  <button type="button" class="btn btn-default open"><i class="icon-ticket"></i> Gestion de retour</button>
  <div style="display: none;" class="pop-outer container-fluid">
      <div class="pop-inner">
          <button class="close">X</button>
          <form action="" method="POST">
              <div class="form-group">
                  <h1 class="text-center">Gestion de retour</h1>
                  <div class="container-fluid">
                      <div class="row">

                          <div class="form-group col-lg-6" style="float: none;">
                              <label for="numRetour">Numero de retour
                              </label>
                              <input type="text" value="GSBSBDJK" name="numRetour" id="numRetour" class="form-control">
                          </div>
                          <div class="col-md-6"></div>

                          <div class="form-group col-lg-6" style="float: none;">
                              <label for="newNumRetour">Modifier le numéro de retour</label>
                              <input type="text" name="newNumRetour" id="newNumRetour" class="form-control">
                          </div>


                          <div class="col-md-6"></div>

                          <div class="form-group col-lg-6" style="float: none;">
                              <label for="comment">Commentaires:</label>
                              <textarea class="form-control" name="comment" id="comment" rows="3"></textarea>
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
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                      <tr>
                                          <td scope="row">
                                              <img src="product_mini_2_9.jpg" alt="" srcset="">
                                          </td>
                                          <td>Hummingbird printed sweater - Size : S <br>
                                              Reference number: demo_3
                                          </td>
                                          <td>5,60 €</td>
                                          <td>4</td>
                                          <td style="width: 15%;">
                                              <input type="number" class="form-control" name="" id=""></td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <button type="submit" class="btn btn-primary btn-gestion">Envoyer</button>
          </form>
      </div>
  </div>

        `;

}
