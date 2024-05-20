import React from 'react'
import RootLayout from "../../layout/RootLayout";

const pageContainer = () => {
    <>
        <div>Home</div>
    </>
}

const Home = () => {
    <RootLayout children={pageContainer()}></RootLayout>
}

export default Home
