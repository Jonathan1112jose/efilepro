import React, { createContext, useContext, useState, useEffect } from "react";
import { useMenuDataContext } from "../auth/MenuDataProvider";
import { useModuleDataContext } from "../auth/ModuleProvider";

import { useBitacora } from "./BitacoraProvider.js";
import { useAuth } from "./AuthProvider.js";

const { saveData } = require("./ModuleApi.js");
const ToolsContext = createContext();

export const ToolsProvider = ({ children }) => {
  const { actions } = useMenuDataContext();
  const { moduleData } = useModuleDataContext();
  const { logActivity } = useBitacora();
  const auth = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState("list");
  const [formData, setFormData] = useState({});

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const actionsMap = {
    alertAction: () => console.log("Alerta de sistema"),
    messageAction: () => console.log("Tienes nuevos mensajes"),
    activityAction: () => console.log("Actividad programada"),
    toolAction: () => console.log("Herramienta disponible"),
    userAction: () => console.log("Usuario activo"),
    searchAction: () => console.log("Buscar algo"),
    cloudAction: () => {
      saveData(moduleData.id, formData);
      setCurrentView("vistas");
    },
    settingsAction: () => console.log("Configuraciones"),
    visibilityAction: () => {
      //no tocar
      console.log("Visibilidad");
    },
    viewListAction: () => {
      setCurrentView("list");
      //listas
      console.log("Ver lista");
    },
    viewModuleAction: () => {
      setCurrentView("cards");
      //tarjetas
      console.log("ver card's");
    },
    newAction: () => {
      setCurrentView("formNew");
      console.log("Agregar nuevo elemento");
    },
    archiveAction: () => console.log("Archivar elemento"),
    duplicateAction: () => console.log("Duplicar elemento"),
    addPropertiesAction: () => console.log("Agregar propiedades"),
  };

  const handleActionClick = (actionIdentifier) => {
    const actionFunction = actionsMap[actionIdentifier];
    if (actionFunction) {
      logActivity({
        userName: auth.user.username,
        date: new Date().toLocaleString(),
        action: actionIdentifier,
        path: window.location.pathname,
        description: actionIdentifier,
      });
      actionFunction();
    } else {
      console.error(
        `Acción no encontrada para identifier: ${actionIdentifier}`
      );
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    setCurrentView("vistas");
  }, [moduleData]);

  return (
    <ToolsContext.Provider
      value={{
        actions,
        searchQuery,
        currentView,
        formData,
        setCurrentView,
        handleActionClick,
        handleSearchChange,
        handleFormDataChange,
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};

export const useToolsContext = () => useContext(ToolsContext);
