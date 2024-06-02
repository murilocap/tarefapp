import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Title from './components/Title';
import Tasks from './components/Tasks';

function App() {
    return (
        <>
            <Sidebar />
            <Main>
                <Title />
                <Tasks />
            </Main>
        </>
    );
}

export default App;
