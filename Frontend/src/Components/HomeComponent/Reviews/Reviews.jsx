import React from "react";
import "./Reviews.css";
import SectionHeading from "../Common/SectionHeading";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Reviews = () => {
    return (
        <section className="reviews-section">
            <SectionHeading
                title="We Love Compliments!"
                subtitle="Trusted By over a million happy customers. Here's the proof."
            />
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                <SwiperSlide>
                    <div className="review-card">
                        <div className=" review-img">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg"
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Devesh Singh</span>
                            <span className="city">Noida</span>
                        </div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                        <div className="review-desc">
                            <p>
                                I recently travelled with with know your bus and
                                the ecperience was quite good. The timimgs were
                                perfect and i would like to travel with them
                                again.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className=" review-img">
                            <img
                                src="https://as1.ftcdn.net/v2/jpg/02/30/22/50/1000_F_230225072_rEYiB3EpIau1tcKHpCkrMI1essV65dVn.jpg"
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Mudit Arya</span>
                            <span className="city">Jaipur</span>
                        </div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                        </div>
                        <div className="review-desc">
                            <p>
                            There is a good driver intraveller name Mr. Neeraj Kumar. 
                            He is speaking in polightly way.this place is very beautiful.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className=" review-img">
                            <img
                                src="https://as2.ftcdn.net/v2/jpg/02/32/51/07/1000_F_232510716_aGRRDQYrZyRfnixULQBz9Msictrotm4J.jpg"
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Aditya Sharma</span>
                            <span className="city">Noida</span>
                        </div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                        <div className="review-desc">
                            <p>
                            The trip was awesome and much better part in this trip is played by my tempo travelers. 
                            The trip can not be enjoyed if you can't travel comfortably. The seats were much comfortable, the bus was clean and the driver was well versed.

                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className=" review-img">
                            <img
                                src="https://as2.ftcdn.net/v2/jpg/04/31/53/49/1000_F_431534927_fd6pw6iz6OHtnzgxOo6pcBuVebJiV5o0.jpg"
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Aditya Sharma</span>
                            <span className="city">Noida</span>
                        </div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                        <div className="review-desc">
                            <p>
                                I recently travelled with with know your bus and
                                the ecperience was quite good. The trip was awesome and much better part in this trip is played by my tempo travelers. The trip can not be enjoyed if you can't travel comfortably. The seats were much comfortable, 
                                the bus was clean and the driver was well versed.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className=" review-img">
                            <img
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Mohit Sharma</span>
                            <span className="city">Noida</span>
                        </div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                        <div className="review-desc">
                            <p>
                            Know Your Bus is very good service provider travel company in delhi in india luxury buses very good experience driver agra and rajasthan road knowledge
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review-card">
                        <div className=" review-img">
                            <img
                                src="https://as2.ftcdn.net/v2/jpg/03/80/58/23/1000_F_380582318_5lJ52eVLcePphpM4pMHdew3wgopfhQSc.jpg"
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Aditya Sharma</span>
                            <span className="city">Noida</span>
                        </div>
                        <div className="rating">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarBorderIcon />
                            <StarBorderIcon />
                        </div>
                        <div className="review-desc">
                            <p>
                            Excellent service and best luxury vehicle experience for our family. 
                            Price look like in higher end however considering the quality of vehicle and other service supports its worth.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default Reviews;
