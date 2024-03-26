import { AppRouter } from './app/app-router/AppRouter.tsx'
import { BrowserRouter } from 'react-router-dom'

export const App = () => (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
)
