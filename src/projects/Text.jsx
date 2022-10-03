function hello() {
    document.getElementById("text").classList.add("away");
    document.getElementById("text").classList.remove("up");
    document.getElementById("pages").classList.add("up");
    document.querySelector("footer").style.display = "flex";

}

const Text = () => {

    return (

        <div id="text" className="flex w-full h-screen z-40 absolute top-full content-center items-center justify-center">
                <div className="Projects">
                    <div className="Project">trofixweb<img className="2xl:w-[25rem] 2xl:h-60 xl:w-[25rem] xl:h-60 sm:w-[20rem] sm:h-52" src="/unknown.png"></img>
                    </div>
                    <div className="Project">Trofix Portfolio<img className="2xl:w-[25rem] 2xl:h-60 xl:w-[25rem] xl:h-60 sm:w-[20rem] sm:h-52" src="/unknown2.png"></img></div>
                </div>
            <div className="arrow 2xl:top-[70%] xl:top-[70%] lg:top-[70%] top-[80%]">
            <button onClick={hello} className="relative text-white no-underline text-5xl p-6">
            <a>▼</a>
            </button>
        </div>
        </div>

    )

}

export default Text;