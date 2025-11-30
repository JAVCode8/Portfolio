import { Link } from 'react-router-dom';

export function Contacts() {
  return (
    <div className='bg-[#9e9d9b] p-8 mt-20'>
      <div className='max-w-[1500px] m-0 mx-auto'>
        <h1 className='text-center text-white font-bold text-[45px] py-5'>Thinking about working with me?</h1>
        <p className='text-center text-white text-[26px] py-3 max-w-[1300px] m-0 mx-auto'>
          You can count on me to handle your project well.
          I enjoy working on exciting and challenging tasks.
          Let’s talk more about the details in a private chat.
        </p>
        <div className='text-center'>
          <Link to="/">
            <button className='btn2'> Contacts</button>
          </Link>
        </div>
      </div>
    </div>
  );
}