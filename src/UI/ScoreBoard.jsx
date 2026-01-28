export default function ScoreBoard({children, player, firstplayer, mode}) {

    let playerText

    if (!mode.isSolo) {
        const xOrder = firstplayer==='x' ? 1 : 2 
        const oOrder = firstplayer==='o' ? 1 : 2
        playerText = player==='x' ? `(p${xOrder})` : player==='o' ? `(p${oOrder})` : player==='ties' ? 'TIES' : ''
    } 

    if (mode.isSolo) {
        const leftSide = firstplayer==='x' ? 'x (you)' : 'x (cpu)'
        const rightSide = firstplayer==='o' ? 'o (you)' : 'o (cpu)'
        playerText = player==='x' ? leftSide : player==='o' ? rightSide : player==='ties' ? 'TIES' : ''
    }

    return (
        <div className={`score-board ${player==='x' ? 'x-board' : player==='o' ? 'o-board' : 'tie-board'}`}>
            <h2>{playerText}</h2>
            <h4>{children}</h4>
        </div>
    )
}