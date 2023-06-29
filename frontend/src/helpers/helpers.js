import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

const cookie = Cookies.get('_backend_session');
console.log(cookie);


const connectionString = axios.create({
    withCredentials:true,
    baseURL: 'http://127.0.0.1:3001/api/v1',
    headers: {
        'Authorization': `_backend_session=${cookie}`
    }
});

// get cars from API
export const getCars = async () => {
    const cars = await connectionString.get('/cars');
    console.log(connectionString['headers']);
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
    const carDetail = await connectionString.get(`/cars${id}`);
    return carDetail;
};

// add a new car using API 
export const addCar = async ({ id, car_model, rent_price, status, image }) => {
    const obj = { car: { "car_model": car_model, "rent_price": rent_price, "car_status": status, "car_image": image } }
    await connectionString.post('/cars', JSON.stringify(obj));
};

// delete car


// get rentals from API
export const getRentals = async () => {
    const rentals = await connectionString.get('/rentals');
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
    await connectionString.post('/rentals', JSON.stringify(obj));
};
// authencitation

export const signUp = async ({ email, first_name, last_name, age, gender }) => {
    const obj = { user: { "email": email, "first_name": first_name, "last_name": last_name, "age": age, "gender": gender } }
    await connectionString.post('/users', JSON.stringify(obj));
};

export const signIn = async ({ email }) => {
    const obj = { user: { "email": email } }
    await connectionString.post('/login', JSON.stringify(obj));
};

export const signOut = async () => {
    await Cookies.remove('_backend_session')
    // navigate('../login');
};

export default connectionString;