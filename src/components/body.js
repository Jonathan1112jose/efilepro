import React from "react";
import { useToolsContext } from "../auth/ToolsProvider";
import FormNew from "./FormNew";
import Vistas from "./Vistas";

export default function Body() {
  const { currentView } = useToolsContext();

  return <div>{currentView === "formNew" ? <FormNew /> : <Vistas />}</div>;
}
