import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/images/banner-msn-production.svg"
import "../../shared/Shared.css";
import SecondaryBtn from "../../../components/SecondaryBtn/SecondaryBtn";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-0">MSN PRODUCTION</h1>
        <h2 className="text-2xl text-primary font-bold my-6">Digital & Kreativitas Kami Wujudkan Visi Bisnis Anda!</h2>
        {/* </div> */}
        <p className="text-accent max-w-md mb-10 font-medium">
          MSN PRODUCTION adalah perusahaan penyedia layanan jasa pembuatan Website, Aplikasi Mobile, Branding & Konten Kreatif, serta Internet Marketing & Advertising sesuai kebutuhan bisnis anda dengan harga murah kualitas mewah.
        </p>

        <div className="flex items-center mb-20">
          <a
            href="https://wa.me/6282125664554"
            target="blank"
          >
            <button className="primary-button">
              <span className="text-button-mobile">Konsultasi Gratis</span>
              <span>
                <FaAngleRight />
              </span>
            </button>
          </a>
          <Link to="/paket" className="ml-4">
            <SecondaryBtn>
              <span className="text-button-mobile ">Lihat Penawaran</span>
              <span>
                <FaAngleRight />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="order-1 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0 pt-10">
          <img src={bannerImg} alt="Banner MSN PRODUCTION"></img>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
