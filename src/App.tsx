import { Dashboard } from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}