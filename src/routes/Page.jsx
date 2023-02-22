import {Link, useParams} from "react-router-dom";

export default function Page() {
    let { pageId } = useParams();

    return (
        <div id="Page">
            <p> Page {pageId}</p>
            <Link to="/">Go home</Link>
        </div>
    );
}