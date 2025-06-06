import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import Header  from './components/Header'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
