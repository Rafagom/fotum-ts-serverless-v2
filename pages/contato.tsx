import { NextPage } from "next";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/Form";
import { Header } from "../components/Header";

const Contact: NextPage = () => {
    return (
        <>
            <div className="flex flex-col pt-20 h-[100vh] justify-between">
                <Header />
                <ContactForm />

                <Footer />
            </div>
        </>
    );
};
export default Contact;
