
import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../../hooks/useAxiosFetch';

const Classes = () => {
  const[classes, setClasses]=useState([]);
  const[hoveredCard, setHoveredCard]= useState(null);
  const axiosFetch= useAxiosFetch();

  const handleHover = (index)=> {
    setHoveredCard(index);
  }
  
  useEffect(() => {
    axiosFetch.get('/classes').then(res => setClasses(res.data)).catch(err => console.log(err))
      }, []);

      console.log(classes)
  return (
    <div>
      <div className='mt-20 pt-3'>
        <h1 className='text-4xl font-bold text-center text-primary'>Classes</h1>
      </div>

      <div className='my-16 w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'> 
        {
          classes.map((cls, index)=> (
            <div
            onMouseLeave={() => handleHover(null)}
            key={index}
            className={`relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto ${cls.availableSeats < 1 ? 'bg-red-300' : 'bg-white'} dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer`}
            onMouseEnter={() => handleHover(index)
            }
            >
              <div className='relative h-48'>
                <div className={`absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ${hoveredCard==index ? "opacity-60" : ""}`}/>
                <img src={cls.image} alt="" className='object-cover w-full h-full' />

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Classes

/*

import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../../hooks/useAxiosFetch';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const axiosFetch = useAxiosFetch();

  const handleHover = (index) => {
    setHoveredCard(index);
  };

  useEffect(() => {
    axiosFetch
      .get('/classes')
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(classes);

  return (
    <div>
      <div className="mt-20 pt-3">
        <h1 className="text-4xl font-bold text-center text-primary">Classes</h1>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {classes.map((cls, index) => (
          <div key={cls._id} className="relative h-48" onMouseEnter={() => handleHover(index)} onMouseLeave={() => setHoveredCard(null)}>
            <img src={cls.image} alt={cls.title} className={`w-full h-full object-cover ${hoveredCard === index ? 'opacity-90' : 'opacity-100'}`} />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
              <h2 className="text-lg font-bold">{cls.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
*/