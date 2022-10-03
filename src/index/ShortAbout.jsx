function hello() {
    document.querySelector("footer").style.display = "flex";
    document.getElementById("ShortAbout").classList.add("away");
    document.getElementById("ShortAbout").classList.remove("up");
    document.getElementById("pages").classList.add("up");
}

const ShortAbout = () => {

    return (

        <div id="ShortAbout" className="flex w-full h-screen z-40 absolute top-full items-center justify-center">
            <h1 className="title 2xl:text-[9rem] lg:text-[9rem] md:text-[7rem] sm:text-[7rem] text-[4rem] 2xl:-top-[13rem] xl:-top-[13rem] lg:-top-[13rem] -top-[12rem]">About Me</h1>
            <h2 className="absolute 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-md">I'm just a developer that works only when he's bored or when he gets a spark of motivation.<br></br>
                My main languages are: PHP, HTML, Javascript, CSS and Python.<br></br>
                I also use languages such as: Lua, C# and Java.</h2>
            <div className="arrow 2xl:top-[60%] xl:top-[60%] lg:top-[60%] md:top-[60%] top-[70%]">
            <button onClick={hello} className="relative text-white no-underline text-5xl p-6">
            <a>▼</a>
            </button>
        </div>
        </div>

    )

}

export default ShortAbout;