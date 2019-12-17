// import React, {Component,useState}from 'react';
// import {Route} from 'react-router-dom'
// import ListaContatos from './Components/ListaContatos'
// import FormContato from './Components/formContato'
// import './App.css';
// import { firebaseDatabase } from './utils/firebaseUtils';
// console.log(firebaseDatabase)

import { withRouter} from "react-router-dom";
import React, { useState, Component } from 'react';
import Routes from './routes';
import logo from './images/logo-header.png';


const App = ({ history }) => {
  // const route = () => <Routes />

  return (
    
    <div> 
      <img src={logo} alt="" style={{width:250}}></img>
      <Routes />
    </div>

  )
}

export default withRouter(App);

// function Example() {
//   // Declare uma nova variável de state, a qual chamaremos de "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
      
//       </button>
//     </div>
  
//   );
// }

// export default Example
// function App() {
//   // firebaseDatabase.firebase.collection("breakfast")

//   // firebaseDatabase.collection("breakfast").get().then(console.log)
  
//   firebaseDatabase.collection('breakfast').doc('0')
//   .get().then((doc => {
//     console.log(doc.data());
//   }));

//   return (
//     <div className="App">
//       <h1> Contatos</h1>
//       <ListaContatos/>
//     </div>
//   );
// }

// export default App;

// class App extends Component {
//   state ={
//     contatos: [
//       {
//         "nome": "Leticia",
//         "idade": 25
//       },
//       {
//         "nome": "Taiyang",
//         "idade": 29
//       }
//     ]
//   }

//   removeContato = (contato) => {
//     this.setState((currentState) =>({
//       contatos: currentState.contatos.filter((c) =>{
//         return c.nome !== contato.nome
//       })
//     }))
//   }
//   render(){
//     return (
//       <div>
//         <h1> Contatos</h1>
//         <Route exact path='/' render={() =>(
//           <ListaContatos 
//             contatos={this.state.contatos}
//             onDeleteContato={this.removeContato}
//           />
//         )} />
//         <Route path='/create' render={({history})=>(
//           <FormContato
//             onCreateContato={(contato) => {
//               this.onCreateContato(contato)
//               history.push('/')
//           }}
//           />
//         )} />
        
        
//       </div>
//     );
//   }
// }

// export default App;
 



// ex utilização Aphrodite
// import { StyleSheet, css } from 'aphrodite'
// const styles = StyleSheet.create({
//   title: { ... }
// })
// const Heading = ({ children }) => (
//   <h1 className={css(styles.heading)}>{ children }</h1>
//)
//https://medium.com/tableless/uma-linguagem-de-estilos-unificada-1e5976fa383e
// import { StyleSheetServer } from 'aphrodite';
// const { html, css } = StyleSheetServer.renderStatic(() => {
//   return ReactDOMServer.renderToString(<App/>);
// });

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>


//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Café da Manhã</Link>
//             </li>
//             <li>
//               <Link to="/about">Hamburgueria</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Breakfast() {
//   return <h2>Café da manhã</h2>;
// }

// function Burger() {
//   return <h2>Hamburgueria</h2>;
// }

