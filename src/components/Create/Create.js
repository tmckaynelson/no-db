import React from 'react'
import './Create.css'

class Create extends React.Component {

    constructor() {
        super()

        this.state = {
            name: '',
            artist: '',
            image: '',
            price: '',
            display: '',
        }
    }

    createArt = (event) => {

        event.preventDefault()

        const {name, artist, image, price, display} = this.state

        let newArt = {
            name,
            artist,
            image,
            price,
            display
        }

        this.props.createArt(newArt)
    }

    render() {

        return (
            <div className="create-container">
                <form>
                    <input type="text" placeholder="Name" onChange={ (event) => this.setState({ name: event.target.value }) } />
                    <input type="text" placeholder="Artist" onChange={ (event) => this.setState({ artist: event.target.value }) } />
                    <input type="text" placeholder="Image" onChange={ (event) => this.setState({ image: event.target.value }) } />
                    <input type="text" placeholder="Price" onChange={ (event) => this.setState({ price: `$${event.target.value}` }) } />
                    <select onChange={ (event) => this.setState({ display: event.target.value }) } >
                        <option value="None">None</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Office">Office</option>
                        <option value="Bedroom">Bedroom</option>
                    </select>
                    <button onClick={ this.createArt }>Add new art</button>
                </form>
            </div>
        )
    }
}

export default Create