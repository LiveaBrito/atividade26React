function EstiloParagrafo(props){

    let isHighlighted = props.verdade;

    if(isHighlighted = true){
        return (
            <p style={{color: 'Purple'}}>Paragrafo com esse estilo, pois é igual a true - 'verdadeiro'</p>
        )
    }else{
        return(
            <p>Paragrafo sem estilo, pois é falso</p>
        )
    }
}

export default EstiloParagrafo;