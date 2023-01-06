import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "@src/pages/Search/SearchPage";
import ShowDetails from "@src/pages/ShowDetails/ShowDetails";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/show/:id" element={<ShowDetails/>} />
            <Route path="/" element={<SearchPage/>} />
            <Route path="*" element={<Navigate replace to="/" />}/>
        </Routes>
    );
};

export default AppRouter;