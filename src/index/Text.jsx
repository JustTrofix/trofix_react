function hello() {
    document.getElementById("text").classList.add("away");
    document.getElementById("text").classList.remove("up");
    document.getElementById("ShortAbout").classList.add("up");
}

const Text = () => {

    return (

        <div id="text" className="flex w-full h-screen z-40 absolute top-full items-center justify-center">
            <h1 className="title 2xl:text-8xl xl:text-8xl lg:text-5xl md:text-5xl sm:text-5xl text-[2rem]">
            <a class="typewrite">
                <span class="wrap"></span>
            </a>
            </h1>
            <div className="arrow">
            <button onClick={hello} className="relative text-white no-underline text-5xl p-6">
            <a>▼</a>
            </button>
        </div>
        </div>

    )

}

export default Text;