import React from 'react'
import Forms from '../Forms'
import ContactHeader from '../ContactHeader'
import HeroContact from '../HeroContact'
import Readmore from '../Readmore'


function Contact() {
    return (
        <div>
            <ContactHeader/>
            <Forms/>
            <HeroContact/>
            {/* <Readmore/> */}
        </div>
    )
}

export default Contact
