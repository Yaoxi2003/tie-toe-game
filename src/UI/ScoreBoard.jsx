export default function ScoreBoard({children, player, firstplayer}) {

    const xOrder = firstplayer==='x' ? 1 : 2
    const oOrder = firstplayer==='o' ? 1 : 2
    const playerText = player==='x' ? `(p${xOrder})` : player==='o' ? `(p${oOrder})` : player==='ties' ? 'TIES' : ''

    return (
        <div className={`score-board ${player==='x' ? 'x-board' : player==='o' ? 'o-board' : 'tie-board'}`}>
            <h2>{playerText}</h2>
            <h4>{children}</h4>
        </div>
    )
}