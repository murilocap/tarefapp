import './App.css';
import Panel from './components/Panel';
import Main from './components/Main';
import User from './components/User';
import Lists from './components/Lists';
import Actions from './components/Actions';
import Title from './components/Title';
import Tasks from './components/Tasks';

function App() {
    return (
        <div className='App'>
            <Panel>
                <User />
                <Lists />
                <Actions />
            </Panel>
            <Main>
                <Title />
                <Tasks />
            </Main>
        </div>
    );
}

export default App;
