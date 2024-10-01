window.onload = function() {
    const mainBlock = document.getElementById('mainBlock');
    mainBlock.style.visibility = 'visible';
    mainBlock.animate([
        {left: '-100%'},
        {left: '0%'}
    ], {
        duration: 1000,
        fill: 'forwards',
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
    });
};

