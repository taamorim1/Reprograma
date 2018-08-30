var AddNovaTarefa = function()
{
  var div = document.getElementById('divNovaTarefa');

  if(div.style.display === "none")
  {
    div.style.display = "block";
  }
  else {
    div.style.display = "none";
  }

}

var InserirTarefa = function()
{
  var descricao = document.getElementById('txtNovaTarefa').value;
  var div = document.createElement('div');
  div.className = "divListItem";
  var parentItem = document.getElementById('ulToDoList')
  var childItem = document.createElement('li');
  childItem.setAttribute("id", "liItem_" + ObterUltimoCodLista());
  var span = document.createElement('span');
  var texto = document.createTextNode(descricao);

  childItem.className = "listItem";

  var check = document.createElement('input');
  check.type = "checkbox";
  check.setAttribute("id", "check_"+ ObterUltimoCodLista());
  check.setAttribute("onchange", "marcarFeito(this);")

  span.appendChild(texto);
  div.appendChild(span);
  div.appendChild(check);
  childItem.appendChild(div)


  //span.appendChild(texto);
  //span.appendChild(check);
  //div.appendChild(span);
  //childItem.appendChild(div);

  //span.appendChild(texto)
  //check.append(span);
  //childItem.appendChild(texto);

  var listItens = document.getElementsByClassName('listItem');

  if(listItens.length > 0)
  {
    parentItem.insertBefore(childItem, listItens[0]);
  }
  else {
    parentItem.appendChild(childItem);
  }

}

var ObterUltimoCodLista = function()
{
  var itens = document.getElementsByClassName('listItem');
  var cod = 0;

  if(itens.length > 0)
  {
    for(index = 0; index < itens.length; index++)
    {
      var id = parseInt(itens[index].getAttribute("id").replace("liItem_", ""));

      if(id > cod)
      {
        cod = id;
      }

    }
  }
  return cod + 1;
}

var marcarFeito = function(checkbox)
{
  var id = checkbox.getAttribute("id").replace("check_", "");
  var listItem = document.getElementById("liItem_" + id);

  if(checkbox.checked == true)
  {
    listItem.style.textDecoration = "line-through";
    listItem.style.color = "grey";
  }
  else {
    listItem.style.textDecoration = "none";
    listItem.style.color = "black";
  }
}
