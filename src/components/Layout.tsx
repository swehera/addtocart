"use client";
import { persistor, store } from "@/app/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Layout;
