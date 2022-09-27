function hello() {
    document.getElementById("text").classList.add("away");
    document.getElementById("text").classList.remove("up");
    document.getElementById("pages").classList.add("up");
    document.querySelector("footer").style.display = "flex";

}

const Text = () => {

    return (

        <div id="text" className="flex w-full h-screen z-40 absolute top-full items-center justify-center">
            <h1 className="title 2xl:text-9xl xl:text-9xl lg:text-9xl md:text-6xl sm:text-4xl text-3xl underline"><a href="mailto:contact@trofix.cf">contact@trofix.cf</a></h1>
            <div className="arrow">
            <button onClick={hello} className="relative text-white no-underline text-5xl p-6">
            <a>▼</a>
            </button>
        </div>
        </div>

    )

}

export default Text;