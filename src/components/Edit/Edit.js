import React from 'react'

class Edit extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let {id, name, artist, image, price, display} = this.props.editArt

        console.log('props',this.props.editArt)

        return (
            <div>
                <img src={ image } />
            </div>
        )
    }
}

export default Edit