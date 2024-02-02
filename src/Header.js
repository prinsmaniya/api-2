import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function Header() {
    return (
        <>
            <Container>
                <div className="d-flex justify-content-between main">
                    <Link to="/Post">Post</Link>
                    <Link to="/Comments">Comments</Link>
                    <Link to="/Albums">Albums</Link>
                    <Link to="/Photos">Photos</Link>
                    <Link to="/Todos">Todos</Link>

                </div>
            </Container>
        </>
    )
}
export default Header;