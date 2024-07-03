import React, { createContext, useContext, useState, useEffect } from "react";
import { useMenuDataContext } from "../auth/MenuDataProvider";
import { useModuleDataContext } from "../auth/ModuleProvider";

import { useBitacora } from "./BitacoraProvider.js";
import { useAuth } from "./AuthProvider.js";
const { saveData, deleteData, getData } = require("./ModuleApi.js");

const ToolsContext = createContext();

export const ToolsProvider = ({ children }) => {
  const { actions } = useMenuDataContext();
  const { moduleData } = useModuleDataContext();
  const { logActivity } = useBitacora();
  const auth = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentView, setCurrentView] = useState("list");
  const [formData, setFormData] = useState({});
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [actualizando, setActualizando] = useState(false);
  const [vistaData, setVistaData] = useState([]);

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const handleRecordSelect = (record) => {
    setSelectedRecord(record);
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
      console.log("new vitas");
    },
    viewListAction: () => {
      setCurrentView("list");
      console.log("Ver lista");
    },
    viewModuleAction: () => {
      setCurrentView("cards");
      console.log("ver card's");
    },
    newAction: () => {
      setCurrentView("formNew");
      console.log("Agregar nuevo elemento");
    },
    archiveAction: () => console.log("Archivar elemento"),
    duplicateAction: () => console.log("Duplicar elemento"),
    addPropertiesAction: () => console.log("Agregar propiedades"),
    deleteAction: async () => {
      try {
        await deleteData(moduleData.id, selectedRecord.id);
        setActualizando(true);
        setCurrentView("list");
      } catch (error) {
        console.error("Error deleting record:", error);
      }
    },
  };

  useEffect(() => {
    setCurrentView("vistas");
  }, [moduleData]);

  useEffect(() => {
    setSelectedRecord(null);
  }, [currentView, moduleData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await getData(moduleData.id);
        setVistaData(newData);
      } catch (error) {
        console.error("Error fetching updated data:", error);
      } finally {
        setActualizando(false);
      }
    };
    if (actualizando) {
      fetchData();
    }
  }, [actualizando, moduleData.id]);

  return (
    <ToolsContext.Provider
      value={{
        actions,
        searchQuery,
        currentView,
        formData,
        selectedRecord,
        setCurrentView,
        handleRecordSelect,
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
