import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import User from './components/User';
import LineDivisor from './components/LineDivisor';
import Panel from './components/Panel';
import Title from './components/Title';
import Tasks from './components/Tasks';

function App() {
    return (
        <>
            <Sidebar>
                <User />
                <LineDivisor />
                <Panel />
            </Sidebar>
            <Main>
                <Title />
                <Tasks />
            </Main>
        </>
    );
}

export default App;
