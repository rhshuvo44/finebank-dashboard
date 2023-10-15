import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/routes.jsx";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
