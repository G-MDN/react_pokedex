interface PokemonCardProps {
    pokemon: {
        name: string,
        imgSrc?: string,
    }
}

function PokemonCard({pokemon}:PokemonCardProps) {

    return (
    <figure>
        {
            pokemon.imgSrc != null ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : "???"
        }
        
        <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

export default PokemonCard;