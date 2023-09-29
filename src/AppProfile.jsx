//import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile"; //자동으로 import 됨.

function AppProfile() {
    const name = 'Chris';
    const list = ['우유', '딸기', '바나나', '요거트'];
    return (
        <>
            <Profile></Profile>
            <Profile></Profile>
            <Profile></Profile>
        </>
    );
}

export default AppProfile;
