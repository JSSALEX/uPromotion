const previewcontent = document.getElementById('previewcontent-main')
let currentPage = previewcontent.querySelector('.sheet-preview:first-child')


export function CreatePromotion(_title, _date, _description, _price, _unit) {
    const content = document.createElement('div')
    content.classList.add('sheet-content')

    const title = document.createElement('h1')
    title.innerText = _title
    title.classList.add('editable')
    content.appendChild(title)

    const date = document.createElement('span')
    date.innerText = _date
    date.classList.add('editable')
    content.appendChild(date)

    const description = document.createElement('h2')
    description.innerText = _description
    description.classList.add('editable')
    content.appendChild(description)

    const divPrice = document.createElement('div')
    divPrice.classList.add('price')
    content.appendChild(divPrice)

    const price = document.createElement('h3')
    price.innerText = _price
    price.classList.add('editable')
    divPrice.appendChild(price)

    const divUnit = document.createElement('div')
    divUnit.classList.add('unit')
    divPrice.appendChild(divUnit)

    const unit = document.createElement('p')
    unit.innerText = _unit
    unit.classList.add('editable')
    divUnit.appendChild(unit)

    if(currentPage.children.length < 2) {
        currentPage.appendChild(content)
    } else {
        const newPage = document.createElement('div')
        newPage.classList.add('sheet-preview')
        newPage.appendChild(content)
        previewcontent.appendChild(newPage)
        currentPage = newPage
    }
}