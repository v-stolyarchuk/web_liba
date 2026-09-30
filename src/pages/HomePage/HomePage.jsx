import './HomePage.scss'
import { HomeSlider } from '../../components/HomeSlider'

export const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <HomeSlider />
        </div>
    )
}