import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
              Discover Amazing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Content
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the latest and most exciting news from the entertainment industry.
              Stay updated with exclusive stories, interviews, and behind-the-scenes content.
            </p>
            <div className="space-x-4">
              <button className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 border-0 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                Get Started
              </button>
              <button className="btn btn-outline border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80"
              alt="Box Office"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;