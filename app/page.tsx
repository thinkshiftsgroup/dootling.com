import Image from "next/image";
import Navbar from "@/components/main/landing-page/navbar/navbar";
import ActiveUsers from "@/components/main/landing-page/sidebar/activeUsers";
import Suggestions from "@/components/main/landing-page/sidebar/suggestions";

export default function Home() {
  const stories = [
    {
      id: "bni",
      name: "Your Story",
      photo: "/images/user/1.jpg",
      items: [
        {
          id: "bni-1",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
        },
        {
          id: "bni-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
        },
        {
          id: "bni-3",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png",
        },
      ],
    },
    {
      id: "bob",
      name: "Bob Frapples",
      photo: "/images/user/13.jpg",
      items: [
        {
          id: "bob-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
        },
        {
          id: "bob-2",
          type: "video",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
        },
      ],
    },
    {
      id: "greta",
      name: "Greta Life",
      photo: "/images/user/14.jpg",
      items: [
        {
          id: "greta-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
        },
        {
          id: "greta-2",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
        },
      ],
    },
    {
      id: "pete",
      name: "Pete Sariya",
      photo: "/images/user/15.jpg",
      items: [
        {
          id: "pete-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg",
        },
      ],
    },
    {
      id: "paige",
      name: "Paige Turner",
      photo: "/images/user/16.jpg",
      items: [
        {
          id: "paige-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
        },
      ],
    },
    {
      id: "marcum",
      name: "Marcum Shaw",
      photo: "/images/user/17.jpg",
      items: [
        {
          id: "marcum-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
        },
      ],
    },
    {
      id: "travis",
      name: "Travis John",
      photo: "/images/user/17.jpg",
      items: [
        {
          id: "marcum-1",
          type: "photo",
          thumb:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
          src: "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg",
        },
      ],
    },
  ];
  return (
    <main className="main-content pb-20">
      <div className="relative">
        <Navbar />
        <div>
          <div className="position-relative"></div>
          <div className="content-inner " id="page_layout">
            <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-2/3 px-4" id="dynamicDivContainer">
                  <div id="content">
                    <div className="flex flex-wrap pb-4">
                      <div className="w-full">
                        <div className="mb-5">
                          <div
                            id="stories"
                            className="storiesWrapper flex gap-3 overflow-x-auto no-scrollbar stories user-icon carousel snapgram"
                          >
                            {stories.map((story) => (
                              <div
                                key={story.id}
                                className="story flex flex-col items-center"
                                data-id={story.id}
                              >
                                <a
                                  href="#"
                                  className="item-link flex flex-col items-center"
                                >
                                  <span className="item-preview block  rounded-full overflow-hidden border-2 border-white">
                                    <Image
                                      src={story.photo}
                                      alt={story.name}
                                      width={90}
                                      height={90}
                                      className="object-cover w-full h-full"
                                    />
                                  </span>
                                  <span className="info text-center mt-1">
                                    <strong className="name text-xs block">
                                      {story.name}
                                    </strong>
                                    <span className="time text-xs text-gray-400"></span>
                                  </span>
                                </a>

                                <ul className="hidden">
                                  {story.items.map((item) => (
                                    <li key={item.id}>
                                      <a href={item.src} data-type={item.type}>
                                        <img
                                          src={item.thumb}
                                          alt={story.name}
                                          className="w-full h-auto"
                                          loading="lazy"
                                        />
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap pb-4">
                      <div className="w-full">
                        <div className="mb-5">
                          <div
                            id="stories"
                            className="storiesWrapper flex gap-3"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap pb-4">
                      <div className="w-full">
                        <div
                          id="post-modal-data"
                          className="rounded-lg shadow bg-white create-post-modal"
                        >
                          <div className="flex justify-between items-center p-4 border-b border-[#f1f1f1]">
                            <div className="header-title">
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
                              <form
                                className="post-text w-full"
                                action="javascript:void();"
                              >
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
                                    <button
                                      type="button"
                                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
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
                                  <img
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
                                      <p className="mb-0">2 minutes ago</p>
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
                                                  Add this to your saved items
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
                                                  See fewer posts like this.
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
                                                  Unfollow User
                                                </h6>
                                                <p className="mb-0 text-sm">
                                                  Stop seeing posts but stay
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
                                                  Turn on notifications for this
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
                                "Energy, the tangible expression of pure
                                thought, propels intentions into powerful
                                actions, bridging the gap between mind and
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
                                href="/images/page-img/fun.jpg"
                                className="rounded"
                              >
                                <img
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
                                    <img
                                      src="/images/user/01.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/02.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/03.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/04.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                </ul>
                                <div className="inline-flex items-center gap-1">
                                  <h6 className="m-0 text-sm">Aliana Molex</h6>
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
                                  <img
                                    className=" border-2 rounded-full user-post-profile"
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
                                      <p className="mb-0">1 Hour ago</p>
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
                                                  Add this to your saved items
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
                                                  See fewer posts like this.
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
                                                  Unfollow User
                                                </h6>
                                                <p className="mb-0 text-sm">
                                                  Stop seeing posts but stay
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
                                                  Turn on notifications for this
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
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi nulla dolor, ornare at
                                commodo non, feugiat non nisi. Phasellus
                                faucibus mollis pharetra. Proin blandit ac massa
                                sed rhoncus"
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
                                    href="/images/page-img/boy.jpg"
                                    className="rounded"
                                  >
                                    <img
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
                                    href="/images/page-img/bus.jpg"
                                    className="rounded"
                                  >
                                    <img
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
                                    href="/images/page-img/fd.jpg"
                                    className="rounded"
                                  >
                                    <img
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
                                    href="/images/page-img/mountain.jpg"
                                    className="rounded"
                                  >
                                    <img
                                      src="/images/page-img/mountain.jpg"
                                      alt="post-image"
                                      className="w-full rounded"
                                      loading="lazy"
                                    />
                                  </a>
                                </div>
                                <div className="w-full md:w-1/2 px-2 mt-3 md:mt-0">
                                  <div className="post-overlay-box h-full rounded">
                                    <img
                                      src="/images/page-img/pizza.jpg"
                                      alt="post-image"
                                      className="w-full h-full object-cover rounded"
                                      loading="lazy"
                                    />
                                    <a
                                      data-fslightbox="gallery"
                                      href="/images/page-img/pizza.jpg"
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
                                    <img
                                      src="/images/user/01.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/02.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/03.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/04.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                </ul>
                                <div className="inline-flex items-center gap-1">
                                  <h6 className="m-0 text-sm">Aliana Molex</h6>
                                  <button
                                    className="capitalize text-sm font-medium cursor-pointer"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#likemodal"
                                  >
                                    and 208 others liked this
                                  </button>
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                  <button
                                    className="total-comment-block flex justify-center items-center gap-1 cursor-pointer"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#commentcollapes2"
                                    aria-expanded="false"
                                    aria-controls="commentcollapes"
                                  >
                                    <i className="ph ph-chat-circle-text text-xl"></i>
                                    <span className="font-medium">
                                      20 Comment
                                    </span>
                                  </button>
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
                                        <div className="comment-list-user-img flex-shrink-0">
                                          <img
                                            src="/images/user/13.jpg"
                                            alt="userimg"
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
                                          "Just stumbled upon this post and it's
                                          giving me all the feels! 🙌"
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                <img
                                                  src="/images/user/1.jpg"
                                                  alt="userimg"
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
                                      <img
                                        src="/images/user/1.jpg"
                                        alt="userimg"
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
                                  <img
                                    className="border-2 rounded-full user-post-profile"
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
                                      <p className="mb-0">6 Hours ago</p>
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
                                                  Add this to your saved items
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
                                                  See fewer posts like this.
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
                                                  Unfollow User
                                                </h6>
                                                <p className="mb-0 text-sm">
                                                  Stop seeing posts but stay
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
                                                  Turn on notifications for this
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
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi nulla dolor, ornare at
                                commodo non, feugiat non nisi. Phasellus
                                faucibus mollis pharetra. Proin blandit ac massa
                                sed rhoncus"
                              </p>
                            </div>
                            <div className="post-meta-likes mt-4">
                              <div className="flex items-center gap-2 flex-wrap">
                                <ul className="flex m-0 p-0 list-none post-user-liked-list">
                                  <li>
                                    <img
                                      src="/images/user/01.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/02.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/03.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/04.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                </ul>
                                <div className="inline-flex items-center gap-1">
                                  <h6 className="m-0 text-sm">Aliana Molex</h6>
                                  {/* <span className="capitalize text-sm font-medium cursor-pointer"
                                    type="button" data-bs-toggle="modal" data-bs-target="#likemodal">and
                                    208 others liked this</span> */}
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                          <img
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
                                  <button
                                    className="total-comment-block flex justify-center items-center gap-1 cursor-pointer"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#commentcollapes3"
                                    aria-expanded="false"
                                    aria-controls="commentcollapes"
                                  >
                                    <i className="ph ph-chat-circle-text text-xl"></i>
                                    <span className="font-medium">
                                      20 Comment
                                    </span>
                                  </button>
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
                                        <div className="comment-list-user-img flex-shrink-0">
                                          <img
                                            src="/images/user/13.jpg"
                                            alt="userimg"
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
                                          "Just stumbled upon this post and it's
                                          giving me all the feels! 🙌"
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                        <img
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
                                                <img
                                                  src="/images/user/1.jpg"
                                                  alt="userimg"
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
                                      <img
                                        src="/images/user/1.jpg"
                                        alt="userimg"
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
                                  <img
                                    className="border-2 rounded-full user-post-profile"
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
                                        Added New Video in his Timeline
                                      </span>
                                      <p className="m-0">8 Hours ago</p>
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
                                                <h6>Save Post</h6>
                                                <p className="m-0 text-sm">
                                                  Add this to your saved items
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
                                                <h6>Hide Post</h6>
                                                <p className="m-0 text-sm">
                                                  See fewer posts like this.
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
                                                <h6>Unfollow User</h6>
                                                <p className="m-0 text-sm">
                                                  Stop seeing posts but stay
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
                                                <h6>Notifications</h6>
                                                <p className="m-0 text-sm">
                                                  Turn on notifications for this
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
                                "Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi nulla dolor, ornare at
                                commodo non, feugiat non nisi. Phasellus
                                faucibus mollis pharetra. Proin blandit ac massa
                                sed rhoncus"
                              </p>
                            </div>

                            <div className="user-post mt-4">
                              <div className="aspect-video">
                                <iframe
                                  className="w-full h-full rounded-md"
                                  src="https://www.youtube.com/embed/IEHKekzTzPg"
                                  title="YouTube video"
                                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                ></iframe>
                              </div>
                            </div>

                            <div className="post-meta-likes mt-4">
                              <div className="flex items-center gap-2 flex-wrap">
                                <ul className="flex m-0 p-0 list-none post-user-liked-list">
                                  <li>
                                    <img
                                      src="/images/user/01.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/02.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/03.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                  <li>
                                    <img
                                      src="/images/user/04.jpg"
                                      alt="userimg"
                                      className="rounded-full userimg"
                                      loading="lazy"
                                    />
                                  </li>
                                </ul>
                                <div className="inline-flex items-center gap-1">
                                  <h6 className="m-0 text-sm">Aliana Molex</h6>
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
                                        <div className="comment-list-user-img flex-shrink-0">
                                          <img
                                            src="/images/user/13.jpg"
                                            alt="userimg"
                                            className="w-12 h-12 rounded-full userimg"
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
                                          "Just stumbled upon this post and it's
                                          giving me all the feels! 🙌"
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
                                                <img
                                                  src="/images/user/1.jpg"
                                                  alt="userimg"
                                                  className="w-12 h-12 rounded-full userimg"
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
                                      <img
                                        src="/images/user/1.jpg"
                                        alt="userimg"
                                        className="w-12 h-12 rounded-full userimg"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="add-comment-form w-full" />
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

                <div className="w-full lg:w-1/3 px-4">
                  <ActiveUsers />
                  <Suggestions />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
