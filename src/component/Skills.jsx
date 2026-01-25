import React from 'react';


const Skill = () => {

  const skills = [
    { name: 'HTML', percent: 90 },
    { name: 'CSS', percent: 85 },
    { name: 'JavaScript', percent: 80 },
    { name: 'React', percent: 75 },
    { name: 'Tailwind CSS', percent: 85 },
    { name: 'Git', percent: 70 },
  ];

  return (
    <div id='skills' className='dark:bg-black bg-white text-black dark:text-white'>
      <div className='max-w-7xl px-4 py-12 mx-auto'>
        <div >
          <h1 className='text-3xl lg:text-4xl font-bold text-center text-primary tracking-wider bg-white/5 shadow-2xl shadow-primary w-fit mx-auto'>Skills</h1>
        <div className='mt-3 w-[50px] lg:w-[80px] mx-auto h-[3px] rounded-2xl bg-primary'></div>
        </div>


        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12'>
          {skills.map((skill, index) => (
            <div
            key={index} className='flex flex-col'>
              <div className='flex text-[16px] md:text-[18px] lg:text-[20px] font-medium items-center justify-between mb-1 px-2'>
                <h1 className='font-medium'>{skill.name}</h1>
                <p>{skill.percent}%</p>
              </div>
              {/* <progress
                className="w-full h-3.5 rounded"
                value={skill.percent}
                max="100"
              ></progress> */}
              <div className='w-full h-3 md:h-3.5 bg-gray-50 rounded-full overflow-hidden'>
                <div className='h-full bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full'
                style={{width: `${skill.percent}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skill;
