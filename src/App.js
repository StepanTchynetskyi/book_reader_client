import './App.css';

import {AuthProvider} from "./navigation/AuthProvider";
import AuthStack from "./navigation/AuthStack";
function App() {
    return (
        <div className="App">
            <AuthProvider>
            <AuthStack/>
                </AuthProvider>
        </div>
    );
}

export default App;
