import React from 'react'
import Card from '../components/Card'

const Home = () => {
    return (
        
        <div className="home_container">
            <h1 className="homepage_title">Sphynx</h1>

            <div className="cards " >
                <div className="row">
                <Card className='col-' title='Airdrop' imgUrl='../assets/dao.png'/>
                <div className="card"></div>
                <Card title='Airdrop' imgUrl='../assets/coin.png'/>
                <div className="card"></div>
                </div>
               

                <Card title='Airdrop' imgUrl='../assets/coin.png'/>
                <Card title='Airdrop' imgUrl='../assets/coin.png'/>
            </div>
        </div>
    )
}

export default Home