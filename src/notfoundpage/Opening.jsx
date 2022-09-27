function hello() {
    
    document.getElementById("opening").classList.add("away");
    document.getElementById("opening").classList.remove("up");
    document.getElementById("text").classList.remove("away");
    document.getElementById("text").classList.add("up");
    
}

const Opening = () => {

    return (

        <div id="opening" className="flex z-40 w-full h-screen absolute top-0 items-center justify-center">
            <h1 className="title">404<br></br>
Page Was Not Found<br></br>
<a className="underline" href="/">Home</a> </h1>
        </div>

    )

}

export default Opening;