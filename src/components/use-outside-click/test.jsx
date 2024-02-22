import { useRef, useState } from "react"
import useOutsideClick from ".";


export default function UseOnClickOutsideTest() {
    
    const [showContent, setShowContent] = useState(false)

    const ref = useRef();
    useOutsideClick(ref, () => setShowContent(false))


    return (
        <div ref={ref}>
            <h1>Click outside</h1>
            {
                showContent 
                ? <div>
                    <h1>
                        This is a Random Content
                    </h1>
                    <p>Please click outside of this to close this. It won't close if you click inside of this content</p>
                </div>
                : <button onClick={()=> setShowContent(true)}>Show Content</button>
            }
        </div>
    )
}