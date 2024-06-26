import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PAGE_PATH } from "@utils/constants/common.constants";
import { useAppContext } from "@utils/providers/AppProvider";

const PrivateLayout = () => {
    const { userName, userId } = useAppContext();

    if (!userName || !userId) {
        return <Navigate to={PAGE_PATH.login} replace />;
    }

    return <Outlet />;
};

export default PrivateLayout;
