import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <div className="container mx-auto flex justify-between py-4">
      <Link to={'/'}>
        <h1 className="font-bold">.hazmiapp</h1>
      </Link>
      <nav>
        <Link to={'/'}>home</Link>
        <Link className="pl-8" to={'/about'}>about</Link>
        <Link className="pl-8" to={'/blog'}>blog</Link>
        <Link className="pl-8" to={'/contact'}>contact</Link>
      </nav>
    </div>
  )
}

export default Navigation
