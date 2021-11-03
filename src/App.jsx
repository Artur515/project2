import React from "react";
import CustomLayout from "./layout/CustomLayout";
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";


const App = () => {

    return (
        <>
            <CustomLayout>
                <Header/>
                <AppRouter/>
            </CustomLayout>
        </>
    );
}

export default App;
