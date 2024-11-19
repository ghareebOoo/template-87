

function Social() {
  return (
    <>
    <div className="text-white bg-slate-950 flex flex-col md:flex-row md:justify-around py-20 px-10 gap-8">
        <div className="text-center">
            <h2 className="text-xl uppercase font-bold">Location</h2>
            <p className="mt-3 mb-3">2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
        </div>
        <div className="text-center">
            <h2 className="text-xl uppercase font-bold">Around the web</h2>
            <ul className="mt-3 flex items-center justify-center flex-wrap gap-3">
                <li><i className="rounded-[50%] border border-white border-1 p-2 fa-brands fa-facebook"></i></li>
                <li><i className="rounded-[50%] border border-white border-1 p-2 fa-brands fa-twitter"></i></li>
                <li><i className="rounded-[50%] border border-white border-1 p-2 fa-brands fa-instagram"></i></li>
                <li><i className="rounded-[50%] border border-white border-1 p-2 fa-solid fa-globe"></i></li>
            </ul>
        </div>
        <div className="text-center">
            <h2 className="text-xl uppercase font-bold">About freelancer</h2>
            <p className="mt-3 line-clamp-2">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    </>
  )
}

export default Social