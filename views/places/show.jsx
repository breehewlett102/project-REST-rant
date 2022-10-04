const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
          <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} width="90%"/>
                    <h3> Located in {data.place.city}, {data.place.state}</h3>
                </div>
                  <div className="col-sm-6">
                      <h1>{data.place.name}</h1>
                      <h2> Rating </h2>
                      {rating}
                      <br/>
                      <h2> Description</h2>
                      <h3>{data.place.showEstablished()}</h3>
                      <h4>Serving {data.place.cuisines}</h4>
                      <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"><i class="bi bi-pencil-square"></i> Edit</a>  
                      <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                      <button type="submit" className="btn btn-danger"><i class="bi bi-trash-fill"></i> 
                          Delete
                      </button>
                      </form>
                </div>
          </div>
          <hr/>
                  <div>
                      <h2> Comments </h2>
                         <div className="d-flex align-content-start flex-wrap">
                          {comments}
                         </div>

                  </div>
            <hr />
          </main>
        </Def>
    )
}

module.exports = show
