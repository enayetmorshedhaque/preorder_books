$(document).ready(function () {
    $("#numberOfBooks").blur(function () {
        // display bill table
        $("#billTable").show();

        // get book title and set it to bill section
        let bookName = $("#bookTitle").text();
        $("#bookNameInBill").html(bookName);

        // bill calculation
        let bookPrice = $("#bookSellPrice").text();
        let subTotal = parseInt($("#subTotal").html(bookPrice));

        // update book quantity & subtotal price
        let numberOfBooks = $("#numberOfBooks").val();
        $("#bookQuantity").html(numberOfBooks);
        $("#unitTotal").html(bookPrice * numberOfBooks);
        $("#subTotal").html($("#unitTotal").text());

    });

    $('#districtList').change(function () {
        $("input[type='radio']").click(function () {

            let subTotalBill = parseInt($("#subTotal").text());

            let courierCharge;
            let paymentMethod;

            paymentMethod = $(".form-check-input:checked").val();

            if ($("#districtList option:selected").val() == 13) {
                courierCharge = 60;
            } else if ($("#districtList option:selected").val() != 13 && paymentMethod == 1) {
                courierCharge = 100;
            } else {
                courierCharge = 50;
            }
            $("#paymentMethodCost").html(courierCharge);
            let grandTotal = subTotalBill + courierCharge;
            $("#grandTotalBill").html(grandTotal);
        });
    });
});