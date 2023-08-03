import { Link } from "react-router-dom"

const Header = () => {

    return (<header className="bg-dark text-light px-3 d-flex align-items-center py-2 justify-content-between">
        <div className="logo">
            <Link to={"/"} className="text-light">
                <h3 className="fw-bold">{"amazon"}</h3>
            </Link>
        </div>
        <div className="d-flex gap-2 align-items-center text-light">
            <span>Cart</span>
            <button className="btn btn-warning fw-bold bg-gradient">
                SignIn
            </button>
        </div>
    </header>

    )
}

export default Header