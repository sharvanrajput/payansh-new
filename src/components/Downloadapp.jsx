import React from 'react'
import playstor from '../../public/images/googleplay.svg'
import appstore from '../../public/images/appstore.svg'
import downloadapp from '../../public/images/downloadapp.png'
const Downloadapp = ({theme}) => {
    return (
        <>
            <section className={` ${theme ? "bg-black text-white  " : "bg-white text-black"}  dowdnload pw-0`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h2 className="">Download the App</h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed felis id mauris malesuada vulputate vitae in lectus.</p>
                            <div className="">
                                <button className='btn btn-dark' >
                                    <img src={playstor} alt="" style={{width:150}} className="img-fluid " />
                                </button>

                                <button className='btn btn-dark ms-3' >
                                    <img src={appstore} alt="" style={{width:140}} className="img-fluid " />
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 app_img">
                            <img src={downloadapp} className='img-fluid' alt="" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Downloadapp
