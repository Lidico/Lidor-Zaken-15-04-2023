import {Suspense} from 'react';
import {BrowserRouter, Routes as AppRoutes, Route} from 'react-router-dom';
import {GamePage, StartPage} from "../pages";

const Routes: React.FC = () => {
    return (
        <Suspense
            fallback={
                <div>
                    loading
                </div>
            }
        >
            <BrowserRouter>
                <AppRoutes>

                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/newGame" element={<GamePage/>}/>
                </AppRoutes>
            </BrowserRouter>

     </Suspense>
    );
};
export default Routes;