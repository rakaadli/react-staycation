import React, { Component } from "react";
import Fade from "react-reveal/Fade";
// import { connect } from "react-redux";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
// import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Categories from "parts/Categories";

import Footer from "parts/Footer";

import itemDetails from "json/itemDetails.json";

// import { checkoutBooking } from "store/actions/checkout";
// import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    // if (!this.props.page[this.props.match.params.id])
    //   this.props.fetchPage(
    //     `/detail-page/${this.props.match.params.id}`,
    //     this.props.match.params.id
    //   );
  }

  render() {
    const { page, match } = this.props;

    // if (!page[match.params.id]) return null;

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcrumb={breadcrumb}
          // data={page[match.params.id]}
          data={itemDetails}
        />
        <FeaturedImage
          // data={page[match.params.id].imageId}
          data={itemDetails.imageUrls}
        />
        <section className='container'>
          <div className='row'>
            <div className='col-7 pr-5'>
              <Fade bottom>
                <PageDetailDescription
                  // data={page[match.params.id]}
                  data={itemDetails}
                />
              </Fade>
            </div>
            <div className='col-5'>
              <Fade bottom>
                <BookingForm
                  data={itemDetails.Categories}
                  itemDetails={itemDetails}
                  // itemDetails={page[match.params.id]}
                  // startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories}></Categories>
        {/* <Activities
          //  data={page[match.params.id].activityId}
          data={itemDetails}
        /> */}
        <Testimony
          data={itemDetails.testimonial}
          // data={page[match.params.id].testimonial}
        />
        <Footer />
      </>
    );
  }
}

// const mapStateToProps = (state) => ({
//   page: state.page,
// });

// export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
//   DetailsPage
// );
export default DetailsPage;
