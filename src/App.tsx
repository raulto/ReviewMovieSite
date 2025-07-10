import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css'
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <header><Link to={'/'}><h1>MexiFlex</h1></Link></header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails />}></Route>
        </Routes>
      </main>

    </BrowserRouter>

  )
}

export default App
