import React from "react";

import { Main, Footer, Cards, Explore, CallToAction, Triple } from "@components";
import Container from "src/components/layout/container";

const Home: React.FC = () => {
    return (
        <Container>
            <Main />
            <Triple />
            <Explore />
            <CallToAction />
            <Cards />
            <Footer />
        </Container>
    );
};

export default Home;
