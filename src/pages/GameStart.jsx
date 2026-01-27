export default function GameStart({children, on, restart}) {
    const path = on ? 'M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z' 
    : 'M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z'

    return (
        <section className='py-20 container-pro grid grid-cols-3 grid-rows-3 gap-4'>

            <div className='self-end col-span-3 flex justify-between items-center'>
            {/* icons set */}
            <div className='flex items-center gap-2'>
                <img src="/img/icon-x.svg" alt="" aria-label='icon-decoration' className='w-[30px] h-[30px]'/>
                <img src="/img/icon-o.svg" alt="" aria-label='icon-decoration' className='w-[30px] h-[30px]'/>
            </div>
            {/* round panel */}
            <div className='turn'>
                <svg 
                className="w-5 h-5 text-slate300" 
                viewBox="0 0 64 64" 
                xmlns="http://www.w3.org/2000/svg">
                <path d={path} fill="currentColor" fillRule="evenodd"/>
                </svg>
                <p>TURN</p>
            </div>
            {/* Restart button */}
            <button onClick={restart} className='secondary-btn slate-btn flex justify-center items-center'>
                <img src="/img/icon-restart.svg" alt="" aria-label='A restart button for game'/>
            </button>
            </div>

            {children}

        </section>
    )
}