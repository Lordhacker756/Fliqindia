import React from "react";
import bg from "../../assets/associate-bg.png";
import expections from "../../assets/Expectations.png";
import photograph from "../../assets/Photograph.png";
import covid from "../../assets/covid.png";
import Divider from "../helpers/Divider";

const Blogs = () => {
  return (
    <div
      className="main_container bg-no-repeat bg-cover px-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="text_content pt-3" style={{ marginBottom: "-2rem" }}>
        <h1 className="text-[#4C696D] text-2xl font-bold">Our Blogs</h1>
        <h2 className="font-normal text-black">Check out our Latest Blog</h2>
      </div>
      <div className="blogs flex w-[95vw] items-center">
        <div className="main_blogs flex p-5 gap-5">
          <div
            className="blog_1 bg-no-repeat w-[35vw] h-[40vh] relative bg-cover"
            style={{ backgroundImage: `url(${photograph})` }}
          >
            {/* <img src={photograph} className="" alt="" /> */}
            <div className="text_content translate-x-1 bg-black bg-blend-overlay bg-url bg-opacity-70 rounded-xl text-white p-10 absolute w-[70%] h-[98%] ">
              <h1 className="title text-[1em] font-semibold">
                Featured on: Sep 15, 2021
              </h1>
              <h2 className="subtitle  text-[2em] w-[70%] font-light">
                Wedding Photography at Goa
              </h2>
            </div>
          </div>

          <div
            className="blog_1 bg-no-repeat w-[35vw] h-[40vh] relative bg-cover"
            style={{ backgroundImage: `url(${expections})` }}
          >
            {/* <img src={photograph} className="" alt="" /> */}
            <div className="text_content translate-x-1 bg-black bg-blend-overlay bg-url bg-opacity-70 rounded-xl text-white p-10 absolute w-[70%] h-[98%] ">
              <h1 className="title text-[1em] font-semibold">
                Featured on: Sep 15, 2021
              </h1>
              <h2 className="subtitle  text-[2em] w-[70%] font-light">
                Wedding Photography at Goa
              </h2>
            </div>
          </div>
        </div>
        <div className="more_blogs flex flex-col">
          <div className="upper_content flex justify-between">
            <h2 className="title text-[#354547] text-xl">Trending Now</h2>
            <button className="text-[#354547] font-semibold">View All</button>
          </div>
          <div className="blogs my-2 ">
            <div className="blog flex my-3">
              <div className="image w-[100px] h-[75px] ">
                <img
                  className="scale-110"
                  src={covid}
                  alt=""
                  style={{ maxWidth: "100px", height: "100%", width: "100px" }}
                />
              </div>
              <div className="text_content">
                <h1 className="title text-xs font-semibold">
                  Creative industries are on the verge of depletion due to
                  COVID-19
                </h1>
                <h2
                  className="subtitle text-xs
                "
                >
                  In a period where many industries remain highly unclear,
                  others want to grasp how COVID-19 impact
                </h2>
              </div>
            </div>
            <Divider />
            <div className="blog flex my-3">
              <div
                className="image w-[100px] h-[75px]"
                style={{ maxWidth: "100px" }}
              >
                <img
                  src={expections}
                  alt=""
                  style={{ maxWidth: "100px", height: "100%" }}
                />
              </div>
              <div className="text_content ">
                <h1 className="title text-sm font-semibold">
                  Photography: Expectations vs. Reality
                </h1>
                <h2 className="subtitle text-xs">
                  Most of the time without any hands-on experience in
                  photography, professional and advanced photography actually
                </h2>
              </div>
            </div>
            <Divider />
            <div className="blog flex my-3">
              <div className="image w-[100px] h-[75px]">
                <img
                  src={photograph}
                  alt=""
                  style={{ maxWidth: "100px", height: "100%" }}
                />
              </div>
              <div className="text_content">
                <h1 className="title text-sm font-semibold">
                  Wedding Photography at Goa
                </h1>
                <h2 className="subtitle text-xs">
                  Wedding Photography in Goa If not, every couple when they make
                  their list of Pre-wedding shoot
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
