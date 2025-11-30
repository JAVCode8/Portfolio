export function Achievements() {
  return (
    <div className='h-[850px] shadow-lg'>
      <div className="relative bg-[#9e9d9b] mt-15">
        <div className=' max-w-[1500px] m-0 mx-auto'>
          <h1 className='text-[50px] font-bold text-center pt-13 pb-35 text-white'>Achievements</h1>
        </div>
        <div className="absolute top-40 left-1/2 -translate-x-1/2 flex flex-row gap-15 m-0 mx-auto ">
          <div className='w-90 h-150 bg-[#8ae0ff] rounded-2xl shadow-lg'></div>
          <div className='w-90 h-150 bg-[#8ae0ff] rounded-2xl shadow-lg'></div>
          <div className='w-90 h-150 bg-[#8ae0ff] rounded-2xl shadow-lg'></div>
        </div>
      </div>
    </div>
  );
}