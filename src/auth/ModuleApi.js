const API_BASE_URL = "http://localhost:4000";

const moduleEndpointMap = {
  1: `/proyecto`,
  2: `/tipos_proyecto`,
  3: `/plantilla`,
  4: `/flujo_aprobacion`,
  5: `/alerta`,
  6: `/lote`,
  7: `/importar_archivo`,
  8: `/escaneo_directo`,
  9: `/aplicar_ocr`,
  10: `/gestion_documentos`,
  11: `/colaborador`,
  12: `/usuario`,
  13: `/configuracion`,
  14: `/bitacora`,
  15: `/documento`,
};

const saveData = async (moduleId, data) => {
  const endpoint = moduleEndpointMap[moduleId];

  if (!endpoint) {
    throw new Error(`No endpoint found for moduleId: ${moduleId}`);
  }

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, moduleId }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error saving data:", error);
    throw error;
  }
};

const getData = async (moduleId) => {
  const endpoint = moduleEndpointMap[moduleId];

  if (!endpoint) {
    throw new Error(`No endpoint found for moduleId: ${moduleId}`);
  }

  const url = `${API_BASE_URL}${endpoint}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const deleteData = async (moduleId, id) => {
  const endpoint = moduleEndpointMap[moduleId];

  if (!endpoint) {
    throw new Error(`No endpoint found for moduleId: ${moduleId}`);
  }

  const url = `${API_BASE_URL}${endpoint}/${id}`;

  try {
    const response = await fetch(url, {
      method: "PUT", // Use PUT for updating with partial data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ moduleId, id }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};

module.exports = {
  moduleEndpointMap,
  saveData,
  getData,
  deleteData,
};
