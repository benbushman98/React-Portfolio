import React from 'react'

const Skill = () => {
    const style = {
        width: "22rem"
    }
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            <div className="card m-3 text-center" data-aos="fade-right" style={style}>
                <div className="card-body">
                    <h5 className="card-title">Front End</h5>
                    <div>
                        <ul className='text-start'>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>HTML</li>
                            <li>Handlebars.js</li>
                            <li>TailWind CSS</li>
                            <li>Bulma CSS</li>
                            <li>Bootstrap CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card m-3 text-center" data-aos="fade-left" style={style}>
                <div className="card-body">
                    <h5 className="card-title">Back End</h5>

                    <div>
                        <ul className='text-start'>
                            <li>Express.js</li>
                            <li>Express Session</li>
                            <li>Node.js</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card m-3 text-center" data-aos="fade-right" style={style}>
                <div className="card-body">
                    <h5 className="card-title">Databases</h5>
                    <div>
                        <ul className='text-start'>
                            <li>GraphQL</li>
                            <li>MySql</li>
                            <li>IndexedDB</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="card m-3 text-center" data-aos="fade-left"  style={style}>
                <div className="card-body">
                    <h5 className="card-title">Miscellaneous</h5>
                    <div>
                        <ul className='text-start'>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Heroku</li>
                            <li>XMISSION Hosting</li>
                            <li>Hostgator Hosting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Skill