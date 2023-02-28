import {Counter} from "features/counter/Counter";

export default function Root() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href={`/page/1`}>Page 1</a>
                    </li>
                    <li>
                        <a href={`/page/2`}>Page 2</a>
                    </li>
                </ul>
            </nav>
            <Counter />
        </>
    );
}