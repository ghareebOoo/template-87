import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-white mt-28 py-16">
      <h2 className="uppercase font-bold text-2xl text-slate-950 text-center">Contact section</h2>
      <div className="flex items-center justify-center mt-3">
        <div className="bg-slate-950 w-16 h-1"></div>
        <i className="fa-solid fa-star text-slate-950 mx-1"></i>
        <div className="bg-slate-950 w-16 h-1"></div>
      </div>
      <form className="w-[80%] m-auto mt-10">
        <div className="relative mb-8">
          <label
            className={`text-gray-500 absolute left-0 transition-all duration-1000 ${
              name ? "top-0" : "top-1/2 opacity-0"
            }`}
            htmlFor="name"
          >
            userName:
          </label>
          <input
            id="name"
            className="mt-5 w-full border-b-2 p-3 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="userName"
          />
        </div>
        <div className="relative mb-4">
          <label
            className={` text-gray-500 absolute left-0 transform transition-all duration-1000 ${
              age ? "top-0" : "top-1/2 opacity-0"
            }`}
            htmlFor="number"
          >
            userAge:
          </label>
          <input
            id="number"
            className=" mt-5 w-full border-b-2 p-3 outline-none"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="userAge"
          />
        </div>

        <div className="relative mb-4">
          <label
            className={`text-gray-500 absolute left-0 transform transition-all duration-1000 ${
              email ? "top-0" : "top-1/2 opacity-0"
            }`}
            htmlFor="email"
          >
            userEmail:
          </label>
          <input
            id="email"
            className="mt-5 w-full border-b-2 p-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="userEmail"
          />
        </div>

        <div className="relative mb-4">
          <label
            className={`text-gray-500 absolute left-0 transition-all duration-1000 ${
              password ? "top-0" : "top-1/2 opacity-0"
            }`}
            htmlFor="password"
          >
            userPassword:
          </label>
          <input
            id="password"
            className="mt-5 w-full border-b-2 p-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="userPassword"
          />
        </div>

        <button className="bg-green-700 p-3 rounded-md text-white">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
