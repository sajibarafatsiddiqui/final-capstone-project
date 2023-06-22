import React from "react";
import './ListItem.css';
import { Image } from "@mantine/core";

const ListItem = ()=>{
    return(
        <div className="list-item-container">
            {/* header */}
            <div className="title-header">
                <h2 className="title-headline">LATEST MODELS</h2>
                <p className="subtitle-headline">Please select your favorite car for booking</p>
            </div>
            {/* display cars */}
            <div className="cards-container">
                {/* cards */}
                <div className="item-card">
                    <Image  className="item-image" maw={240} mx="auto" radius="md" src="https://pngimg.com/uploads/land_rover/land_rover_PNG82.png" alt="car cover image"/>
                    <h3 className="item-title">Range Rover 2018</h3>
                    <p className="item-subtitle">Official Range rover sport HSE 2018 Biturbo with diesel engine 4.0 L...</p>
                </div>
                {/* cards */}
                <div className="item-card">
                    <Image  className="item-image" maw={240} mx="auto" radius="md" src="https://static.vecteezy.com/system/resources/previews/017/281/522/original/toyota-fortuner-top-model-2755cc-automatic-transmission-turbo-engine-6-speed-gear-free-png.png" alt="car cover image"/>
                    <h3 className="item-title">TOYOTA Fortuner</h3>
                    <p className="item-subtitle">Official car 2017 Biturbo with diesel engine 3.0 L...</p>
                </div>
                {/* cards */}
                <div className="item-card">
                    <Image  className="item-image" maw={240} mx="auto" radius="md" src="https://www.pngmart.com/files/5/Mercedes-Benz-PNG-Transparent.png" alt="car cover image"/>
                    <h3 className="item-title">Mercedes S CLASS</h3>
                    <p className="item-subtitle">Officiel brand new Mercedes BENZ S Class that brings you comfort and luxury...</p>
                </div>
                
            </div>
        </div>
    )
}

export default ListItem