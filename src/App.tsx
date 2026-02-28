import type { FC } from 'react';
import { Counter } from './components/Counter';
import './styles/App.css';

export const App: FC = () => {
    const a = '123';

    return (
        <main className="app">
            <h1>Vite + React444 + OXC {a}</h1>
            <Counter />
            <p className="hint">
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
        </main>
    );
};
