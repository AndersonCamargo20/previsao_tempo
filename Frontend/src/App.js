import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Input, Button, Collapse } from 'reactstrap'
import Spinner from './components/utils/Spinner'
import StatusResult from './components/home/StatusRequest'
import Infos from './components/resultInfo/ResultInfos'
import './css/all.min.css'
import './webfonts/fa-brands-400.eot'
import Footer from './components/home/Footer'

import axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      loadingData: false,
      dataResult: [],
      inputCity: 'Belem',
      appId: '7c0cea7e43e35532183ca35a8479df3b',
      baseUrl: 'https://api.openweathermap.org/data/2.5/weather?q=',
      showCardInfos: false,
      historico: []
    }
  }

  componentDidMount() {
    this.dump()
  }
  render() {
    return <div> <Container className="py-5">
      <Row>
        <Col className="col-6 mx-auto">
          {
            this.state.loadingData ? <Spinner /> : null
          }
        </Col>
      </Row>
      <Row>
        <Col sm={9} md={8} lg={9}>
          <Input
            onKeyPress={e => {
              if (e.key === 'Enter') this.call()
            }}
            disabled={this.state.loadingData}
            value={this.state.inputCity}
            onChange={e => {
              this.setState({
                ...this,
                inputCity: e.target.value
              })
            }}
            className="bg-light text-dark" placeholder="Digite sua cidade" />
        </Col>
        <Col sm={3} md={4} lg={3}>
          <Button disabled={this.state.loadingData} onClick={this.call.bind(this)}>
            <i className="fas fa-search"></i>
          </Button>
        </Col>
      </Row>
      <Row className="py-4">
        <Col col={9} className="mx-auto" >
          {
            this.state.showCardInfos ? <div>
              <Button onClick={() => {
                this.setState({
                  ...this,
                  showCardInfos: false
                })
              }} size="sm" color="danger"><i className="fas fa-window-close"></i></Button>
              <Collapse isOpen={this.state.showCardInfos}>
                <Infos data={this.state.dataResult} />
              </Collapse>
            </div> : null
          }
        </Col>
      </Row>
    </Container>
      <Footer historico={this.state.historico} />
    </div>
  }

  call() {
    document.title = 'Aguarde ...'
    this.setState({
      ...this,
      loadingData: true,
      showCardInfos: false
    })
    let url = `${this.state.baseUrl}${this.state.inputCity},br&APPID=${this.state.appId}`
    console.log(url)

    axios.get(url)
      .then(resp => {
        console.log("SUCCESS", resp)
        this.setState({
          ...this,
          loadingData: false,
          dataResult: resp.data,
          showCardInfos: true
        })

        let host = 'http://localhost:8000/api'
        const routers = {
          selectAll: `${host}/set/`
        }
        let temperatura = Math.floor(resp.data.main.temp - 273.15);
        let umidade = resp.data.main.humidity

        axios.post(routers.selectAll, {

          "cidade": this.state.inputCity,
          "temperatura": temperatura,
          "umidade": umidade
        })
          .then(resp => {
            this.dump()
          })
          .catch(err => console.log(err))





      })
      .finally(f => {
        console.log(f)
      })
      .catch(err => {
        document.title = 'Erro =('
        console.log("ERRO", err)

        this.setState({
          ...this,
          loadingData: false
        })
      })
  }

  dump() {
    axios.get('http://localhost:8000/api/')
      .then(resp => {
        this.setState({
          ...this,
          historico: resp.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export default App;
