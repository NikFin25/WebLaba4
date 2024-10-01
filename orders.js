    document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    const orderDescription = document.getElementById('orderDescription').value;

    const orderBlock = document.createElement('div');
    orderBlock.className = 'containersOrder';
    orderBlock.innerHTML = `<h3>${customerName}</h3><p>${orderDescription}</p>`;

    document.getElementById('blockOrders').appendChild(orderBlock);

});

window.onload = function() {
    const formBlock = document.getElementById('formBlock');
    formBlock.style.visibility = 'visible';
    formBlock.animate([
        {left: '-100%'},
        {left: '0%'}
    ], {
        duration: 1000,
        fill: 'forwards',
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
    });
};