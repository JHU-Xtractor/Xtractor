import React from "react";
import LogoLarge from "../components/LogoLarge";
import NotFound from "../components/NotFound";


const NotFoundPage = () => {

    return (
        <div style={{ overflow: "hidden", height: "100vh", width: "100vw" ,alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
        <LogoLarge />
        <NotFound />
        </div>
    );
}

export default NotFoundPage;