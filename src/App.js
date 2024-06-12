import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Title from './components/main/Title';
import Tasks from './components/main/Tasks';

function App() {
    return (
        <>
            <Sidebar />
            <Main>
                <Title />
                <Tasks />
            </Main>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<           script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </>
    );
}

export default App;
