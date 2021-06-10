import Reaksi, {useState} from "reaksi";

export default function App(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Count : {count}</h2>
           <div>
               <button onclick={() => setCount(count => count + 1)}>+</button>
               <button onclick={() => setCount(count - 1)}>-</button>
           </div>
        </div>
    );
}