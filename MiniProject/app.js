function upadateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing) {
        caseNumber = parseInt(caseNumber) + 1;
    }

    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }

    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}


function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 1999;
    const caseTotal = getInputvalue('case') * 1799;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update on the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

    if (subTotal == 1799 ){  // [0,1]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_cN2cPGcB3h0fdUs8wz';
    }
    else if (subTotal == 1999 ){ // [1,0]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_bIY02U58BfWb2bK4gk';
    }
    else if (subTotal == 5597 ){ // [1,2]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_eVabLCbwZh0f2bK7sx';
    }
    else if (subTotal == 5797 ){ // [2,1]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_bIY8zq58BeS7cQofZ4';
    }
    else if (subTotal == 7396 ){ // [1,3]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_fZe6ri44xbFV3fOfZ5';
    }
    else if (subTotal == 7596){ // [2,2]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_5kA16Y8kNfWb7w45ks';
    }
    else if(subTotal == 7796){ // [3,1]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_eVa2b29oR25lbMkeV3';
    }
    else if(subTotal == 9395){ // [2,3]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_7sIeXOfNf39p9Ec8wG';
    }
    else if(subTotal == 9595){ // [3,2]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_dR6bLCasV39pdUs00b';
    }
    else if(subTotal == 11394){ // [3,3]
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_9AQbLCgRj6lB03C3co';
    }
    else{
        var checkOut = document.getElementById('clicking');
        checkOut.href = 'https://buy.stripe.com/test_9AQ4jaeJb39p9Ec4gh';
    }

}





document.getElementById('case-plus').addEventListener('click', function () {
    upadateCaseNumber('case', 1799, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    upadateCaseNumber('case', 1799, false);
});

// prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click', function () {
    upadateCaseNumber('phone', 1999, true);
});


document.getElementById('phone-minus').addEventListener('click', function () {
    upadateCaseNumber('phone', 1999, false);
});