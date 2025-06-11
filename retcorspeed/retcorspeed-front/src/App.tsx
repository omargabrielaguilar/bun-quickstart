import "./index.css";
import UserCrud from "./components/UserCrud";

export function App() {
    return (
        <main className="min-h-screen bg-background text-foreground p-4">
            <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>
            <UserCrud />
        </main>
    );
}

export default App;
