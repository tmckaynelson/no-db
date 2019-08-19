import React from 'react'

class Edit extends React.Component {

    constructor(props) {
        super(props)

        let {id, name, artist, image, price, display} = this.props.artToEdit

        this.state = {
            id,
            name,
            artist,
            image,
            price,
            display
        }
    }

    edit = (event, id) => {

        event.preventDefault()

        let body = {...this.state}

        this.props.editArt(id, body)
    }

    render() {

        let {id, name, artist, image, price, display} = this.state

        return (
            <div className="edit">
                <img src={ image } alt={ name } />
                <div className="edit-container">
                    <input type="text" value={ name } onChange={ (event) => this.setState({ name: event.target.value }) } />
                    <input type="text" value={ artist } onChange={ (event) => this.setState({ artist: event.target.value }) } />
                    <input type="text" value={ image } onChange={ (event) => this.setState({ image: event.target.value }) } />
                    <input type="text" value={ price } onChange={ (event) => this.setState({ price: event.target.value }) } />
                    <select onChange={ (event) => this.setState({ display: event.target.value }) } defaultValue={ "" } >
                        <option value="" disabled hidden>{display}</option>
                        <option value="None">None</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Office">Office</option>
                        <option value="Bedroom">Bedroom</option>
                    </select>
                    <button onClick={ (event) => { this.edit(event, id) } }>Edit</button>
                </div>
            </div>
        )
    }
}

export default Edit