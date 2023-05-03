import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SearchPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;