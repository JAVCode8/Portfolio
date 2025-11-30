import { ExperienceCard } from "./ExperienceCard";

export function Experience() {

  const data = [
    {
      id: 1, year: 2025, place: 'University of Mindanao',
      text: `Lorem, ipsum dolor s it amet consectetur adipisicing elitIste s
             aepe nam nobis exercitationem ex dolore ut id providenilique`
    }, {
      id: 2, year: 2025, place: 'University of Mindanao',
      text: `Lorem, ipsum dolor s it amet consectetur adipisicing elitIste s
             aepe nam nobis exercitationem ex dolore ut id providenilique`
    }, {
      id: 3, year: 2025, place: 'University of Mindanao',
      text: `Lorem, ipsum dolor s it amet consectetur adipisicing elitIste s
             aepe nam nobis exercitationem ex dolore ut id providenilique`
    }, {
      id: 4, year: 2025, place: 'University of Mindanao',
      text: `Lorem, ipsum dolor s it amet consectetur adipisicing elitIste s
             aepe nam nobis exercitationem ex dolore ut id providenilique`
    }, {
      id: 5, year: 2025,place: 'University of Mindanao',
      text: `Lorem, ipsum dolor s it amet consectetur adipisicing elitIste s
             aepe nam nobis exercitationem ex dolore ut id providenilique`
    }, {
      id: 6, year: 2025, place: 'University of Mindanao',
      text: `Lorem, ipsum dolor s it amet consectetur adipisicing elitIste s
             aepe nam nobis exercitationem ex dolore ut id providenilique`
    }
  ];

  return (
    <div className="max-w-[1500px] m-0 mx-auto">
      <h1 className='text-[50px] font-bold text-center py-13'>Experience</h1>
      <div className="grid grid-cols-2 gap-x-4 justify-center items-center">
        {data.map((item) => { 
          return(
            <ExperienceCard key={item.id}  items={item}/> 
          );
        })}
      </div>
    </div>
  );
}