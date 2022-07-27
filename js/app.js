const alimenti = ['banane', 'lamponi','pane','carne','cereali','yogurt','biscotti','formaggio','brioches','focacce'];
console.log(alimenti);

const listaSpesa = document.querySelector('.lista_spesa');
console.log(listaSpesa);

for (i = 0; i < alimenti.length ; i++) {
    let nomeProdotto = alimenti[i];

    const li = document.createElement('li');
    li.className = 'prodotto';

    li.append(nomeProdotto);
    // console.log(li);

    listaSpesa.append(li);

}

const listaSpesa1 = document.querySelector('.lista_spesa1')
console.log(listaSpesa1)

i = 0

while (i < alimenti.length) {
    let nomeProdotto1 = alimenti[i];

    const li = document.createElement('li');
    li.className = 'prodotto';

    li.append(nomeProdotto1);
    
    listaSpesa1.append(li);

    i++;

    
}
