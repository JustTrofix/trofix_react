function hello() {
    document.getElementById("pages").classList.remove("up");
    document.getElementById("pages").classList.add("away");
    document.getElementById("opening").classList.remove("away");
    document.getElementById("text").classList.remove("away");
    document.getElementById("opening").classList.add("up");
    document.querySelector("footer").style.display = "none";
    setTimeout(function () { document.getElementById("pages").classList.remove("away"); }, 1000);
    
}

const pages = () => {

    return (
<>  
        <div id="pages" className="flex w-full h-screen z-40 absolute top-full items-center justify-center">
            <h1 className="title -top-52">Pages</h1><br></br>
            <div className="pages">
            <a href="">Home ● </a> <a href="/#/about">About ● </a> <a href="/#/projects">Projects ● </a> <a href="/#/contact">Contact</a>
            </div>
            <div className="arrow">
            <button onClick={hello} className="relative text-white no-underline text-5xl p-6">
            <a>▼</a>
            </button>
        </div>
        <footer className='absolute flex justify-center items-center w-screen h-14 bg-black bottom-0'>
        <h1 className="w-fit text-center text-2xl">Trofix ● 2022</h1>
        </footer>
        </div>   
        </>
    )

}

export default pages;