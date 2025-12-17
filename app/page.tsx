import {GetProducts} from './components/GetProducts'

// nextjs project
// create a server side component - static data that doesn't change / user doesn't interact with
// client side component - user interactivitiy 
const Home = () => {
  return (
    <>
      <GetProducts />

    </>
  )
}

export default Home