export function ExperienceCard({items}) {
  return (
    <>
      <div className='flex max-w-[800px] px-20 justify-center items-center'>
        <div className='profile2025Experience'>{items.year}</div>
        <div className='p-4'>
          <span className='text-[25px] font-bold'>{items.place}</span>
          <p className='text-[#A2A2A2] text-[18px]'>{items.text}
          </p>
        </div>
      </div>
    </>
  );
}