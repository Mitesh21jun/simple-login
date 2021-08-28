import React from 'react'

function Card() {
    return (
        
        <div className="card" style={{width:"300px"}}>
          <div className="card-body">
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, itaque molestiae perferendis recusandae earum alias natus tenetur ducimus iusto delectus, suscipit neque illum consequatur veritatis consectetur qui error quam voluptatibus.</p>
            <a href="#" className="btn btn-primary">
              See Profile
            </a>
          </div>
        </div>
    )
}

export default Card
