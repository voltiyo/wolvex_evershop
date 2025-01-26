import React from "react";
import Area from "@components/common/Area";
import LoadingBar from "@components/common/LoadingBar";
import "../../css/global.scss";
import "./Layout.scss";
import "./tailwind.scss";

export default function Layout() {
  return (
    <>
      <LoadingBar />
      <div className="header">
        <div className="page-width flex justify-between">
          <Area
            id="header"
            noOuter
            coreComponents={[
              {
                component: { default: Area },
                props: {
                  id: "icon-wrapper",
                  className: "icon-wrapper flex justify-between space-x-1",
                },
                sortOrder: 20,
              },
            ]}
          />
        </div>
      </div>
      <main className="content">
        <Area id="content" className="" noOuter />
      </main>
      <div className="footer">
        <div className="flex lg:justify-around items-start lg:py-8 lg:flex-row max-md:flex-col max-md:justify-center  max-md:gap-12 max-md:mx-16">
          <div className="flex items-center justify-center flex-col gap-8 max-md:relative max-md:-translate-x-1/2 max-md:left-[50%] ">
            <img src="/WOLVEX_LOGO_master.png" className="w-64" alt="" />
            <div className="flex">
              <a href="https://www.instagram.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <p><strong>Business Address:</strong>  Unit 29 HighCroft Industrial Estate, Entreprise <br /> Road, Watertooville, P08 OBT, United Kingdom</p>
            <p><strong>Trading Address:</strong>  Unit 4, IK Business Park, Blackburn BB1 SFB,<br /> United Kingdom</p>
            <p><strong>Phone:</strong>  +447459471000</p>
            <p><strong>Email:</strong>  sales@wolvex.co.uk</p>
            <p><strong>Monday-Friday:</strong>  9:00 AM - 5:00 PM</p>
            <p><strong>Saturday:</strong>  11:00 AM - 5:00 PM</p>
          </div>

          <div className="flex flex-col gap-8">
            <p>About US</p>
            <p>Customer Service</p>
            <p>Ship / Return Policy</p>
            <p>Contact Us</p>
          </div>

          <div className="flex flex-col gap-8">
            <p>Order and Returns</p>
            <p>Payment Policy</p>
            <p>Shipment Policy</p>
            <p>Privacy and Cookies Policy</p>
          </div>

          <div>
            <p>Payment Methods</p>
            <p className="bg-black text-white p-4">Debit / Credit Card payment (Stripe)</p>
            
            <p className="mt-4">Shipping Methods</p>
            <div className="flex gap-4 ">
              <p className="bg-black text-white p-4 w-fit">Paid 24 Hours</p>
              <p className="bg-black text-white p-4 w-fit">Free 48 Hours</p>
            </div>
          </div>

        </div>

        

      </div>
    </>
  );
}

export const layout = {
  areaId: "body",
  sortOrder: 1,
};
