AOS.init();

const dataEvento = new Date("May 05, 2025 15:00:00");
const timeStampEvento = dataEvento.getTime();

const contaTempo = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const timeStampRestante = timeStampEvento - timeStampAtual;

    const diaEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutoEmMs = 1000*60;
    const segundosEmMs = 1000;

    const diasRestantes = Math.floor(timeStampRestante / diaEmMs);
    const horasRestantes = Math.floor((timeStampRestante % diaEmMs) / horaEmMs);
    const minutosRestantes = Math.floor((timeStampRestante % horaEmMs) / minutoEmMs);
    const segundosRestantes = Math.floor((timeStampRestante % minutoEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;

    if (timeStampRestante < 0){
        clearInterval(contaTempo);
        document.getElementById('contador').innerHTML = 'Tempo esgotado.';
    }
}, 1000);

////////////////////////////////////////////////////////////////////////////////////////////////////

//LINHA 3: puxo uma data e coloco numa const
//LINHA 4: transformo a data acima em um time Stamp (valor total em ms)

//LINHA 6: uso setInterval para que a função seja executado a cada segundo
//LINHA 7: puxo a data atual (pois não inseri um valor em Date();)
//LINHA 8: acima, aqui transformao a data em outro time Stamp

//LINHA 10: realizo uma subtração para obter o tempo restante até o evento (em ms)

//LINHA 12: defino que 1 dia é igual a 1000ms*60= 60000ms(1min) => 1min*60= 3600000ms(1h) => 1h*24= 86400000ms(1d).
//LINHA 13: defino que 1 hora é igual a 1000ms*60= 60000ms(1min) => 1min*60= 3600000ms(1h).
//LINHA 14: defino que 1 hora é igual a 1000ms*60= 60000ms(1min).
//LINHA 15: defino que 1 hora é igual a 1000ms.

//LINHA 17: divido o timeStampRestante(ms) por 86400000ms(1d), arredondando pra baixo, e armazeno
//LINHA 18: divido o timeStampRestante(ms) por 86400000ms(1d) com %, dessa maneira digo que quero apenas "o quebrado do número" como resultado
//          depois divido essa sobra por 3600000ms(1h), arredondando pra baixo e armazeno
//LINHA 19: repito a última operação, agora segurando o "resto" das horas e, dividindo por 60000ms(1min), arredondo para baixo e armazeno
//LINHA 20: repito a operação novamente, agora segurando o "resto" dos minutos, divido por 1000ms, arredondo para baixo e armazeno

//LINHA 22: capto um elemento do html, digo que nele quero inserir uma string dinâmica com ` ` e, com ${} passo os valores dinâmicos.

//LINHA 23: abro um if para caso a data já tenha passado, ou seja, se o timeStampRestante(ms) for menor que zero, o if vai rodar
//LINHA 24: rodando, ele vai limpar o intervallo da função, o que impedirá sua repetição
//LINHA 25: e com o innerHTML, nesse caso incluirá no <span> a mensagem 'Tempo esgotado.'

//definição do intervalo (1000ms) para que a função seja executada