import './App.css';
import ColorProvider from "./context/ColorContext";
import ColorsComponent from "./components/ColorsComponent";
import ButtonComponent from "./components/ButtonComponent";

function App() {
    const colors = [
        'red',
        'green',
        'blue',
        'black',
        'orange'
    ]
    return (
        <ColorProvider>
            <div className="App">
                <ButtonComponent colors={colors} />
                <ColorsComponent />
            </div>
        </ColorProvider>
    );
}

export default App;