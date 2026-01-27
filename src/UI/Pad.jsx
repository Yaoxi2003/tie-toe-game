export default function Pad({id, isCircle, isClicked, changePad, on, highlight}) {
    const circle = (
        <img src="/img/icon-o.svg" alt="" aria-label="player's current shape - O"/>
    )
    const x = (
        <img src="/img/icon-x.svg" alt="" aria-label="player's current shape - X"/>
    )

    const winCircle = <svg 
        className="text-slate850 w-[64px] h-[64px]"
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
        fill="currentColor"/></svg>

    const winX = <svg 
        className="text-slate850 w-[64px] h-[64px]"
        viewBox="0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
        fill="currentColor"/></svg>

    return (
        <button onClick={() => {changePad(id)}} className={`pad ${highlight && isCircle ? 'bg-amber400' : highlight && !isCircle ? 'bg-teal400' : ''}`}>
            {!isClicked && <img src={ on ? '/img/icon-o-outline.svg' : '/img/icon-x-outline.svg'} alt="" aria-label="a o outline icon appear when hovering" className="pad-img" />}
            {isClicked && isCircle && !highlight ? circle : isClicked && !isCircle && !highlight ? x : null}
            {highlight && isCircle ? winCircle : highlight && !isCircle ? winX : null}
        </button>
    )
}