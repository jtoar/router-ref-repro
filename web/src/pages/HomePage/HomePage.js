import { Link, routes, useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const params = useParams()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>

      <p>
        Find me in
        <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>

      <p>
        My default route is named
        <code>home</code>, link to me with `<Link to={routes.home()}>Home</Link>
        `
      </p>

      <p>
        {JSON.stringify(params)}
      </p>
    </>
  )
}

export default HomePage
