fetch(`https://v6.exchangerate-api.com/v6/21af8721da81b2e8e8cc702a/latest/USD`)
  .then(res => res.json())
  .then(data =>processData (data))
  var fromBox=document.querySelector("#from_currency")
  var toBox=document.querySelector("#to_currency")

  function processData(data){
  let currencyCodes=data.conversion_rates
      fromBox=document.querySelector("#from_currency")
      toBox=document.querySelector("#to_currency")
  
  for(let code in currencyCodes){
    let opt=document.createElement("option")
    opt.text=code
    opt.value=data.conversion_rates[code]
    fromBox.appendChild(opt)
  }
  for(let code in currencyCodes){
    let opt=document.createElement("option")
    opt.text=code
    opt.value=data.conversion_rates[code]
    toBox.appendChild(opt)
  }
  }
  function exchange(){
    let fromRate=fromBox.value
    let toRate=toBox.value
    let amount=id_amount.value
    let res=((amount / fromRate)* toRate).toFixed(2)
    document.querySelector("#id_result").innerHTML=res
  }
  
    