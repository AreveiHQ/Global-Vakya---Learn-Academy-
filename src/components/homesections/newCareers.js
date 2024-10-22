import React from 'react'
import { Link} from 'react-router-dom';
export default function NewCareers() {

        const languages=[
          {
            name:'dutch',
            imagename:'Dutch.svg',
            title:"Dutch (Netherlands)",
            description:"Dutch is a West Germanic language, spoken by about 25 million people as a first language.",
          },
          {
            name:'spanish',
            imagename:'spanish.png',
            title:"Spanish (Spain)",
            description:"Spanish is the world's second-most spoken native language the world's fourth-most spoken language",
          },
          {
            name:'english',
            imagename:'england.svg',
            title:"English (England)",
            description:"English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England",
          },
          {
            name:'japanese',
            imagename:'japan.svg',
            title:"Japanese (Japan)",
            description:"Japanese is the principal language of the Japonic language family spoken by the Japanese people. It has around 120 million speakers, primarily in Japan, .",
          },
          {
            name:'chinese',
            imagename:'chineese.svg',
            title:"Chinese (China)",
            description:"Chinese is a group of languages spoken by the Han Chinese majority and many minority ethnic groups in China, and is part of the Sino-Tibetan language family",
          },
          {
            name:'french',
            imagename:'french.svg',
            title:"French (France)",
            description:"French, often referred to as the language of love, is spoken by over 275 million people worldwide across five continents.",
          },
        ]
  return (
    
      <section className="container space-y-6 px-6 sm:px-0 font-Roboto">
        <h3 className=' text-[clamp(1.6rem,2.3vw,2.5rem)] font-semibold font-RobotoSlab'>New Language, New Career</h3>
        <p className='text-xl'>Choose The Right Foreign Language</p>
        <div className="w-full  overflow-x-scroll ">
        {/* <div className="flex gap-5  mx-auto w-min">
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" />                
                </div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md  ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMqdiY57vdT8nZgKITRkhP5uMnq-fNle33aA&s" alt="" />                
                </div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zS2xtkqCWnBYJwt0VgD5aVrrw7jkATAZAQ&s" alt="" /></div>
                <div className=" w-[clamp(13rem,14vw,15rem)] h-[clamp(13rem,14vw,15rem)] bg-cover overflow-hidden rounded-md"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rN09OShlEvLy26EJ9cuRDSNrLUKUH3RT1Q&s" alt="" /></div>
        </div> */}

<div className=" flex justify-center items-center text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {languages.map((lang, i) => (
          <div key={i} className="flex items-center p-4 bg-white rounded-lg relative group scale-100 hover:scale-105 transition-all " >
                 <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-[opacity] duration-300 w-full h-full bg-[#2c496499]  flex space-x-4 z-2 text-white flex-col gap-2 justify-center items-center " >
                 <Link to={`/learn/${lang.name}`}  className='px-4 py-2 rounded-md  border-2 border-white text-white font-semibold h-min w-max '>Read More</Link>
                        </div>
            <div className=" h-auto rounded-full bg-gray-200 text-gray-800">
              <img src={`/svg/${lang.imagename}`} alt="" className='max-w-[84px] rounded-md'  />
            </div>
            <div className="ml-4">
              <h2 className="text-lg font-semibold">{lang.title}</h2>
              <p className=' line-clamp-2'>{lang.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
      </section>

  )
}
