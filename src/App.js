//import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Chris';
    const list = ['우유', '딸기', '바나나', '요거트'];
    return (
        <>
            <h1 className='orange'>{`Helllo! ${name}`}</h1>
            <h2>Hello!</h2>
            <p>{name}</p>
            <ul>
                { list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <img style={{width: '200px', height: '200px'}}
                 src='https://images.unsplash.com/photo-1695755594813-14e57fab9a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
                 alt=''
            />
        </>
    );
}

export default App;
