import { CreatePromotion } from "./functions/create-promotion"

window.addEventListener('load', () => {
    const title = document.getElementById('title')
    const dateBeggin = document.getElementById('date-beggin')
    const dateEnd = document.getElementById('date-end')
    const description = document.getElementById('name')
    const price = document.getElementById('price')
    const unit = document.getElementById('unit')

    const printButton = document.getElementById('btn-print')
    const createButton = document.getElementById('btn-create')

    printButton.addEventListener('click', () => {
        pagePrint()
    })

    createButton.addEventListener('click', () => {
        if (title.value != '' && dateBeggin.value != '' && dateEnd.value != '' && description.value != '' && price.value != '' && unit.value != '') {
            CreatePromotion(title.value.toUpperCase(), Date(), description.value.toUpperCase(), Price(), unit.value.toUpperCase())
            description.value = ''
            price.value = ''
            unit.value = ''

            editTexts()

        } else {
            alert('Todos campos de texto devem estar preenchido.')
        }
    })

    formatPrice()

    dateBeggin.addEventListener('input', () => formatDate(dateBeggin));
    dateEnd.addEventListener('input', () => formatDate(dateEnd));

    function Date() {
        let isDate = 'OFERTAS VÁLIDAS ' + dateBeggin.value + ' A ' + dateEnd.value
        return isDate
    }

    function formatDate(input) {
        let nInput = input.value

        // Remove caracteres não numéricos
        nInput = nInput.replace(/[^0-9]/g, '');

        if (nInput.length > 2 && nInput.length < 5) {
            nInput = nInput.slice(0, 2) + '/' + nInput.slice(2);
        } else if (nInput.length >= 5) {
            nInput = nInput.slice(0, 2) + '/' + nInput.slice(2, 4) + '/' + nInput.slice(4);
        }

        input.value = nInput
    }

    function Price() {
        let isPrice = price.value
        return isPrice
    }

    function formatPrice() {
        price.addEventListener('focus', () => {
            if (price.value === 'R$ 0,00') {
                price.value = 'R$ ';
            }
        });

        price.addEventListener('input', () => {
            let value = price.value

            value = value.replace('R$ ', '').trim()

            value = value.replace(/[^0-9,.]/g, '')

            price.value = 'R$ ' + value
        })
    }

    function pagePrint() {
        window.print()
    }

    function editTexts() {
        const textEditable = document.querySelectorAll('.editable')
        textEditable.forEach(elemento => {
            elemento.addEventListener('dblclick', () => {
                elemento.contentEditable = true;
                elemento.focus();

                elemento.addEventListener('blur', () => {
                    elemento.contentEditable = false;
                })

                elemento.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter') {
                        elemento.contentEditable = false;
                        elemento.blur();
                    }
                })
            })
        })
    }
})