import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex items-center p-1">
            <img className="h-20 mx-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0t3CaBuWbtfalAMx8vZDiGyvvDFjX_HgPQ&usqp=CAU" alt="" />
            <Link className="text-3xl mx-3 text-blue-500 font-bold underline" to={"/"}>Movies</Link>
            <Link className="text-3xl mx-3 text-blue-500 font-bold underline" to={"/Watchlist"}>Watchlist</Link>
        </div>
    )
}