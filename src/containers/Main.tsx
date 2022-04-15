import React from "react";
import { Modal } from "../misc/Modal";
import { Navbar } from "../components/Navbar";

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <Modal />
            <Navbar />
        </React.Fragment>
    );
};



