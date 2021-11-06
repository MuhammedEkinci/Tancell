import React, {useState, useEffect} from "react"
import CarouselSection from "../components/CarouselSection";
import NewProduct from "../components/NewProducts";

export default function HomePage() {

    return (
        <>
            <CarouselSection />
            <NewProduct />
        </>
    );
}