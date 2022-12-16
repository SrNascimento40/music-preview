import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ListTrack from '../pages/ListTrack'

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listtrack" element={<ListTrack />} />
            </Routes>
        </BrowserRouter>
    )
}