

function myfunction(placeHolder,container) {
    placeHolder = $(placeHolder);
    container = $(container);
    var order = [];
    
    $.get("/items", function (data) {
        for (var i = 0; i < data.length; i++) {
            var $item = placeHolder.clone();
            $item.attr("id", '');
            $item.find("#name").text(data[i].name);
            $item.find("#price").text('$'+data[i].price);
            $item.find("#details").text(data[i].description);
            $item.find('#img').attr('src', '/image/' + data[i].image);
            var addCart = $item.find('#cart').attr('src', '/image/cart.png');

            container.append($item);
            function getData () {
                var item = data[i];
                var cart = [];
                addCart.click(function (e) {
                    
                    
                    if (sessionStorage.cart) {
                        cart = JSON.parse(sessionStorage.cart);
                        cart.push(item);
                        cart = JSON.stringify(cart);
                        sessionStorage.setItem('cart', cart);
                    }
                    else {
                        cart=[];
                        cart.push(item);
                        cart = JSON.stringify(cart);
                        sessionStorage.setItem('cart', cart);
                    }
                })
            }getData();
        }
    });
    
}
$(function () {
    sessionStorage.removeItem('cart');
    myfunction("#placeHolder", "#itemPlace")
});

function proceed() {
    window.location = 'http://localhost:1337/page3.html'
}

function openNav() {
    document.getElementById("mySidenav").style.width = "202px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
