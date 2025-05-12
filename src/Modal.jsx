import { useRef } from "react";

function Modal(props) {
    const myRef = useRef(null);
    return (
        <div className="w-screen h-screen top-0 left-0 fixed bg-gray-400/50 flex justify-center items-center"
            onClick={(e) => {
                if (!myRef.current.contains(e.target)) {
                    props.onCloseRequested();
            }
        }}>
            <div className="bg-white p-5 rounded-lg" ref={myRef}>
                <header className="flex justify-between pb-3">
                    {props.headerLabel}
                    <button aria-label="Close" onClick={props.onCloseRequested}> X</button>
                </header>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;