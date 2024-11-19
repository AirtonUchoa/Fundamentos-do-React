import FirstComponent from './components/Firstcomponent' 
// ^ Comando para importar o componente específico para o React.

import FatherComponent from './components/Sistema de Hierarquia/FatherComponent.jsx';

import './app.css'

export function App() {

  return (
    <>
      <div>
        <h1>Adicionando Componentes ao código:</h1>
        <FirstComponent/>
        
        {/* ^ Chamando os Componente. */}

        <h1>Sistema de Hierarquia:</h1>
        <FatherComponent/>
        
        <h1>Template Strings:</h1>
        <h1>{2+2}</h1>
        {/* Template Expressions ^, utilizado entre chaves para execução de javascript de maneira simples no código. Somar, Multiplicar, chamar uma função, etc. */}
        
      </div>
    </>
  );
};
