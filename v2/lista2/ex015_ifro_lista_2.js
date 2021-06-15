/**Escreva um algoritmo para cadastro de dados básicos de alunos. O usuário deveinformar o número da matrícula (cinco dígitos), nome completo do aluno, gênero (o usuáriodeve informar “M” ou “F”), curso (o usuário deve informar“BSI”, “EE”, “EM”, “EC” ou “AQ”) ecoeficiente de rendimento (dever ser maior ou iguala zero e menor ou igual a 10). Comoresultado o sistema deve imprimir a matrícula, o nomedo aluno, gênero (deve imprimir“Masculino” ou “Feminino”), curso (“Bacharelado emSistemas de Informação” para “BSI”,“Engenharia Elétrica” para “EE”, “Engenharia Mecânica”para “EM”, “Engenharia Civil” para“EC” e “Arquitetura” para “AQ”), o coeficiente derendimento, seguido por “Excelente” se ocoeficiente for [9, 10], “Bom” se entre [7, 9), “Regular”se entre [5, 7), “Necessita melhoras”se entre [3, 5) e “Preocupante” se entre [0, 3). Notea existência de intervalos fechados esemifechados para os coeficientes */


//receber numero da matricula - 5 digitos
//receber nome completo
//receber genero > "M" ou "F"
//receber curso > BSI, EE, EM, EC, AQ
//coeficiente de rendimento > entre 0 e 10
//validação para receber o numero da matricula 
//validação para receber o genero > retornar um dicionario com bool e o genero(sem sigla)
//validação para receber o curso > retorna um dicionario com bool e o curso(nome todo)
//valida para receber o coeficiente de rendimento > retornar um dicionario com o coeficiente de rendimento e sua especificidade


//Resultado cliente ------------------

//imprimir a matricula
//imprir o nome completo
//imprimir o genero > 'masculino' ou 'feminino'
//imprimir o curso
//-------BSI- Bacharelado em Sistemas de Informação
//-------EE - Engenharia Elétrica
//-------EM - Engenharia Mecânica
//-------EC - Engenharia Civil
//-------AQ - Arquitetura
//imprimir o coeficiente de rendimento
//----“Excelente” se ocoeficiente for [9, 10]
//----“Bom” se entre [7, 9)
//----Regular”se entre [5, 7)
//----“Necessita melhoras”se entre [3, 5)
//----“Preocupante” se entre [0, 3)

var validarMatricula = function(matricula){
    if(String(matricula).length == 5){ // tamanho da matricula tem que ser 5 digitos
        return true

    }else{
        return false
    }
}

var validarGenero = function(generoRecebendo){  // validar o genero > recebe em sigla e devolve em nome

    generosLista = ['M','F']
    generoObjeto = {Genero:null, temGenero:Boolean}
    if (generosLista.indexOf(generoRecebendo > -1)){// se o genero estiver dentro da lista
        generoObjeto.temGenero = true

        if(generosLista.indexOf(generoRecebendo) == 0){
            generoObjeto.Genero = 'Masculino'
        
        }else if(generosLista.indexOf(generoRecebendo)== 1){
            generoObjeto.Genero ='Feminino'    
        }

    }else{
        generoObjeto.temGenero = false
    }

    return generoObjeto
}

var validarCurso = function(siglaCurso){ // validar o curso
    cursosLista = ['BSI','EE', 'EM', 'EC',  'AQ']
    objetoCursos = {CursoNome:null, temCurso:null}

    if (cursosLista.indexOf(siglaCurso) > -1 ){ //se a sigla estiver dentro da lista 
        objetoCursos.temCurso = true
    
            if(cursosLista.indexOf(siglaCurso) == 0){ 
                objetoCursos.CursoNome = 'Bacharelado em Sistemas de Informação'
            }
            
            else if(cursosLista.indexOf(siglaCurso) == 1){
                objetoCursos.CursoNome = 'Engenharia Elétrica'
            }
            
            else if(cursosLista.indexOf(siglaCurso) == 2){
                objetoCursos.CursoNome = 'Engenharia Mecânica'
            }
            
            else if(cursosLista.indexOf(siglaCurso) == 3){
                objetoCursos.CursoNome = 'Engenharia Civil'
            }

            
            else if(cursosLista.indexOf(siglaCurso) == 4){
                objetoCursos.CursoNome = 'Arquitetura'
            }

        }else{
            objetoCursos.temCurso = false
        }
    return objetoCursos
    }


var validarCoeficiente = function(coeficente){
    objetoCoeficiente = {Indice:null, coeficencia: coeficente}
    if (coeficente >= 0 && coeficente <= 10){
            if(coeficente >= 0 && coeficente <= 3){
                objetoCoeficiente.Indice = 'Preocupante'
            }
            else if(coeficente > 3 && coeficente <= 5){
                objetoCoeficiente.Indice ='Necessita de melhoras'
            }
            else if(coeficente > 5 && coeficente <= 7){
                objetoCoeficiente.Indice ='Regular'
            }
            else if(coeficente > 7 && coeficente <= 9){
                objetoCoeficiente.Indice = 'Bom'
        
            }else{
                objetoCoeficiente.Indice = 'Excelente'
            }

    }
    else{
        objetoCoeficiente.Indice = 'coeficiente invalido'
    }
    return objetoCoeficiente   
}



var receberDados = require('readline-sync')

var receberNumeroMatricula = receberDados.question('Digite o numero da matricula: ').trim()
var receberNomeCompleto = receberDados.question('Digite o nome completo: ').toUpperCase()
var receberGeneroSigla = receberDados.question('Digite o genero(M ou F): ').toUpperCase()
var receberCurso = receberDados.question('Digite a sigla do curso: ').toUpperCase()
var receberCoeficienteRendimento = Number(receberDados.question('Digite o coeficiente de rendimento: '))


var matriculaValidada = validarMatricula(receberNumeroMatricula)
var cursoValidado = validarCurso(receberCurso)
var generoValidado = validarGenero(receberGeneroSigla)
var coeficienteValidado = validarCoeficiente(receberCoeficienteRendimento)


if (matriculaValidada && cursoValidado.temCurso && generoValidado.temGenero ){// se o genero, matricula  e curso forem validos
    console.log(`
    
    MATRICULA: ${receberNumeroMatricula}
    NOME:  ${receberNomeCompleto}
    GENERO: ${generoValidado.Genero}
    CURSO: ${cursoValidado.CursoNome}
    COEFICIENTE DE RENDIMENTO: ${coeficienteValidado.coeficencia}
    INDICE DE RENDIMENTO: ${coeficienteValidado.Indice}
    
    `)
}