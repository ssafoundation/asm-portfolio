import React from 'react';
import { Link } from 'react-router-dom';
import Blog_Thumb from './blog-1.jpg';
const Blogs = () => {
    return (
        <div className="dashboard-body">

            <div className="blog-area">
                <div className="blog-padding width-wrap">
                    <div className="blog-title">
                        <h2><span>My</span> Blog</h2>
                    </div>
                    <div className="blog-main-wrap">
                        <div className="blog-single-wrap">
                            <div className="blog-article-wrap">

                                <div className="blog-single-item">
                                    <div className="blog-image">
                                        <img src={Blog_Thumb} alt="blog thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <Link to='/'><h4>Lorem, ipsum dolor.</h4></Link>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Architecto quos corrupti labore, accusamus
                                            veritatis soluta.
                        </p>
                                    </div>
                                    <div className="blog-review">
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-heart"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-thumbs-up"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="blog-single-item">
                                    <div className="blog-image">
                                        <img src={Blog_Thumb} alt="blog thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <Link to='/'><h4>Lorem, ipsum dolor.</h4></Link>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Architecto quos corrupti labore, accusamus
                                            veritatis soluta.
                        </p>
                                    </div>
                                    <div className="blog-review">
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-heart"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-thumbs-up"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="blog-single-item">
                                    <div className="blog-image">
                                        <img src={Blog_Thumb} alt="blog thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <Link to='/'><h4>Lorem, ipsum dolor.</h4></Link>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Architecto quos corrupti labore, accusamus
                                            veritatis soluta.
                        </p>
                                    </div>
                                    <div className="blog-review">
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-heart"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-thumbs-up"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="blog-single-item">
                                    <div className="blog-image">
                                        <img src={Blog_Thumb} alt="blog thumb" />
                                    </div>
                                    <div className="blog-content">
                                        <Link to='/'><h4>Lorem, ipsum dolor.</h4></Link>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit. Architecto quos corrupti labore, accusamus
                                            veritatis soluta.
                        </p>
                                    </div>
                                    <div className="blog-review">
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-heart"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-thumbs-up"></i>
                                        </span>
                                        <span>
                                            <p>0</p>
                                            <i className="far fa-star"></i>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <aside className="blog-sidebar">
                                <div className="sidebar-title">
                                    <h4>latest blog</h4>
                                </div>
                                <div className="blog-sidebar-wrap">
                                    <ul>
                                        <li>
                                            <div className="sidebar-item">
                                                <div className="sidebar-image">
                                                    <img src={Blog_Thumb} alt="blog thumb" />
                                                </div>
                                                <div className="sidebar-content">
                                                    <h4>Lorem, ipsum dolor.</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Ut, et.
                              </p>
                                                    <Link to='/'>Read More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar-item">
                                                <div className="sidebar-image">
                                                    <img src={Blog_Thumb} alt="blog thumb" />
                                                </div>
                                                <div className="sidebar-content">
                                                    <h4>Lorem, ipsum dolor.</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Ut, et.
                              </p>
                                                    <Link to='/'>Read More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar-item">
                                                <div className="sidebar-image">
                                                    <img src={Blog_Thumb} alt="blog thumb" />
                                                </div>
                                                <div className="sidebar-content">
                                                    <h4>Lorem, ipsum dolor.</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Ut, et.
                              </p>
                                                    <Link to='/'>Read More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar-item">
                                                <div className="sidebar-image">
                                                    <img src={Blog_Thumb} alt="blog thumb" />
                                                </div>
                                                <div className="sidebar-content">
                                                    <h4>Lorem, ipsum dolor.</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Ut, et.
                              </p>
                                                    <Link to='/'>Read More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar-item">
                                                <div className="sidebar-image">
                                                    <img src={Blog_Thumb} alt="blog thumb" />
                                                </div>
                                                <div className="sidebar-content">
                                                    <h4>Lorem, ipsum dolor.</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Ut, et.
                              </p>
                                                    <Link to='/'>Read More</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sidebar-item">
                                                <div className="sidebar-image">
                                                    <img src={Blog_Thumb} alt="blog thumb" />
                                                </div>
                                                <div className="sidebar-content">
                                                    <h4>Lorem, ipsum dolor.</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Ut, et.
                              </p>
                                                    <Link to='/'>Read More</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;