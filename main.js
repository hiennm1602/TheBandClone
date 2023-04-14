var arr = ['slider1.jpg','slider2.jpg','slider3.jpg']
var content = ['Chicago|Thank you, Chicago - A night we won\'t forget.', 'Los Angeles|We had the best time playing at Venice Beach!', 'New York|The atmosphere in New York is lorem ipsum.']
var idx = 1
var cssHeading = '.text-content .text-heading'
var cssContent = '.text-content .text-description'
setInterval(function () {
    var slider = document.querySelector('#slider')
    document.querySelector(cssHeading).innerText = content[idx].split('|')[0]
    document.querySelector(cssContent).innerText = content[idx].split('|')[1]
    slider.style.background = `url('../img/slider/${arr[idx++]}') top center / cover no-repeat;`
    if (idx == 3) {
        idx = 0
    }
}, 5000)