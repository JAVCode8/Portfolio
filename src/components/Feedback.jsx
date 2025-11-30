import { FeedbackCard } from "./FeedBackCard";

export function Feedback() {

  const data = [
    {
      id: 1, name: 'Amor J.', position: 'Manager, Private Com.',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              blaitiis quisquam ad id quibusdam eius eusdfhsdfhm labore.
              Sa est quam quia saepe.`
    },
    {
      id: 2, name: 'Aljun J.', position: 'Manager, Private Com.',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              blaitiis quisquam ad id quibusdam eius eusdfhsdfhm labore.
              Sa est quam quia saepe.`
    },
    {
      id: 3, name: 'Fred K.', position: 'Manager, Private Com.',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              blaitiis quisquam ad id quibusdam eius eusdfhsdfhm labore.
              Sa est quam quia saepe.`
    },
    {
      id: 4, name: 'Amor J.', position: 'Manager, Private Com.',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              blaitiis quisquam ad id quibusdam eius eusdfhsdfhm labore.
              Sa est quam quia saepe.`

    }
  ];

  return (
    <div className='m-0 mx-auto'>
      <h1 className='text-[50px] font-bold text-center py-20 px-10'>Positive Feedback from my Clients</h1>
      {data.map((item) => {
        return (
          <FeedbackCard key={item.id} data={item} />
        );
      })}
    </div>
  );
}