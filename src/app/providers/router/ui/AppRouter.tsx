import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { useCallback, Suspense, memo } from 'react';
import { Pageloader } from 'widgets/Pageloader/Pageloader';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<Pageloader />}>{route.element}</Suspense>
        );
        return <Route key={route.path} path={route.path} element={element} />;
    }, []);
    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
export default memo(AppRouter);
