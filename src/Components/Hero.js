import { Component } from 'react'
import HeroContent from './Hero-content'


export default class Hero extends Component {
    render() {
        return (
            <div className="content-container">
                    <div className="big-image">
                        <div className="overlay"> </div>
                        <HeroContent />
                    </div>
                </div>
        )
    }
}


