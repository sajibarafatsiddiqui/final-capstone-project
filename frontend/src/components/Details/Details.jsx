import { useDispatch, useSelector } from 'react-redux'
import './Details.css'
import Loading from './Loading'
const Details = () => {
    // const dispatch = useDispatch()
    // const data = useSelector(state => state.details)
    // const details = data.details
    // const reservation_message = data.reservation_message

    if (false) {
        return <Loading/>
    }

    if (true)  return (
        <section id='details'>
            <div id="details_image">
                <img src="https://th.bing.com/th/id/OIP.XMAVjV3PZ3c41w9lpk0zBQHaHW?pid=ImgDet&rs=1" alt="book" />
            </div>
            <div id="book_info">
                <div id="book_name">
                    <p>VESPA 946</p>
                    <small>$260 deposit on any Vespa purchase</small>
                </div>
                <div className="other_details">
                    <p>Finance Fee</p>
                    <p>$57</p>
                </div>
                <div className="other_details">
                    <p>Option to purchase fee</p>
                    <p>$200</p>
                </div>
                <div className="other_details">
                    <p>Total amount payable</p>
                    <p>$257</p>
                </div>
                <div className="other_details">
                    <p>Duration</p>
                    <p>12 months</p>
                </div>
                <p id='rep'><strong>5.9% APR</strong> Representative</p>
                <h4>Discover More Models</h4>
                <img id='donut' src="/donut.png" alt="donut" />
                <a id='reserve' href="#">RESERVE</a>
            </div>
        </section>
    )

   
}

export default Details