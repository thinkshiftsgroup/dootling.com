"use client"
import React from "react";
import { Footer } from "@/components/main/landing-page/footer";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import Image from "next/image";

const Profile = () => {
  const galleryImages = [
    "g1.jpg",
    "g2.jpg",
    "g3.jpg",
    "g4.jpg",
    "g5.jpg",
    "g6.jpg",
    "g7.jpg",
    "g8.jpg",
    "g9.jpg",
  ];

  return (
    <div>
      <Navbar />
      <main className="main-content mt-20">
        <div className="relative">
          <div>
            <div className="relative"></div>
            <div className="content-inner " id="page_layout">
              <div className="w-full max-w-[1450px]  mx-auto px-4">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/8 px-4">
                    <div className="w-full  mx-auto px-4">
                      <div
                        className="header-cover-image w-full h-40 rounded-lg"
                        style={{
                          backgroundImage:
                            "url('/images/page-img/profile-bg1.jpg')",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </div>
                    <div className="w-full  mx-auto px-1">
                      <div className="flex flex-wrap px-2">
                        <div className="container px-4">
                          <div className="card profile-box">
                            <div className="card-body">
                              <div className="flex flex-wrap items-center item-header-content">
                                <div className="w-full lg:w-1/3 profile-left">
                                  <ul className="flex items-center justify-center gap-3 list-none p-0 m-0 mb-3 flex-wrap">
                                    <li className="flex items-center gap-1">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/gamipress/coin.svg"
                                        className="max-w-full h-6 w-6 avatar-24"
                                        alt="coin"
                                        loading="lazy"
                                      />
                                      <h6 className="text-sm font-semibold">
                                        6765 Coins
                                      </h6>
                                    </li>
                                    <li className="flex items-center gap-1">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/gamipress/credit.svg"
                                        className="max-w-full h-6 w-6 avatar-24"
                                        alt="credit"
                                        loading="lazy"
                                      />
                                      <h6 className="text-sm font-semibold">
                                        7180 Credits
                                      </h6>
                                    </li>
                                    <li className="flex items-center gap-1">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/gamipress/gems.svg"
                                        className="max-w-full h-6 w-6 avatar-24"
                                        alt="coin"
                                        loading="lazy"
                                      />
                                      <h6 className="text-sm font-semibold">
                                        100 Gems
                                      </h6>
                                    </li>
                                  </ul>
                                  <div className="social-links">
                                    <ul className="social-data-block flex items-center justify-center gap-3 list-none p-0 m-0">
                                      <li className="text-center">
                                        <a href="#">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/Images/icon/08.png"
                                            className="max-w-full rounded"
                                            alt="facebook"
                                            loading="lazy"
                                          />
                                        </a>
                                      </li>
                                      <li className="text-center">
                                        <a href="#">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/icon/09.png"
                                            className="max-w-full rounded"
                                            alt="Twitter"
                                            loading="lazy"
                                          />
                                        </a>
                                      </li>
                                      <li className="text-center">
                                        <a href="#">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/icon/10.png"
                                            className="max-w-full rounded"
                                            alt="Instagram"
                                            loading="lazy"
                                          />
                                        </a>
                                      </li>
                                      <li className="text-center">
                                        <a href="#">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/icon/11.png"
                                            className="max-w-full rounded"
                                            alt="Google plus"
                                            loading="lazy"
                                          />
                                        </a>
                                      </li>
                                      <li className="text-center">
                                        <a href="#">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/icon/12.png"
                                            className="max-w-full rounded"
                                            alt="You tube"
                                            loading="lazy"
                                          />
                                        </a>
                                      </li>
                                      <li className="text-center">
                                        <a href="#">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/icon/13.png"
                                            className="max-w-full rounded"
                                            alt="linkedin"
                                            loading="lazy"
                                          />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="w-full lg:w-1/3 text-center profile-center">
                                  <div className="header-avatar relative inline-block">
                                    <span className="change-profile-image bg-blue-600 rounded-full flex flex-col justify-center items-center">
                                      <i className="ph ph-camera text-xl text-white"></i>
                                    </span>
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/user/1.jpg"
                                      alt="user"
                                      className="avatar-150 border-4 border-white rounded-lg"
                                    />
                                    <span className="badge bg-green-500 font-medium tracking-wide chat-status">
                                      online
                                    </span>
                                  </div>
                                  <h5 className="flex items-center justify-center gap-1 mb-2">
                                    Marvin McKinney
                                    <span className="inline-flex items-center">
                                      <i className="ph-fill ph-seal-check text-xl text-blue-600"></i>
                                    </span>
                                  </h5>
                                  <ul className="flex items-center justify-center gap-3 list-none p-0 m-0">
                                    <li className="flex items-center gap-1">
                                      <i className="ph ph-map-pin text-base"></i>
                                      <span className="text-sm uppercase font-medium">
                                        lyON
                                      </span>
                                    </li>
                                    <li className="flex items-center gap-1">
                                      <i className="ph ph-globe-hemisphere-east text-xl"></i>
                                      <a
                                        href="https://smartinvestmentoff.com/"
                                        className="text-sm font-medium text-gray-900"
                                      >
                                        smartinvestmentoff.com/
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="w-full lg:w-1/3 profile-right">
                                  <ul className="user-meta list-none p-0 flex items-center justify-center">
                                    <li>
                                      <h5>0</h5>Posts
                                    </li>
                                    <li>
                                      <h5>0</h5>Comments
                                    </li>
                                    <li>
                                      <h5>82.6K</h5>Views
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-body p-0">
                              <div className="user-tabing item-list-tabs">
                                <button
                                  id="scrollLeft"
                                  className="p-1 btn absolute left-0 top-1/2 -translate-y-1/2"
                                  // style="z-index: 10;"
                                >
                                  <i className="ph ph-caret-left text-3xl"></i>
                                </button>
                                <ul
                                  className="nav nav-pills flex items-center profile-feed-items p-0 m-0 rounded flex-nowrap overflow-hidden"
                                  id="tabContainer"
                                  // style="scroll-behavior: smooth;"
                                >
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link active flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-timeline-tab"
                                      aria-selected="true"
                                      data-bs-toggle="pill"
                                      data-bs-target="#timeline"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-calendar"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Timeline
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-about-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#about"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-user"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">About</p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-friends-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#friends"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-users"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Friends
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-groups-tab "
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#groups"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-users-three"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Groups
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-media-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#media"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-image-square"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">Media</p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-notifications-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#notifications"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-bell"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Notifications
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      href="../app/chat.html"
                                      target="_blank"
                                      className="flex flex-col items-center flex-row justify-center gap-2"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-envelope-simple"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Messages
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-invitations-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#invitations"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-phone-call"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Invitations
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-forums-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#forums"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-files"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Forums
                                      </p>
                                    </a>
                                  </li>
                                  <li className="nav-item w-1/3 md:w-1/6 py-3">
                                    <a
                                      className="nav-link flex flex-col items-center flex-row justify-center gap-2"
                                      href="#pills-points-tab"
                                      aria-selected="false"
                                      data-bs-toggle="pill"
                                      data-bs-target="#points"
                                      role="button"
                                    >
                                      <span className="icon rounded-lg text-xl flex flex-col items-center justify-center p-3">
                                        <i className="ph ph-note"></i>
                                      </span>
                                      <p className="mb-0 mt-0 md:mt-3">
                                        Points
                                      </p>
                                    </a>
                                  </li>
                                </ul>
                                <button
                                  id="scrollRight"
                                  className="p-1 btn z-10 absolute right-0 top-1/2 -translate-y-1/2"
                                >
                                  <i className="ph ph-caret-right text-3xl"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap px-2">
                        <div className="w-full">
                          <div>
                            <div
                              className="tab-pane fade show active"
                              id="timeline"
                              role="tabpanel"
                            >
                              <div className="card-body p-0">
                                <div className="flex flex-wrap">
                                  <div className="w-full lg:w-1/3 px-4">
                                    <div className="card">
                                      <div className="card-body">
                                        <a
                                          href="#"
                                          className="inline-flex items-center gap-2"
                                        >
                                          <span className="font-normal btn btn-primary p-1 flex flex-col items-center justify-center">
                                            <i className="ph ph-star text-2xl"></i>
                                          </span>
                                          <span>27 Items for you</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="card">
                                      <div className="card-header flex justify-between border-b border-[#f1f1f1]">
                                        <div className=" header-title">
                                          <h4 className="card-title">
                                            Life Event
                                          </h4>
                                        </div>
                                        <div className="card-header-toolbar flex items-center">
                                          <p className="m-0">
                                            <a href="javacsript:void();">
                                              Create{" "}
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="card-body">
                                        <div className="flex flex-wrap">
                                          <div className="w-full">
                                            <div className="event-post relative">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/07.jpg"
                                                  alt="gallary-image"
                                                  className="w-full h-auto rounded"
                                                  loading="lazy"
                                                />
                                              </a>
                                              <div className="job-icon-position">
                                                <span className="job-icon bg-blue-600 p-2 inline-flex flex-col justify-center items-center rounded-full text-white">
                                                  <i className="ph ph-shopping-bag text-xl"></i>
                                                </span>
                                              </div>
                                              <div className="card-body text-center p-2">
                                                <h5>
                                                  Started New Job at Apple
                                                </h5>
                                                <p>January 24, 2019</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="w-full">
                                            <div className="event-post relative">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/06.jpg"
                                                  alt="gallary-image"
                                                  className="w-full h-auto rounded"
                                                  loading="lazy"
                                                />
                                              </a>
                                              <div className="job-icon-position">
                                                <span className="job-icon bg-blue-600 p-2 inline-flex flex-col justify-center items-center rounded-full text-white">
                                                  <i className="ph ph-shopping-bag text-xl"></i>
                                                </span>
                                              </div>
                                              <div className="card-body text-center p-2">
                                                <h5>Freelance Photographer</h5>
                                                <p className="mb-0">
                                                  January 24, 2019
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="fixed-suggestion mb-4">
                                      <div className="card">
                                        <div className="card-header flex justify-between border-b border-[#f1f1f1]">
                                          <div className=" header-title">
                                            <h4 className="card-title">
                                              Photos
                                            </h4>
                                          </div>
                                          <div className="card-header-toolbar flex items-center">
                                            <p className="m-0">
                                              <a href="javacsript:void();">
                                                Add Photo{" "}
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="card-body p-0">
                                          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 list-none p-0 m-0">
                                            {galleryImages.map((img, index) => (
                                              <li
                                                key={index}
                                                className="overflow-hidden rounded-md group"
                                              >
                                                <span
                                                //   href={`/images/page-image/${img}`}
                                                  data-fslightbox="gallery"
                                                >
                                                  <Image
                                                    src={`/images/page-img/${img}`}
                                                    width={150}
                                                    height={150}
                                                    alt={`photo-profile-${
                                                      index + 1
                                                    }`}
                                                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                  />
                                                </span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="card">
                                        <div className="card-header flex justify-between border-b border-[#f1f1f1]">
                                          <div className=" header-title">
                                            <h4 className="card-title">
                                              Friends
                                            </h4>
                                          </div>
                                          <div className="card-header-toolbar flex items-center">
                                            <p className="m-0">
                                              <a href="javacsript:void();">
                                                Add New{" "}
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <div className="flex flex-wrap">
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/05.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Anna Rexia
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/06.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Tara Zona
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/07.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Polly Tech
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/08.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Bill Emia
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/09.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Moe Fugga
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/10.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Hal Appeno{" "}
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/07.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Zack Lee
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/06.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Terry Aki
                                              </h6>
                                            </div>
                                            <div className="w-1/3 xl:w-1/3 md:w-1/2 mt-2 text-center px-1">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/05.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="max-w-full h-auto"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Greta Life
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-full lg:w-2/3 px-4">
                                    <div id="content">
                                      <div className="flex flex-wrap pb-4">
                                        <div className="w-full">
                                          <div
                                            id="post-modal-data"
                                            className="rounded-lg shadow bg-white create-post-modal"
                                          >
                                            <div className="flex justify-between items-center p-4 border-b border-[#f1f1f1]">
                                              <div className=" header-title">
                                                <h5 className="text-xl font-semibold">
                                                  Add a Post
                                                </h5>
                                              </div>
                                              <div className="relative">
                                                <div
                                                  className="leading-none cursor-pointer"
                                                  id="post-option"
                                                >
                                                  <i className="ph-bold ph-dots-three text-3xl text-body"></i>
                                                </div>
                                                <div
                                                  className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg"
                                                  aria-labelledby="post-option"
                                                >
                                                  <a
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#post-modal"
                                                  >
                                                    Check in
                                                  </a>
                                                  <a
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#post-modal"
                                                  >
                                                    Live Video
                                                  </a>
                                                  <a
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#post-modal"
                                                  >
                                                    GIF
                                                  </a>
                                                  <a
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#post-modal"
                                                  >
                                                    Watch Party
                                                  </a>
                                                  <a
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                    href="#"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#post-modal"
                                                  >
                                                    Play with Friend
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="p-4">
                                              <div>
                                                <form className="post-text w-full">
                                                  <input
                                                    type="text"
                                                    className="w-full rounded p-0 border-0"
                                                    placeholder="Write And Share Your Post With Your Friends..."
                                                  />
                                                </form>
                                              </div>
                                            </div>
                                            <div className="bg-blue-50 rounded-b-lg p-4">
                                              <div className="flex items-center justify-between flex-wrap gap-3">
                                                <div className="create-post-data">
                                                  <ul className="flex items-center gap-4 m-0 p-0 list-none">
                                                    <li>
                                                      <a
                                                        href="javascript:void(0);"
                                                        className="text-body"
                                                      >
                                                        <i className="ph ph-camera text-3xl"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="javascript:void(0);"
                                                        className="text-body"
                                                      >
                                                        <i className="ph ph-user-plus text-3xl"></i>
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <a
                                                        href="javascript:void(0);"
                                                        className="text-body"
                                                      >
                                                        <i className="ph ph-map-pin text-3xl"></i>
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div>
                                                  <ul className="flex items-center gap-4 m-0 p-0 list-none">
                                                    <li>
                                                      <a
                                                        href="javascript:void(0);"
                                                        className="text-body font-medium"
                                                      >
                                                        Discard
                                                      </a>
                                                    </li>
                                                    <li>
                                                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                                        Post
                                                      </button>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex flex-wrap social-post-container pb-4">
                                        <div className="w-full social-post mb-4">
                                          <div className="rounded-lg shadow bg-white">
                                            <div className="p-4">
                                              <div className="user-post-data">
                                                <div className="flex items-center justify-between gap-2 lg:gap-3">
                                                  <div className="flex-shrink-0">
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      className="border-2 rounded-full user-post-profile"
                                                      src="/images/user/01.jpg"
                                                      alt="user-image"
                                                      loading="lazy"
                                                    />
                                                  </div>
                                                  <div className="w-full">
                                                    <div className="flex items-center justify-between">
                                                      <div>
                                                        <h6 className="mb-0 inline-block">
                                                          Anna Sthesia
                                                        </h6>
                                                        <span className="inline-block text-blue-600">
                                                          <i className="ph-fill ph-seal-check"></i>
                                                        </span>
                                                        <span className="mb-0 inline-block capitalize font-medium">
                                                          posted an update
                                                        </span>
                                                        <p className="mb-0">
                                                          2 minutes ago
                                                        </p>
                                                      </div>
                                                      <div className="card-post-toolbar">
                                                        <div className="relative">
                                                          <div className="leading-none cursor-pointer">
                                                            <i className="ph-bold ph-dots-three text-3xl text-body"></i>
                                                          </div>
                                                          <div className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg m-0 p-0">
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-floppy-disk text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Save Post
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Add this to
                                                                    your saved
                                                                    items
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-x-circle text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Hide Post
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    See fewer
                                                                    posts like
                                                                    this.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-user-minus text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Unfollow
                                                                    User
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Stop seeing
                                                                    posts but
                                                                    stay
                                                                    friends.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-bell text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Notifications
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Turn on
                                                                    notifications
                                                                    for this
                                                                    post
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4">
                                                <p className="m-0">
                                                  "Energy, the tangible
                                                  expression of pure thought,
                                                  propels intentions into
                                                  powerful actions, bridging the
                                                  gap between mind and
                                                  manifestation."
                                                </p>
                                                <ul className="flex flex-wrap gap-1 m-0 p-0 list-none">
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #friends
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #party
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #birthday
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #together
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #celebration
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                              <div className="user-post mt-4">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/fun.jpg"
                                                  className="rounded"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/fun.jpg"
                                                    alt="post-image"
                                                    className="w-full rounded"
                                                    loading="lazy"
                                                  />
                                                </a>
                                              </div>
                                              <div className="post-meta-likes mt-4">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                  <ul className="flex m-0 p-0 list-none post-user-liked-list">
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/01.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/02.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/03.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/04.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                  </ul>
                                                  <div className="inline-flex items-center gap-1">
                                                    <h6 className="m-0 text-sm">
                                                      Aliana Molex
                                                    </h6>
                                                    <span className="capitalize text-sm font-medium cursor-pointer">
                                                      and 208 others liked this
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-area mt-4 pt-4 border-t">
                                                <div className="flex justify-between items-center flex-wrap">
                                                  <div className="like-block relative flex items-center flex-shrink-0">
                                                    <div className="like-data">
                                                      <div className="relative">
                                                        <span className="cursor-pointer flex items-center justify-center gap-1">
                                                          <i className="ph ph-thumbs-up text-3xl"></i>
                                                          <span className="font-medium">
                                                            140 Likes
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center gap-3 flex-shrink-0">
                                                    <div className="total-comment-block flex justify-center items-center gap-1 cursor-pointer">
                                                      <i className="ph ph-chat-circle-text text-xl"></i>
                                                      <span className="font-medium">
                                                        20 Comment
                                                      </span>
                                                    </div>
                                                    <div className="share-block flex items-center feather-icon">
                                                      <a
                                                        href="javascript:void(0);"
                                                        className="flex justify-center items-center gap-1"
                                                      >
                                                        <i className="ph ph-share-network text-xl"></i>
                                                        <span className="font-medium">
                                                          99 Share
                                                        </span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="w-full social-post mb-4">
                                          <div className="rounded-lg shadow bg-white">
                                            <div className="p-4">
                                              <div className="user-post-data">
                                                <div className="flex items-center justify-between gap-2 lg:gap-3">
                                                  <div className="flex-shrink-0">
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      className="border border-2 rounded-full user-post-profile"
                                                      src="/images/user/03.jpg"
                                                      alt="user-image"
                                                      loading="lazy"
                                                    />
                                                  </div>
                                                  <div className="w-full">
                                                    <div className="flex items-center justify-between">
                                                      <div>
                                                        <h6 className="mb-0 inline-block">
                                                          Barb Ackue
                                                        </h6>
                                                        <span className="inline-block text-blue-600">
                                                          <i className="ph-fill ph-seal-check"></i>
                                                        </span>
                                                        <span className="mb-0 inline-block capitalize font-medium">
                                                          Add a New Post
                                                        </span>
                                                        <p className="mb-0">
                                                          1 Hour ago
                                                        </p>
                                                      </div>
                                                      <div className="card-post-toolbar">
                                                        <div className="relative">
                                                          <div
                                                            className="leading-none cursor-pointer"
                                                            data-bs-toggle="dropdown"
                                                          >
                                                            <i className="ph-bold ph-dots-three font-size-30 text-body"></i>
                                                          </div>
                                                          <div className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg m-0 p-0">
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-floppy-disk text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Save Post
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Add this to
                                                                    your saved
                                                                    items
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-x-circle text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Hide Post
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    See fewer
                                                                    posts like
                                                                    this.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-user-minus text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Unfollow
                                                                    User
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Stop seeing
                                                                    posts but
                                                                    stay
                                                                    friends.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-bell text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Notifications
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Turn on
                                                                    notifications
                                                                    for this
                                                                    post
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4">
                                                <p className="m-0">
                                                  "Lorem ipsum dolor sit amet,
                                                  consectetur adipiscing elit.
                                                  Morbi nulla dolor, ornare at
                                                  commodo non, feugiat non nisi.
                                                  Phasellus faucibus mollis
                                                  pharetra. Proin blandit ac
                                                  massa sed rhoncus"
                                                </p>
                                                <ul className="flex flex-wrap gap-1 m-0 p-0 list-none">
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #family
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #happiness
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #travelling
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #camping
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-blue-600"
                                                    >
                                                      #climbing
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                              <div className="user-post mt-4">
                                                <div className="flex flex-wrap -mx-2">
                                                  <div className="w-full md:w-1/3 px-2">
                                                    <a
                                                      data-fslightbox="gallery"
                                                      href="/images/page-image/boy.jpg"
                                                      className="rounded"
                                                    >
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/page-img/boy.jpg"
                                                        alt="post-image"
                                                        className="w-full rounded"
                                                        loading="lazy"
                                                      />
                                                    </a>
                                                  </div>
                                                  <div className="w-full md:w-1/3 px-2 mt-3 md:mt-0">
                                                    <a
                                                      data-fslightbox="gallery"
                                                      href="/images/page-image/bus.jpg"
                                                      className="rounded"
                                                    >
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/page-img/bus.jpg"
                                                        alt="post-image"
                                                        className="w-full rounded"
                                                        loading="lazy"
                                                      />
                                                    </a>
                                                  </div>
                                                  <div className="w-full md:w-1/3 px-2 mt-3 md:mt-0">
                                                    <a
                                                      data-fslightbox="gallery"
                                                      href="/images/page-image/fd.jpg"
                                                      className="rounded"
                                                    >
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/page-img/fd.jpg"
                                                        alt="post-image"
                                                        className="w-full rounded"
                                                        loading="lazy"
                                                      />
                                                    </a>
                                                  </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-2 mt-3">
                                                  <div className="w-full md:w-1/2 px-2">
                                                    <a
                                                      data-fslightbox="gallery"
                                                      href="/images/page-image/mountain.jpg"
                                                      className="rounded"
                                                    >
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/page-img/mountain.jpg"
                                                        alt="post-image"
                                                        className="w-full rounded"
                                                        loading="lazy"
                                                      />
                                                    </a>
                                                  </div>
                                                  <div className="w-full md:w-1/2 px-2 mt-3 md:mt-0">
                                                    <div className="post-overlay-box h-full rounded">
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/page-img/pizza.jpg"
                                                        alt="post-image"
                                                        className="w-full h-full object-cover rounded"
                                                        loading="lazy"
                                                      />
                                                      <a
                                                        data-fslightbox="gallery"
                                                        href="/images/page-image/pizza.jpg"
                                                        className="rounded font-size-18"
                                                      >
                                                        +2
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="post-meta-likes mt-4">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                  <ul className="flex m-0 p-0 list-none post-user-liked-list">
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/01.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/02.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/03.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/04.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                  </ul>
                                                  <div className="inline-flex items-center gap-1">
                                                    <h6 className="m-0 text-sm">
                                                      Aliana Molex
                                                    </h6>
                                                    <span
                                                      className="capitalize text-sm font-medium cursor-pointer"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#likemodal"
                                                    >
                                                      and 208 others liked this
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-area mt-4 pt-4 border-t">
                                                <div className="flex justify-between items-center flex-wrap">
                                                  <div className="like-block relative flex items-center flex-shrink-0">
                                                    <div className="like-data">
                                                      <div className="relative">
                                                        <span
                                                          className="cursor-pointer flex items-center justify-center gap-1"
                                                          data-bs-toggle="dropdown"
                                                          aria-haspopup="true"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph ph-thumbs-up text-3xl"></i>
                                                          <span className="font-medium">
                                                            140 Likes
                                                          </span>
                                                        </span>
                                                        <div className="hidden absolute mt-2 bg-white rounded-lg shadow-lg py-2">
                                                          <a
                                                            className="mx-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Like"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/01.png"
                                                              className="w-full"
                                                              alt="like"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Love"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/02.png"
                                                              className="w-full"
                                                              alt="love"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Happy"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/03.png"
                                                              className="w-full"
                                                              alt="happy"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="HaHa"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/04.png"
                                                              className="w-full"
                                                              alt="haha"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Think"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/05.png"
                                                              className="w-full"
                                                              alt="think"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Sad"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/06.png"
                                                              className="w-full"
                                                              alt="sad"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Lovely"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/07.png"
                                                              className="w-full"
                                                              alt="lovely"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center gap-3 flex-shrink-0">
                                                    <div
                                                      className="total-comment-block flex justify-center items-center gap-1 cursor-pointer"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#commentcollapes2"
                                                      aria-expanded="false"
                                                      aria-controls="commentcollapes"
                                                    >
                                                      <i className="ph ph-chat-circle-text text-xl"></i>
                                                      <span className="font-medium">
                                                        20 Comment
                                                      </span>
                                                    </div>
                                                    <div className="share-block flex items-center feather-icon">
                                                      <a
                                                        href="javascript:void(0);"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#share-btn"
                                                        aria-controls="share-btn"
                                                        className="flex justify-center items-center gap-1"
                                                      >
                                                        <i className="ph ph-share-network text-xl"></i>
                                                        <span className="font-medium">
                                                          99 Share
                                                        </span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="hidden mt-4 pt-4 border-t"
                                                  id="commentcollapes2"
                                                >
                                                  <ul className="m-0 p-0 list-none comment-list">
                                                    <li className="mb-3">
                                                      <div className="comment-list-block">
                                                        <div className="flex items-center gap-3">
                                                          <div className="comment-list-user-image flex-shrink-0">
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/user/13.jpg"
                                                              alt="userimage"
                                                              className="avatar-48 rounded-full w-12 h-12"
                                                              loading="lazy"
                                                            />
                                                          </div>
                                                          <div className="comment-list-user-data">
                                                            <div className="inline-flex items-center gap-1 flex-wrap">
                                                              <h6 className="m-0">
                                                                Bob Frapples
                                                              </h6>
                                                              <span className="inline-block text-blue-600">
                                                                <i className="ph-fill ph-seal-check"></i>
                                                              </span>
                                                              <span className="font-medium text-sm capitalize">
                                                                3 min ago
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="comment-list-user-comment">
                                                          <div className="comment-list-comment">
                                                            "Just stumbled upon
                                                            this post and it's
                                                            giving me all the
                                                            feels! 🙌"
                                                          </div>
                                                          <div className="comment-list-action mt-2">
                                                            <ul className="flex items-center gap-2 m-0 p-0 list-none">
                                                              <li>
                                                                <div className="like-block relative flex items-center flex-shrink-0">
                                                                  <div className="like-data">
                                                                    <div className="relative">
                                                                      <span
                                                                        className="cursor-pointer flex items-center justify-center gap-1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        role="button"
                                                                      >
                                                                        <i className="ph ph-thumbs-up text-3xl"></i>
                                                                        <span className="font-medium text-sm"></span>
                                                                      </span>
                                                                      <div className="hidden absolute mt-2 bg-white rounded-lg shadow-lg py-2">
                                                                        <a
                                                                          className="mx-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Like"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/01.png"
                                                                            className="w-full"
                                                                            alt="like"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Love"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/02.png"
                                                                            className="w-full"
                                                                            alt="love"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Happy"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/03.png"
                                                                            className="w-full"
                                                                            alt="happy"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="HaHa"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/04.png"
                                                                            className="w-full"
                                                                            alt="haha"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Think"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/05.png"
                                                                            className="w-full"
                                                                            alt="think"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Sad"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/06.png"
                                                                            className="w-full"
                                                                            alt="sad"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Lovely"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/07.png"
                                                                            className="w-full"
                                                                            alt="lovely"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <span
                                                                  className="font-medium text-sm cursor-pointer"
                                                                  data-bs-toggle="collapse"
                                                                  data-bs-target="#subcomment-collapse3"
                                                                  role="button"
                                                                  aria-expanded="false"
                                                                  aria-controls="collapseExample"
                                                                >
                                                                  Reply
                                                                </span>
                                                              </li>
                                                            </ul>
                                                            <div
                                                              className="add-comment-form-block hidden mt-3"
                                                              id="subcomment-collapse3"
                                                            >
                                                              <div className="flex items-center gap-3">
                                                                <div className="flex-shrink-0">
                                                                  <Image
                                                                    width={100}
                                                                    height={100}
                                                                    src="/images/user/1.jpg"
                                                                    alt="userimage"
                                                                    className="avatar-48 rounded-full w-12 h-12"
                                                                    loading="lazy"
                                                                  />
                                                                </div>
                                                                <div className="add-comment-form">
                                                                  <form>
                                                                    <input
                                                                      type="text"
                                                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                      placeholder="Write a Comment..."
                                                                    />
                                                                    <button
                                                                      type="submit"
                                                                      className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-size-12 capitalize"
                                                                    >
                                                                      post
                                                                    </button>
                                                                  </form>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                  <div className="add-comment-form-block">
                                                    <div className="flex items-center gap-3">
                                                      <div className="flex-shrink-0">
                                                        <Image
                                                          width={100}
                                                          height={100}
                                                          src="/images/user/1.jpg"
                                                          alt="userimage"
                                                          className="avatar-48 rounded-full w-12 h-12"
                                                          loading="lazy"
                                                        />
                                                      </div>
                                                      <div className="add-comment-form">
                                                        <form>
                                                          <input
                                                            type="text"
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            placeholder="Write a Comment..."
                                                          />
                                                          <button
                                                            type="submit"
                                                            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-size-12 capitalize"
                                                          >
                                                            post
                                                          </button>
                                                        </form>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="w-full social-post mb-4">
                                          <div className="rounded-lg shadow bg-white">
                                            <div className="p-4">
                                              <div className="user-post-data">
                                                <div className="flex items-center justify-between gap-2 lg:gap-3">
                                                  <div className="flex-shrink-0">
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      className="border border-2 rounded-full user-post-profile"
                                                      src="/images/user/04.jpg"
                                                      alt="user-image"
                                                      loading="lazy"
                                                    />
                                                  </div>
                                                  <div className="w-full">
                                                    <div className="flex items-center justify-between">
                                                      <div>
                                                        <h6 className="mb-0 inline-block">
                                                          Ira Membrit
                                                        </h6>
                                                        <span className="inline-block text-blue-600">
                                                          <i className="ph-fill ph-seal-check"></i>
                                                        </span>
                                                        <span className="mb-0 inline-block capitalize font-medium">
                                                          Update her Status
                                                        </span>
                                                        <p className="mb-0">
                                                          6 Hours ago
                                                        </p>
                                                      </div>
                                                      <div className="card-post-toolbar">
                                                        <div className="relative">
                                                          <div
                                                            className="leading-none cursor-pointer"
                                                            data-bs-toggle="dropdown"
                                                          >
                                                            <i className="ph-bold ph-dots-three font-size-30 text-body"></i>
                                                          </div>
                                                          <div className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg m-0 p-0">
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-floppy-disk text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Save Post
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Add this to
                                                                    your saved
                                                                    items
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-x-circle text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Hide Post
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    See fewer
                                                                    posts like
                                                                    this.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-user-minus text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Unfollow
                                                                    User
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Stop seeing
                                                                    posts but
                                                                    stay
                                                                    friends.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-bell text-2xl"></i>
                                                                <div className="data">
                                                                  <h6 className="font-semibold">
                                                                    Notifications
                                                                  </h6>
                                                                  <p className="mb-0 text-sm">
                                                                    Turn on
                                                                    notifications
                                                                    for this
                                                                    post
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="mt-4">
                                                <p className="m-0">
                                                  "Lorem ipsum dolor sit amet,
                                                  consectetur adipiscing elit.
                                                  Morbi nulla dolor, ornare at
                                                  commodo non, feugiat non nisi.
                                                  Phasellus faucibus mollis
                                                  pharetra. Proin blandit ac
                                                  massa sed rhoncus"
                                                </p>
                                              </div>
                                              <div className="post-meta-likes mt-4">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                  <ul className="flex m-0 p-0 list-none post-user-liked-list">
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/01.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/02.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/03.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/04.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                  </ul>
                                                  <div className="inline-flex items-center gap-1">
                                                    <h6 className="m-0 text-sm">
                                                      Aliana Molex
                                                    </h6>
                                                    <span
                                                      className="capitalize text-sm font-medium cursor-pointer"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#likemodal"
                                                    >
                                                      and 208 others liked this
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="comment-area mt-4 pt-4 border-t">
                                                <div className="flex justify-between items-center flex-wrap">
                                                  <div className="like-block relative flex items-center flex-shrink-0">
                                                    <div className="like-data">
                                                      <div className="relative">
                                                        <span
                                                          className="cursor-pointer flex items-center justify-center gap-1"
                                                          data-bs-toggle="dropdown"
                                                          aria-haspopup="true"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph ph-thumbs-up text-3xl"></i>
                                                          <span className="font-medium">
                                                            140 Likes
                                                          </span>
                                                        </span>
                                                        <div className="hidden absolute mt-2 bg-white rounded-lg shadow-lg py-2">
                                                          <a
                                                            className="mx-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Like"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/01.png"
                                                              className="w-full"
                                                              alt="like"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Love"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/02.png"
                                                              className="w-full"
                                                              alt="love"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Happy"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/03.png"
                                                              className="w-full"
                                                              alt="happy"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="HaHa"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/04.png"
                                                              className="w-full"
                                                              alt="haha"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Think"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/05.png"
                                                              className="w-full"
                                                              alt="think"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Sad"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/06.png"
                                                              className="w-full"
                                                              alt="sad"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                          <a
                                                            className="mr-2 inline-block"
                                                            href="javascript:void(0);"
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title="Lovely"
                                                          >
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/icon/07.png"
                                                              className="w-full"
                                                              alt="lovely"
                                                              loading="lazy"
                                                            />
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center gap-3 flex-shrink-0">
                                                    <div
                                                      className="total-comment-block flex justify-center items-center gap-1 cursor-pointer"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#commentcollapes3"
                                                      aria-expanded="false"
                                                      aria-controls="commentcollapes"
                                                    >
                                                      <i className="ph ph-chat-circle-text text-xl"></i>
                                                      <span className="font-medium">
                                                        20 Comment
                                                      </span>
                                                    </div>
                                                    <div className="share-block flex items-center feather-icon">
                                                      <a
                                                        href="javascript:void(0);"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#share-btn"
                                                        aria-controls="share-btn"
                                                        className="flex justify-center items-center gap-1"
                                                      >
                                                        <i className="ph ph-share-network text-xl"></i>
                                                        <span className="font-medium">
                                                          99 Share
                                                        </span>
                                                      </a>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="hidden mt-4 pt-4 border-t"
                                                  id="commentcollapes3"
                                                >
                                                  <ul className="m-0 p-0 list-none comment-list">
                                                    <li className="mb-3">
                                                      <div className="comment-list-block">
                                                        <div className="flex items-center gap-3">
                                                          <div className="comment-list-user-image flex-shrink-0">
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/user/13.jpg"
                                                              alt="userimage"
                                                              className="avatar-48 rounded-full w-12 h-12"
                                                              loading="lazy"
                                                            />
                                                          </div>
                                                          <div className="comment-list-user-data">
                                                            <div className="inline-flex items-center gap-1 flex-wrap">
                                                              <h6 className="m-0">
                                                                Bob Frapples
                                                              </h6>
                                                              <span className="inline-block text-blue-600">
                                                                <i className="ph-fill ph-seal-check"></i>
                                                              </span>
                                                              <span className="font-medium text-sm capitalize">
                                                                3 min ago
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="comment-list-user-comment">
                                                          <div className="comment-list-comment">
                                                            "Just stumbled upon
                                                            this post and it's
                                                            giving me all the
                                                            feels! 🙌"
                                                          </div>
                                                          <div className="comment-list-action mt-2">
                                                            <ul className="flex items-center gap-2 m-0 p-0 list-none">
                                                              <li>
                                                                <div className="like-block relative flex items-center flex-shrink-0">
                                                                  <div className="like-data">
                                                                    <div className="relative">
                                                                      <span
                                                                        className="cursor-pointer flex items-center justify-center gap-1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-haspopup="true"
                                                                        aria-expanded="false"
                                                                        role="button"
                                                                      >
                                                                        <i className="ph ph-thumbs-up text-3xl"></i>
                                                                        <span className="font-medium text-sm">
                                                                          Likes
                                                                        </span>
                                                                      </span>
                                                                      <div className="hidden absolute mt-2 bg-white rounded-lg shadow-lg py-2">
                                                                        <a
                                                                          className="mx-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Like"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/01.png"
                                                                            className="w-full"
                                                                            alt="like"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Love"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/02.png"
                                                                            className="w-full"
                                                                            alt="love"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Happy"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/03.png"
                                                                            className="w-full"
                                                                            alt="happy"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="HaHa"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/04.png"
                                                                            className="w-full"
                                                                            alt="haha"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Think"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/05.png"
                                                                            className="w-full"
                                                                            alt="think"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Sad"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/06.png"
                                                                            className="w-full"
                                                                            alt="sad"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                        <a
                                                                          className="mr-2 inline-block"
                                                                          href="javascript:void(0);"
                                                                          data-bs-toggle="tooltip"
                                                                          data-bs-placement="top"
                                                                          title="Lovely"
                                                                        >
                                                                          <Image
                                                                            width={
                                                                              100
                                                                            }
                                                                            height={
                                                                              100
                                                                            }
                                                                            src="/images/icon/07.png"
                                                                            className="w-full"
                                                                            alt="lovely"
                                                                            loading="lazy"
                                                                          />
                                                                        </a>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <span
                                                                  className="font-medium text-sm cursor-pointer"
                                                                  data-bs-toggle="collapse"
                                                                  data-bs-target="#subcomment-collapse3"
                                                                  role="button"
                                                                  aria-expanded="false"
                                                                  aria-controls="collapseExample"
                                                                >
                                                                  Reply
                                                                </span>
                                                              </li>
                                                            </ul>
                                                            <div
                                                              className="add-comment-form-block hidden mt-3"
                                                              id="subcomment-collapse3"
                                                            >
                                                              <div className="flex items-center gap-3">
                                                                <div className="flex-shrink-0">
                                                                  <Image
                                                                    width={100}
                                                                    height={100}
                                                                    src="/images/user/1.jpg"
                                                                    alt="userimage"
                                                                    className="avatar-48 rounded-full w-12 h-12"
                                                                    loading="lazy"
                                                                  />
                                                                </div>
                                                                <div className="add-comment-form">
                                                                  <form>
                                                                    <input
                                                                      type="text"
                                                                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                      placeholder="Write a Comment..."
                                                                    />
                                                                    <button
                                                                      type="submit"
                                                                      className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-size-12 capitalize"
                                                                    >
                                                                      post
                                                                    </button>
                                                                  </form>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                  <div className="add-comment-form-block">
                                                    <div className="flex items-center gap-3">
                                                      <div className="flex-shrink-0">
                                                        <Image
                                                          width={100}
                                                          height={100}
                                                          src="/images/user/1.jpg"
                                                          alt="userimage"
                                                          className="avatar-48 rounded-full w-12 h-12"
                                                          loading="lazy"
                                                        />
                                                      </div>
                                                      <div className="add-comment-form">
                                                        <form>
                                                          <input
                                                            type="text"
                                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            placeholder="Write a Comment..."
                                                          />
                                                          <button
                                                            type="submit"
                                                            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-size-12 capitalize"
                                                          >
                                                            post
                                                          </button>
                                                        </form>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="w-full social-post mb-4">
                                          <div className="rounded-lg shadow bg-white">
                                            <div className="p-4">
                                              <div className="user-post-data">
                                                <div className="flex items-center justify-between gap-2 lg:gap-3">
                                                  <div className="flex-shrink-0">
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      className="border-2 border rounded-full user-post-profile"
                                                      src="/images/user/1.jpg"
                                                      alt="user-image"
                                                      loading="lazy"
                                                    />
                                                  </div>
                                                  <div className="w-full">
                                                    <div className="flex items-center justify-between">
                                                      <div>
                                                        <h6 className="m-0 inline-block">
                                                          Bni Cyst
                                                        </h6>
                                                        <span className="inline-block text-blue-600">
                                                          <i className="ph-fill ph-seal-check"></i>
                                                        </span>
                                                        <span className="m-0 inline-block capitalize font-medium">
                                                          Added New Video in his
                                                          Timeline
                                                        </span>
                                                        <p className="m-0">
                                                          8 Hours ago
                                                        </p>
                                                      </div>
                                                      <div className="card-post-toolbar">
                                                        <div className="relative">
                                                          <div className="leading-none cursor-pointer">
                                                            <i className="ph-bold ph-dots-three text-3xl text-body"></i>
                                                          </div>
                                                          <div className="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-lg m-0 p-0">
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-floppy-disk text-2xl"></i>
                                                                <div className="data">
                                                                  <h6>
                                                                    Save Post
                                                                  </h6>
                                                                  <p className="m-0 text-sm">
                                                                    Add this to
                                                                    your saved
                                                                    items
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-x-circle text-2xl"></i>
                                                                <div className="data">
                                                                  <h6>
                                                                    Hide Post
                                                                  </h6>
                                                                  <p className="m-0 text-sm">
                                                                    See fewer
                                                                    posts like
                                                                    this.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-user-minus text-2xl"></i>
                                                                <div className="data">
                                                                  <h6>
                                                                    Unfollow
                                                                    User
                                                                  </h6>
                                                                  <p className="m-0 text-sm">
                                                                    Stop seeing
                                                                    posts but
                                                                    stay
                                                                    friends.
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="block p-3 hover:bg-gray-50"
                                                              href="#"
                                                            >
                                                              <div className="flex items-start gap-2">
                                                                <i className="ph ph-bell text-2xl"></i>
                                                                <div className="data">
                                                                  <h6>
                                                                    Notifications
                                                                  </h6>
                                                                  <p className="m-0 text-sm">
                                                                    Turn on
                                                                    notifications
                                                                    for this
                                                                    post
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="mt-4">
                                                <p className="m-0">
                                                  "Lorem ipsum dolor sit amet,
                                                  consectetur adipiscing elit.
                                                  Morbi nulla dolor, ornare at
                                                  commodo non, feugiat non nisi.
                                                  Phasellus faucibus mollis
                                                  pharetra. Proin blandit ac
                                                  massa sed rhoncus"
                                                </p>
                                              </div>

                                              <div className="user-post mt-4">
                                                <div className="aspect-video">
                                                  <iframe
                                                    className="w-full h-full"
                                                    src="https://www.youtube.com/embed/oHD33oKbKh4?si=VF-Qcp-pZdzUb3RX"
                                                    allowFullScreen
                                                  ></iframe>
                                                </div>
                                              </div>

                                              <div className="post-meta-likes mt-4">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                  <ul className="flex m-0 p-0 list-none post-user-liked-list">
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/01.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/02.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/03.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                    <li>
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/04.jpg"
                                                        alt="userimage"
                                                        className="rounded-full userimage"
                                                        loading="lazy"
                                                      />
                                                    </li>
                                                  </ul>
                                                  <div className="inline-flex items-center gap-1">
                                                    <h6 className="m-0 text-sm">
                                                      Aliana Molex
                                                    </h6>
                                                    <span className="capitalize text-sm font-medium cursor-pointer">
                                                      and 208 others liked this
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="comment-area mt-4 pt-4 border-t">
                                                <div className="flex justify-between items-center flex-wrap">
                                                  <div className="like-block relative flex items-center flex-shrink-0">
                                                    <div className="like-data">
                                                      <div className="relative">
                                                        <span className="cursor-pointer flex items-center justify-center gap-1">
                                                          <i className="ph ph-thumbs-up text-3xl"></i>
                                                          <span className="font-medium">
                                                            140 Likes
                                                          </span>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex items-center gap-3 flex-shrink-0">
                                                    <div className="flex items-center gap-3 flex-shrink-0">
                                                      <div className="total-comment-block flex justify-center items-center gap-1 cursor-pointer">
                                                        <i className="ph ph-chat-circle-text text-xl"></i>
                                                        <span className="font-medium">
                                                          20 Comment
                                                        </span>
                                                      </div>
                                                      <div className="share-block flex items-center feather-icon">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="flex justify-center items-center gap-1"
                                                        >
                                                          <i className="ph ph-share-network text-xl"></i>
                                                          <span className="font-medium">
                                                            99 Share
                                                          </span>
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

                                                <div
                                                  className="hidden mt-4 pt-4 border-t"
                                                  id="commentcollapes4"
                                                >
                                                  <ul className="m-0 p-0 list-none comment-list">
                                                    <li className="mb-3">
                                                      <div className="comment-list-block">
                                                        <div className="flex items-center gap-3">
                                                          <div className="comment-list-user-image flex-shrink-0">
                                                            <Image
                                                              width={100}
                                                              height={100}
                                                              src="/images/user/13.jpg"
                                                              alt="userimage"
                                                              className="w-12 h-12 rounded-full userimage"
                                                              loading="lazy"
                                                            />
                                                          </div>
                                                          <div className="comment-list-user-data">
                                                            <div className="inline-flex items-center gap-1 flex-wrap">
                                                              <h6 className="m-0">
                                                                Bob Frapples
                                                              </h6>
                                                              <span className="inline-block text-blue-600"></span>
                                                              <span className="font-medium text-xs capitalize">
                                                                3 min ago
                                                              </span>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="comment-list-user-comment">
                                                          <div className="comment-list-comment">
                                                            "Just stumbled upon
                                                            this post and it's
                                                            giving me all the
                                                            feels! 🙌"
                                                          </div>
                                                          <div className="comment-list-action mt-2">
                                                            <ul className="flex items-center gap-2 m-0 p-0 list-none">
                                                              <li>
                                                                <div className="like-block relative flex items-center flex-shrink-0">
                                                                  <div className="like-data">
                                                                    <div className="relative">
                                                                      <span className="cursor-pointer flex items-center justify-center gap-1">
                                                                        <i className="ph ph-thumbs-up text-2xl"></i>
                                                                        <span className="font-medium text-xs">
                                                                          Likes
                                                                        </span>
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </li>
                                                              <li>
                                                                <span className="font-medium text-xs cursor-pointer">
                                                                  Reply
                                                                </span>
                                                              </li>
                                                            </ul>
                                                            <div
                                                              className="add-comment-form-block hidden mt-3"
                                                              id="subcomment-collapse4"
                                                            >
                                                              <div className="flex items-center gap-3">
                                                                <div className="flex-shrink-0">
                                                                  <Image
                                                                    width={100}
                                                                    height={100}
                                                                    src="/images/user/1.jpg"
                                                                    alt="userimage"
                                                                    className="w-12 h-12 rounded-full userimage"
                                                                    loading="lazy"
                                                                  />
                                                                </div>
                                                                <div className="add-comment-form">
                                                                  <form className="flex gap-2">
                                                                    <input
                                                                      type="text"
                                                                      className="border rounded px-3 py-1 w-full"
                                                                      placeholder="Write a Comment..."
                                                                    />
                                                                    <button
                                                                      type="submit"
                                                                      className="bg-blue-600 text-white text-xs font-medium rounded px-5 py-1 capitalize"
                                                                    >
                                                                      Post
                                                                    </button>
                                                                  </form>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </li>
                                                  </ul>

                                                  <div className="add-comment-form-block">
                                                    <div className="flex items-center gap-3">
                                                      <div className="flex-shrink-0">
                                                        <Image
                                                          width={100}
                                                          height={100}
                                                          src="/images/user/1.jpg"
                                                          alt="userimage"
                                                          className="w-12 h-12 rounded-full userimage"
                                                          loading="lazy"
                                                        />
                                                      </div>
                                                      <div className="add-comment-form w-full">
                                                        <form className="flex gap-2">
                                                          <input
                                                            type="text"
                                                            className="border rounded px-3 py-1 w-full"
                                                            placeholder="Write a Comment..."
                                                          />
                                                          <button
                                                            type="submit"
                                                            className="bg-blue-600 text-white text-xs font-medium rounded px-5 py-1 capitalize"
                                                          >
                                                            Post
                                                          </button>
                                                        </form>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-content hidden">
                            <div
                              className="tab-pane fade show active"
                              id="timeline"
                              role="tabpanel"
                            >
                              <div className="card-body p-0">
                                <div className="row">
                                  <div className="col-lg-4">
                                    <div className="card">
                                      <div className="card-body">
                                        <a
                                          href="#"
                                          className="d-inline-flex align-items-center gap-2"
                                        >
                                          <span className="font-weight-normal btn btn-primary p-1 d-flex flex-column align-items-center justify-content-center">
                                            <i className="ph ph-star fs-2"></i>
                                          </span>
                                          <span>27 Items for you</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="card">
                                      <div className="card-header d-flex justify-content-between border-bottom">
                                        <div className="header-title">
                                          <h4 className="card-title">
                                            Life Event
                                          </h4>
                                        </div>
                                        <div className="card-header-toolbar d-flex align-items-center">
                                          <p className="m-0">
                                            <a href="javacsript:void();">
                                              Create{" "}
                                            </a>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="card-body">
                                        <div className="row">
                                          <div className="col-sm-12">
                                            <div className="event-post relative">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/07.jpg"
                                                  alt="gallary-image"
                                                  className="image-fluid rounded"
                                                  loading="lazy"
                                                />
                                              </a>
                                              <div className="job-icon-position">
                                                <span className="job-icon bg-primary p-2 d-inline-flex flex-column justify-content-center align-items-center rounded-circle text-white">
                                                  <i className="ph ph-shopping-bag fs-4"></i>
                                                </span>
                                              </div>
                                              <div className="card-body text-center p-2">
                                                <h5>
                                                  Started New Job at Apple
                                                </h5>
                                                <p>January 24, 2019</p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-sm-12">
                                            <div className="event-post relative">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/06.jpg"
                                                  alt="gallary-image"
                                                  className="image-fluid rounded"
                                                  loading="lazy"
                                                />
                                              </a>
                                              <div className="job-icon-position">
                                                <span className="job-icon bg-primary p-2 d-inline-flex flex-column justify-content-center align-items-center rounded-circle text-white">
                                                  <i className="ph ph-shopping-bag fs-4"></i>
                                                </span>
                                              </div>
                                              <div className="card-body text-center p-2">
                                                <h5>Freelance Photographer</h5>
                                                <p className="mb-0">
                                                  January 24, 2019
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="fixed-suggestion mb-4">
                                      <div className="card">
                                        <div className="card-header d-flex justify-content-between border-bottom">
                                          <div className="header-title">
                                            <h4 className="card-title">
                                              Photos
                                            </h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <p className="m-0">
                                              <a href="javacsript:void();">
                                                Add Photo{" "}
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <ul className="grid grid-cols-2 gap-2 p-0 m-0 list-unstyled">
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g1.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g1.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g2.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g2.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g3.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g3.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g4.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g4.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g5.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g5.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g6.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g6.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g7.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g7.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g8.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g8.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/g9.jpg"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/g9.jpg"
                                                  className="image-fluid"
                                                  alt="photo-profile"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="card">
                                        <div className="card-header d-flex justify-content-between border-bottom">
                                          <div className="header-title">
                                            <h4 className="card-title">
                                              Friends
                                            </h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                            <p className="m-0">
                                              <a href="javacsript:void();">
                                                Add New
                                              </a>
                                            </p>
                                          </div>
                                        </div>
                                        <div className="card-body">
                                          <div className="row row-cols-xl-3 row-cols-md-2 row-cols-2">
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/05.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Anna Rexia
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/06.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Tara Zona
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/07.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Polly Tech
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/08.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Bill Emia
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/09.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Moe Fugga
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/10.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Hal Appeno{" "}
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/07.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Zack Lee
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/06.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Terry Aki
                                              </h6>
                                            </div>
                                            <div className="col mt-2 text-center">
                                              <a href="#">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/05.jpg"
                                                  alt="gallary-image"
                                                  loading="lazy"
                                                  className="image-fluid"
                                                />
                                              </a>
                                              <h6 className="mt-2 text-center">
                                                Greta Life
                                              </h6>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="row">
                                      <div className="col-sm-12">
                                        <div
                                          id="post-modal-data"
                                          className="card card-block card-stretch card-height create-post-modal"
                                        >
                                          <div className="card-header d-flex justify-content-between border-bottom">
                                            <div className="header-title">
                                              <h5 className="card-title">
                                                Add a Post
                                              </h5>
                                            </div>
                                            <div className="dropdown">
                                              <div
                                                className="lh-1"
                                                id="post-option"
                                                data-bs-toggle="dropdown"
                                              >
                                                <i className="ph-bold ph-dots-three font-size-30"></i>
                                              </div>
                                              <div
                                                className="dropdown-menu dropdown-menu-right"
                                                aria-labelledby="post-option"
                                              >
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#post-modal"
                                                >
                                                  Check in
                                                </a>
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#post-modal"
                                                >
                                                  Live Video
                                                </a>
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#post-modal"
                                                >
                                                  GIF
                                                </a>
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#post-modal"
                                                >
                                                  Watch Party
                                                </a>
                                                <a
                                                  className="dropdown-item"
                                                  href="#"
                                                  data-bs-toggle="modal"
                                                  data-bs-target="#post-modal"
                                                >
                                                  Play with Friend
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="card-body">
                                            <div
                                              data-bs-toggle="modal"
                                              data-bs-target="#post-modal"
                                            >
                                              <form className="post-text w-100">
                                                <input
                                                  type="text"
                                                  className="form-control rounded p-0"
                                                  placeholder="Write And Share Your Post With Your Friends..."
                                                />
                                              </form>
                                            </div>
                                          </div>
                                          <div className="card-body bg-primary-subtle rounded-bottom-3 p-4">
                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                              <div className="create-post-data">
                                                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-4">
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-body d-flex flex-column align-items-center justify-content-center"
                                                    >
                                                      <i className="ph ph-camera fs-3"></i>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-body d-flex flex-column align-items-center justify-content-center"
                                                    >
                                                      <i className="ph ph-user-plus fs-3"></i>
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-body d-flex flex-column align-items-center justify-content-center"
                                                    >
                                                      <i className="ph ph-map-pin fs-3"></i>
                                                    </a>
                                                  </li>
                                                </ul>
                                              </div>
                                              <div>
                                                <ul className="list-inline m-0 p-0 d-flex align-items-center gap-4">
                                                  <li>
                                                    <a
                                                      href="javascript:void(0);"
                                                      className="text-body fw-medium"
                                                    >
                                                      Discard
                                                    </a>
                                                  </li>
                                                  <li>
                                                    <button className="btn btn-primary px-4">
                                                      Post
                                                    </button>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="modal fade"
                                            id="post-modal"
                                            aria-labelledby="post-modalLabel"
                                            aria-hidden="true"
                                          >
                                            <div className="modal-dialog modal-fullscreen-sm-down">
                                              <div className="modal-content">
                                                <div className="modal-header justify-content-between gap-1 flex-wrap">
                                                  <h5
                                                    className="modal-title"
                                                    id="post-modalLabel"
                                                  >
                                                    Create Post
                                                  </h5>
                                                  <a
                                                    href="javascript:void(0);"
                                                    className="lh-1"
                                                    data-bs-dismiss="modal"
                                                  >
                                                    <i className="ph ph-x fs-3"></i>
                                                  </a>
                                                </div>
                                                <div className="modal-body">
                                                  <div className="d-flex align-items-center">
                                                    <div className="user-image">
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/1.jpg"
                                                        alt="userimage"
                                                        className="avatar-60 rounded-circle image-fluid"
                                                        loading="lazy"
                                                      />
                                                    </div>
                                                    <form className="post-text ms-3 w-100">
                                                      <input
                                                        type="text"
                                                        className="form-control rounded"
                                                        placeholder="Write something here..."
                                                      />
                                                    </form>
                                                  </div>
                                                  <hr />
                                                  <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-camera font-size-20"></i>
                                                          Photo/Video
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-users font-size-20"></i>
                                                          Tag Friend
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-smiley font-size-20"></i>
                                                          Feeling/Activity
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-map-pin font-size-20"></i>
                                                          Check in
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-monitor-play font-size-20"></i>
                                                          Live Video
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-gif font-size-20"></i>
                                                          GIF
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-confetti font-size-20"></i>
                                                          Watch Party
                                                        </a>
                                                      </div>
                                                    </li>
                                                    <li className="col-md-6 mb-3">
                                                      <div className="bg-primary-subtle rounded p-2 pointer me-3">
                                                        <a
                                                          href="javascript:void(0);"
                                                          className="d-inline-flex align-items-center gap-2 fw-medium text-body"
                                                        >
                                                          <i className="ph ph-game-controller font-size-20"></i>
                                                          Play with Friends
                                                        </a>
                                                      </div>
                                                    </li>
                                                  </ul>
                                                  <hr />
                                                  <div className="other-option">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="user-image">
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/user/1.jpg"
                                                            alt="userimage"
                                                            className="avatar-60 rounded-circle image-fluid"
                                                          />
                                                        </div>
                                                        <h6>Your Story</h6>
                                                      </div>
                                                      <div className="card-post-toolbar">
                                                        <div className="dropdown">
                                                          <span
                                                            className="dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            role="button"
                                                          >
                                                            <span className="btn btn-primary">
                                                              Friend
                                                            </span>
                                                          </span>
                                                          <div className="dropdown-menu m-0 p-0">
                                                            <a
                                                              className="dropdown-item p-3"
                                                              href="#"
                                                            >
                                                              <div className="d-flex align-items-top">
                                                                <i className="ph ph-floppy-disk fs-2"></i>
                                                                <div className="data ms-2">
                                                                  <h6>
                                                                    Public
                                                                  </h6>
                                                                  <p className="mb-0">
                                                                    Anyone on or
                                                                    off Facebook
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="dropdown-item p-3"
                                                              href="#"
                                                            >
                                                              <div className="d-flex align-items-top">
                                                                <i className="ph ph-x fs-2"></i>
                                                                <div className="data ms-2">
                                                                  <h6>
                                                                    Friends
                                                                  </h6>
                                                                  <p className="mb-0">
                                                                    Your Friend
                                                                    on facebook
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="dropdown-item p-3"
                                                              href="#"
                                                            >
                                                              <div className="d-flex align-items-top">
                                                                <i className="ph ph-user-minus fs-2"></i>
                                                                <div className="data ms-2">
                                                                  <h6>
                                                                    Friends
                                                                    except
                                                                  </h6>
                                                                  <p className="mb-0">
                                                                    Don't show
                                                                    to some
                                                                    friends
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                            <a
                                                              className="dropdown-item p-3"
                                                              href="#"
                                                            >
                                                              <div className="d-flex align-items-top">
                                                                <i className="ph ph-bell fs-2"></i>
                                                                <div className="data ms-2">
                                                                  <h6>
                                                                    Only Me
                                                                  </h6>
                                                                  <p className="mb-0">
                                                                    Only me
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <button
                                                    type="submit"
                                                    className="btn btn-primary d-block w-100 mt-3"
                                                  >
                                                    Post
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-12 social-post">
                                        <div className="card card-block card-stretch card-height">
                                          <div className="card-body">
                                            <div className="user-post-data">
                                              <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-2">
                                                <div className="flex-shrink-0">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="border border-2 rounded-circle user-post-profile"
                                                    src="/images/user/01.jpg"
                                                    alt="user-image"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="w-100">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                      <h6 className="mb-0 d-inline-block">
                                                        Anna Sthesia
                                                      </h6>
                                                      <span className="d-inline-flex align-items-center">
                                                        <i className="ph-fill ph-seal-check fs-5 text-primary"></i>
                                                      </span>
                                                      <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                                        posted an update
                                                      </span>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                      <div className="dropdown">
                                                        <div
                                                          className="lh-1"
                                                          id="post-option"
                                                          data-bs-toggle="dropdown"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div className="dropdown-menu m-0 p-0">
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-floppy-disk fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Save Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Add this to
                                                                  your saved
                                                                  items
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-x-circle fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Hide Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  See fewer
                                                                  posts like
                                                                  this.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-user-minus fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Unfollow User
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Stop seeing
                                                                  posts but stay
                                                                  friends.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-bell fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Notifications
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Turn on
                                                                  notifications
                                                                  for this post
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <p className="mb-0">
                                                    2 minutes ago
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mt-4">
                                              <p className="m-0">
                                                "Energy, the tangible expression
                                                of pure thought, propels
                                                intentions into powerful
                                                actions, bridging the gap
                                                between mind and manifestation."
                                              </p>
                                              <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #friends
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #party
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #birthday
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #together
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #celebration
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="user-post mt-4">
                                              <a
                                                data-fslightbox="gallery"
                                                href="/images/page-image/fun.jpg"
                                                className="rounded"
                                              >
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/page-img/fun.jpg"
                                                  alt="post-image"
                                                  className="image-fluid rounded w-100"
                                                  loading="lazy"
                                                />
                                              </a>
                                            </div>
                                            <div className="post-meta-likes mt-4">
                                              <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap flex-wrap">
                                                <ul className="list-inline m-0 p-0 post-user-liked-list">
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/01.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/02.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/03.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/04.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                </ul>
                                                <div className="d-inline-flex align-items-center gap-1">
                                                  <h6 className="m-0 font-size-14">
                                                    Aliana Molex
                                                  </h6>
                                                  <span
                                                    className="text-capitalize font-size-14 fw-medium"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#likemodal"
                                                  >
                                                    and 208 others liked this
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="comment-area mt-4 pt-4 border-top">
                                              <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                  <div className="like-data">
                                                    <div className="dropdown">
                                                      <span
                                                        className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        role="button"
                                                      >
                                                        <i className="ph ph-thumbs-up fs-3"></i>
                                                        <span className="fw-medium">
                                                          140 Likes
                                                        </span>
                                                      </span>
                                                      <div className="dropdown-menu py-2 shadow">
                                                        <a
                                                          className="mx-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Like"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/01.png"
                                                            className="image-fluid"
                                                            alt="like"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Love"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/02.png"
                                                            className="image-fluid"
                                                            alt="love"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Happy"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/03.png"
                                                            className="image-fluid"
                                                            alt="happy"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="HaHa"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/04.png"
                                                            className="image-fluid"
                                                            alt="haha"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Think"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/05.png"
                                                            className="image-fluid"
                                                            alt="think"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Sad"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/06.png"
                                                            className="image-fluid"
                                                            alt="sad"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Lovely"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/07.png"
                                                            className="image-fluid"
                                                            alt="lovely"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                                  <div
                                                    className="total-comment-block d-flex justify-content-center align-items-center gap-1"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#commentcollapes1"
                                                    aria-expanded="false"
                                                    aria-controls="commentcollapes"
                                                  >
                                                    <i className="ph ph-chat-circle-text fs-4"></i>
                                                    <span className="fw-medium">
                                                      20 Comment
                                                    </span>
                                                  </div>
                                                  <div className="share-block d-flex align-items-center feather-icon">
                                                    <a
                                                      href="javascript:void(0);"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#share-btn"
                                                      aria-controls="share-btn"
                                                      className="d-flex justify-content-center align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-share-network fs-4"></i>
                                                      <span className="fw-medium">
                                                        99 Share
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="collapse mt-4 pt-4 border-top"
                                                id="commentcollapes1"
                                              >
                                                <ul className="list-inline m-o p-0 comment-list">
                                                  <li className="mb-3">
                                                    <div className="comment-list-block">
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="comment-list-user-image flex-shrink-0">
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/user/13.jpg"
                                                            alt="userimage"
                                                            className="avatar-48 rounded-circle image-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="comment-list-user-data">
                                                          <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                            <h6 className="m-0">
                                                              Bob Frapples
                                                            </h6>
                                                            <span className="d-inline-block text-primary">
                                                              <svg
                                                                className="align-text-bottom"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="17"
                                                                height="17"
                                                                viewBox="0 0 17 17"
                                                                fill="none"
                                                              >
                                                                <path
                                                                  fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                                  fill="currentColor"
                                                                />
                                                                <path
                                                                  d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                                  stroke="white"
                                                                  strokeWidth="1.5"
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                />
                                                              </svg>
                                                            </span>
                                                            <span className="fw-medium small text-capitalize">
                                                              3 min ago
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="comment-list-user-comment">
                                                        <div className="comment-list-comment">
                                                          "Just stumbled upon
                                                          this post and it's
                                                          giving me all the
                                                          feels! 🙌"
                                                        </div>
                                                        <div className="comment-list-action mt-2">
                                                          <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                            <li>
                                                              <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                                <div className="like-data">
                                                                  <div className="dropdown">
                                                                    <span
                                                                      className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                                      data-bs-toggle="dropdown"
                                                                      aria-haspopup="true"
                                                                      aria-expanded="false"
                                                                      role="button"
                                                                    >
                                                                      <i className="ph ph-thumbs-up fs-3"></i>
                                                                      <span className="fw-medium small">
                                                                        Likes
                                                                      </span>
                                                                    </span>
                                                                    <div className="dropdown-menu py-2 shadow">
                                                                      <a
                                                                        className="mx-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Like"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/01.png"
                                                                          className="image-fluid"
                                                                          alt="like"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Love"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/02.png"
                                                                          className="image-fluid"
                                                                          alt="love"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Happy"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/03.png"
                                                                          className="image-fluid"
                                                                          alt="happy"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="HaHa"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/04.png"
                                                                          className="image-fluid"
                                                                          alt="haha"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Think"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/05.png"
                                                                          className="image-fluid"
                                                                          alt="think"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Sad"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/06.png"
                                                                          className="image-fluid"
                                                                          alt="sad"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Lovely"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/07.png"
                                                                          className="image-fluid"
                                                                          alt="lovely"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </li>
                                                            <li>
                                                              <span
                                                                className="fw-medium small"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#subcomment-collapse1"
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="collapseExample"
                                                              >
                                                                Reply
                                                              </span>
                                                            </li>
                                                          </ul>
                                                          <div
                                                            className="add-comment-form-block collapse mt-3"
                                                            id="subcomment-collapse1"
                                                          >
                                                            <div className="d-flex align-items-center gap-3">
                                                              <div className="flex-shrink-0">
                                                                <Image
                                                                  width={100}
                                                                  height={100}
                                                                  src="/images/user/1.jpg"
                                                                  alt="userimage"
                                                                  className="avatar-48 rounded-circle image-fluid"
                                                                  loading="lazy"
                                                                />
                                                              </div>
                                                              <div className="add-comment-form">
                                                                <form>
                                                                  <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Write a Comment..."
                                                                  />
                                                                  <button
                                                                    type="submit"
                                                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                                                  >
                                                                    post
                                                                  </button>
                                                                </form>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                                <div className="add-comment-form-block">
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/1.jpg"
                                                        alt="userimage"
                                                        className="avatar-48 rounded-circle image-fluid"
                                                        loading="lazy"
                                                      />
                                                    </div>
                                                    <div className="add-comment-form">
                                                      <form>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Write a Comment..."
                                                        />
                                                        <button
                                                          type="submit"
                                                          className="btn btn-primary font-size-12 text-capitalize px-5"
                                                        >
                                                          post
                                                        </button>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-12 social-post">
                                        <div className="card card-block card-stretch card-height">
                                          <div className="card-body">
                                            <div className="user-post-data">
                                              <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-2">
                                                <div className="flex-shrink-0">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="border border-2 rounded-circle user-post-profile"
                                                    src="/images/user/03.jpg"
                                                    alt="user-image"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="w-100">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                      <h6 className="mb-0 d-inline-block">
                                                        Barb Ackue
                                                      </h6>
                                                      <span className="d-inline-flex align-items-center">
                                                        <i className="ph-fill ph-seal-check fs-5 text-primary"></i>
                                                      </span>
                                                      <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                                        Add a New Post
                                                      </span>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                      <div className="dropdown">
                                                        <div
                                                          className="lh-1"
                                                          id="post-option"
                                                          data-bs-toggle="dropdown"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div className="dropdown-menu m-0 p-0">
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-floppy-disk fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Save Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Add this to
                                                                  your saved
                                                                  items
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-x-circle fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Hide Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  See fewer
                                                                  posts like
                                                                  this.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-user-minus fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Unfollow User
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Stop seeing
                                                                  posts but stay
                                                                  friends.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-bell fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Notifications
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Turn on
                                                                  notifications
                                                                  for this post
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <p className="mb-0">
                                                    1 Hour ago
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mt-4">
                                              <p className="m-0">
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Morbi nulla dolor, ornare at
                                                commodo non, feugiat non nisi.
                                                Phasellus faucibus mollis
                                                pharetra. Proin blandit ac massa
                                                sed rhoncus"
                                              </p>
                                              <ul className="list-inline m-0 p-0 d-flex flex-wrap gap-1">
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #family
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #happiness
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #travelling
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #camping
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="javascript:void(0);">
                                                    #climbing
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                            <div className="user-post mt-4">
                                              <div className="row">
                                                <div className="col-md-4">
                                                  <a
                                                    data-fslightbox="gallery"
                                                    href="/images/page-image/boy.jpg"
                                                    className="rounded"
                                                  >
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/page-img/boy.jpg"
                                                      alt="post-image"
                                                      className="image-fluid rounded w-100"
                                                      loading="lazy"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="col-md-4 mt-md-0 mt-3">
                                                  <a
                                                    data-fslightbox="gallery"
                                                    href="/images/page-image/bus.jpg"
                                                    className="rounded"
                                                  >
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/page-img/bus.jpg"
                                                      alt="post-image"
                                                      className="image-fluid rounded w-100"
                                                      loading="lazy"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="col-md-4 mt-md-0 mt-3">
                                                  <a
                                                    data-fslightbox="gallery"
                                                    href="/images/page-image/fd.jpg"
                                                    className="rounded"
                                                  >
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/page-img/fd.jpg"
                                                      alt="post-image"
                                                      className="image-fluid rounded w-100"
                                                      loading="lazy"
                                                    />
                                                  </a>
                                                </div>
                                              </div>
                                              <div className="row mt-3">
                                                <div className="col-md-6">
                                                  <a
                                                    data-fslightbox="gallery"
                                                    href="/images/page-image/mountain.jpg"
                                                    className="rounded"
                                                  >
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/page-img/mountain.jpg"
                                                      alt="post-image"
                                                      className="image-fluid rounded w-100"
                                                      loading="lazy"
                                                    />
                                                  </a>
                                                </div>
                                                <div className="col-md-6 mt-md-0 mt-3">
                                                  <div className="post-overlay-box h-100 rounded">
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/page-img/pizza.jpg"
                                                      alt="post-image"
                                                      className="image-fluid rounded w-100 h-100 object-cover"
                                                      loading="lazy"
                                                    />
                                                    <a
                                                      data-fslightbox="gallery"
                                                      href="/images/page-image/pizza.jpg"
                                                      className="rounded font-size-18"
                                                    >
                                                      +2
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="post-meta-likes mt-4">
                                              <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap flex-wrap">
                                                <ul className="list-inline m-0 p-0 post-user-liked-list">
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/01.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/02.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/03.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/04.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                </ul>
                                                <div className="d-inline-flex align-items-center gap-1">
                                                  <h6 className="m-0 font-size-14">
                                                    Aliana Molex
                                                  </h6>
                                                  <span
                                                    className="text-capitalize font-size-14 fw-medium"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#likemodal"
                                                  >
                                                    and 208 others liked this
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="comment-area mt-4 pt-4 border-top">
                                              <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                  <div className="like-data">
                                                    <div className="dropdown">
                                                      <span
                                                        className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        role="button"
                                                      >
                                                        <i className="ph ph-thumbs-up fs-3"></i>
                                                        <span className="fw-medium">
                                                          140 Likes
                                                        </span>
                                                      </span>
                                                      <div className="dropdown-menu py-2 shadow">
                                                        <a
                                                          className="mx-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Like"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/01.png"
                                                            className="image-fluid"
                                                            alt="like"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Love"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/02.png"
                                                            className="image-fluid"
                                                            alt="love"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Happy"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/03.png"
                                                            className="image-fluid"
                                                            alt="happy"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="HaHa"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/04.png"
                                                            className="image-fluid"
                                                            alt="haha"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Think"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/05.png"
                                                            className="image-fluid"
                                                            alt="think"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Sad"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/06.png"
                                                            className="image-fluid"
                                                            alt="sad"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Lovely"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/07.png"
                                                            className="image-fluid"
                                                            alt="lovely"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                                  <div
                                                    className="total-comment-block d-flex justify-content-center align-items-center gap-1"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#commentcollapes2"
                                                    aria-expanded="false"
                                                    aria-controls="commentcollapes"
                                                  >
                                                    <i className="ph ph-chat-circle-text fs-4"></i>
                                                    <span className="fw-medium">
                                                      20 Comment
                                                    </span>
                                                  </div>
                                                  <div className="share-block d-flex align-items-center feather-icon">
                                                    <a
                                                      href="javascript:void(0);"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#share-btn"
                                                      aria-controls="share-btn"
                                                      className="d-flex justify-content-center align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-share-network fs-4"></i>
                                                      <span className="fw-medium">
                                                        99 Share
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="collapse mt-4 pt-4 border-top"
                                                id="commentcollapes2"
                                              >
                                                <ul className="list-inline m-o p-0 comment-list">
                                                  <li className="mb-3">
                                                    <div className="comment-list-block">
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="comment-list-user-image flex-shrink-0">
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/user/13.jpg"
                                                            alt="userimage"
                                                            className="avatar-48 rounded-circle image-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="comment-list-user-data">
                                                          <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                            <h6 className="m-0">
                                                              Bob Frapples
                                                            </h6>
                                                            <span className="d-inline-block text-primary">
                                                              <svg
                                                                className="align-text-bottom"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="17"
                                                                height="17"
                                                                viewBox="0 0 17 17"
                                                                fill="none"
                                                              >
                                                                <path
                                                                  fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                                  fill="currentColor"
                                                                />
                                                                <path
                                                                  d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                                  stroke="white"
                                                                  strokeWidth="1.5"
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                />
                                                              </svg>
                                                            </span>
                                                            <span className="fw-medium small text-capitalize">
                                                              3 min ago
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="comment-list-user-comment">
                                                        <div className="comment-list-comment">
                                                          "Just stumbled upon
                                                          this post and it's
                                                          giving me all the
                                                          feels! 🙌"
                                                        </div>
                                                        <div className="comment-list-action mt-2">
                                                          <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                            <li>
                                                              <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                                <div className="like-data">
                                                                  <div className="dropdown">
                                                                    <span
                                                                      className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                                      data-bs-toggle="dropdown"
                                                                      aria-haspopup="true"
                                                                      aria-expanded="false"
                                                                      role="button"
                                                                    >
                                                                      <i className="ph ph-thumbs-up fs-3"></i>
                                                                      <span className="fw-medium small">
                                                                        Likes
                                                                      </span>
                                                                    </span>
                                                                    <div className="dropdown-menu py-2 shadow">
                                                                      <a
                                                                        className="mx-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Like"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/01.png"
                                                                          className="image-fluid"
                                                                          alt="like"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Love"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/02.png"
                                                                          className="image-fluid"
                                                                          alt="love"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Happy"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/03.png"
                                                                          className="image-fluid"
                                                                          alt="happy"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="HaHa"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/04.png"
                                                                          className="image-fluid"
                                                                          alt="haha"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Think"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/05.png"
                                                                          className="image-fluid"
                                                                          alt="think"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Sad"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/06.png"
                                                                          className="image-fluid"
                                                                          alt="sad"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Lovely"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/07.png"
                                                                          className="image-fluid"
                                                                          alt="lovely"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </li>
                                                            <li>
                                                              <span
                                                                className="fw-medium small"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#subcomment-collapse1"
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="collapseExample"
                                                              >
                                                                Reply
                                                              </span>
                                                            </li>
                                                          </ul>
                                                          <div
                                                            className="add-comment-form-block collapse mt-3"
                                                            id="subcomment-collapse1"
                                                          >
                                                            <div className="d-flex align-items-center gap-3">
                                                              <div className="flex-shrink-0">
                                                                <Image
                                                                  width={100}
                                                                  height={100}
                                                                  src="/images/user/1.jpg"
                                                                  alt="userimage"
                                                                  className="avatar-48 rounded-circle image-fluid"
                                                                  loading="lazy"
                                                                />
                                                              </div>
                                                              <div className="add-comment-form">
                                                                <form>
                                                                  <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Write a Comment..."
                                                                  />
                                                                  <button
                                                                    type="submit"
                                                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                                                  >
                                                                    post
                                                                  </button>
                                                                </form>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                                <div className="add-comment-form-block">
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/1.jpg"
                                                        alt="userimage"
                                                        className="avatar-48 rounded-circle image-fluid"
                                                        loading="lazy"
                                                      />
                                                    </div>
                                                    <div className="add-comment-form">
                                                      <form>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Write a Comment..."
                                                        />
                                                        <button
                                                          type="submit"
                                                          className="btn btn-primary font-size-12 text-capitalize px-5"
                                                        >
                                                          post
                                                        </button>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-12 social-post">
                                        <div className="card card-block card-stretch card-height">
                                          <div className="card-body">
                                            <div className="user-post-data">
                                              <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-2">
                                                <div className="flex-shrink-0">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="border border-2 rounded-circle user-post-profile"
                                                    src="/images/user/04.jpg"
                                                    alt="user-image"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="w-100">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                      <h6 className="mb-0 d-inline-block">
                                                        Ira Membrit
                                                      </h6>
                                                      <span className="d-inline-flex align-items-center">
                                                        <i className="ph-fill ph-seal-check fs-5 text-primary"></i>
                                                      </span>
                                                      <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                                        Update her Status
                                                      </span>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                      <div className="dropdown">
                                                        <div
                                                          className="lh-1"
                                                          id="post-option"
                                                          data-bs-toggle="dropdown"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div className="dropdown-menu m-0 p-0">
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-floppy-disk fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Save Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Add this to
                                                                  your saved
                                                                  items
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-x-circle fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Hide Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  See fewer
                                                                  posts like
                                                                  this.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-user-minus fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Unfollow User
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Stop seeing
                                                                  posts but stay
                                                                  friends.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-bell fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Notifications
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Turn on
                                                                  notifications
                                                                  for this post
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <p className="mb-0">
                                                    6 Hours ago
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mt-4">
                                              <p className="m-0">
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Morbi nulla dolor, ornare at
                                                commodo non, feugiat non nisi.
                                                Phasellus faucibus mollis
                                                pharetra. Proin blandit ac massa
                                                sed rhoncus"
                                              </p>
                                            </div>
                                            <div className="post-meta-likes mt-4">
                                              <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap flex-wrap">
                                                <ul className="list-inline m-0 p-0 post-user-liked-list">
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/01.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/02.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/03.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/04.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                </ul>
                                                <div className="d-inline-flex align-items-center gap-1">
                                                  <h6 className="m-0 font-size-14">
                                                    Aliana Molex
                                                  </h6>
                                                  <span
                                                    className="text-capitalize font-size-14 fw-medium"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#likemodal"
                                                  >
                                                    and 208 others liked this
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="comment-area mt-4 pt-4 border-top">
                                              <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                  <div className="like-data">
                                                    <div className="dropdown">
                                                      <span
                                                        className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        role="button"
                                                      >
                                                        <i className="ph ph-thumbs-up fs-3"></i>
                                                        <span className="fw-medium">
                                                          140 Likes
                                                        </span>
                                                      </span>
                                                      <div className="dropdown-menu py-2 shadow">
                                                        <a
                                                          className="mx-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Like"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/01.png"
                                                            className="image-fluid"
                                                            alt="like"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Love"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/02.png"
                                                            className="image-fluid"
                                                            alt="love"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Happy"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/03.png"
                                                            className="image-fluid"
                                                            alt="happy"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="HaHa"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/04.png"
                                                            className="image-fluid"
                                                            alt="haha"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Think"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/05.png"
                                                            className="image-fluid"
                                                            alt="think"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Sad"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/06.png"
                                                            className="image-fluid"
                                                            alt="sad"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Lovely"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/07.png"
                                                            className="image-fluid"
                                                            alt="lovely"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                                  <div
                                                    className="total-comment-block d-flex justify-content-center align-items-center gap-1"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#commentcollapes3"
                                                    aria-expanded="false"
                                                    aria-controls="commentcollapes"
                                                  >
                                                    <i className="ph ph-chat-circle-text fs-4"></i>
                                                    <span className="fw-medium">
                                                      20 Comment
                                                    </span>
                                                  </div>
                                                  <div className="share-block d-flex align-items-center feather-icon">
                                                    <a
                                                      href="javascript:void(0);"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#share-btn"
                                                      aria-controls="share-btn"
                                                      className="d-flex justify-content-center align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-share-network fs-4"></i>
                                                      <span className="fw-medium">
                                                        99 Share
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="collapse mt-4 pt-4 border-top"
                                                id="commentcollapes3"
                                              >
                                                <ul className="list-inline m-o p-0 comment-list">
                                                  <li className="mb-3">
                                                    <div className="comment-list-block">
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="comment-list-user-image flex-shrink-0">
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/user/13.jpg"
                                                            alt="userimage"
                                                            className="avatar-48 rounded-circle image-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="comment-list-user-data">
                                                          <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                            <h6 className="m-0">
                                                              Bob Frapples
                                                            </h6>
                                                            <span className="d-inline-block text-primary">
                                                              <svg
                                                                className="align-text-bottom"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="17"
                                                                height="17"
                                                                viewBox="0 0 17 17"
                                                                fill="none"
                                                              >
                                                                <path
                                                                  fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                                  fill="currentColor"
                                                                />
                                                                <path
                                                                  d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                                  stroke="white"
                                                                  strokeWidth="1.5"
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                />
                                                              </svg>
                                                            </span>
                                                            <span className="fw-medium small text-capitalize">
                                                              3 min ago
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="comment-list-user-comment">
                                                        <div className="comment-list-comment">
                                                          "Just stumbled upon
                                                          this post and it's
                                                          giving me all the
                                                          feels! 🙌"
                                                        </div>
                                                        <div className="comment-list-action mt-2">
                                                          <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                            <li>
                                                              <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                                <div className="like-data">
                                                                  <div className="dropdown">
                                                                    <span
                                                                      className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                                      data-bs-toggle="dropdown"
                                                                      aria-haspopup="true"
                                                                      aria-expanded="false"
                                                                      role="button"
                                                                    >
                                                                      <i className="ph ph-thumbs-up align-text-top fs-3"></i>
                                                                      <span className="fw-medium small">
                                                                        Likes
                                                                      </span>
                                                                    </span>
                                                                    <div className="dropdown-menu py-2 shadow">
                                                                      <a
                                                                        className="mx-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Like"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/01.png"
                                                                          className="image-fluid"
                                                                          alt="like"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Love"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/02.png"
                                                                          className="image-fluid"
                                                                          alt="love"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Happy"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/03.png"
                                                                          className="image-fluid"
                                                                          alt="happy"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="HaHa"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/04.png"
                                                                          className="image-fluid"
                                                                          alt="haha"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Think"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/05.png"
                                                                          className="image-fluid"
                                                                          alt="think"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Sad"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/06.png"
                                                                          className="image-fluid"
                                                                          alt="sad"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Lovely"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/07.png"
                                                                          className="image-fluid"
                                                                          alt="lovely"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </li>
                                                            <li>
                                                              <span
                                                                className="fw-medium small"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#subcomment-collapse1"
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="collapseExample"
                                                              >
                                                                Reply
                                                              </span>
                                                            </li>
                                                          </ul>
                                                          <div
                                                            className="add-comment-form-block collapse mt-3"
                                                            id="subcomment-collapse1"
                                                          >
                                                            <div className="d-flex align-items-center gap-3">
                                                              <div className="flex-shrink-0">
                                                                <Image
                                                                  width={100}
                                                                  height={100}
                                                                  src="/images/user/1.jpg"
                                                                  alt="userimage"
                                                                  className="avatar-48 rounded-circle image-fluid"
                                                                  loading="lazy"
                                                                />
                                                              </div>
                                                              <div className="add-comment-form">
                                                                <form>
                                                                  <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Write a Comment..."
                                                                  />
                                                                  <button
                                                                    type="submit"
                                                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                                                  >
                                                                    post
                                                                  </button>
                                                                </form>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                                <div className="add-comment-form-block">
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/1.jpg"
                                                        alt="userimage"
                                                        className="avatar-48 rounded-circle image-fluid"
                                                        loading="lazy"
                                                      />
                                                    </div>
                                                    <div className="add-comment-form">
                                                      <form>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Write a Comment..."
                                                        />
                                                        <button
                                                          type="submit"
                                                          className="btn btn-primary font-size-12 text-capitalize px-5"
                                                        >
                                                          post
                                                        </button>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-sm-12 social-post">
                                        <div className="card card-block card-stretch card-height">
                                          <div className="card-body">
                                            <div className="user-post-data">
                                              <div className="d-flex align-items-center justify-content-between gap-lg-3 gap-2">
                                                <div className="flex-shrink-0">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="border border-2 rounded-circle user-post-profile"
                                                    src="/images/user/1.jpg"
                                                    alt="user-image"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                <div className="w-100">
                                                  <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                      <h6 className="mb-0 d-inline-block">
                                                        Bni Cyst
                                                      </h6>
                                                      <span className="d-inline-flex align-items-center">
                                                        <i className="ph-fill ph-seal-check fs-5 text-primary"></i>
                                                      </span>
                                                      <span className="mb-0 d-inline-block text-capitalize fw-medium">
                                                        Added New Video in his
                                                        Timeline
                                                      </span>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                      <div className="dropdown">
                                                        <div
                                                          className="lh-1"
                                                          id="post-option"
                                                          data-bs-toggle="dropdown"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div className="dropdown-menu m-0 p-0">
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-floppy-disk fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Save Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Add this to
                                                                  your saved
                                                                  items
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-x-circle fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Hide Post
                                                                </h6>
                                                                <p className="mb-0">
                                                                  See fewer
                                                                  posts like
                                                                  this.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-user-minus fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Unfollow User
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Stop seeing
                                                                  posts but stay
                                                                  friends.
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                          <a
                                                            className="dropdown-item p-3"
                                                            href="#"
                                                          >
                                                            <div className="d-flex align-items-top">
                                                              <i className="ph ph-bell fs-2"></i>
                                                              <div className="data ms-2">
                                                                <h6>
                                                                  Notifications
                                                                </h6>
                                                                <p className="mb-0">
                                                                  Turn on
                                                                  notifications
                                                                  for this post
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <p className="mb-0">
                                                    8 Hours ago
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="mt-4">
                                              <p className="m-0">
                                                "Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Morbi nulla dolor, ornare at
                                                commodo non, feugiat non nisi.
                                                Phasellus faucibus mollis
                                                pharetra. Proin blandit ac massa
                                                sed rhoncus"
                                              </p>
                                            </div>
                                            <div className="user-post mt-4">
                                              <div className="ratio ratio-16x9">
                                                <iframe
                                                  src="https://www.youtube.com/embed/oHD33oKbKh4?si=VF-Qcp-pZdzUb3RX"
                                                  allowFullScreen
                                                ></iframe>
                                              </div>
                                            </div>
                                            <div className="post-meta-likes mt-4">
                                              <div className="d-flex align-items-center gap-2 flex-md-nowrap flex-wrap flex-wrap">
                                                <ul className="list-inline m-0 p-0 post-user-liked-list">
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/01.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/02.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/03.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                  <li>
                                                    <Image
                                                      width={100}
                                                      height={100}
                                                      src="/images/user/04.jpg"
                                                      alt="userimage"
                                                      className="rounded-circle image-fluid userimage"
                                                      loading="lazy"
                                                    />
                                                  </li>
                                                </ul>
                                                <div className="d-inline-flex align-items-center gap-1">
                                                  <h6 className="m-0 font-size-14">
                                                    Aliana Molex
                                                  </h6>
                                                  <span
                                                    className="text-capitalize font-size-14 fw-medium"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#likemodal"
                                                  >
                                                    and 208 others liked this
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="comment-area mt-4 pt-4 border-top">
                                              <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                  <div className="like-data">
                                                    <div className="dropdown">
                                                      <span
                                                        className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                        role="button"
                                                      >
                                                        <i className="ph ph-thumbs-up fs-3"></i>
                                                        <span className="fw-medium">
                                                          140 Likes
                                                        </span>
                                                      </span>
                                                      <div className="dropdown-menu py-2 shadow">
                                                        <a
                                                          className="mx-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Like"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/01.png"
                                                            className="image-fluid"
                                                            alt="like"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Love"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/02.png"
                                                            className="image-fluid"
                                                            alt="love"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Happy"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/03.png"
                                                            className="image-fluid"
                                                            alt="happy"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="HaHa"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/04.png"
                                                            className="image-fluid"
                                                            alt="haha"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Think"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/05.png"
                                                            className="image-fluid"
                                                            alt="think"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Sad"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/06.png"
                                                            className="image-fluid"
                                                            alt="sad"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                        <a
                                                          className="me-2"
                                                          href="javascript:void(0);"
                                                          data-bs-toggle="tooltip"
                                                          data-bs-placement="top"
                                                          title="Lovely"
                                                        >
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/icon/07.png"
                                                            className="image-fluid"
                                                            alt="lovely"
                                                            loading="lazy"
                                                          />
                                                        </a>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 flex-shrink-0">
                                                  <div
                                                    className="total-comment-block d-flex justify-content-center align-items-center gap-1"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#commentcollapes4"
                                                    aria-expanded="false"
                                                    aria-controls="commentcollapes"
                                                  >
                                                    <i className="ph ph-chat-circle-text fs-4"></i>
                                                    <span className="fw-medium">
                                                      20 Comment
                                                    </span>
                                                  </div>
                                                  <div className="share-block d-flex align-items-center feather-icon">
                                                    <a
                                                      href="javascript:void(0);"
                                                      data-bs-toggle="modal"
                                                      data-bs-target="#share-btn"
                                                      aria-controls="share-btn"
                                                      className="d-flex justify-content-center align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-share-network fs-4"></i>
                                                      <span className="fw-medium">
                                                        99 Share
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="collapse mt-4 pt-4 border-top"
                                                id="commentcollapes4"
                                              >
                                                <ul className="list-inline m-o p-0 comment-list">
                                                  <li className="mb-3">
                                                    <div className="comment-list-block">
                                                      <div className="d-flex align-items-center gap-3">
                                                        <div className="comment-list-user-image flex-shrink-0">
                                                          <Image
                                                            width={100}
                                                            height={100}
                                                            src="/images/user/13.jpg"
                                                            alt="userimage"
                                                            className="avatar-48 rounded-circle image-fluid"
                                                            loading="lazy"
                                                          />
                                                        </div>
                                                        <div className="comment-list-user-data">
                                                          <div className="d-inline-flex align-items-center gap-1 flex-wrap">
                                                            <h6 className="m-0">
                                                              Bob Frapples
                                                            </h6>
                                                            <span className="d-inline-block text-primary">
                                                              <svg
                                                                className="align-text-bottom"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="17"
                                                                height="17"
                                                                viewBox="0 0 17 17"
                                                                fill="none"
                                                              >
                                                                <path
                                                                  fillRule="evenodd"
                                                                  clipRule="evenodd"
                                                                  d="M12.2483 0.216553H4.75081C2.13805 0.216553 0.5 2.0665 0.5 4.68444V11.7487C0.5 14.3666 2.13027 16.2166 4.75081 16.2166H12.2475C14.8689 16.2166 16.5 14.3666 16.5 11.7487V4.68444C16.5 2.0665 14.8689 0.216553 12.2483 0.216553Z"
                                                                  fill="currentColor"
                                                                />
                                                                <path
                                                                  d="M5.5 8.21627L7.50056 10.216L11.5 6.21655"
                                                                  stroke="white"
                                                                  strokeWidth="1.5"
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                />
                                                              </svg>
                                                            </span>
                                                            <span className="fw-medium small text-capitalize">
                                                              3 min ago
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="comment-list-user-comment">
                                                        <div className="comment-list-comment">
                                                          "Just stumbled upon
                                                          this post and it's
                                                          giving me all the
                                                          feels! 🙌"
                                                        </div>
                                                        <div className="comment-list-action mt-2">
                                                          <ul className="list-inline m-0 p-0 d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                            <li>
                                                              <div className="like-block relative d-flex align-items-center flex-shrink-0">
                                                                <div className="like-data">
                                                                  <div className="dropdown">
                                                                    <span
                                                                      className="dropdown-toggle d-flex align-items-center justify-content-center gap-1"
                                                                      data-bs-toggle="dropdown"
                                                                      aria-haspopup="true"
                                                                      aria-expanded="false"
                                                                      role="button"
                                                                    >
                                                                      <i className="ph ph-thumbs-up fs-3"></i>
                                                                      <span className="fw-medium small">
                                                                        Likes
                                                                      </span>
                                                                    </span>
                                                                    <div className="dropdown-menu py-2 shadow">
                                                                      <a
                                                                        className="mx-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Like"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/01.png"
                                                                          className="image-fluid"
                                                                          alt="like"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Love"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/02.png"
                                                                          className="image-fluid"
                                                                          alt="love"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Happy"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/03.png"
                                                                          className="image-fluid"
                                                                          alt="happy"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="HaHa"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/04.png"
                                                                          className="image-fluid"
                                                                          alt="haha"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Think"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/05.png"
                                                                          className="image-fluid"
                                                                          alt="think"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Sad"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/06.png"
                                                                          className="image-fluid"
                                                                          alt="sad"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                      <a
                                                                        className="me-2"
                                                                        href="javascript:void(0);"
                                                                        data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Lovely"
                                                                      >
                                                                        <Image
                                                                          width={
                                                                            100
                                                                          }
                                                                          height={
                                                                            100
                                                                          }
                                                                          src="/images/icon/07.png"
                                                                          className="image-fluid"
                                                                          alt="lovely"
                                                                          loading="lazy"
                                                                        />
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </li>
                                                            <li>
                                                              <span
                                                                className="fw-medium small"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#subcomment-collapse1"
                                                                role="button"
                                                                aria-expanded="false"
                                                                aria-controls="collapseExample"
                                                              >
                                                                Reply
                                                              </span>
                                                            </li>
                                                          </ul>
                                                          <div
                                                            className="add-comment-form-block collapse mt-3"
                                                            id="subcomment-collapse1"
                                                          >
                                                            <div className="d-flex align-items-center gap-3">
                                                              <div className="flex-shrink-0">
                                                                <Image
                                                                  width={100}
                                                                  height={100}
                                                                  src="/images/user/1.jpg"
                                                                  alt="userimage"
                                                                  className="avatar-48 rounded-circle image-fluid"
                                                                  loading="lazy"
                                                                />
                                                              </div>
                                                              <div className="add-comment-form">
                                                                <form>
                                                                  <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Write a Comment..."
                                                                  />
                                                                  <button
                                                                    type="submit"
                                                                    className="btn btn-primary font-size-12 text-capitalize px-5"
                                                                  >
                                                                    post
                                                                  </button>
                                                                </form>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                                <div className="add-comment-form-block">
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="flex-shrink-0">
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/user/1.jpg"
                                                        alt="userimage"
                                                        className="avatar-48 rounded-circle image-fluid"
                                                        loading="lazy"
                                                      />
                                                    </div>
                                                    <div className="add-comment-form">
                                                      <form>
                                                        <input
                                                          type="text"
                                                          className="form-control"
                                                          placeholder="Write a Comment..."
                                                        />
                                                        <button
                                                          type="submit"
                                                          className="btn btn-primary font-size-12 text-capitalize px-5"
                                                        >
                                                          post
                                                        </button>
                                                      </form>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="about"
                              role="tabpanel"
                            >
                              <div className="row gy-3">
                                <div className="col-md-4">
                                  <div className="card">
                                    <div className="card-body">
                                      <div className="d-flex flex-column nav nav-pills basic-info-items list-unstyled p-0 m-0">
                                        <div
                                          className="accordion profile-settings-accordion"
                                          id="profileSettingsAccordion"
                                        >
                                          <div className="accordion-item mb-3">
                                            <h2
                                              className="accordion-header"
                                              id="profileSettingsHeading"
                                            >
                                              <button
                                                className="accordion-button collapsed rounded-2"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#profileSettingsCollapse"
                                                aria-expanded="false"
                                                aria-controls="profileSettingsCollapse"
                                              >
                                                <span className="btn-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                  <i className="ph ph-user"></i>
                                                  Profile Setting
                                                </span>
                                                <i className="ph ph-caret-down"></i>
                                              </button>
                                            </h2>
                                            <div
                                              id="profileSettingsCollapse"
                                              className="accordion-collapse collapse show"
                                              aria-labelledby="profileSettingsHeading"
                                              data-bs-parent="#profileSettingsAccordion"
                                            >
                                              <div className="accordion-body p-0">
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold active"
                                                    href="#v-pills-basicinfo-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-basicinfo-tab"
                                                    role="button"
                                                    aria-selected="true"
                                                  >
                                                    Personal Information
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-details-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-details-tab"
                                                    role="button"
                                                    aria-selected="false"
                                                  >
                                                    Hobbies and Interests
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-family-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-family"
                                                    role="button"
                                                    aria-selected="false"
                                                  >
                                                    Social Networks
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-work-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-work-tab"
                                                    role="button"
                                                    aria-selected="false"
                                                  >
                                                    Work and Education
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-lived-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#v-pills-lived-tab"
                                                    role="button"
                                                    aria-selected="false"
                                                  >
                                                    Places You've Lived
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="accordion-item">
                                            <h2
                                              className="accordion-header"
                                              id="accountSettingsHeading"
                                            >
                                              <button
                                                className="accordion-button collapsed rounded-2"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#accountSettingsCollapse"
                                                aria-expanded="false"
                                                aria-controls="accountSettingsCollapse"
                                              >
                                                <span className="btn-text d-flex align-items-center gap-2 flex-md-nowrap flex-wrap">
                                                  <i className="ph ph-gear"></i>
                                                  Account Settings
                                                </span>
                                                <i className="ph ph-caret-down"></i>
                                              </button>
                                            </h2>
                                            <div
                                              id="accountSettingsCollapse"
                                              className="accordion-collapse collapse"
                                              aria-labelledby="accountSettingsHeading"
                                              data-bs-parent="#profileSettingsAccordion"
                                            >
                                              <div className="accordion-body p-0">
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-visibility-tab"
                                                    data-bs-toggle="pill"
                                                    role="tab"
                                                    aria-controls="v-pills-visibility-tab"
                                                    aria-selected="false"
                                                  >
                                                    Profile Visibility
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-privacy-tab"
                                                    data-bs-toggle="pill"
                                                    role="tab"
                                                    aria-controls="v-pills-privacy-tab"
                                                    aria-selected="false"
                                                  >
                                                    Privacy and Security
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-block-tab"
                                                    data-bs-toggle="pill"
                                                    role="tab"
                                                    aria-controls="v-pills-block-tab"
                                                    aria-selected="false"
                                                  >
                                                    Block List
                                                  </a>
                                                </div>
                                                <div className="mt-3">
                                                  <a
                                                    className="nav-link font-size-16 fw-semibold"
                                                    href="#v-pills-export-tab"
                                                    data-bs-toggle="pill"
                                                    role="tab"
                                                    aria-controls="v-pills-export-tab"
                                                    aria-selected="false"
                                                  >
                                                    Export Data
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-8">
                                  <div className="card">
                                    <div className="card-body">
                                      <div
                                        id="profileTabContent"
                                        className="tab-content active show"
                                      >
                                        <div
                                          className="tab-pane fade active show"
                                          id="v-pills-basicinfo-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-basicinfo-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Personal Info</h4>
                                            <a
                                              href="../app/profile-edit.html"
                                              className="p-2 d-flex flex-column justify-content-center align-item-center btn btn-primary"
                                            >
                                              <i className="ph ph-pencil-simple"></i>
                                            </a>
                                          </div>
                                          <hr />
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <h5>About Me:</h5>
                                                <p className="mb-0">
                                                  Hi, I’m James, I’m 36 and I
                                                  work as a Digital Designer for
                                                  the “Daydreams” Agency in Pier
                                                  56
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Email:</h5>
                                                <p className="mb-0">
                                                  Bnijohn@gmail.com
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Mobile:</h5>
                                                <p className="mb-0">
                                                  (001) 4544 565 456
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Address:</h5>
                                                <p className="mb-0">
                                                  United States of America
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Social Link:</h5>
                                                <p className="mb-0">
                                                  www.bootstrap.com
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Birth Date:</h5>
                                                <p className="mb-0">
                                                  24 January
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Birth Year:</h5>
                                                <p className="mb-0">1994</p>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <h5>Birthplace:</h5>
                                                <p className="mb-0">
                                                  Austin, Texas, USA
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Lives in:</h5>
                                                <p className="mb-0">
                                                  San Francisco, California, USA
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Gender:</h5>
                                                <p className="mb-0">Female</p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Interested in:</h5>
                                                <p className="mb-0">
                                                  Designing
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Language:</h5>
                                                <p className="mb-0">
                                                  English, French
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Joined:</h5>
                                                <p className="mb-0">
                                                  April 31st, 2014
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Status:</h5>
                                                <p className="mb-0">Married</p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Phone Number:</h5>
                                                <p className="mb-0">
                                                  (044) 555 - 4369 - 8957
                                                </p>
                                              </div>
                                              <div className="mb-3">
                                                <h5>Political Incline:</h5>
                                                <p className="mb-0">Democrat</p>
                                              </div>
                                            </div>
                                          </div>
                                          <h4 className="mt-4">
                                            Websites and Social Links
                                          </h4>
                                          <hr />
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <h5>Website:</h5>
                                                <p className="mb-0">
                                                  www.bootstrap.com
                                                </p>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <div className="mb-3">
                                                <h5>Social Link:</h5>
                                                <p className="mb-0">
                                                  www.bootstrap.com
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-details-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-details-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Hobbies and Interests</h4>
                                            <a
                                              href="../app/profile-edit.html"
                                              className="p-2 d-flex flex-column justify-content-center align-item-center btn btn-primary"
                                            >
                                              <i className="ph ph-pencil-simple"></i>
                                            </a>
                                          </div>
                                          <hr />
                                          <h5 className="mb-1">Hobbies:</h5>
                                          <p>
                                            Hi, I’m Bni, I’m 26 and I work as a
                                            Web Designer for the iqonicdesign.I
                                            like to ride the bike to work,
                                            swimming, and working out. I also
                                            like reading design magazines, go to
                                            museums, and binge watching a good
                                            tv show while it’s raining outside.
                                          </p>
                                          <h5 className="mt-2 mb-1">
                                            Favourite TV Shows:
                                          </h5>
                                          <p>
                                            Breaking Good, RedDevil, People of
                                            Interest, The Running Dead, Found,
                                            American Guy.
                                          </p>
                                          <h5 className="mt-2 mb-1">
                                            Favourite Movies:
                                          </h5>
                                          <p>
                                            Idiocratic, The Scarred Wizard and
                                            the Fire Crown, Crime Squad, Ferrum
                                            Man.
                                          </p>
                                          <h5 className="mt-2 mb-1">
                                            Favourite Games:
                                          </h5>
                                          <p>
                                            The First of Us, Assassin’s Squad,
                                            Dark Assylum, NMAK16, Last Cause 4,
                                            Grand Snatch Auto.
                                          </p>
                                          <h5 className="mt-2 mb-1">
                                            Favourite Music Bands / Artists:
                                          </h5>
                                          <p>
                                            Iron Maid, DC/AC, Megablow, The Ill,
                                            Kung Fighters, System of a Revenge.
                                          </p>
                                          <h5 className="mt-2 mb-1">
                                            Favourite Books:
                                          </h5>
                                          <p>
                                            The Crime of the Century, Egiptian
                                            Mythology 101, The Scarred Wizard,
                                            Lord of the Wings, Amongst Gods, The
                                            Oracle, A Tale of Air and Water.
                                          </p>
                                          <h5 className="mt-2 mb-1">
                                            Favourite Writers:
                                          </h5>
                                          <p>
                                            Martin T. Georgeston, Jhonathan R.
                                            Token, Ivana Rowle, Alexandria
                                            Platt, Marcus Roth.
                                          </p>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-family"
                                          role="tabpanel"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Relationship</h4>
                                            <a
                                              href="../app/profile-edit.html"
                                              className="p-2 d-flex flex-column justify-content-center align-item-center btn btn-primary"
                                            >
                                              <i className="ph ph-pencil-simple"></i>
                                            </a>
                                          </div>
                                          <hr />
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex align-items-center gap-3 mb-4">
                                              <div className="user-image image-fluid">
                                                <i className="ph ph-plus"></i>
                                              </div>
                                              <div className="media-support-info">
                                                <h6>
                                                  Add Your Relationship Status
                                                </h6>
                                              </div>
                                            </li>
                                          </ul>
                                          <h4 className="mt-3 mb-3">
                                            Family Members
                                          </h4>
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex  align-items-center gap-3 mb-4">
                                              <div className="user-image image-fluid">
                                                <i className="ph ph-plus"></i>
                                              </div>
                                              <div className="media-support-info">
                                                <h6>Add Family Members</h6>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/01.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>Paul Molive</h6>
                                                    <p className="mb-0">
                                                      Brother
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="d-flex justify-content-between mb-4  align-items-center">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/02.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex flex-wrap justify-content-between">
                                                  <div className=" ms-3">
                                                    <h6>Anna Mull</h6>
                                                    <p className="mb-0">
                                                      Sister
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/03.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>Paige Turner</h6>
                                                    <p className="mb-0">
                                                      Cousin
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-work-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-work-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Work</h4>
                                            <a
                                              href="../app/profile-edit.html"
                                              className="p-2 d-flex flex-column justify-content-center align-item-center btn btn-primary"
                                            >
                                              <i className="ph ph-pencil-simple"></i>
                                            </a>
                                          </div>
                                          <hr />
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex justify-content-between mb-4 align-items-center gap-2">
                                              <div className="user-image image-fluid">
                                                <i className="ph ph-plus"></i>
                                              </div>
                                              <div>
                                                <h6>Add Work Place</h6>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/01.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>Themeforest</h6>
                                                    <p className="mb-0">
                                                      Web Designer
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/02.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex flex-wrap justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>iqonicdesign</h6>
                                                    <p className="mb-0">
                                                      Web Developer
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/03.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex flex-wrap justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>W3school</h6>
                                                    <p className="mb-0">
                                                      Designer
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                          <h4 className="mb-3">
                                            Professional Skills
                                          </h4>
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex mb-4 align-items-center">
                                              <div className="user-image image-fluid">
                                                <i className="ph ph-plus"></i>
                                              </div>
                                              <div className="ms-3">
                                                <h6>Add Professional Skills</h6>
                                              </div>
                                            </li>
                                          </ul>
                                          <h4 className="mt-3 mb-3">College</h4>
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex mb-4 align-items-center">
                                              <div className="user-image image-fluid">
                                                <i className="ph ph-plus"></i>
                                              </div>
                                              <div className="ms-3">
                                                <h6>Add College</h6>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/01.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex flex-wrap justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>Lorem ipsum</h6>
                                                    <p className="mb-0">USA</p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-lived-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-lived-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Current City and Hometown</h4>
                                            <a
                                              href="../app/profile-edit.html"
                                              className="p-2 d-flex flex-column justify-content-center align-item-center btn btn-primary"
                                            >
                                              <i className="ph ph-pencil-simple"></i>
                                            </a>
                                          </div>
                                          <hr />
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/01.jpg"
                                                  alt="story-image"
                                                  loading="lazy"
                                                  className="rounded-circle avatar-40"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex flex-wrap justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>Georgia</h6>
                                                    <p className="mb-0">
                                                      Georgia State
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center justify-content-between">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/02.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex flex-wrap justify-content-between">
                                                  <div className="ms-3">
                                                    <h6>Atlanta</h6>
                                                    <p className="mb-0">
                                                      Atlanta City
                                                    </p>
                                                  </div>
                                                  <div className="edit-relation">
                                                    <a
                                                      href="#"
                                                      className="d-flex align-items-center gap-1"
                                                    >
                                                      <i className="ph ph-pencil-simple"></i>
                                                      <span className="edit-btn">
                                                        Edit
                                                      </span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </li>
                                          </ul>
                                          <h4 className="mt-3 mb-3">
                                            Other Places Lived
                                          </h4>
                                          <ul className="suggestions-lists m-0 p-0">
                                            <li className="d-flex mb-4 align-items-center">
                                              <div className="user-image image-fluid">
                                                <i className="ph ph-plus"></i>
                                              </div>
                                              <div className="ms-3">
                                                <h6>Add Place</h6>
                                              </div>
                                            </li>
                                          </ul>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-visibility-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-visibility-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Profile Visibility</h4>
                                          </div>
                                          <hr />
                                          <div className="table-responsive table-primary mb-4">
                                            <table className="table table-bordered align-middle mb-0">
                                              <thead className="bg-primary text-white">
                                                <tr>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Personal Information
                                                  </th>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Visibility
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody className="p-3">
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Name
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    Everyone
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Gender
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        Friends
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Birthdate
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option value="only-me">
                                                        Only Me
                                                      </option>
                                                      <option
                                                        value="everyone"
                                                        // selected
                                                      >
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        Friends
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Location
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option value="only-me">
                                                        Only Me
                                                      </option>
                                                      <option
                                                        value="everyone"
                                                        // selected
                                                      >
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        Friends
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Website
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Biography
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    Everyone
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <div className="table-responsive table-primary mb-4">
                                            <table className="table table-bordered align-middle mb-0">
                                              <thead className="bg-primary text-white">
                                                <tr>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Hobbies And Interest
                                                  </th>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Visibility
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody className="p-3">
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    My Hobbies
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Music Brands
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Tv Shows
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Movies
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Games
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <div className="table-responsive table-primary mb-4">
                                            <table className="table table-bordered align-middle mb-0">
                                              <thead className="bg-primary text-white">
                                                <tr>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Social Networks
                                                  </th>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Visibility
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody className="p-3">
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Facebook
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Twitter
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Dribbble
                                                  </td>
                                                  <td className="p-2 fs-6 p-3">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Behance
                                                  </td>
                                                  <td className="p-2 fs-6">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    YouTube
                                                  </td>
                                                  <td className="p-2 fs-6 ">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Instagram
                                                  </td>
                                                  <td className="p-2 fs-6 ">
                                                    <select className="form-select">
                                                      <option
                                                        value="only-me"
                                                        // selected
                                                      >
                                                        Only Me
                                                      </option>
                                                      <option value="everyone">
                                                        Everyone
                                                      </option>
                                                      <option value="friends">
                                                        My Friends
                                                      </option>
                                                      <option value="friends">
                                                        All Members
                                                      </option>
                                                    </select>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <div className="table-responsive table-primary mb-4">
                                            <table className="table table-bordered align-middle mb-0">
                                              <thead className="bg-primary text-white">
                                                <tr>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Billing Address
                                                  </th>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Visibility
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody className="p-3">
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    First Name
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Last Name
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Company
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Address 1
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Address 2
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    City
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Postcode
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Country
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    State/County
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Email Address
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Phone
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Fax
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <div className="table-responsive table-primary mb-4">
                                            <table className="table table-bordered align-middle mb-0">
                                              <thead className="bg-primary text-white">
                                                <tr>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Shipping Address
                                                  </th>
                                                  <th
                                                    className="p-3 fs-6"
                                                    scope="col"
                                                  >
                                                    Visibility
                                                  </th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    First Name
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Last Name
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Company
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Address 1
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Address 2
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    City
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Postcode
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    Country
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td className="table-title fs-6 fw-semibold p-3 text-body">
                                                    State/County
                                                  </td>
                                                  <td className="p-2 fs-6 px-3">
                                                    Only Me
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-privacy-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-privacy-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Privacy and Security</h4>
                                          </div>
                                          <hr />
                                          <div className="notification-title">
                                            <input
                                              type="checkbox"
                                              name="account_type"
                                              value="private"
                                              className="css_prefix-account-type"
                                            //   checked={true}
                                            />
                                            <label className="text-body fs-6 ms-2">
                                              Private account
                                            </label>
                                            <p className="text-body mb-0 fs-6">
                                              When your account is private, only
                                              your friends can see your profile
                                              and activities.{" "}
                                            </p>
                                          </div>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-block-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-block-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Block List</h4>
                                          </div>
                                          <hr />
                                          <div className="block-list-wrapper">
                                            <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                              <div className="d-flex gap-3">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  className="avatar-60 rounded-pill align-top"
                                                  src="/images/user/02.jpg"
                                                  alt="user-avatar"
                                                  loading="lazy"
                                                />
                                                <div className="d-inline-block">
                                                  <a href="javascript:void(0);">
                                                    <h6 className="d-flex fs-4 align-items-center gap-2">
                                                      John Johnson{" "}
                                                      <Image
                                                        width={100}
                                                        height={100}
                                                        src="/images/small/verifyIcon.svg"
                                                        alt="verified-icon"
                                                      />
                                                    </h6>
                                                  </a>
                                                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                                                    <div className="font-size-14 text-body d-flex align-items-center gap-2">
                                                      <i className="ph ph-map-pin fs-5"></i>
                                                      <span className="text-body location-text">
                                                        New York, US
                                                      </span>
                                                    </div>
                                                    <div className="font-size-14 text-body d-flex align-items-center gap-2">
                                                      <i className="ph ph-calendar-blank fs-5"></i>
                                                      <span className="text-body time-text">
                                                        a minute ago
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                                <button className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white">
                                                  Unblock{" "}
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="tab-pane fade"
                                          id="v-pills-export-tab"
                                          role="tabpanel"
                                          aria-labelledby="v-pills-export-tab"
                                        >
                                          <div className="top-box d-flex justify-content-between align-items-center">
                                            <h4>Export Data</h4>
                                          </div>
                                          <hr />
                                          <p className="mt-2 fs-6 fw-semibold">
                                            You previously requested an export
                                            of your personal data on July 26,
                                            2022.
                                          </p>
                                          <p className="mt-2 fs-6 fw-semibold">
                                            You will receive a link to download
                                            your export via email once we are
                                            able to fulfill your request.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="friends"
                              role="tabpanel"
                            >
                              <div className="card">
                                <div className="d-flex justify-content-between align-items-center p-0 friends-header rounded">
                                  <div className="custom-nav-slider relative w-100">
                                    <div className="scroll-container">
                                      <ul
                                        className="nav nav-pills nav-tab-bottom-border d-flex align-items-center list-item-tabs p-3 px-4 m-0"
                                        id="friends-requests-tab"
                                      >
                                        <li className="nav-item">
                                          <a
                                            className="nav-link active d-flex align-items-center gap-2"
                                            id="friends-tab"
                                            data-bs-toggle="pill"
                                            href="#friends-list"
                                            role="tab"
                                            aria-controls="friends-list"
                                            aria-selected="true"
                                          >
                                            All Members
                                            <span className="rounded-pill badge-pill bg-warning font-size-12 py-0 px-2">
                                              12
                                            </span>
                                          </a>
                                        </li>
                                        <li className="nav-item">
                                          <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            id="recently-tab"
                                            data-bs-toggle="pill"
                                            href="#recently-added-list"
                                            role="tab"
                                            aria-controls="recently-added-list"
                                            aria-selected="false"
                                          >
                                            Recently Added
                                            <span className="rounded-pill badge-pill bg-warning font-size-12 py-0 px-2">
                                              2
                                            </span>
                                          </a>
                                        </li>
                                        <li className="nav-item">
                                          <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            id="close-friend-tab"
                                            data-bs-toggle="pill"
                                            href="#close-friend-list"
                                            role="tab"
                                            aria-controls="close-friend-list"
                                            aria-selected="false"
                                          >
                                            Close Friends
                                          </a>
                                        </li>
                                        <li className="nav-item">
                                          <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            id="home-town-friend-tab"
                                            data-bs-toggle="pill"
                                            href="#home-town-friend-list"
                                            role="tab"
                                            aria-controls="home-town-friend-list"
                                            aria-selected="false"
                                          >
                                            Home/Town Friends
                                          </a>
                                        </li>
                                        <li className="nav-item">
                                          <a
                                            className="nav-link d-flex align-items-center gap-2"
                                            id="home-following-tab"
                                            data-bs-toggle="pill"
                                            href="#following-list"
                                            role="tab"
                                            aria-controls="following-list"
                                            aria-selected="false"
                                          >
                                            Following
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="dropdown order-dropdown d-flex align-items-center justify-content-md-end gap-3 p-3 col-12 col-md-3 fs-6 border-start">
                                    <span className="flex-shrink-0">
                                      Order By:
                                    </span>
                                    <button
                                      className="btn btn-light dropdown-toggle"
                                      id="dropdownMenuButton"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      <span className="active-filter fs-6">
                                        Last Active
                                      </span>
                                    </button>
                                    <ul
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      <li>
                                        <a
                                          className="dropdown-item fs-6"
                                          href="#"
                                        >
                                          Last Active
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item fs-6"
                                          href="#"
                                        >
                                          Recently Added
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="dropdown-item fs-6"
                                          href="#"
                                        >
                                          Alphabetical
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body">
                                  <div
                                    className="tab-content"
                                    id="friends-requests-tab-content"
                                  >
                                    <div
                                      className="tab-pane fade show active"
                                      id="friends-list"
                                      role="tabpanel"
                                      aria-labelledby="friends-tab"
                                    >
                                      <div className="friend-list-tab card my-0 gap-3">
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              width={100}
                                              height={100}
                                              alt=""
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/05.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Petey Cruiser
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex flex-wrap align-item-center justify-content-between gap-3">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/06.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Anna Sthesia
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/07.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Paul Molive
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/08.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Gail Forcewind
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    hour ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/09.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Paige Turner
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/10.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  b Frapples
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/13.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Walter Melon
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/14.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Barb Ackue
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/15.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Buck Kinnear
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/16.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Ira Membrit
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt="h"
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/17.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  Shonda Leer
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="thread d-flex flex-wrap align-items-start justify-content-between p-3 bg-body rounded gap-3">
                                          <div className="d-flex gap-3 align-items-center">
                                            <Image
                                              alt=""
                                              width={100}
                                              height={100}
                                              className="avatar-60 rounded-pill align-top"
                                              src="/images/user/18.jpg"
                                              loading="lazy"
                                            />
                                            <div className="d-inline-block">
                                              <a href="javascript:void(0);">
                                                <h6 className="d-flex fs-4 align-items-center gap-1">
                                                  ock Lee
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/small/verifyIcon.svg"
                                                    alt="verified-icon"
                                                  />
                                                </h6>
                                              </a>
                                              <div className="d-flex align-item-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-map-pin fs-5"></i>
                                                  <span className="text-body location-text">
                                                    New York,US
                                                  </span>
                                                </div>
                                                <div className="mb-0 font-size-14 text-body d-flex align-items-center justify-content-center gap-2">
                                                  <i className="ph ph-calendar-blank fs-5"></i>
                                                  <span className="text-body time-text">
                                                    a minute ago
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="d-flex align-items-start justify-content-start gap-3 action-btns">
                                            <a
                                              className="rounded-2 btn btn-warning px-2 py-1 font-size-14 text-white"
                                              href="javascript:void(0);"
                                            >
                                              Unfriends
                                            </a>
                                            <a
                                              href="javascript:void(0);"
                                              className="message-btn"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              data-bs-original-title="Message"
                                            >
                                              <i className="ph ph-envelope-simple fs-4"></i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="groups"
                              role="tabpanel"
                            >
                              <div className="d-grid gap-4 d-grid-template-1fr-19 mb-4">
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg2.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-1.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Designer
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              1 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              10 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg1.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-2.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        R &amp; D
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              0 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              5 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg4.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-3.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Graphics
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              50+ Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              100+ Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg5.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-4.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Developer
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              30 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              48 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg6.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-5.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Tester
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              4 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              24 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg7.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-6.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90  border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Events
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              8 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              30 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg8.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-7.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Coder
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              19 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              15 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg5.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-8.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90 border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Themes
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              27 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              70 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                <div className="card group-box mb-0">
                                  <div className="top-bg-image">
                                    <Image
                                      width={100}
                                      height={100}
                                      src="/images/page-img/profile-bg1.jpg"
                                      className="image-fluid w-100"
                                      alt="group-bg"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="card-body text-center">
                                    <div className="group-icon">
                                      <Image
                                        width={100}
                                        height={100}
                                        src="/images/page-img/gi-9.jpg"
                                        alt="profile-image"
                                        className="rounded-2 image-fluid avatar-90  border-4"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="group-info mt-3 mb-2">
                                      <a
                                        href="../app/group-detail.html"
                                        className="h4"
                                      >
                                        Review
                                      </a>
                                    </div>
                                    <div className="group-details pb-4 mb-4 border-bottom">
                                      <ul className="d-flex align-items-center justify-content-center list-inline m-0 p-0 gap-3">
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-file-text fs-4"></i>
                                            <span className="text-capitalize">
                                              32 Posts
                                            </span>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="d-flex align-items-center gap-1">
                                            <i className="ph ph-users fs-4"></i>
                                            <span className="text-capitalize">
                                              12 Members
                                            </span>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="group-member mb-4">
                                      <div className="iq-media-group">
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/05.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/06.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/07.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/08.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/09.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                        <a href="#" className="iq-media">
                                          <Image
                                            width={100}
                                            height={100}
                                            className="image-fluid avatar-30 rounded-circle"
                                            src="/images/user/10.jpg"
                                            loading="lazy"
                                            alt=""
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="text-center">
                                      <button
                                        type="submit"
                                        className="btn  fw-semibold px-3"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="media"
                              role="tabpanel"
                            >
                              <div className="card">
                                <div className="custom-nav-slider relative w-100">
                                  <div className="scroll-container">
                                    <ul className="nav nav-pills nav-tab-bottom-border d-flex align-items-center justify-content-left list-item-tabs py-3 px-4">
                                      <li>
                                        <a
                                          className="nav-link active"
                                          data-bs-toggle="pill"
                                          href="#pill-photosofyou"
                                          data-bs-target="#photosofyou"
                                        >
                                          Photos of You
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          className="nav-link"
                                          data-bs-toggle="pill"
                                          href="#pill-your-photos"
                                          data-bs-target="#your-photos"
                                        >
                                          Your Photos
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="card">
                                <div className="card-body">
                                  <div className="friend-list-tab mb-3">
                                    <div className="tab-content">
                                      <div
                                        className="tab-pane fade active show"
                                        id="photosofyou"
                                        role="tabpanel"
                                      >
                                        <div className="card-body p-0">
                                          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-3">
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/51.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/51.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/52.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/52.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/53.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/53.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/54.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/54.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/55.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/55.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/56.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/56.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/57.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/57.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/58.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/58.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/59.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/59.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/60.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/60.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/61.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/61.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/62.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/62.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/63.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/63.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/64.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/64.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/65.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/65.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="tab-pane fade"
                                        id="your-photos"
                                        role="tabpanel"
                                      >
                                        <div className="card-body p-0">
                                          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 gy-3">
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/51.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/51.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/52.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/52.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/53.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/53.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/54.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/54.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/55.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/55.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/56.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/56.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/57.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/57.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/58.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/58.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/63.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/63.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/64.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/64.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="user-images iq-video-hover relative overflow-hidden">
                                                <a
                                                  data-fslightbox="gallery"
                                                  href="/images/page-image/65.jpg"
                                                >
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    src="/images/page-img/65.jpg"
                                                    className="image-fluid rounded"
                                                    alt="photo-profile"
                                                    loading="lazy"
                                                  />
                                                </a>
                                                <div className="image-hover-data">
                                                  <div className="product-elements-icon">
                                                    <ul className="d-flex align-items-center m-0 p-0 list-inline gap-3">
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          60{" "}
                                                          <i className="ph ph-thumbs-up fs-3"></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          30{" "}
                                                          <i className="ph ph-chat-circle-text fs-4 "></i>
                                                        </a>
                                                      </li>
                                                      <li>
                                                        <a
                                                          href="#"
                                                          className="text-white d-flex align-items-center gap-1"
                                                        >
                                                          10{" "}
                                                          <i className="ph ph-arrow-bend-double-up-right fs-4"></i>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                                <a
                                                  href="#"
                                                  className="image-edit-btn d-flex align-items-center justify-content-center"
                                                  data-bs-toggle="tooltip"
                                                  data-bs-placement="top"
                                                  data-bs-original-title="Edit or Remove"
                                                >
                                                  <i className="ph ph-pencil-simple fs-3"></i>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="notifications"
                              role="tabpanel"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-sm-12">
                                    <ul className="notification-list list-inline m-0 p-0">
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/01.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Paige Turner Posted in
                                                      UI/UX Community
                                                    </h6>
                                                    <p className="mb-0">
                                                      30 minutes ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-primary-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-medal-military font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/02.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Anne Fibbiyon Liked Your
                                                      Post
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 hour ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-danger-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-heart-straight font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/03.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Barry Cuda Add Story
                                                    </h6>
                                                    <p className="mb-0">
                                                      40 days ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-primary-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-medal-military font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/04.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Cliff Hanger Posted A
                                                      Comment On Your Status
                                                      Update
                                                    </h6>
                                                    <p className="mb-0">
                                                      42 days ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-success-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-chat-text font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/4.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Rick O&#x27;Shea Posted A
                                                      Comment On Your Photo
                                                    </h6>
                                                    <p className="mb-0">
                                                      50 days ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-success-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-chat-text font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/05.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Brock Lee Sent A Friend
                                                      Request
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 hour ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-warning-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-arrow-bend-up-left font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/06.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Ira Membrit Shared Your
                                                      Status Update
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 hour ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-warning-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-share-network font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/11.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Paul Molive And 3 Ther
                                                      Have Birthday Today
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 hour ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-danger-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-cake font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/07.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Petey Cruiser Sent A
                                                      Friend Request
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 day ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-warning-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-arrow-bend-up-left font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/08.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Bob Frapples And 45 Other
                                                      Like Your Pst On Timeline
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 week ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-danger-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-heart-straight font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/12.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Maya Didas Share Your Post
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 month ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-info-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-share-network font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/09.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Sal Monella Add Photo With
                                                      You
                                                    </h6>
                                                    <p className="mb-0">
                                                      1 month ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-primary-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-medal-military font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/10.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Barb Dwyer Commented On
                                                      Your New Profile Status
                                                    </h6>
                                                    <p className="mb-0">
                                                      2 month ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-success-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-chat-text font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/13.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Terry Aki Commented On
                                                      Your New Profile Status
                                                    </h6>
                                                    <p className="mb-0">
                                                      2 month ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-success-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-chat-text font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="card">
                                          <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between gap-3 flex-md-nowrap flex-wrap">
                                              <div className="user-image image-fluid">
                                                <Image
                                                  width={100}
                                                  height={100}
                                                  src="/images/user/14.jpg"
                                                  alt="story-image"
                                                  className="rounded-circle avatar-40"
                                                  loading="lazy"
                                                />
                                              </div>
                                              <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                  <div>
                                                    <h6>
                                                      Paige Turner Posted In
                                                      Development Community
                                                    </h6>
                                                    <p className="mb-0">
                                                      3 month ago
                                                    </p>
                                                  </div>
                                                  <div className="d-flex align-items-center gap-3">
                                                    <a
                                                      href="#"
                                                      className="btn btn-icon btn-primary-subtle btn-sm d-flex flex-column align-items-center justify-content-center rounded"
                                                    >
                                                      <i className="ph ph-medal-military font-size-16"></i>
                                                    </a>
                                                    <div className="card-header-toolbar d-flex align-items-center">
                                                      <div className="dropdown">
                                                        <div
                                                          className="dropdown-toggle"
                                                          id="dropdownMenuButton"
                                                          data-bs-toggle="dropdown"
                                                          aria-expanded="false"
                                                          role="button"
                                                        >
                                                          <i className="ph-bold ph-dots-three font-size-30"></i>
                                                        </div>
                                                        <div
                                                          className="dropdown-menu dropdown-menu-right"
                                                          aria-labelledby="dropdownMenuButton"
                                                        >
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-eye fs-3"></i>
                                                            View
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-trash fs-3"></i>
                                                            Delete
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-pencil-simple fs-3"></i>
                                                            Edit
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-printer fs-3"></i>
                                                            Print
                                                          </a>
                                                          <a
                                                            className="dropdown-item d-flex align-items-center gap-2"
                                                            href="#"
                                                          >
                                                            <i className="ph ph-download-simple fs-3"></i>
                                                            Download
                                                          </a>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="points"
                              role="tabpanel"
                            >
                              <div className="container">
                                <div className="row justify-content-center">
                                  <div className="col-md-4">
                                    <div className="card text-center shadow-sm">
                                      <div className="card-body">
                                        <div className="icon mb-3">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/gamipress/coin.svg"
                                            className="image-fluid avatar-40"
                                            alt="coin"
                                            loading="lazy"
                                          />
                                        </div>
                                        <h3 className="mb-1">8900</h3>
                                        <p className="text-muted">Coins</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="card text-center shadow-sm">
                                      <div className="card-body">
                                        <div className="icon mb-3">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/gamipress/credit.svg"
                                            className="image-fluid avatar-40"
                                            alt="credit"
                                            loading="lazy"
                                          />
                                        </div>
                                        <h3 className="mb-1">13830</h3>
                                        <p className="text-muted">Credits</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="card text-center shadow-sm">
                                      <div className="card-body">
                                        <div className="icon mb-3">
                                          <Image
                                            width={100}
                                            height={100}
                                            src="/images/gamipress/gems.svg"
                                            className="image-fluid avatar-40"
                                            alt="coin"
                                            loading="lazy"
                                          />
                                        </div>
                                        <h3 className="mb-1">100</h3>
                                        <p className="text-muted">Gems</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="invitations"
                              role="tabpanel"
                            >
                              <div className="card">
                                <div className="d-flex justify-content-between align-items-center p-0 invitation-header rounded">
                                  <ul
                                    className="nav nav-tab-bottom-border nav-pills d-flex align-items-center list-item-tabs py-3 px-4 col-12 col-md-9 m-0 border-right"
                                    id="friends-requests-tab"
                                  >
                                    <li className="nav-item">
                                      <a
                                        className="nav-link active d-flex align-items-center gap-2 flex-md-nowrap flex-wrap"
                                        id="send-invites-tab"
                                        data-bs-toggle="pill"
                                        href="#send_invites"
                                        role="tab"
                                        aria-controls="send-invites"
                                        aria-selected="true"
                                      >
                                        Send Invites
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a
                                        className="nav-link d-flex align-items-center gap-2"
                                        id="pending-invites-tab"
                                        data-bs-toggle="pill"
                                        href="#pending_invites"
                                        role="tab"
                                        aria-controls="pending-invites"
                                        aria-selected="false"
                                      >
                                        Pending Invites
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <div className="card mt-3">
                                <div className="card-body">
                                  <div
                                    className="tab-content"
                                    id="invitation-tabContent"
                                  >
                                    <div
                                      className="tab-pane fade show active"
                                      id="send_invites"
                                      role="tabpanel"
                                      aria-labelledby="send-invites-tab"
                                    >
                                      <h5 className="mb-3">Send Invites</h5>
                                      <p className="text-body">
                                        Fill out the form below to invite a new
                                        user to join this site. Upon submission
                                        of the form, an email will be sent to
                                        the invitee containing a link to accept
                                        your invitation. You may also add a
                                        custom message to the email.
                                      </p>
                                      <form>
                                        <div className="mb-3">
                                          <label className="form-label fs-6">
                                            Email address of new user
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email address"
                                          />
                                        </div>
                                        <div className="mb-3">
                                          <label className="form-label fs-6">
                                            Add a personalized message to the
                                            invitation (optional)
                                          </label>
                                          <textarea
                                            className="form-control"
                                            id="message"
                                            placeholder="Write your message here"
                                          ></textarea>
                                        </div>
                                        <button
                                          type="submit"
                                          className="d-flex ms-auto btn btn-primary fs-6"
                                        >
                                          Send Invitation
                                        </button>
                                      </form>
                                    </div>

                                    <div
                                      className="tab-pane fade"
                                      id="pending_invites"
                                      role="tabpanel"
                                      aria-labelledby="pending-invites-tab"
                                    >
                                      <h5 className="mb-3">Pending Invites</h5>
                                      <p className="text-muted">
                                        There are no invitations to display.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="forums"
                              role="tabpanel"
                            >
                              <div className="tab-content forum-content">
                                <div className="card">
                                  <div className="card-body p-0">
                                    <div className="table-responsive">
                                      <table className="table table-forum table-bordered rounded mb-0">
                                        <thead className="bg-primary text-white">
                                          <tr>
                                            <th className="fs-6 fw-semibold">
                                              Forum
                                            </th>
                                            <th className="fs-6 fw-semibold">
                                              Topics
                                            </th>
                                            <th className="fs-6 fw-semibold">
                                              Posts
                                            </th>
                                            <th className="fs-6 fw-semibold">
                                              Freshness
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <h6 className="mb-1 fw-semibold">
                                                Cycling Club
                                              </h6>
                                              <p className="mb-0 text-body font-size-14">
                                                Phasellus imperdiet eros velit,
                                                non molestie ligula whe finibus
                                                iaculis in tincidunt dictum
                                                mentum. Donec auctor, odio
                                                seddey cibus magna.
                                              </p>
                                            </td>
                                            <td className="text-body font-size-16">
                                              3
                                            </td>
                                            <td className="text-body font-size-16">
                                              6
                                            </td>
                                            <td>
                                              <div className="d-flex align-items-center">
                                                <div className="avatar-group">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="image-fluid rounded-circle avatar-40"
                                                    src="/images/user/01.jpg"
                                                    alt="User 1"
                                                  />
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="image-fluid rounded-circle avatar-40"
                                                    src="/images/user/02.jpg"
                                                    alt="User 2"
                                                  />
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="image-fluid rounded-circle avatar-40"
                                                    src="/images/user/03.jpg"
                                                    alt="User 3"
                                                  />
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="image-fluid rounded-circle avatar-40"
                                                    src="/images/user/04.jpg"
                                                    alt="User 4"
                                                  />
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <h6 className="mb-1 fw-semibold">
                                                Film Fanatics
                                              </h6>
                                              <p className="mb-0 text-body font-size-14">
                                                Phasellus imperdiet eros velit,
                                                non molestie ligula whe finibus
                                                iaculis in tincidunt dictum
                                                mentum. Donec auctor, odio
                                                seddey cibus magna.
                                              </p>
                                            </td>
                                            <td className="text-body font-size-16">
                                              1
                                            </td>
                                            <td className="text-body font-size-16">
                                              2
                                            </td>
                                            <td>
                                              <div className="d-flex align-items-center">
                                                <div className="avatar-group">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="image-fluid rounded-circle avatar-40"
                                                    src="/images/user/05.jpg"
                                                    alt="User 5"
                                                  />
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                              <h6 className="mb-1 fw-semibold">
                                                Game Of Phones
                                              </h6>
                                              <p className="mb-0 text-body font-size-14">
                                                A chronicle of the founding of
                                                Facebook, the social-networking
                                                Web site.
                                              </p>
                                            </td>
                                            <td className="text-body font-size-16">
                                              1
                                            </td>
                                            <td className="text-body font-size-16">
                                              2
                                            </td>
                                            <td>
                                              <div className="d-flex align-items-center">
                                                <div className="avatar-group">
                                                  <Image
                                                    width={100}
                                                    height={100}
                                                    className="image-fluid rounded-circle avatar-40"
                                                    src="/images/user/06.jpg"
                                                    alt="User 6"
                                                  />
                                                </div>
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-2/8 px-4">
                    <div className="rounded-lg shadow bg-white">
                      <div className="flex justify-between p-4 border-b border-[#f1f1f1]">
                        <div className=" header-title">
                          <h4 className="text-xl font-semibold">
                            active users
                          </h4>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <ul className="m-0 p-0 list-none">
                          <li className="flex items-center gap-3 mb-3">
                            <Image
                              width={100}
                              height={100}
                              src="/images/user/01.jpg"
                              alt="story-image"
                              className="w-15 h-15 object-cover rounded-full avatar-borderd"
                            />
                            <div>
                              <h5 className="inline-block">Arina Event</h5>
                              <span className="profile-status-online"></span>
                              <small className="capitalize block">Active</small>
                            </div>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <Image
                              width={100}
                              height={100}
                              src="/images/user/02.jpg"
                              alt="story-image"
                              className="w-15 h-15 object-cover rounded-full avatar-borderd"
                            />
                            <div>
                              <h5 className="inline-block">
                                Darlene Robertson
                              </h5>
                              <span className="profile-status-online"></span>
                              <small className="capitalize block">Active</small>
                            </div>
                          </li>
                          <li className="flex items-center gap-3 mb-3">
                            <Image
                              width={100}
                              height={100}
                              src="/images/user/03.jpg"
                              alt="story-image"
                              className="w-15 h-15 object-cover rounded-full avatar-borderd"
                            />
                            <div>
                              <h5 className="inline-block">Jerome Bell</h5>
                              <span className="profile-status-offline"></span>
                              <small className="capitalize block">
                                7 hours ago
                              </small>
                            </div>
                          </li>
                          <li className="flex items-center gap-3">
                            <Image
                              width={100}
                              height={100}
                              src="/images/user/05.jpg"
                              alt="story-image"
                              className="w-15 h-15 object-cover rounded-full avatar-borderd"
                            />
                            <div>
                              <h5 className="inline-block">Arlene McCoy</h5>
                              <span className="profile-status-offline"></span>
                              <small className="capitalize block">
                                4 days ago
                              </small>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="fixed-suggestion mb-4 mt-4">
                      <div className="rounded-lg shadow bg-white">
                        <div className="flex justify-between p-4 border-b border-[#f1f1f1]">
                          <div className=" header-title">
                            <h4 className="text-xl font-semibold">
                              Suggestions for you
                            </h4>
                          </div>
                          <small className="font-medium capitalize">
                            See all
                          </small>
                        </div>
                        <div className="p-4 pt-0">
                          <ul className="m-0 p-0 list-none">
                            <li className="mb-3">
                              <div className="flex items-center gap-3">
                                <Image
                                  width={100}
                                  height={100}
                                  src="/images/user/13.jpg"
                                  alt="story-image"
                                  className="w-15 h-15 object-cover rounded-full avatar-borderd"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <div>
                                      <h5>Annette Black</h5>
                                      <small className="capitalize">
                                        Followed by dribbble + 2 more
                                      </small>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 gap-2">
                                      <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200">
                                        <i className="ph ph-plus text-sm"></i>
                                      </button>
                                      <button className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                                        <i className="ph ph-x text-sm"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="mb-3">
                              <div className="flex items-center gap-3">
                                <Image
                                  width={100}
                                  height={100}
                                  src="/images/user/17.jpg"
                                  alt="story-image"
                                  className="avatar-60 avatar-borderd object-cover avatar-rounded w-full h-auto inline-block"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <div>
                                      <h5>Christopher Plessis</h5>
                                      <small className="capitalize">
                                        Followed by dribbble + 2 more
                                      </small>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 gap-2">
                                      <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 leading-none">
                                        <i className="ph ph-plus text-sm"></i>
                                      </button>
                                      <button className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 leading-none">
                                        <i className="ph ph-x text-sm"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>

                            <li className="mb-3">
                              <div className="flex items-center gap-3">
                                <Image
                                  width={100}
                                  height={100}
                                  src="/images/user/16.jpg"
                                  alt="story-image"
                                  className="avatar-60 avatar-borderd object-cover avatar-rounded w-full h-auto inline-block"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between gap-2">
                                    <div>
                                      <h5>Ellyse Perry</h5>
                                      <small className="capitalize">
                                        Followed by dribbble + 2 more
                                      </small>
                                    </div>
                                    <div className="flex items-center flex-shrink-0 gap-2">
                                      <button className="px-2 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 leading-none">
                                        <i className="ph ph-plus text-sm"></i>
                                      </button>
                                      <button className="px-2 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200 leading-none">
                                        <i className="ph ph-x text-sm"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
