import React from "react";
import './ListItem.css';
import { Image } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { useNavigate } from "react-router";
import { tableData } from "../../helpers/datas";

const ListItem = () => {
    const navigate = useNavigate();

    function HandleNavigateToDetail(id) {
        navigate(`../details/${id}`);
    }

    const displayCars = () => {
        tableData.map((car) => {
            return (
                <Carousel.Slide key={car.id}>
                    <div className="item-card" onClick={()=>HandleNavigateToDetail()} key={car.id}>
                        <Image className="item-image" maw={240} mx="auto" radius="md" src={car.image} alt="car cover image" />
                        <h3 className="item-title">{car.model}</h3>
                        <p className="item-subtitle">Status: {car.status} | Renting price: {car.price}</p>
                    </div>
                </Carousel.Slide>
            )
        });
    }

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
                    // slideSize="250px"
                    slideGap="lg"
                    loop
                    align="start"
                // breakpoints={[
                //     { maxWidth: 'md', slideSize: '50%' },
                //     { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                // ]}
                >
                    {
                        tableData.map((car) => {
                            return (
                                <Carousel.Slide key={car.id}>
                                    <div className="item-card" onClick={()=>HandleNavigateToDetail(car.id)}>
                                        <Image className="item-image" maw={240} mx="auto" radius="md" src={car.image} alt="car cover image" />
                                        <h3 className="item-title">{car.model}</h3>
                                        <p className="item-subtitle">Status: {car.status} | Renting price: {car.price}</p>
                                    </div>
                                </Carousel.Slide>
                            )
                        })
                    }

                </Carousel>
            </div>
        </div>
    )
}

export default ListItem