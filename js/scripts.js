var productSelected = 'product_selected';


$('.product_item').on('click', function () {
    $(this).parent().toggleClass(productSelected);
});
