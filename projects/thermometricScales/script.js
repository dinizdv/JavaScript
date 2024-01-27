const btn = document.querySelector('#btn')

var select1 = document.querySelector('#select1')
var value1 = select1.options[select1.selectedIndex].value

var select2 = document.querySelector('#select2')
var value2 = select2.options[select2.selectedIndex].value

var input = document.querySelector('#input')

var valueInput = Number(input.value)    


select1.addEventListener('change', function(){
    if(this.value === '') {
        input.style.display = 'none'
    } else {
        input.style.display = 'block'
    }
})


btn.addEventListener('click', function (){
    const boilingF = 32
    const boilingK = 273.15
    const differenceF = 0.55
    const differenceK = 1.8
    const differenceC = 1.8
    var value1 = select1.options[select1.selectedIndex].value;
    var value2 = select2.options[select2.selectedIndex].value;
    var valueInput = Number(input.value)
    var content = document.querySelector('#content')
    var account = document.querySelector('#account')
    
    if (value1 === value2) {
        alert("Selecione escalas diferentes para converter.");
        return; // Não executa o restante do código se os valores forem iguais
    }
    
    if (value1 === 'celsius' && value2 === 'fahrenheit') {
        // 6. C -> F === (C * 1.8) + 32
        let celsiusToF = (valueInput * differenceC) + boilingF
        content.innerHTML = `${valueInput}°C = ${celsiusToF}°F`
        account.innerHTML = `(${valueInput}°C x ${differenceC}) + ${boilingF}`
    } else if (value1 === 'celsius' && value2 === 'kelvin'){
        // 5. C -> K === C + K
        let celsiusToK = valueInput + boilingK
        content.innerHTML = `${valueInput}°C = ${celsiusToK}K`
        account.innerHTML = `${valueInput}°C + ${boilingK}`
    } else if (value1 === 'kelvin' && value2 === 'celsius') {
        // 4. K -> C === K - 273.15
        let kelvinToC = valueInput - boilingK
        content.innerHTML = `${valueInput}K = ${kelvinToC}°C`
        account.innerHTML = `${valueInput}K - ${boilingK}`
    } else if (value1 === 'kelvin' && value2 === 'fahrenheit') {
        // 3. K -> F === ((K - 273.15) * 1.8) + 32
        let kelvinToF = ((valueInput - boilingK) * differenceK) + boilingF
        content.innerHTML = `${valueInput}K = ${kelvinToF}°F`
        account.innerHTML = `((${valueInput}K - ${boilingK}) x ${differenceK}) + ${boilingF}`
    } else if (value1 === 'fahrenheit' && value2 === 'celsius') {
        // 2. F -> C === (F - 32) * 0.55
        let fahrenheitToC = (valueInput - boilingF) * differenceF
        content.innerHTML = `${valueInput}°F = ${fahrenheitToC}°C`
        account.innerHTML = `(${valueInput}°F - ${boilingF}) x ${differenceF}`
    } else if (value1 === 'fahrenheit' && value2 === 'kelvin') {
        // 1. F -> K === ((K - 32) * 0.55) + 273.15
        let fahrenheitToK = ((valueInput - boilingF) * differenceF) + boilingK
        content.innerHTML = `${valueInput}°F = ${fahrenheitToK}k`
        account.innerHTML = `((${valueInput}°F - ${fahrenheitToK}) x    ${differenceF}) + ${boilingK}`
    }
});
