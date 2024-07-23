import './App.css'
import Links from "./components/Links";

function App() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center text-center text-white bg-neutral-800">
            <h1 className="font-extrabold text-3xl">hai!!</h1>
            <h2>im fluffy 💜</h2>
            <p className="font-thin m-4">here are all my socials/links :p</p>
            <Links github="ofluffydev" website="https://kadenfrisk.com/" discord="ofluffy" slack="@Kaden Frisk"/>
        </div>
    )
}

export default App
