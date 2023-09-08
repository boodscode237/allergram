import {
  createBrowserRouter,
  Route,
  Routes,
  Link,
  NavLink,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import CheckData from "./routes/CheckData/CheckData";
import History from "./routes/History/History";
// import Allergies from "./routes/Allergies/Allergies";
import RootLayout from "./routes/Navigation/RootLayout";
import SignInOutContainer from "./routes/Authentication/container";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/profile" element={<CheckData />} />
      <Route path="/history" element={<History />} />
      <Route path="/auth" element={<SignInOutContainer />} />
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
