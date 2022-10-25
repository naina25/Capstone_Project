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
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB4BTzJ2dUBngLavEuF42DLiko8F1DDrqprA&usqp=CAU"
                                alt=""
                            />
                        </div>
                        <div className="review-user">
                            <span className="name">Neha Verma</span>
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
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
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
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
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
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
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
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
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
                                the ecperience was quite good. The timimgs were
                                perfect and i would like to travel with them
                                again.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default Reviews;
