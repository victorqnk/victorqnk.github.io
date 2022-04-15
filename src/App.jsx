import { Routes, Route } from 'react-router-dom'
import Home from "./routes/home"
import Blog from "./routes/blog"
import Contact from "./routes/contact"
import Layout from './routes/layout'
import About from './routes/about'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
