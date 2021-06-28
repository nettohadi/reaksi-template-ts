import Reaksi from "reaksi";

export default function Home(){
    const [count, setCount] = Reaksi.useState(0);

    Reaksi.useEffect(() => {
        if(count > 5 )console.log('count is greater than 5');
    });

    return (
        <div>
            <h1>Home</h1>
            <h1>Count : {count}</h1>
            <div>
                <button onclick={() => setCount(count => count + 1)}>+</button>
                <button onclick={() => setCount(count => count - 1)}>-</button>
            </div>
        </div>
    );
}