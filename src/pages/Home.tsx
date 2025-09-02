import { JSX, useEffect, useState } from "react";
import axios from "axios";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export default function Home(): JSX.Element {
    const [data, setData] = useState<Todo | null>(null);

    useEffect(() => {
        axios
            .get<Todo>("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => setData(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold">Home Page</h1>
            <p className="mt-2">Hi Developer 👋</p>
            <p className="mt-2">Hello World with API Fetching:</p>
            <pre className="bg-gray-100 p-2 rounded mt-2">
                {data ? JSON.stringify(data, null, 2) : "Loading..."}
            </pre>
        </div>
    );
}
