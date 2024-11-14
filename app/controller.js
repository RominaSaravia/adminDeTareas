function addNewItem(el){
    let newRow = `<tr><th scope="row">1</th><td>Nueva fila</td></tr>`

    let tbody = document.querySelector("tbody");
    let newTr = document.createElement('tr')
    newTr.innerHTML = newRow;

    tbody.appendChild(newTr);



}