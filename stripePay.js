window.onload = function() {
    var stripe = Stripe('pk_test_3yTi7vB1TlKACVCfqrfypdFA');

    let checkoutButton = document.getElementById("checkout");
    checkoutButton.addEventListener("click", function(){
        stripe.redirectToCheckout({
            items: [{sku: 'sku_FqGyB9WXthSDtB', quantity: 1}],
            successUrl: 'http://localhost:8000/success.html',
            cancelUrl: 'http://localhost:8000/failure.html',
        }).then(function (result) {
            console.log(result.error.message)
            });
        });
    }