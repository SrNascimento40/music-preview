import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ListTrack from '../pages/ListTrack'
import Login from '../pages/Login'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listtrack" element={<ListTrack />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}