import React, { Suspense } from 'react';
import './styles/index.scss';
import AppRouter from './router/ui/AppRouter';

function App() {
    return (
        <div className="app">
            <Suspense fallback="">
                <AppRouter />
            </Suspense>
        </div>
    );
}

export default App;
