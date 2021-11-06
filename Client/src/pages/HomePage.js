import React, {useState, useEffect} from "react"

import CarouselSection from "../components/CarouselSection";
import ChooseType from "../components/ChooseType";
import NewProduct from "../components/NewProducts";
import Parrallax from "../components/Parrallax";
import Testimonials from "../components/Testimonials";

export default function HomePage() {

    return (
        <>
            <CarouselSection />
            <NewProduct />
            <Parrallax />
            <ChooseType />
            <Testimonials />
        </>
    );
}