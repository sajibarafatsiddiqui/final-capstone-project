import React, { useEffect, useState } from "react";
import './ListItem.css';
import { Image } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from "../../redux/cars";

const ListItem = () => {

    const [myCars, setMyCars] = useState([]);
    const { cars } = useSelector((state) => state.cars);
    console.log(cars);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    function HandleNavigateToDetail(id) {
        navigate(`../details/${id}`);
    }

    useEffect(() => {
        // get datas
        dispatch(fetchCars()).then(
            response =>{
                setMyCars(response.payload);
                console.log(response.payload);
            }
        )
    }, [dispatch]);

    return (
        <div className="list-item-container">
            {/* header */}
            <div className="title-header">
                <h2 className="title-headline">LATEST MODELS</h2>
                <p className="subtitle-headline">Please select your favorite car for booking</p>
            </div>
            {/* display cars */}

            <div className="cards-container">
                <Carousel
                    style={{ width: '900px', marginLeft: 40 }}
                    withIndicators
                    slideSize="20px"
                    height={250}
                    slideGap="lg"
                    loop
                    align="start"
                >
                    {
                        myCars.length > 0 && myCars.map((car) => (
                            <Carousel.Slide key={car.id}>
                                <div className="item-card" onClick={() => HandleNavigateToDetail(car.id)}>
                                    <Image className="item-image" maw={240} mx="auto" radius="md" src={car.image} alt="car cover image" />
                                    <h3 className="item-title">{car.model}</h3>
                                    <p className="item-subtitle">Status: {car.status} | Renting price: {car.rent_price}</p>
                                </div>
                            </Carousel.Slide>
                        )
                        )
                    }

                </Carousel>
            </div>
        </div>
    )
}

export default ListItem