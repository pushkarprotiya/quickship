const odaData = [
    {
        country: 'USA',
        pincode: '10001',
        courier: 'UPS',
        charge: 10
    },
    {
        country: 'Canada',
        pincode: 'M5V 2L4',
        courier: 'FedEx',
        charge: 15
    },
    {
        country: 'UK',
        pincode: 'EC1A 1BB',
        courier: 'DHL',
        charge: 12
    }
    // Add more ODA data here...
];

// Function to find ODA based on input
function findODA(country, pincode, weight) {
    for (const oda of odaData) {
        if (oda.country === country && oda.pincode === pincode) {
            const charge = weight * oda.charge;
            return { courier: oda.courier, charge };
        }
    }
    return null;
}

// Form submission handler
document.getElementById('odaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const country = document.getElementById('oda_country').value;
    const pincode = document.getElementById('oda_pincode').value;
    const weight = parseFloat(document.getElementById('oda_weight').value);

    const oda = findODA(country, pincode, weight);

    if (oda) {
        document.getElementById('odaResult').innerHTML = `
                    <p>Courier: ${oda.courier}</p>
                    <p>Charge: $${oda.charge.toFixed(2)}</p>
                `;
    } else {
        document.getElementById('odaResult').innerHTML = '<p>No ODA found for the given input.</p>';
    }
});
