import React from 'react'
import Card from '../card/Card'
import Tables from '../table/Table'
import Charts from '../chart/Chart'
import Footer from '../footer/Footer'
const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <div className="heading flexSB">
                    <h3>Dashboard</h3>
                    <span>DashBoard</span>
                </div>
                <Card />
                {<Tables />}
                <Charts />
                <Footer />
            </div>
        </section>
    )
}

export default Home