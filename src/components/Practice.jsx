import { Link } from 'react-router-dom'

export function Practice() {
  return(
    <>
      <div className="flex mx-auto m-0 items-center justify-between max-w-[1500px] mar">
        <div className="text-black-400 text-[40px]">Shenani</div>
        <div className="">
          <ul className='flex gap-10 '>
            <li><Link to="/">About me</Link></li>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/">Project</Link></li>
            <li><Link to="/">Experience</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
        <div className="">
          <ul className='flex gap-2'>
            <li>
              <Link><img className='w-7' src='images/facebook.svg'/></Link>
            </li>
            <li>
              <Link><img className='w-7' src='images/instagram.svg'/></Link>
            </li>
            <li>
              <Link><img className='w-7' src='images/linkedin.png'/></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}