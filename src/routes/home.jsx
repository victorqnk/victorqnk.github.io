import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h1 className="text-2xl m-16 ml-0">
          <span className="text-white">Hello</span>, I'm Victor and I ️love building <span className="text-white">web based projects</span>.
        </h1>
        <section className="m-16">
          <p>I’m a <span className="text-red-400">full-stack developer</span> based in Mexico and I can do remote work anywhere in the world.</p>
          <br />
          <p>For frontend work, my goto framework is <span className="text-green-400">vue</span> but I’m also experienced working with <span className="text-sky-400">react</span>.</p>
          <br />
          <p>For backend work, I lean to the <span className="text-green-400">node</span> ecosystem in combination with <span className="text-sky-400">express</span> and mongodb.</p>
          <br />
          <p>I excel when planning complex systems from top to bottom: database, architecture, ideas and everything around it.</p>
        </section>
        {/* <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ldt1rxg6.json" background="transparent" speed="1" style={{ width: '400px', height: '400px' }} loop autoplay></lottie-player> */}
        <div className="flex justify-between">
          <p className='mt-4'>You can find some of my latest work here</p>
          <button className='bg-white rounded-xl px-12 py-4 mr-16'>Start here</button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_qgah66oi.json" background="transparent" speed="1" style={{ width: '400px', height: '400px' }} loop autoplay></lottie-player>
      </div>
    </div>
  )
}

export default Home
