const alimenti = ['banane', 'lamponi','pane','carne','cereali','yogurt','biscotti','formaggio','brioches'];
console.log(alimenti);

const listaSpesa = document.querySelector('.lista_spesa')
console.log(listaSpesa)

for (i = 0; i < alimenti.length ; i++) {
    let nomeProdotto = alimenti[i];

    const li = document.createElement('li');
    li.className = 'prodotto';

    li.append(nomeProdotto);
    console.log(li);

    listaSpesa.append(li);

}

const listaSpesa1 = document.querySelector('.lista_spesa1')
console.log(listaSpesa1)

for (i = 0; i < alimenti.length ; i++) {
    let nomeProdotto = alimenti[i];

    const li = document.createElement('li');
    li.className = 'prodotto';

    li.append(nomeProdotto);
    console.log(li);

    listaSpesa1.append(li);

}
