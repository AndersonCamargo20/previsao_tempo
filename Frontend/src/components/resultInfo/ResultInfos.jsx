import React from 'react'

import { Card, CardHeader, CardBody, CardTitle, CardFooter } from 'reactstrap'

export default props => {
    let temperatura = Math.floor(props.data.main.temp - 273.15);
    let umidade = props.data.main.humidity
    let tipo = '';

    let iconType = props.data.weather[0].icon

    if (iconType === '01d' || iconType === '01n') {
        tipo = 'Céu limpo'

    } else if (iconType === '02d' || iconType === '02n') {
        tipo = 'Poucas nuvens'
    } else if (iconType === '03d' || iconType === '03n') {
        tipo = 'Nuvens dispersas'
    }else if (iconType === '04d' || iconType === '04n') {
        tipo = 'Nuvens quebradas'
    }else if (iconType === '09d' || iconType === '09n') {
        tipo = 'Banho de chuva'
    }else if (iconType === '10d' || iconType === '10n') {
        tipo = 'Raios'
    }else if (iconType === '11d' || iconType === '11n') {
        tipo = 'Trovoadas'
    }else if (iconType === '13d' || iconType === '13n') {
        tipo = 'Neve'
    }else if (iconType === '50d' || iconType === '50n') {
        tipo = 'Névoa'
    }

    let iconImg = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    
    document.querySelector("link[rel='shortcut icon']").href = iconImg

    document.title = `${props.data.name}, ${temperatura}º - ${tipo}`

    return <Card>
        <CardHeader>
            <h1>
                {props.data.name} <img src={iconImg} />
            </h1>
            <p>{tipo}</p>
        </CardHeader>
        <CardBody>
            <h2>Temperatura: <span className="font-weight-bold">{temperatura}º</span> </h2>
            <h2>Umidade: <span className="font-weight-bold">{umidade}%</span> </h2>
            <hr />

        </CardBody>
    </Card>
}