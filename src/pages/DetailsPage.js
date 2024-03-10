import React, { useEffect } from 'react'
import Header from '../parts/Header';
import PageDetailTitle from '../parts/PageDetailTitle';
import ItemDetails from '../json/itemDetails.json'
import FeaturedImage from '../parts/FeaturedImage';
import PageDetailsDescription from '../parts/PageDetailsDescription';
import BookingForm from '../parts/BookingForm';
import Categories from '../parts/Categories'
import Testimonial from '../parts/Testimony'
import Footer from '../parts/Footer'
import { Fade } from 'react-reveal';

const DetailsPage = (props) => {
    useEffect(() => {
        document.title = "Details Page"
        window.scrollTo(0, 0);
    }, []);
    
    const breadcrumb  = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "House Details", pageHref: ""}
    ]
    

    return (
        <>
            <Header {...props}></Header>
            <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
            <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <Fade bottom>
                            <PageDetailsDescription data={ItemDetails}/>
                        </Fade>
                    </div>
                    <Fade bottom>
                        <div className="col-5"><BookingForm itemDetails={ItemDetails}></BookingForm></div>
                    </Fade>
                </div>
            </section>
            <Categories data={ItemDetails.categories} />
            <Testimonial data={ItemDetails.testimonial} />
            <Footer/>
        </>
    )
}
export default DetailsPage