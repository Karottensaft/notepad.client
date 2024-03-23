import { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/main/MainPage.tsx'

export const AppRouter = memo(() => (
    <Routes>
        <Route
            path={'*'}
            element={<MainPage/>}
        />
    </Routes>
))