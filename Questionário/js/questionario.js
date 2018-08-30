var verificarQuestao = function(questao)
{
  var alternativas = document.getElementsByName('check_' + questao);
  var respondido = false;

  for (var i = 0; i < alternativas.length; i++) {

    if(alternativas[i].checked)
    {
      respondido = true;
    }

  }

  return respondido;
}

var validarRespostas = function()
{
  limparEstilo("1");
  limparEstilo("2");
  limparEstilo("3");

  var questao1respondida = verificarQuestao("1");
  var questao2respondida = verificarQuestao("2");
  var questao3respondida = verificarQuestao("3");
  var msgErro = "";
  var qtdRespostasCorretas = 0 ;

  if(!questao1respondida)
  {
    msgErro += "1 ";
  }

  if(!questao2respondida)
  {
    msgErro += "2 ";
  }

  if(!questao3respondida)
  {
    msgErro += "3 ";
  }

  if(msgErro != "")
  {
    alert('Responda as questões ' + msgErro);
    return false;
  }

  qtdRespostasCorretas += verificarQuestaoCorreta('1', 'b');
  qtdRespostasCorretas += verificarQuestaoCorreta('2', 'b');
  qtdRespostasCorretas += verificarQuestaoCorreta('3', 'a');

  if(qtdRespostasCorretas > 0)
  {
    alert('Você acertou ' + qtdRespostasCorretas + ' questões');
  }
  else {
    alert('Você não acertou nenhuma questão =( ');
  }


}

var verificarQuestaoCorreta = function (questao, alternativaCorreta)
{
  var alternativas = document.getElementsByName('check_' + questao);
  var acertou = false;
  var alternativaSelecionada;

  for (var i = 0; i < alternativas.length; i++) {
    var alternativa = alternativas[i].getAttribute('id').replace('check_' + questao + '_', '');

    if(alternativas[i].checked)
    {
      alternativaSelecionada = alternativas[i].getAttribute('id').replace('check_' + questao + '_', '');
      alternativaSelecionada = document.getElementById('p_check_'+ questao +'_' + alternativaSelecionada);

      if(alternativa == alternativaCorreta)
      {
        acertou = true;
      }

    }

  }

  if(acertou)
  {
    alternativaSelecionada.classList.add('questaoCorreta');
    return 1;
    //var document.getElementById('p_check_'+ questao +'_' + alternativaCorreta).classList.add('questaoCorreta');
  }
  else {

    alternativaSelecionada.classList.add('questaoIncorreta');
    document.getElementById('p_check_'+ questao +'_' + alternativaCorreta).classList.add('questaoCorreta');
    return 0;
  }
   return 0;


}

var limparEstilo = function(questao)
{
  var alternativas = document.getElementsByName('p_check_' + questao);

  for (var i = 0; i < alternativas.length; i++) {

    alternativas[i].removeAttribute('class');
  }
}
