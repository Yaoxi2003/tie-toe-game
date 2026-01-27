export default function ToggleBtn({playerMark, firstPlayer}) {
    const isCircle = firstPlayer === 'o'

    const O = <svg 
        className={`${isCircle ? 'text-slate300' : 'text-slate-900'} w-[32px] h-[32px]`}
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
        fill="currentColor"/></svg>

    const X = <svg 
        className={`${isCircle ? 'text-slate900' : 'text-slate-300'} w-[32px] h-[32px]`}
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
        fill="currentColor"/></svg>

    return (
        <div className="rounded-xl p-[8px] bg-slate900
        flex gap-1 items-center">
            <button onClick={() => playerMark('x')} disabled={!isCircle} className={`mark-btn ${isCircle ? 'mark-light' : 'mark-dark'}`}>
                {X}
            </button>
            <button onClick={() => playerMark('o')} disabled={isCircle} className={`mark-btn ${!isCircle ? 'mark-light' : 'mark-dark'}`}>
                {O}
            </button>
        </div>
    )
}