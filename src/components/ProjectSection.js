import React from 'react';
import { data } from "./data.js";

const ProjectSection = () => {
    const project = data;
  
    return (
        <div className='w-full md:h-screen text-gray-900'>
           <div className='max-w-[1000px] mx-auto px-4 py-2 flex flex-col justify-center w-full h-full'>
                <div className='pb-4'>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <p className='text-4xl font-bold inline border-b-8 border-yellow-600 text-green-700'>
                        Projects :
                    </p>
                </div><br></br>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {project.map((item, index) => (
                        <div
                            key={index}
                            className="shadow-lg shadow-gray-800 group container rounded-md 
                                flex justify-center items-center mx-auto content-div"
                            style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover' }}
                        >
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <span className="text-2xl font-bold text-white">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <button
                                            className="rounded-lg px-1 py-2 m-2 bg-white text-orange-600 font-bold text-lg"
                                        >
                                            URL
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
