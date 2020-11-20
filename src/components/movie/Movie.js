function Movie(props){
    return(
        <div className = "col-sm-6">
            <div className = "card">
                <div className ="card-body">
                     <h4 className ="card-title">Pavadinimas:{props.title}</h4>
                     <p className = "card-text">Aprasymas:{props.description}</p>
                     <p className = "card-text">Director:{props.director}</p>
                     <a href="#" className = "btn btn-primary">Placiau</a>
                </div>
            </div>
        </div>
    )
}

export default Movie;