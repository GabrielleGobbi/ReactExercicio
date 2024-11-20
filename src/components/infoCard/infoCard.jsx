/*Exercícios componentes 
1. Cartão de Informação
Crie um componente chamado InfoCard, um cartão de informação que possui as props title (título) e description (descrição). Chame esse componente no seu App para renderizá-lo.*/

function InfoCard({ title, description }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
  
  export default InfoCard;