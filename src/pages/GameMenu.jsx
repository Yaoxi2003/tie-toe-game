import React from 'react'

export default function GameMenu({children, mode, handleGameStart, id}) {
    const [toggleBtn, gameStart] = React.Children.toArray(children);
    

    return (
        <>
            {!mode.startGame && <section className="py-45">
                <div className="container-pro flex flex-col items-center gap-6">
                    {/* icons set */}
                    <div className="flex gap-4 items-center">
                        <img src="/img/icon-x.svg" alt="" className="w-[32px] h-[32px]"/>
                        <img src="/img/icon-o.svg" alt="" className="w-[32px] h-[32px]"/>
                    </div>
                    {/* Mark toggle */}
                    <div className="w-full text-center flex flex-col gap-4 p-6 bg-slate800 rounded-[16px]
                                    shadow-[inset_0_-8px_0px_rgba(0,0,0,0.3)]">
                        <p className="uppercase">pick player 1's mark</p>
                        {toggleBtn}
                        <h2>REMEMBER : {id} GOES FIRST</h2>
                    </div>
                    {/* Button set */}
                    <div className="w-full flex flex-col gap-4">
                        <button onClick={() => {handleGameStart('solo')}} className="primary-btn amber-btn">NEW GAME (VS CPU)</button>
                        <button onClick={() => {handleGameStart('multiplayer')}} className="primary-btn teal-btn">NEW GAME (VS PLAYER)</button>
                    </div>
                </div>
            </section>}

            {mode.startGame && !mode.isSolo ? gameStart : null}
        
        </>

    )
}