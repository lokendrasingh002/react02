const app = ()=>{
 return (
    <div className="bg-blue-500 text-white text-center flex ">
      <div className=" h-screen w-[40%] bg-black">
        <nav className="text-white font-semibold text-[30px] p-4 ">PROTOFILO.</nav>
     <div className=" text-[35px] ml-[18%]  flex flex-col items-center mt-[18%] z-10 absolute">
     <h1 className="text-white font-semibold pr-28 leading-3">MY NAME IS</h1>
     <div className="pl-6"><h2 className="font-bold ml-[60px] text-[50px] pl-2">  ABDULRAHMAN</h2></div>
     <button className="text-[24px] mr-4 font-bold bg-yellow-400 px-8 py-2">I'M A UI DEVELOPER</button>
     </div>
      </div>
      <div className=" h-screen w-[60%] bg-zinc-900 ">
        <nav className="text-white bg-#6B6B6B flex justify-center gap-4 p-4 font-semibold">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">WORKS</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </nav>
        <div className="h w-full bg-white overflow-hidden">
          <img className="h-full w-full" src="https://i0.wp.com/mrleica.com/wp-content/uploads/2018/08/39699055175_5876c32612_b1.jpg?fit=640%2C431&ssl=1" alt="" />
        </div>
      </div>
    </div>
  );
}
export default app
