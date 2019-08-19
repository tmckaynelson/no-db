import React from 'react'
import axios from 'axios'
import ReactModal from 'react-modal'

// components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Create from './components/Create/Create'
import Art    from './components/Art/Art'
import Edit from './components/Edit/Edit'

// stylesheets
import 'reset-css'
import './App.css'

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      art: [],
      showModal: false,
      artToEdit: {}
    }
  }

  componentDidMount() {
    axios.get('/api/art/')
    .then((response) => {
      this.setState({
        art: response.data
      })
    })
  }

  createArt = (body) => {
    console.log('hit createArt')
    axios.post('/api/art/', body)
    .then((response) => {
      console.log(response)
      this.setState({
        art: response.data
      })
    })
  }

  deleteArt = (id) => {

    axios.delete(`/api/art/${id}`)
    .then((response) => {
      
      this.setState({
        art: response.data
      })
    })
  }

  startEdit = (id) => {

    axios.get(`/api/art/${id}`)
    .then((response) => {
      
      this.setState({
        showModal: true,
        artToEdit: response.data
      })
    })

  }

  editArt = (id, body) => {

    axios.put(`/api/art/${id}`, body)
        .then((response) => {

            this.setState({
              art: response.data
            })
        })
  }

  closeEdit = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    let mappedArt = this.state.art.map((element, index) => {
      return <Art key={ index } id={ element.id } art={ element } editArt={ this.startEdit } deleteArt={ this.deleteArt } />
    })

    return (
      <div className="app">
        <Header />
        <Create createArt={ this.createArt } />
        <div className="art-container">
          { mappedArt }
        </div>
        <ReactModal isOpen={ this.state.showModal } shouldFocusAfterRender={ true } shouldCloseOnOverlayClick={ true } 
                    shouldCloseOnEsc={ true } shouldReturnFocusAfterClose={ true } onRequestClose={ this.closeEdit } className="modal"
        >
          <Edit artToEdit={ this.state.artToEdit } editArt={ this.editArt } />
        </ReactModal>
        <Footer />
      </div>
    );
  }
}

export default App
