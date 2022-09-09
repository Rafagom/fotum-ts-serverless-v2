import { NextPage } from "next";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/Form";
import { Header } from "../components/Header";

const Contact: NextPage = () => {
    return (
        <>
            <Header />
            <ContactForm />
            <Footer />
        </>
    );
};
export default Contact;
