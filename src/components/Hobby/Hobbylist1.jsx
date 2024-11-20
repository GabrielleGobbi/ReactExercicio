/** 2. Hobby
Crie outro componente chamado HobbyList, este componente deve receber a prop hobbies (uma lista de hobbies do usuário), renderize uma lista (ul) que exiba cada hobby como um item (li). */
function HobbyLista({hobbies}){
    return(
        <div>    
        <h4>Lista de Hobbies do Usuario</h4>
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
        </div>

    )
}
export default HobbyLista;