import React from 'react'

interface Movie{
    name:string,
    img:string,
    date:string,
    evaluation: number
    available: boolean
}

const movie:Movie[]  = [
    {
        name: 'The Gray Man',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7ZHT3qcs0b9BHWsZZZx2t971HklFHw9Kwg&usqp=CAU.png',
        date: '2022',
        evaluation: 9.5,
        available: false
      },
      {
        name: 'The Pale Blue Eye',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiHy9NTYwwrEop-qGJAXY73H-OjpqmqYhIQ&usqp=CAU',
        date: '2015',
        evaluation: 5.5,
        available: true
      },
      {
        name: 'You People',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9bfMpcRD9fdg3eEo1VD6AHN757ntJyDFEg&usqp=CAU',
        date: '2023',
        evaluation: 7.5,
        available: true
      },
      {
        name: 'Bullet Train',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhg4Fx89rZH0qUsXgCocF65cBmpy1SeFDKoyVVBZbXYZwn6X9DbOW2sWhSvqWT2DL4oY&usqp=CAU',
        date: '2022',
        evaluation: 3.3,
        available: false
      },
      {
        name: 'Wrath of Man',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVZ81C6C0twcpzbzHE-pp2wLYBCJ0hk7iSXNpBqTmkrFW0tJnM-4gF6An5u73jCQWMAQ&usqp=CAU',
        date: '2021',
        evaluation: 5.9,
        available: true
      },
]


function Movies() {
    
  return (
    <div>
    {movie.map((mov, i) => {
        let masseg = ''
        if(!mov.available == false){
            masseg = 'soon'
        }

        return(
            <div key={i}>

              <div className='contenr'>

              <div id="card">
            <img id="img" height={100} src={mov.img} ></img>
            <h2 id="title">{mov.name}</h2>
            <p id="desc">{mov.date}</p>
            <p id="desc">{mov.evaluation}</p>
            <p id="desc">{mov.available}</p>
              {masseg.length > 0 ? <p className='masseg'>{masseg}</p>: <span></span>}
             </div>
              </div>
            </div>
        )
    })}
    </div>
  )
}

export default Movies
