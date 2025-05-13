import React, { useRef } from "react";

interface IModalProps {
    children: React.ReactNode;
    headerLabel: string;
    onCloseRequested: () => void;

}

function Modal(props: IModalProps) {
    const myRef = useRef<HTMLDivElement>(null);
    return (
        <div className="w-screen h-screen top-0 left-0 fixed bg-gray-400/50 flex justify-center items-center"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (myRef.current) {
                    if (!myRef.current.contains(e.target as Node)) {
                        props.onCloseRequested();
                    }
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