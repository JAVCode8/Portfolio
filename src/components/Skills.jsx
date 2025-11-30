import { Link } from 'react-router-dom';

export function Skills() {
  return (
    <div className="relative h-300 border-gray-400 shadow-lg">

      <div className="bg-[#9e9d9b] h-90 mt-15 shadow-ls">
        <h1 className="text-center text-white font-bold text-[60px] pt-15">Skills</h1>
        <div className="flex flex-row max-w-[1500px] m-0 mx-auto justify-center gap-20 pt-5">

          <div className="bg-[#ffffff] shadow-lg rounded-3xl h-[800px] w-[440px]">
            <span className='block text-center pt-15 pb-8'>
              <img className='w-25 inline-block' src='images/backend.svg' />
            </span>
            <h1 className='text-[30px] font-semibold text-center m-0'>Hack-end Developer</h1>
            <p className="py-4 px-8 text-center text-gray-500 font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis repudiandae a
              ssumenda aut perspiciatis est, neque dolore, rerum, harum magnam vero quos. Expedita
              rem nobis cupiditate provident optio laborum sequi accusantium?
            </p>
            <span className="font-semibold text-center block p-5 text-[20px]">Languages:</span>
            <span className='text-gray-500 font-semibold text-[20px] block text-center py-5'>Java</span>
          </div>

          <div className="bg-[#ffffff] shadow-lg rounded-3xl h-[800px] w-[440px]">
            <span className='block text-center pt-15 pb-8'>
              <img className='w-25 inline-block' src='images/code.jpg' />
            </span>
            <h1 className='text-[30px] font-semibold text-center m-0'>Front-end Developer</h1>
            <p className='py-4 px-8 text-center text-gray-500 font-semibold'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis repudiandae a
              ssumenda aut perspiciatis est, neque dolore, rerum, harum magnam vero quos. Expedita
              rem nobis cupiditate provident optio laborum sequi accusantium?
            </p>
            <span className="font-semibold text-center block p-5 text-[20px]">Technologies Stack:</span>
            <span className='text-gray-500 font-semibold text-[20px] block text-center py-5'>
              Javascript,&nbsp;HTML,&nbsp;CSS
            </span>
          </div>

        </div>
      </div>

      <Link to="/">
        <button className="btn">Here is my CV</button>
      </Link>
    </div>
  );
}