import React, { useState, useEffect } from "react";
import { useToolsContext } from "../auth/ToolsProvider";
import FormNew from "./FormNew";
import Vistas from "./Vistas";
import { useModuleDataContext } from "../auth/ModuleProvider";

const { getData } = require("../auth/ModuleApi");

const Body = () => {
  const { currentView, handleRecordSelect } = useToolsContext();
  const { moduleData } = useModuleDataContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(moduleData.id); // Llamar a la función getData para obtener los datos
        setData(result); // Actualizar el estado con los datos obtenidos
      } catch (error) {
        console.error("Error fetching data:", error);
        // Manejar errores según sea necesario
      }
    };

    fetchData(); // Llamar a la función fetchData al montar el componente o cuando currentView cambie
  }, [currentView]);

  return (
    <div>
      {currentView === "formNew" ? (
        <FormNew />
      ) : (
        <Vistas
          viewType={currentView}
          data={data}
          onRecordSelect={handleRecordSelect}
        />
      )}
    </div>
  );
};

export default Body;
