//import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'Chris';
    return (
        <>
            <h1 className='orange'>Hello!</h1>
            <h2>Hello!</h2>
            <p>{name}</p>
            <ul>
                <li>우유</li>
                <li>딸기</li>
                <li>바나나</li>
            </ul>
            <img style={{width: '200px', height: '200px'}}
                 src='https://images.unsplash.com/photo-1695755594813-14e57fab9a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
                 alt=''
            />
        </>
    );
}

export default App;
