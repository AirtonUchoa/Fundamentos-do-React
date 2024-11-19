import SonComponent from "./SonComponent";
// ^ É importado o Componente Filho ao Componente Pai.

const FatherComponent = () =>{
    return (
        <div>
            <h2>Eu sou o Componente Pai.</h2>
            <SonComponent/>
            {/* ^ É chamado o componente filho ao código do componente pai. */}
        </div>
    );
};

export default FatherComponent;
