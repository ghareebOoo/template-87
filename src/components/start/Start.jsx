
import avatar from "../../imgs/avataaars.svg"
function Start() {
  return (
    <>
    <div className='bg-green-700 mt-24'>
        <img className='w-[200px] pt-5 m-auto' src={avatar} alt='' />
        <div className="mt-10 text-center">
            <h2 className="uppercase font-bold text-2xl text-white">Start Framework</h2>
            <div className="flex items-center justify-center mt-3">
                <div className="bg-white w-16 h-1"></div>
                <i className="fa-solid fa-star text-white mx-1"></i>
                <div className="bg-white w-16 h-1"></div>
            </div>
            <p className="text-white text-md mt-6 pb-10">Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
  )
}

export default Start