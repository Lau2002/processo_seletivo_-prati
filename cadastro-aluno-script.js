function cadastrar(){
    let txtnome = document.getElementById('txtnome');
    let txtsobre = document.getElementById('txtsobre');
    let txttel = document.getElementById('txttel');
    let txtnasc = document.getElementById('txtnasc');
    let txtnota = document.getElementById('txtnota');
    let res = document.getElementById('res');
    
    let nome = txtnome.value;
    let sobre = txtsobre.value;
    let tel = txttel.value; 
    let nasceua = txtnasc.value;
    let nota = txtnota.value;

    if(nome.length == 0 || sobre.length == 0 || tel.length == 0 || nasceua.length == 0 || nota.length == 0 )
    {
        alert('É neccessário preencher todos os campos. Tente Novamente.')
    }
    else{

        let nascbr = nasceua.split('-').reverse().join('/');
        
        alert('Aluno cadastrado com sucesso!') ;    
        res.innerHTML+= `Nome: ${nome} &nbsp Sobrenome: ${sobre} &nbsp Telefone:${tel} &nbsp Data de Nascimento:${nascbr} &nbsp Nota Final do Curso: ${Number(nota)} <br>`;
    }
  
}