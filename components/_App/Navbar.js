import React from 'react';
import Link from '../../utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="edemy-nav">
                    <div className="container-fluid">
                        <div className="navbar navbar-expand-lg navbar-light">
              
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="/images/logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <form className="search-box">
                                    <input type="text" className="input-search" placeholder="Search for anything" />
                                    <button type="submit">
                                        <i className="flaticon-search"></i>
                                    </button>
                                </form>

                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Home <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">eLearning School</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/vendor-certification-training" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Vendor Certification Training</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/online-training-school" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Online Training School</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/distance-learning" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Distance Learning</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/language-school" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Language School</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/modern-schooling" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Modern Schooling</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/yoga-training" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Yoga Training</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/health-coaching" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Health Coaching</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/kindergaten" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Kindergaten</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/learning-management" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Learning Management</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
												<Link
													href="/gym-coaching"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Gym Coaching
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/business-coach"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Business Coach
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/motivation"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Motivation
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/kitchen-coach"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Kitchen Coach
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/online-art"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Online Art
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/single-instructor"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Single Instructor
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/college-website"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														College Website
													</a>
												</Link>
											</li>

											<li className="nav-item">
												<Link
													href="/online-photography"
													activeClassName="active"
												>
													<a
														onClick={toggleNavbar}
														className="nav-link"
													>
														Online Photography
													</a>
												</Link>
											</li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        About Us <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/about-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Us 01</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Us 02</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/about-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">About Us 03</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
												<Link href="/">
													<a
														onClick={(e) =>
															e.preventDefault()
														}
														className="nav-link"
													>
														College Website Inner Pages{" "}
														<i className="bx bx-chevron-down"></i>
													</a>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/about-college"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																About College
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/accommodation"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Accommodation
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/fees-and-scholarships"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Fees and scholarships
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/college-admissions"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																College Admissions
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/undergraduate"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Undergraduate
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/business"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Business
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/administration"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Administration
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/faculties-teachers"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Faculties teachers
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/apply-now"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Apply Now
															</a>
														</Link>
													</li> 
												</ul>
											</li>
 
                                            <li className="nav-item">
                                                <Link href="/success-story" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Success Story</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/advisor" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Teacher</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/gallery" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Gallery</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">FAQs</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/contact" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/profile-authentication" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Login/Register</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/purchase-guide" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Purchase Guide</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/terms-of-service" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Terms of Service</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
 
                                    <li className="nav-item megamenu">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Courses <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/courses-1" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 01</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-2" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 02</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-3" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 03</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-4" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 04</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-5" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses List 01</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-6" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Right Sidebar</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
 
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-1" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Single Layout 01</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-2" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Single Layout 02</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/categories" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Categories</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/membership-levels" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Membership Levels</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/become-a-teacher" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Become a Teacher</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/profile" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Profile</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
 
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/courses-1" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 01</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-2" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 02</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-3" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 03</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-4" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Grid 04</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-5" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses List 01</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/courses-6" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Right Sidebar</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
 
                                                        <div className="col">
                                                            <ul className="megamenu-submenu">
                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-1" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Single Layout 01</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/single-courses-2" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Single Layout 02</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/categories" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Courses Categories</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/membership-levels" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Membership Levels</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/become-a-teacher" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Become a Teacher</a>
                                                                    </Link>
                                                                </li>

                                                                <li className="nav-item">
                                                                    <Link href="/profile" activeClassName="active">
                                                                        <a onClick={toggleNavbar} className="nav-link">Profile</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                
                                                    <div className="row m-0 mobile-none">
                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-code-alt'></i>
                                                                </div>
                                                                <h3>Development</h3>
                                                                <span className="sub-title">60 Courses</span>

                                                                <Link href="/courses-1">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-camera'></i>
                                                                </div>
                                                                <h3>Photography</h3>
                                                                <span className="sub-title">21 Courses</span>
                                                                
                                                                <Link href="/courses-2">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-layer'></i>
                                                                </div>
                                                                <h3>Design</h3>
                                                                <span className="sub-title">58 Courses</span>
                                                                
                                                                <Link href="/courses-3">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bxs-flag-checkered'></i>
                                                                </div>
                                                                <h3>Language</h3>
                                                                <span className="sub-title">99 Courses</span>
                                                                
                                                                <Link href="/courses-4">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-health'></i>
                                                                </div>
                                                                <h3>Fitness</h3>
                                                                <span className="sub-title">21 Courses</span>
                                                                
                                                                <Link href="/courses-5">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
                                                            <div className="single-category-widget">
                                                                <div className="icon">
                                                                    <i className='bx bx-line-chart'></i>
                                                                </div>
                                                                <h3>Business</h3>
                                                                <span className="sub-title">49 Courses</span>
                                                                
                                                                <Link href="/courses-6">
                                                                    <a className="link-btn"></a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Events <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/events" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Events</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/single-events" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Events Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Shop <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/products-list-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product List 01</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/products-list-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product List 02</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/cart" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Cart</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/checkout" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Checkout</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/single-products" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Product Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
 
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-link">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog-1" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Grid (2 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-2" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Grid (3 in Row)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-3" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Grid (Full Width)</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-4" activeClassName="active">
                                                    <a onClick={toggleNavbar} className="nav-link">Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-link">
                                                        Single Post <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/single-blog-1" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">Default</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/single-blog-2" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">With Video</a>
                                                        </Link>
                                                    </li> 

                                                    <li className="nav-item">
                                                        <Link href="/single-blog-3" activeClassName="active">
                                                            <a onClick={toggleNavbar} className="nav-link">With Image Slider</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="cart-btn">
                                            <Link href="/cart">
                                                <a><i className='flaticon-shopping-cart'></i> <span>3</span></a>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <Link href="/profile-authentication">
                                            <a className="default-btn">
                                                <i className="flaticon-user"></i> Login/Register <span></span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
