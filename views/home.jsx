const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
           <main>
    <h1>HOME</h1>
    <div>
      <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900+++&q=80" alt="Chia Fruit Shake" />
      <p>
        Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

        </Def>
    )
}

module.exports = home
