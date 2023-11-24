import React from "react"
import Back from "../common/back/Back"
// import TeamCard from "./TeamCard"
import "./Tutorial.css"
import { TutorialVideo } from "../../dummydata"

// import Awrapper from "../about/Awrapper"
// import "../about/about.css"

const Tutorial = () => {
    return (
        <>

        {TutorialVideo.map((val) => (
            <><Back title='Tutorial video' /><section className='tutorial padding'>
            <div className='container grid'>
            </div>
            </section></>
        ))}
        </>
    )
}

export default Tutorial
