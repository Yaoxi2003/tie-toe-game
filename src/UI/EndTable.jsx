export default function EndTable({currentWiner, end, nextRound, firstPlayer, quit}) {
    const currentColor = currentWiner==='x' ? 'text-teal400' : currentWiner==='o' ? 'text-amber400' : 'text-slate300'
    const currentShape = currentWiner==='x' ? '/img/icon-x.svg' : currentWiner==='o' ? '/img/icon-o.svg' : null
    const winSlogan = (currentWiner==='x' && firstPlayer==='x') || (currentWiner==='o' && firstPlayer==='o') ? 'player 1 wins!' 
            : (currentWiner==='x' && firstPlayer!=='x') || (currentWiner==='o' && firstPlayer!=='o') ? 'player 2 wins!' 
            : ''

    return (
        <>
            {end ? 
            <section>
                {/* Burry mask */}
                <div className="absolute inset-0 z-2 bg-black opacity-60"></div>

                {/* Final result */}
                <div className="absolute left-0 w-full top-1/2 -translate-y-1/2 z-3
                                py-12 flex flex-col justify-center items-center gap-6
                                bg-slate800">
                    <p className="uppercase">{winSlogan}</p>

                    {currentShape 
                        ? <h1 className={`flex gap-5 items-center ${currentColor}`} ><img src={currentShape} alt=""/>TAKES THE ROUND</h1>
                        : <h1 className={`flex gap-5 items-center ${currentColor}`} >ROUND TIED</h1>
                    }

                    <div className="flex items-center gap-4">
                        <button className="secondary-btn main-btn" onClick={quit}>QUIT</button>
                        <button className="secondary-btn slate-btn" onClick={nextRound}>NEXT ROUND</button>
                    </div>
                </div>
            </section>
            : null
            }
        </>
    )
}