import image1 from "../../imgs/port1.png"
import image2 from "../../imgs/port2.png"
import image3 from "../../imgs/port3.png"

function Portfolio() {
  return (
    <>
    <div className="bg-white mt-28 py-16">
    <h2 className="uppercase font-bold text-2xl text-slate-950 text-center">Portifolio Component</h2>
        <div className="flex items-center justify-center mt-3">
            <div className="bg-slate-950 w-16 h-1"></div>
            <i className="fa-solid fa-star text-slate-950 mx-1"></i>
            <div className="bg-slate-950 w-16 h-1"></div>
        </div>
        <div className="mt-10 flex justify-center items-center gap-5 flex-wrap p-5">
            <div className="w-[330px] relative overflow-hidden rounded-md group">
                <img className="w-100" src={image1} alt="" />
                <div className="absolute bg-green-600 top-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-1000 group-hover:opacity-85">
                <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
            </div>
            <div className="w-[330px] relative overflow-hidden rounded-md group">
                <img className="w-100" src={image2} alt="" />
                <div className="absolute bg-green-600 top-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-1000 group-hover:opacity-85">
                <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
            </div>
            <div className="w-[330px] relative overflow-hidden rounded-md group">
                <img className="w-100" src={image3} alt="" />
                <div className="absolute bg-green-600 top-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-1000 group-hover:opacity-85">
                <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
            </div>
            <div className="w-[330px] relative overflow-hidden rounded-md group">
                <img className="w-100" src={image1} alt="" />
                <div className="absolute bg-green-600 top-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-1000 group-hover:opacity-85">
                <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
            </div>
            <div className="w-[330px] relative overflow-hidden rounded-md group">
                <img className="w-100" src={image2} alt="" />
                <div className="absolute bg-green-600 top-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-1000 group-hover:opacity-85">
                <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
            </div>
            <div className="w-[330px] relative overflow-hidden rounded-md group">
                <img className="w-100" src={image3} alt="" />
                <div className="absolute bg-green-600 top-0 w-full h-full flex justify-center items-center opacity-0 transition-all duration-1000 group-hover:opacity-85">
                    <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio