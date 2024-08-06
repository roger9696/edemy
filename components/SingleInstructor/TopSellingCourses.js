import React from "react";
import Link from "next/link";

const TopSellingCourses = () => {
	return (
		<>
			<div className="courses-area instructor-courses">
				<div className="container">
					<div className="section-title instructor-title-color">
						<span className="sub-title">GO AT YOUR OWN PACE</span>
						<h2 className="el-messiri-font">Top Selling Courses</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-1">
										<a className="d-block image">
											<img
												src="/images/instructor-home/courses/courses1.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$39</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user/user1.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Alex Morgan</span>
									</div>
									<h3 className="el-messiri-font">
										<Link href="/single-courses-1">
											<a>
												Complete Beginner's Guide to
												Digital Art
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>

									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											15 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											145 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-1">
										<a className="d-block image">
											<img
												src="/images/instructor-home/courses/courses2.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$49</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user/user2.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Sarah Taylor</span>
									</div>
									<h3 className="el-messiri-font">
										<Link href="/single-courses-1">
											<a>
												How to Draw Cute Cartoon
												Characters
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											15 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											145 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-1">
										<a className="d-block image">
											<img
												src="/images/instructor-home/courses/courses3.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$59</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user/user3.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>David Warner</span>
									</div>
									<h3 className="el-messiri-font">
										<Link href="/single-courses-1">
											<a>
												Learn How to Make a Retro
												Digital Collage
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											15 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											145 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-1">
										<a className="d-block image">
											<img
												src="/images/instructor-home/courses/courses4.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$76</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user/user4.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>James Andy</span>
									</div>
									<h3 className="el-messiri-font">
										<Link href="/single-courses-1">
											<a>
												Digitally Painting Light and
												Color: Amateur to Master
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											15 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											145 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-1">
										<a className="d-block image">
											<img
												src="/images/instructor-home/courses/courses5.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$87</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user/user5.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Jassica Hische</span>
									</div>
									<h3 className="el-messiri-font">
										<Link href="/single-courses-1">
											<a>
												Draw, Sketch, Paint, and Design
												on Your iPad
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											15 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											145 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-1">
										<a className="d-block image">
											<img
												src="/images/instructor-home/courses/courses6.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<button type="button" className="fav">
										<i className="flaticon-heart"></i>
									</button>
									<div className="price shadow">$99</div>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user/user6.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Chris Evans</span>
									</div>
									<h3 className="el-messiri-font">
										<Link href="/single-courses-1">
											<a>
												Building Confidence Think
												Drawing: Art of Beginners
											</a>
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipiscing elit sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i>{" "}
											15 Lessons
										</li>
										<li>
											<i className="flaticon-people"></i>{" "}
											145 Students
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="courses-info">
								<p>
									Get the most dedicated consultation for your
									life-changing course. Earn a certification
									for your effort and passion{" "}
									<Link href="/authentication">
										<a>Join Fre Now</a>
									</Link>
									.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="instructor-courses-wave-shape">
					<img
						src="/images/instructor-home/courses/wave.png"
						alt="image"
					/>
				</div>
				<div className="instructor-courses-shape-1">
					<img
						src="/images/instructor-home/courses/shape1.png"
						alt="image"
					/>
				</div>
				<div className="instructor-courses-shape-2">
					<img
						src="/images/instructor-home/courses/shape2.png"
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default TopSellingCourses;
