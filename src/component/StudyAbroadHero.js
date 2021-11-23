import React from 'react'
import './StudyAbroadHero.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function StudyAbroadHero() {
    return (

        <div className='studyabroad-container'>
            <div className='studyheader sheader1'></div>
            <div className='studyheader sheader2'></div>
            <div className='study-abroad'>
                                    <h1>Study abroad</h1>

                                    <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    </p>
            </div>
            <div className="cards">
                <h1 className='first-cards-heading'>Universities Abroad</h1>
                <div className='card-grid'>
                    <div className="card-grid-1">
                        <div className='cardbox card-US'>
                            <h2 className='card-title'>Study in US</h2>
                            <p>Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>

                            <Link to='contact'>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue'>
                   
                   Apply Now
               </Button> */}
               <button className='apply-now-btn1'> Apply Now </button>

               </Link>

                        </div>
                    </div>
                    <div className="card-grid-2">
                        <div className=' cardbox card-Canada'>
                            <h2 className='card-title'>Study in Canada</h2>
                            <p>Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>

                            <Link to='/contact'>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue'>
                   
                   Apply Now
               </Button> */}
               <button className='apply-now-btn1'> Apply Now </button>

               </Link>

                        </div>
                    </div>
                    <div className="card-grid-3">
                        <div className='cardbox card-UK'>
                            <h2 className='card-title'>Study in UK</h2>
                            <p>Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>

                            <Link to='/contact'>
                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue'>
                   
                   Apply Now
               </Button> */}

               <button className='apply-now-btn1'> Apply Now </button>

               </Link>


                    </div>
                </div>
                </div>
            </div>
            <div className="cards">
                <h1 className='second-cards-heading'>Universities in Ghana</h1>
                <div className='card-grid'>
                    <div className="card-grid-1">
                        <div className='cardbox card-UG'>
                            <h2 className='card-title'>Study in UG</h2>
                            <p>Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>

                            <Link to='/contact'>

                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue'>
                   
                   Apply Now
               </Button> */}

               <button className='apply-now-btn1'> Apply Now </button>

               </Link>

                        </div>
                    </div>
                    <div className="card-grid-2">
                        <div className=' cardbox card-KNUST'>
                            <h2 className='card-title'>Study in UCC</h2>
                            <p>Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>

                            <Link to='/contact'>

                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue'>
                   
                   Apply Now
               </Button> */}

               <button className='apply-now-btn1'>Apply Now</button>

               </Link>

                        </div>
                    </div>
                    <div className="card-grid-3">
                        <div className='cardbox card-KNUST'>
                            <h2 className='card-title'>Study in KNUST</h2>
                            <p>Quis autem vel eum iure reprehenderit qui
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                                    in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                            </p>

                            <Link to='/contact'>

                {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small' buttonColor='blue'>
                   
                   Apply Now
               </Button> */}

            <button className='apply-now-btn1'>Apply Now</button>

               </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}

export default StudyAbroadHero
