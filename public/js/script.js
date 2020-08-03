$(window).scroll(function () {
  $scr = $(window).scrollTop();
  $("#main_image img").css({
    width: 100 + $scr / 5 + "%",
    height: 100 + $scr / 4 + "%",
  });
});

$(function () {
  let userlist = $("#user_list");
  let orderlist = $("#order_list");
  let userbtn = $("#userbtn");
  let orderbtn = $("#orderbtn");

  userbtn.click(function () {
    userbtn.removeClass("btn-light");
    userbtn.addClass("btn-dark");
    orderbtn.removeClass("btn-dark");
    orderbtn.addClass("btn-light");
    console.log("User btn working");
    $("#order-box").hide();
    $("#user-box").show();
  });

  orderbtn.click(function () {
    userbtn.removeClass("btn-dark");
    userbtn.addClass("btn-light");
    orderbtn.removeClass("btn-light");
    orderbtn.addClass("btn-dark");

    $("#order-box").show();
    $("#user-box").hide();
    console.log("order working ....");
    $.get("/api/orders", function (response) {
      console.log(response[0]["order_id"]);
      orderlist.empty();
      for (var i = response.length - 1; i >= 0; i--) {
        orderlist.append(`<div class="col-3 mb-3">
        <div class="card ordercard m-3 p-1" onclick="location.href='/api/order/?orderid=${response[i]["order_id"]}'">
          <div class="card-body p-0">
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Order_index:</b> ${i}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Customer Name:</b> ${response[i]["customer_name"]}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Mobile Number:</b> ${response[i]["mobile_number"]}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Add1:</b> ${response[i]["add1"]}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Add2:</b> ${response[i]["add2"]}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Landmark:</b> ${response[i]["landmark"]}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Order Id:</b> ${response[i]['order_id']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Order Date:</b> ${response[i]['order_date']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Total Items:</b> ${response[i]['total_items']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Total Amount:</b> ${response[i]['total_amount']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Order Status:</b> ${response[i]['status_of_order']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Comment:</b> ${response[i]['customer_comment']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Feedback:</b> ${response[i]['feedback']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Promocode:</b> ${response[i]['promocode']}
            </p>
            <p
              class="card-text usercred_name p-0 m-0 text-left"
              align="center"
            >
              <b>Delivery charge:</b> ${response[i]['delivery_charge']}
            </p>
          </div>
        </div>
      </div>`);
      }
    });

  });


  $.get("/api/users", function (response) {
    console.log(response);
    userlist.empty();
    /* for (user of response) {
      userlist.append(`<div class="col-3 mb-3">
      <div class="card usercard m-3 p-1">
          <div class="card-body p-0">
              <div class="container service_container"><h1 align="center" id="service_icons"> <span class="fa fa-money"></span> </h1></div>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Name:</b>  ${user['name']}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Email:</b>  ${user['email']}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Phone:</b>  ${user['phone']}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Landmark:</b>  ${user['lanmark']}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>City:</b>  ${user['city']}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Pincode:</b>  ${user['pincode']}</p>
            </div>
      </div>
  </div>`);
    } */

    for (var i = response.length - 1; i >= 0; i--) {
      console.log(i);
      userlist.append(`<div class="col-3 mb-3">
      <div class="card usercard m-3 p-1">
          <div class="card-body p-0">
              <div class="container service_container"><h1 align="center" id="service_icons"> <span class="fa fa-money"></span> </h1></div>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>User_index:</b>  ${i}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>User_id:</b>  ${response[i]["user_id"]}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Name:</b>  ${response[i]["name"]}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Email:</b>  ${response[i]["email"]}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Phone:</b>  ${response[i]["phone"]}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Landmark:</b>  ${response[i]["lanmark"]}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>City:</b>  ${response[i]["city"]}</p>
              <p class="card-text usercred_name p-0 m-0 text-left" align="center"> <b>Pincode:</b>  ${response[i]["pincode"]}</p>
            </div>
      </div>
  </div>`);
    }
  });
});
