
function About() {
  return (
    <div>
        <div className="bg-green-700 mt-28 py-16">
        <h2 className="uppercase font-bold text-2xl text-white text-center">About Component</h2>
            <div className="flex items-center justify-center mt-3">
                <div className="bg-white w-16 h-1"></div>
                <i className="fa-solid fa-star text-white mx-1"></i>
                <div className="bg-white w-16 h-1"></div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-5 px-10 text-white">
                <p>
                    Freelancer is a free bootstrap theme created by Route. 
                    The download includes the complete source files including HTML, CSS, 
                    and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
                <p>
                    Freelancer is a free bootstrap theme created by Route. 
                    The download includes the complete source files including HTML, CSS, 
                    and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About