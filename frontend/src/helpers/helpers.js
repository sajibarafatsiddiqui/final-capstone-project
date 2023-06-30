import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';



const axiosConfig ={
        withCredentials: true,
        headers: {'Cache-Control': 'max-age=9999'}
}


// get cars from API
export const getCars = async () => {
    const cars = await axios.get('http://127.0.0.1:5000/api/v1/cars', axiosConfig);

    return Object.entries(cars.data).map((car) => {
        const [{ id, car_model, rent_price, status, image }] = car;
        return {
            id,
            car_model,
            rent_price,
            status,
            image
        };
    });
};


export const getCarDetails = async (id) => {
    const carDetail = await axios.get(`http://127.0.0.1:5000/api/v1/cars${id}`, axiosConfig);
    return carDetail;
};

// add a new car using API 
export const addCar = async ({ id, car_model, rent_price, status, image }) => {
    const obj = { car: { "car_model": car_model, "rent_price": rent_price, "car_status": status, "car_image": image } }
    await axios.post('http://127.0.0.1:5000/api/v1/cars', obj);
};

// delete car


// get rentals from API
export const getRentals = async () => {
    const rentals = await axios.get('/rentals', axiosConfig);
    return Object.entries(rentals.data).map((reservation) => {
        const [{ id, date_rent, date_return, destination, user_id, car_id }] = reservation;
        return {
            id,
            date_rent,
            date_return,
            destination,
            user_id,
            car_id
        };
    });
};

export const addRental = async ({ id, date_rent, date_return, destination }) => {
    const obj = { rental: { "car_id": id, "date_rent": date_rent, "date_return": date_return, "destination": destination } }
    await axios.post('http://127.0.0.1:5000/api/v1/rentals', obj, axiosConfig);
};
// authencitation

export const signUp = async ({ email, first_name, last_name, age, gender }) => {
    const obj = { user: { "email": email, "first_name": first_name, "last_name": last_name, "age": age, "gender": gender } }
    return await axios.post('http://127.0.0.1:5000/api/v1/users', obj);
};

export const signIn = async ({ email }) => {
    const obj = { user: { "email": email } }
    return await axios.post('http://127.0.0.1:5000/api/v1/login', obj,  axiosConfig).then(response => { localStorage.setItem('userId', response.data.session.public_id);})
};

export const signOut = async () => {
    await Cookies.remove('_backend_session')
    // navigate('../login');
};

// export default connectionString;