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

    function ajustarTamanhoFonte(elemento) {
        const larguraElemento = elemento.offsetWidth; // Largura do elemento
        const larguraTexto = elemento.scrollWidth; // Largura do texto
      
        if (larguraTexto > larguraElemento) {
          // Texto ocupa mais de uma linha, reduz o tamanho da fonte
          elemento.style.fontSize = "35px"; // Tamanho da fonte menor
        } else {
          // Texto cabe em uma linha, aumenta o tamanho da fonte
          elemento.style.fontSize = "50px"; // Tamanho da fonte maior
        }
      }
      
      // Seleciona todos os elementos <h2>
      const elementosH2 = document.querySelectorAll("h2");
      
      // Itera sobre os elementos <h2> e ajusta o tamanho da fonte
      elementosH2.forEach(elemento => {
        ajustarTamanhoFonte(elemento);
      
        // Ajusta o tamanho da fonte quando o texto for alterado (ex: conteúdo dinâmico)
        elemento.addEventListener("DOMCharacterDataModified", () => {
          ajustarTamanhoFonte(elemento);
        });
      });
})