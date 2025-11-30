import { Link } from 'react-router-dom'

export function Contacts2() {
  return (
    <div className="bg-[#9e9d9b] mt-15 shadow-ls">
      <h1 className='text-[50px] font-bold text-center pt-10 pb-5 text-white'>Let’s create something great – reach me on</h1>

      <div className='max-w-[1500px] m-0 mx-auto'>
        <div>
          <ul className='flex gap-10 justify-center items-center p-5'>
            <li>
              <Link to="/"><img src='images/facebook.svg' width={30} /></Link>
            </li>
            <li>
              <Link to="/"><img src='images/instagram.svg' width={30} /></Link>
            </li>
            <li>
              <Link to="/"><img src='images/linkedin.png' width={30} /></Link>
            </li>
            <li>
              <Link to="/"><img src='images/gmail.png' width={30} /></Link>
            </li>
          </ul>
        </div>

        <h1 className='text-[50px] font-bold text-center p-4 text-white'>John Aldrin Villa</h1>
        
        <div className=''>
          <ul className='flex gap-10 justify-center items-center text-white font-semibold pt-5 pb-15'>
            <li className='hover:text-black'><Link to="/">About me</Link></li>
            <li className='hover:text-black'><Link to="/">Skills</Link></li>
            <li className='hover:text-black'><Link to="/">Projects</Link></li>
            <li className='hover:text-black'><Link to="/">Experience</Link></li>
            <li className='hover:text-black'><Link to="/">Contact</Link></li>
          </ul>
        </div>
      </div>

    </div>
  );
}