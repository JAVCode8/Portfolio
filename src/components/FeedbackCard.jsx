export function FeedbackCard({ data }) {
  return (
    <>
      <div className='grid max-w-[1300px] grid-col m-0 mx-auto p-10'>
        <div className='grid grid-cols-[1fr_2fr] gap-x-10 justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-40' src='images/user.png' />
            <span className='text-2xl font-semibold p-2'>{data.name}</span>
            <span className='text-2xl text-[#A2A2A2] p-[10x] font-semibold'>{data.position}</span>
          </div>

          <div className="flex justify-center items-center p-8 shadow rounded-2xl">
            <p className='text-2xl text-[#A2A2A2] p-3'>
              {data.text}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}