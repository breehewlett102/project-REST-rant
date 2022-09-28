const React = require('react')
const Def = require('../default')

function show (data) {
    let message = ''                 
    if (data.message) {
        message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Def>
          <main>

          <h1>{data.place.name}</h1>
            {message}
                <h3>{data.cuisines}</h3>
                <div className="row">
                    <div className="col-sm-6" >
                        <img id="showBorder" src={data.place.pic} alt={data.place.name} width="45%" />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                     <div className="col-sm-6">  
                        <h2>Rating</h2>
                        <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>  
                            <h4>
                                Serving {data.place.cuisines}
                            </h4>
                    </div>
                    <div>
                        <h1>Comments</h1>
                    </div>
                </div>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                <i className="bi bi-pencil"></i> 
                     Edit
                </a>
                <form action={`/places/${data.place.id}?_method=DELETE`} method="POST">
                    <button type="submit" className="btn btn-danger">
                    <i className="bi bi-trash"></i>  
                         Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}


const React = require('react')
const Def = require('../default')
