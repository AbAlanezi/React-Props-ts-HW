import React from 'react'

interface TVShows{
    name:string,
    img:string,
    date:string,
    evaluation:number,
    available: boolean
}

const shows:TVShows[]  = [
    {
        name: 'Reacher',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqL4RaV7TW41vFb5aFZyk6zRkMqISO0qJBwvaBE9HM0AIYymb4s_wXPSoYQHdyTSsY30&usqp=CAU',
        date: '2022',
        evaluation: 7.2,
        available: false
      },
      {
        name: 'Jack Ryan',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDiK3lnQUiXtLI9gi7V53HE_2wqaYS2j7Caxwy3sxNZa0p3t5xSnIsOPznwO5wXIIsbHc&usqp=CAU',
        date: '2018',
        evaluation: 6.6,
        available: true
      },
      {
        name: 'Severance',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThfjXcaXUiu2pVvU2gYNmHvUXnmHvl76up0O3cet4Uz3ItNnmXr5g7QmcfeM9ApQcgcWI&usqp=CAU',
        date: '2022',
        evaluation: 8.2,
        available: false
      },
      {
        name: 'Bullet Train',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJhg4Fx89rZH0qUsXgCocF65cBmpy1SeFDKoyVVBZbXYZwn6X9DbOW2sWhSvqWT2DL4oY&usqp=CAU',
        date: '2022',
        evaluation: 6.8,
        available: false
      },
      {
        name: 'Ted Lasso',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfitWpyCTU-X_kjKVjwly5BcRuevv6zljZOn_olhhqJIAtXBxzVMeJ7xE4r31jm5U4dkw&usqp=CAU',
        date: '2022',
        evaluation: 9.0,
        available: true
      },
]
function TVShows() {
  return (
    <div>
          <div>
    {shows.map((sho, i) => {
        let masseg = ''
        if(!sho.available == false){
            masseg = 'soon'
        }

        return(
            <div key={i}>
           <div className='contenr'>

              <div id="card">
            <img id="img" height={100} src={sho.img} alt=''></img>
            <h2 id="title">{sho.name}</h2>
            <p id="desc">{sho.date}</p>
            <p id="desc">{sho.evaluation}</p>
            <p id="desc">{sho.available}</p>
              {masseg.length > 0 ? <p className='masseg'>{masseg}</p>: <span></span>}
             </div>
           </div>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default TVShows
