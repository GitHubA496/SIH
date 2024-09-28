import './body.css';

export default function Body() {    
    return (
        <div className="body">
            <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
                <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Random Fun</h2>
                <p className="mb-12 text-lg text-gray-500">Here are a few of the awesome Facts about Plants.</p>
                <div className="w-full">
                    <div className="flex flex-col w-full mb-10 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                            <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Neem (Azadirachta indica)</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">The adaptable neem tree is one of the most commonly known herbs & well-known for its many uses and advantages. Neem leaves, bark, seeds, and oil are among the elements of the tree that have historically been utilized for cosmetic, medicinal, and agricultural uses.</p>
                        </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                            <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Ashwagandha (Withania somnifera)</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">For ages, Ayurvedic medicine has utilized the adaptogenic herb ashwagandha (Withania somnifera) in its traditional forms. It is regarded as a revitalizing plant and is well-known for its many health advantages.</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                            <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Brahmi (Bacopa monnieri)</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">Due to its possible cognitive and adaptogenic properties, brahmi, sometimes referred to as water hyssop or bacopa, is a traditional Ayurvedic plant that has been used for millennia</p>
                        </div>
                        </div>
                    </div>
                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                            <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Giloy (Tinospora cordifolia)</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">Giloy, sometimes called Guduchi or Tinospora cordifolia, is a traditional Ayurvedic herb that has been used for generations in Indian medicine. It is well-known for providing numerous health advantages.</p>
                        </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="relative h-full ml-0 md:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                            <div className="flex items-center -mt-1">
                            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Haritaki (Terminalia chebula)</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">A vital component of traditional Ayurvedic medicine, haritaki (also called Terminalia chebula) is one of the three fruits in the popular Ayurvedic recipe Triphala.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        
    
        </div>
    )
}