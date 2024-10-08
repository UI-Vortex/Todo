window.addEventListener('load', function(){
    function $(element) {
        let el = document.querySelectorAll(element)
        if (el.length < 1) {
            return undefined
        } else if (el.length === 1) {
            return el[0]
        } else {
            return el
        }
    }
    const elInput = $('input');
    const elBtn = $('button');
    const elList = $('ul');

    elBtn.addEventListener('click', function (){
        let li = document.createElement('li')
        let img = document.createElement('img')
        img.src = 'https://picsum.photos/50'
        li.textContent = elInput.value
        elList.append(img, li)
        elInput.value = ""
    })
})

