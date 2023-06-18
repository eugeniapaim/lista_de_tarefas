$(document).ready(function() {
    const tarefa = []
    $('form').on('submit', function(e){
        e.preventDefault();

        const inputTarefa = $('#tarefa').val();
        const NovaTarefa = $(`<li id="TarefaAdicionada"></li>`);

        $(`<li>${inputTarefa}</li>`).appendTo(NovaTarefa);
        $(NovaTarefa).hide();
        $(NovaTarefa).appendTo('ul'); //inserir nova tarefa na lista não ordenada
        $(NovaTarefa).fadeIn(1000);
        $('#tarefa').val('');
        $('#texto-exemplo').remove();
        
        verifica(); // mover a chamada da função para depois de adicionar a tarefa ao array
    
    function verifica() {
        if (tarefa.includes(inputTarefa)){
            alert('Essa tarefa já foi incluída na sua lista');
            NovaTarefa.remove();
        } else {
            tarefa.push(inputTarefa);
            NovaTarefa.on('click', function() {
                $(this).toggleClass('riscado');
            });
        }
    }
    })
    $('#TarefaAdiciona').click(function(){
        $(this).toggleClass('riscado'); 
    })/* o toggleClass adiciona a classe caso ela não exista e remove caso ela exista. Isso resulta no comportamento adicionado no CSS ao clicar na tarefa e remove o mesmo ao clicar novamente. E o this se refere ao elemento clicado;
    */
})
