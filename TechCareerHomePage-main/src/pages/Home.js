import React from 'react'
import Header from '../components/Header'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JobList from "../components/jobs/JobList";
import CardList from "../components/courses/CardList";
import TeknikSozluk from '../components/teknikSozluk/TeknikSozluk';
import Community from '../components/community/Community';
import CommunityNelerYaptik from '../components/communityNelerYaptik/CommunityNelerYaptik';
import Testimonials from '../components/testimonials/Testimonials';
import WhyTechcareer from "../components/whytechcareer/WhyTechcareer";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";

function Home() {
	return (
		<>
			<div>
				<Header />
			</div>
			<div>
				<JobList />
			</div>
			<div>
				<CardList />
			</div>
			<div>
				<Blog />
			</div>
			<div>
				<TeknikSozluk />
			</div >
			<div>
				<Community />
			</div >
			<div>
				<CommunityNelerYaptik />
			</div >
			<div>
				<Testimonials />
			</div>
			<div>
				<WhyTechcareer />
			</div>
			<div>
				<Footer />
			</div>

		</>
	)
}

export default Home