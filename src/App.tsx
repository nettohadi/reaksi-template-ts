import {useState, Router, Route, useRouter} from "reaksi";
import Home from "./components/Home";
import About from "./components/About";

export default function App(){
    const router = useRouter();
    return (
        <Router>
            <div>
                <button onclick={() => router.push('/')}>Home</button>
                <button onclick={() => router.push('/about')}>About</button>
            </div>
            <Route path='/' exact>
                <Home/>
            </Route>
            <Route path='/about' exact>
                <About/>
            </Route>
        </Router>
    );
}