jQuery(document).ready(function ($) {

    window.onload = function () {
        $(".bts-popup").delay(1000).addClass('is-visible');
    }

    //open popup
    $('.bts-popup-trigger').on('click', function (event) {
        event.preventDefault();
        $('.bts-popup').addClass('is-visible');
    });

    //close popup
    $('.bts-popup').on('click', function (event) {
        if ($(event.target).is('.bts-popup-close') || $(event.target).is('.bts-popup')) {
            event.preventDefault(); 1
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.bts-popup').removeClass('is-visible');
        }
    });
});



//   weight calculator dynamic add section

$(document).ready(function () {
    // Function to calculate and update the chargeable weight
    function updateChargeableWeight() {
        var chargeableWeight = 0;
        $('.input-row').each(function () {
            var length = parseFloat($(this).find('.length').val()) || 0;
            var width = parseFloat($(this).find('.width').val()) || 0;
            var height = parseFloat($(this).find('.height').val()) || 0;
            var weight = parseFloat($(this).find('.weight').val()) || 0;


            var dimensionalWeight = (length * width * height) / 5000; // Calculate dimensional weight (kg)
            chargeableWeight += Math.max(length, width, height, weight, dimensionalWeight);



        });
        $('#chargeable-weight').text(chargeableWeight.toFixed(2));
    }

    // Add Item
    $('#add-btn').on('click', function () {
        var newRow = $('<div class="input-row"><input type="number" class="weight" placeholder="Enter weight" min="0.01" step="0.01">    <input type="number" class="length" placeholder="Enter length" min="1"> <input type="number" class="width" placeholder="Enter width" min="1"> <input type="number" class="height" placeholder="Enter height" min="1"> <button class="btn btn-danger remove-btn">Remove</button></div>');
        $('#input-container').append(newRow);
    });

    // Remove Item
    $('#input-container').on('click', '.remove-btn', function () {
        $(this).parent().remove();
        updateChargeableWeight();
    });

    // Listen for input changes
    $('#input-container').on('input', '.length, .width, .height, .weight', function () {
        updateChargeableWeight();
    });
});




// $(document).ready(function(){

//     var i = 1;
//       var length;
//       //var addamount = 0;
//      var addamount = 700;

//     $("#add").click(function(){

//        addamount += 700;
//        console.log('amount: ' + addamount);
//      i++;
//         $('#dynamic_field').append('<tr id="row'+i+'"><td><input type="text" placeholder="Weight" class="form-control" id="weight1"/></td><td><input type="text" placeholder="Length" class="form-control" id="length1"/></td>	<td><input type="text" placeholder="Breadth" class="form-control" id="width1"/></td> <td><input type="text" placeholder="Height" class="form-control" id="height1"/></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove">X</button></td></tr>');  
//       });

//     $(document).on('click', '.btn_remove', function(){  
//       addamount -= 700;
//       console.log('amount: ' + addamount);

//         var button_id = $(this).attr("id");     
//         $('#row'+button_id+'').remove();  
//       });



//       $("#submit").on('click',function(event){
//       var formdata = $("#add_name").serialize();
//         console.log(formdata);

//         event.preventDefault()

//         $.ajax({
//           url   :"action.php",
//           type  :"POST",
//           data  :formdata,
//           cache :false,
//           success:function(result){
//             alert(result);
//             $("#add_name")[0].reset();
//           }
//         });

//       });
//     });


// weight calculate button script









// document.addEventListener("DOMContentLoaded", function () {
//     const lengthInput = document.getElementById("length");
//     const widthInput = document.getElementById("width");
//     const heightInput = document.getElementById("height");
//     const weightInput = document.getElementById("weight");
//     const calculateBtn = document.getElementById("calculate-btn");
//     const chargeableWeight = document.getElementById("chargeable-weight");

//     calculateBtn.addEventListener("click", function () {
//         const length = parseFloat(lengthInput.value);
//         const width = parseFloat(widthInput.value);
//         const height = parseFloat(heightInput.value);
//         const weight = parseFloat(weightInput.value);

//         if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight)) {
//             alert("Please enter valid dimensions and weight.");
//         } else {
//             // Calculate chargeable weight (assuming the formula is length x width x height / 5000)
//             const chargeable = (length * width * height) / 5000;
//             chargeableWeight.textContent = chargeable.toFixed(2);
//         }
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     const lengthInput1 = document.getElementById("length1");
//     const widthInput1 = document.getElementById("width1");
//     const heightInput1 = document.getElementById("height1");
//     const weightInput1 = document.getElementById("weight1");
//     const calculateBtn = document.getElementById("calculate-btn1");
//     const chargeableWeight = document.getElementById("chargeable-weight");

//     calculateBtn.addEventListener("click", function () {
//         const length = parseFloat(lengthInput1.value);
//         const width = parseFloat(widthInput1.value);
//         const height = parseFloat(heightInput1.value);
//         const weight = parseFloat(weightInput1.value);

//         if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight)) {
//             alert("Please enter valid dimensions and weight.");
//         } else {
//             // Calculate chargeable weight (assuming the formula is length x width x height / 5000)
//             const chargeable = (length * width * height) / 5000;
//             chargeableWeight.textContent = chargeable.toFixed(2);
//         }
//     });
// });

// paper work finder script

// Dummy data for paperwork requirements


const data = [
    { shipmentType: 'Courier', commodity: 'Electronics', minWeight: 0, maxWeight: 5, paperwork: 'Airway Bill, Commercial Invoice' },
    { shipmentType: 'Commercial', commodity: 'Textiles', minWeight: 10, maxWeight: 20, paperwork: 'Bill of Lading, Packing List' },
    // Add more data as needed
];

// Function to filter data based on user input
function findPaperwork() {
    const shipmentType = document.getElementById('shipmentType').value;
    const commodity = document.getElementById('commodity').value;
    const weight = parseFloat(document.getElementById('weight').value);

    const results = data.filter(item => {
        return (
            item.shipmentType.toLowerCase() === shipmentType.toLowerCase() &&
            item.commodity.toLowerCase() === commodity.toLowerCase() &&
            weight >= item.minWeight &&
            weight <= item.maxWeight
        );
    });

    displayResults(results);
}

// Function to display results
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsDiv.textContent = 'No paperwork found for the specified criteria.';
    } else {
        const ul = document.createElement('ul');
        results.forEach(item => {
            const li = document.createElement('li');
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            li.textContent = `Shipment Type: ${item.shipmentType}`;
            li2.textContent = `Commodity: ${item.commodity}`;
            li3.textContent = `Weight Range: ${item.minWeight} - ${item.maxWeight} KGS`;
            li4.textContent = `Required Paperwork: ${item.paperwork}`;
            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);


        });
        resultsDiv.appendChild(ul);
    }
}

// Event listener for form submission
const paperworkForm = document.getElementById('paperworkForm');
paperworkForm.addEventListener('submit', function (e) {
    e.preventDefault();
    findPaperwork();
});



// oda finder script


// Sample ODA data (in a real application, this would come from a server)
