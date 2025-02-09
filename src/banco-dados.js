export let _db =[]

// let _db = [{
//   title: 'PROMOÇÃO JAN',
//   date: 'VALIDA 06/02/2025 A 10/02/2025',
//   description: 'SHAMPOO CLEAR MAN 400G',
//   price: 'R$18,99',
//   unit: 'UND'
// }, {
//   title: 'PROMOÇÃO JAN',
//   date: 'VALIDA 06/02/2025 A 10/02/2025',
//   description: 'MABEL LAMINADO 400G',
//   price: 'R$17,99',
//   unit: 'UND'
// }]

export function AddPromotionInDB(_title, _date, _description, _price, _unit) {

  let elementContent = {
      title: _title,
      date: _date,
      description: _description,
      price: _price,
      unit: _unit
  }
  
  _db.push(elementContent)

  console.log(_db)
}
