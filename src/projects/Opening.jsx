function hello() {
    
    document.getElementById("opening").classList.add("away");
    document.getElementById("opening").classList.remove("up");
    document.getElementById("text").classList.remove("away");
    document.getElementById("text").classList.add("up");
    
}

const Opening = () => {

    return (

        <div id="opening" className="flex z-40 w-full h-screen absolute top-0 items-center justify-center">
            <h1 className="title">Projects</h1>
            <div className="arrow">
            <button onClick={hello} className="relative text-white no-underline text-5xl p-6">
            <a>▼</a>
            </button>
        </div>
        </div>

    )

}

export default Opening;