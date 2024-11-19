import FirstComponent from './components/Firstcomponent' 
// ^ Comando para importar o componente específico para o React.
import './app.css'

export function App() {

  return (
    <>
      <div>
        <FirstComponent/>
        {/* Chamando o Componente. */}
        <h1>{2+2}</h1>
        {/* Template Expressions ^, utilizado entre chaves para execução de javascript de maneira simples no código. Somar, Multiplicar, chamar uma função, etc. */}
      </div>
    </>
  );
};
