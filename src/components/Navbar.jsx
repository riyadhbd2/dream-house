import logo from '../assets/images/logo/profile_logo.jpg'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center'>
      <div className='flex items-center justify-center gap-3 my-3'>
        <img className='w-16' src={logo} alt="" />
        <h1>Easir Arafat</h1>
      </div>
      <div>
        <ul className='flex gap-5'>
          <li>Home</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='flex gap-3'>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar