import { RouterProvider } from "react-router-dom";
import "./../src/scss/App.scss";
import { router } from "./Router";

function App() {
  //   const handleClick = () => {
  //     const response = axios.get(
  //       "https://school-restaurant-api.azurewebsites.net/restaurant/65c60cd512ebb6ed53265ac4"
  //     );
  //     console.log(response);
  //   };

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <button onClick={handleClick}>Hämta</button> */}
    </>
  );
}

export default App;
