(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["Friends"],
  {
    "6c40": function (e, t, s) {
      "use strict";
      s.r(t);
      s("caad"), s("2532");
      var a = s("7a23"),
        i = Object(a["I"])("data-v-5d7c1db4");
      Object(a["t"])("data-v-5d7c1db4");
      var n = { class: "friends-main-container" },
        r = { class: "side-links" },
        o = { class: "list-group-button" },
        l = Object(a["g"])(" Friends "),
        c = Object(a["g"])(" Following "),
        u = Object(a["g"])(" Followers "),
        d = { class: "friends-container" },
        h = { class: "friends-inner-container" },
        b = { class: "friends-container-header" },
        f = { key: 0, class: "list-group-button" },
        m = Object(a["g"])(" Friends "),
        j = Object(a["g"])(" Following "),
        O = Object(a["g"])(" Followers "),
        p = { key: 0, class: "photo-empty" },
        w = Object(a["h"])(
          "span",
          { class: "comment", style: { "margin-bottom": "5rem" } },
          " Add Friends ",
          -1
        ),
        g = { key: 1, class: "friends-list" },
        N = { class: "friend-main-content" },
        v = { class: "user-images" },
        F = { class: "userIcon-image" },
        k = { class: "friend-main-content" },
        y = { class: "user-images" },
        D = { class: "userIcon-image" },
        q = { key: 0, class: "btn btn-success unfriend-btn", disabled: "" },
        C = { class: "friend-main-content" },
        U = { class: "user-images" },
        I = { class: "userIcon-image" },
        $ = { class: "people-container" },
        G = { class: "people-main-container" },
        R = Object(a["h"])(
          "div",
          { class: "people-header" },
          [Object(a["h"])("h5", null, "People you May know")],
          -1
        ),
        S = { class: "friends-contents-list" },
        L = { class: "request-buttons" },
        B = Object(a["h"])("hr", null, null, -1);
      Object(a["r"])();
      var A = i(function (e, t, s, i, A, P) {
          var z = Object(a["x"])("font-awesome-icon");
          return (
            Object(a["q"])(),
            Object(a["d"])("div", n, [
              Object(a["h"])("div", r, [
                Object(a["h"])("div", o, [
                  Object(a["h"])(
                    "div",
                    {
                      onClick:
                        t[1] ||
                        (t[1] = function () {
                          return (
                            P.showFriends && P.showFriends.apply(P, arguments)
                          );
                        }),
                    },
                    [
                      l,
                      Object(a["h"])(
                        "span",
                        null,
                        Object(a["z"])(A.userData.friends.length),
                        1
                      ),
                      Object(a["h"])(z, {
                        class: "ml-2",
                        icon: ["fas", "user-friends"],
                      }),
                    ]
                  ),
                  Object(a["h"])(
                    "div",
                    {
                      onClick:
                        t[2] ||
                        (t[2] = function () {
                          return (
                            P.showFollowing &&
                            P.showFollowing.apply(P, arguments)
                          );
                        }),
                    },
                    [
                      c,
                      Object(a["h"])(
                        "span",
                        null,
                        Object(a["z"])(A.userData.following.length),
                        1
                      ),
                      Object(a["h"])(z, {
                        class: "ml-2",
                        icon: ["fas", "users"],
                      }),
                    ]
                  ),
                  Object(a["h"])(
                    "div",
                    {
                      onClick:
                        t[3] ||
                        (t[3] = function () {
                          return (
                            P.showFollowers &&
                            P.showFollowers.apply(P, arguments)
                          );
                        }),
                    },
                    [
                      u,
                      Object(a["h"])(
                        "span",
                        null,
                        Object(a["z"])(A.userData.followers.length),
                        1
                      ),
                      Object(a["h"])(z, {
                        class: "ml-2",
                        icon: ["fas", "users"],
                      }),
                    ]
                  ),
                ]),
              ]),
              Object(a["h"])("div", d, [
                Object(a["h"])("div", h, [
                  Object(a["h"])("div", b, [
                    A.showBackDrop
                      ? (Object(a["q"])(),
                        Object(a["d"])("div", {
                          key: 0,
                          class: "menu-bar-backdrop",
                          onClick:
                            t[4] ||
                            (t[4] = function () {
                              return (
                                P.handleBackDrop &&
                                P.handleBackDrop.apply(P, arguments)
                              );
                            }),
                        }))
                      : Object(a["e"])("", !0),
                    Object(a["h"])(
                      "h5",
                      null,
                      Object(a["z"])(A.displayHeaderTitle),
                      1
                    ),
                    Object(a["h"])(
                      "span",
                      {
                        class: "friends-container-Menu-bar",
                        onClick:
                          t[8] ||
                          (t[8] = function () {
                            return (
                              P.handleMenuBar &&
                              P.handleMenuBar.apply(P, arguments)
                            );
                          }),
                      },
                      [
                        Object(a["h"])(z, { icon: ["fas", "bars"] }),
                        A.displayMenuBar
                          ? (Object(a["q"])(),
                            Object(a["d"])("div", f, [
                              Object(a["h"])(
                                "div",
                                {
                                  onClick:
                                    t[5] ||
                                    (t[5] = function () {
                                      return (
                                        P.showFriends &&
                                        P.showFriends.apply(P, arguments)
                                      );
                                    }),
                                },
                                [
                                  m,
                                  Object(a["h"])(
                                    "span",
                                    null,
                                    Object(a["z"])(A.userData.friends.length),
                                    1
                                  ),
                                ]
                              ),
                              Object(a["h"])(
                                "div",
                                {
                                  onClick:
                                    t[6] ||
                                    (t[6] = function () {
                                      return (
                                        P.showFollowing &&
                                        P.showFollowing.apply(P, arguments)
                                      );
                                    }),
                                },
                                [
                                  j,
                                  Object(a["h"])(
                                    "span",
                                    null,
                                    Object(a["z"])(A.userData.following.length),
                                    1
                                  ),
                                ]
                              ),
                              Object(a["h"])(
                                "div",
                                {
                                  onClick:
                                    t[7] ||
                                    (t[7] = function () {
                                      return (
                                        P.showFollowers &&
                                        P.showFollowers.apply(P, arguments)
                                      );
                                    }),
                                },
                                [
                                  O,
                                  Object(a["h"])(
                                    "span",
                                    null,
                                    Object(a["z"])(A.userData.followers.length),
                                    1
                                  ),
                                ]
                              ),
                            ]))
                          : Object(a["e"])("", !0),
                      ]
                    ),
                  ]),
                  P.handleEmptyList()
                    ? (Object(a["q"])(), Object(a["d"])("div", p, [w]))
                    : Object(a["e"])("", !0),
                  P.handleEmptyList()
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(),
                      Object(a["d"])("div", g, [
                        (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          null,
                          Object(a["w"])(A.userData.friends, function (e) {
                            return Object(a["G"])(
                              (Object(a["q"])(),
                              Object(a["d"])(
                                "div",
                                { key: e.userName, class: "friend-content" },
                                [
                                  Object(a["h"])("div", N, [
                                    Object(a["h"])("div", v, [
                                      Object(a["h"])(
                                        "img",
                                        {
                                          src: "https://themified.com/friend-finder/images/covers/1.jpg",
                                          alt: "",
                                          onClick: function (t) {
                                            return P.showUserProfile(
                                              e.userName,
                                              e.userId
                                            );
                                          },
                                          class: "cover-image",
                                        },
                                        null,
                                        8,
                                        ["onClick"]
                                      ),
                                      Object(a["h"])("span", F, [
                                        Object(a["h"])(
                                          "img",
                                          {
                                            src: P.handleImages(e.userName),
                                            class: "profile-picture",
                                            alt: "",
                                          },
                                          null,
                                          8,
                                          ["src"]
                                        ),
                                        Object(a["h"])(
                                          "h5",
                                          {
                                            onClick: function (t) {
                                              return P.showUserProfile(
                                                e.userName,
                                                e.userId
                                              );
                                            },
                                          },
                                          Object(a["z"])(e.userName),
                                          9,
                                          ["onClick"]
                                        ),
                                        Object(a["h"])(
                                          "button",
                                          {
                                            class: "btn btn-danger",
                                            onClick: function (t) {
                                              return P.handleUnfriend(
                                                e.userName
                                              );
                                            },
                                          },
                                          "Unfriend",
                                          8,
                                          ["onClick"]
                                        ),
                                      ]),
                                    ]),
                                    Object(a["h"])(
                                      "div",
                                      {
                                        class: "user-name-details",
                                        onClick: function (t) {
                                          return P.showUserProfile(
                                            e.userName,
                                            e.userId
                                          );
                                        },
                                      },
                                      [
                                        Object(a["h"])("div", null, [
                                          Object(a["h"])(z, {
                                            icon: ["fas", "user-friends"],
                                          }),
                                        ]),
                                      ],
                                      8,
                                      ["onClick"]
                                    ),
                                  ]),
                                ],
                                512
                              )),
                              [[a["D"], A.displayFriends]]
                            );
                          }),
                          128
                        )),
                        (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          null,
                          Object(a["w"])(
                            e.$store.state.userData.followers,
                            function (e) {
                              return Object(a["G"])(
                                (Object(a["q"])(),
                                Object(a["d"])(
                                  "div",
                                  { key: e.userName, class: "friend-content" },
                                  [
                                    Object(a["h"])("div", k, [
                                      Object(a["h"])("div", y, [
                                        Object(a["h"])(
                                          "img",
                                          {
                                            src: "https://themified.com/friend-finder/images/covers/1.jpg",
                                            onClick: function (t) {
                                              return P.showUserProfile(
                                                e.userName,
                                                e.userId
                                              );
                                            },
                                            alt: "",
                                            class: "cover-image",
                                          },
                                          null,
                                          8,
                                          ["onClick"]
                                        ),
                                        Object(a["h"])("span", D, [
                                          Object(a["h"])(
                                            "img",
                                            {
                                              src: P.handleImages(e.userName),
                                              class: "profile-picture",
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            ["src"]
                                          ),
                                          Object(a["h"])(
                                            "h5",
                                            {
                                              onClick: function (t) {
                                                return P.showUserProfile(
                                                  e.userName,
                                                  e.userId
                                                );
                                              },
                                            },
                                            Object(a["z"])(e.userName),
                                            9,
                                            ["onClick"]
                                          ),
                                          A.followingList.includes(e.userName)
                                            ? (Object(a["q"])(),
                                              Object(a["d"])(
                                                "button",
                                                q,
                                                " Following"
                                              ))
                                            : (Object(a["q"])(),
                                              Object(a["d"])(
                                                "button",
                                                {
                                                  key: 1,
                                                  class:
                                                    "btn btn-danger unfriend-btn",
                                                  onClick: function (t) {
                                                    return P.handleFollow(
                                                      e.userName,
                                                      "follow"
                                                    );
                                                  },
                                                },
                                                "Follow Back",
                                                8,
                                                ["onClick"]
                                              )),
                                        ]),
                                      ]),
                                      Object(a["h"])(
                                        "div",
                                        {
                                          class: "user-name-details",
                                          onClick: function (t) {
                                            return P.showUserProfile(
                                              e.userName,
                                              e.userId
                                            );
                                          },
                                        },
                                        [
                                          Object(a["h"])("div", null, [
                                            Object(a["h"])(z, {
                                              icon: ["fas", "user-friends"],
                                            }),
                                          ]),
                                        ],
                                        8,
                                        ["onClick"]
                                      ),
                                    ]),
                                  ],
                                  512
                                )),
                                [[a["D"], A.displayFollowers]]
                              );
                            }
                          ),
                          128
                        )),
                        (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          null,
                          Object(a["w"])(
                            e.$store.state.userData.following,
                            function (e) {
                              return Object(a["G"])(
                                (Object(a["q"])(),
                                Object(a["d"])(
                                  "div",
                                  { key: e.userName, class: "friend-content" },
                                  [
                                    Object(a["h"])("div", C, [
                                      Object(a["h"])("div", U, [
                                        Object(a["h"])(
                                          "img",
                                          {
                                            src: "https://themified.com/friend-finder/images/covers/1.jpg",
                                            alt: "",
                                            class: "cover-image",
                                            onClick: function (t) {
                                              return P.showUserProfile(
                                                e.userName,
                                                e.userId
                                              );
                                            },
                                          },
                                          null,
                                          8,
                                          ["onClick"]
                                        ),
                                        Object(a["h"])("span", I, [
                                          Object(a["h"])(
                                            "img",
                                            {
                                              src: P.handleImages(e.userName),
                                              class: "profile-picture",
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            ["src"]
                                          ),
                                          Object(a["h"])(
                                            "h5",
                                            {
                                              onClick: function (t) {
                                                return P.showUserProfile(
                                                  e.userName,
                                                  e.userId
                                                );
                                              },
                                            },
                                            Object(a["z"])(e.userName),
                                            9,
                                            ["onClick"]
                                          ),
                                          Object(a["h"])(
                                            "button",
                                            {
                                              class:
                                                "btn btn-danger unfriend-btn",
                                              onClick: function (t) {
                                                return P.handleFollow(
                                                  e.userName,
                                                  "unfollow"
                                                );
                                              },
                                            },
                                            "unfollow",
                                            8,
                                            ["onClick"]
                                          ),
                                        ]),
                                      ]),
                                      Object(a["h"])(
                                        "div",
                                        {
                                          class: "user-name-details",
                                          onClick: function (t) {
                                            return P.showUserProfile(
                                              e.userName,
                                              e.userId
                                            );
                                          },
                                        },
                                        [
                                          Object(a["h"])("div", null, [
                                            Object(a["h"])(z, {
                                              icon: ["fas", "user-friends"],
                                            }),
                                          ]),
                                        ],
                                        8,
                                        ["onClick"]
                                      ),
                                    ]),
                                  ],
                                  512
                                )),
                                [[a["D"], A.displayFollowing]]
                              );
                            }
                          ),
                          128
                        )),
                      ])),
                ]),
              ]),
              Object(a["h"])("div", $, [
                Object(a["h"])("div", G, [
                  R,
                  (Object(a["q"])(!0),
                  Object(a["d"])(
                    a["a"],
                    null,
                    Object(a["w"])(P.randomUsers, function (e) {
                      return (
                        Object(a["q"])(),
                        Object(a["d"])(
                          "div",
                          { key: e.userName, class: "friends-contents" },
                          [
                            Object(a["h"])("div", S, [
                              Object(a["h"])(
                                "div",
                                {
                                  class: "userName-image",
                                  onClick: function (t) {
                                    return P.showUserProfile(e.userName);
                                  },
                                },
                                [
                                  Object(a["h"])(
                                    "img",
                                    {
                                      src: P.handleImages(e.userName),
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                  Object(a["h"])("span", null, [
                                    Object(a["h"])(
                                      "h5",
                                      null,
                                      Object(a["z"])(e.userName),
                                      1
                                    ),
                                  ]),
                                ],
                                8,
                                ["onClick"]
                              ),
                              Object(a["h"])("div", L, [
                                "Request Sent" !== e.requestStatus
                                  ? (Object(a["q"])(),
                                    Object(a["d"])(
                                      "button",
                                      {
                                        key: 0,
                                        class: "btn btn-info",
                                        onClick: function (t) {
                                          return P.handleFriendRequest(
                                            e,
                                            e.requestStatus
                                          );
                                        },
                                      },
                                      Object(a["z"])(e.requestStatus),
                                      9,
                                      ["onClick"]
                                    ))
                                  : Object(a["e"])("", !0),
                                "Request Sent" === e.requestStatus
                                  ? (Object(a["q"])(),
                                    Object(a["d"])(
                                      "button",
                                      {
                                        key: 1,
                                        class: "btn btn-info",
                                        onClick: function (t) {
                                          return P.handleCancelFriendRequest(
                                            e,
                                            e.userName
                                          );
                                        },
                                      },
                                      " Cancel request ",
                                      8,
                                      ["onClick"]
                                    ))
                                  : Object(a["e"])("", !0),
                                A.followingList.includes(e.userName)
                                  ? Object(a["e"])("", !0)
                                  : (Object(a["q"])(),
                                    Object(a["d"])(
                                      "button",
                                      {
                                        key: 2,
                                        class: "btn btn-info",
                                        onClick: function (t) {
                                          return P.handleFollow(
                                            e.userName,
                                            "follow"
                                          );
                                        },
                                      },
                                      "follow",
                                      8,
                                      ["onClick"]
                                    )),
                                A.followingList.includes(e.userName)
                                  ? (Object(a["q"])(),
                                    Object(a["d"])(
                                      "button",
                                      {
                                        key: 3,
                                        class: "btn btn-info",
                                        onClick: function (t) {
                                          return P.handleFollow(
                                            e.userName,
                                            "unfollow"
                                          );
                                        },
                                      },
                                      "unfollow",
                                      8,
                                      ["onClick"]
                                    ))
                                  : Object(a["e"])("", !0),
                              ]),
                            ]),
                            B,
                          ]
                        )
                      );
                    }),
                    128
                  )),
                ]),
              ]),
            ])
          );
        }),
        P = s("2909"),
        z = s("ade3"),
        M = (s("d81d"), s("b64b"), s("4de4"), s("99af"), s("159b"), s("9612")),
        T = {
          name: "Friends",
          props: ["userName"],
          data: function () {
            var e;
            return {
              userData:
                ((e = {
                  userName: "Guest",
                  userId: "419",
                  emailAddress: "419",
                  firstName: "Guest",
                  lastName: "Guest",
                  address: "Guest",
                }),
                Object(z["a"])(e, "emailAddress", "Guest@gmail.com"),
                Object(z["a"])(e, "postCode", "Guest"),
                Object(z["a"])(e, "country", "Guest"),
                Object(z["a"])(e, "city", "Guest"),
                Object(z["a"])(e, "aboutMe", "Guest"),
                Object(z["a"])(e, "password", "Guest"),
                Object(z["a"])(e, "occupation", "Guest"),
                Object(z["a"])(e, "education", "Guest"),
                Object(z["a"])(e, "age", "27"),
                Object(z["a"])(e, "messages", []),
                Object(z["a"])(e, "posts", {
                  Guest: { likes: ["Guest"], unLikes: ["Guest"] },
                }),
                Object(z["a"])(e, "followers", ["Guest"]),
                Object(z["a"])(e, "following", ["Guest"]),
                Object(z["a"])(e, "friends", ["Guest"]),
                Object(z["a"])(e, "posterComment", ""),
                Object(z["a"])(e, "comments", { likes: [], unLikes: [] }),
                e),
              userFriendsList: [],
              userFollowersList: [],
              userFollowingList: [],
              allUsers: {},
              displayFriends: !0,
              displayFollowers: !1,
              displayFollowing: !1,
              followingList: [],
              displayMenuBar: !1,
              displayHeaderTitle: "Your Friends",
              friendsListEmpty: !1,
              showBackDrop: !1,
              followers: !1,
              following: !1,
            };
          },
          mounted: function () {
            this.loadData();
          },
          beforeUnmount: function () {
            this.loadData();
          },
          methods: {
            loadData: function () {
              var e = this;
              "Guest" === this.$store.state.userData.userName &&
                this.$router.push({ name: "Login" }),
                (this.userData = this.$store.state.users[this.userName]);
              var t = this.userData.following;
              (this.followingList = t.map(function (e) {
                return e.userName;
              })),
                this.$store.dispatch("handleNotificationUpdate", {
                  userName: this.userData.userName,
                  notificationStatus: "Read",
                  notificationType: "friend request",
                });
              var s = Object.keys(this.$store.state.allUsers),
                a = this.$store.state.allUsers,
                i = this.userData.friends.map(function (e) {
                  return e.userName;
                });
              s.filter(function (t) {
                return ![]
                  .concat(Object(P["a"])(i), [e.userData.userName])
                  .includes(t);
              });
              for (var n in a)
                for (var r in ((a[n].requestStatus = "Add Friend"),
                a[n].requests))
                  a[n].requests[r].userName === this.userData.userName
                    ? (a[n].requestStatus = "Request Sent")
                    : (a[n].requestStatus = "Add Friend");
              if (a[this.userData.userName].requests.length)
                for (var o in a[this.userData.userName].requests)
                  a[
                    a[this.userData.userName].requests[o].userName
                  ].requestStatus = "Accept Request";
              this.allUsers = a;
            },
            handleEmptyList: function () {
              return !(
                this.$store.state.userData.friends.length ||
                this.followers ||
                this.following
              );
            },
            toggleDisplay: function (e) {
              switch (e) {
                case "displayFriends":
                  (this.displayFriends = !0),
                    (this.displayFollowers = !1),
                    (this.displayFollowing = !1),
                    (this.displayHeaderTitle = "Your Friends"),
                    (this.followers = !1),
                    (this.following = !1);
                  break;
                case "displayFollowers":
                  (this.displayFriends = !1),
                    (this.displayFollowers = !0),
                    (this.displayFollowing = !1),
                    (this.displayHeaderTitle = "Your Followers"),
                    this.userFollowersList.length
                      ? (this.followers = !0)
                      : (this.followers = !1),
                    (this.following = !1);
                  break;
                case "displayFollowing":
                  (this.displayFriends = !1),
                    (this.displayFollowers = !1),
                    (this.displayFollowing = !0),
                    (this.displayHeaderTitle = "People You are Following "),
                    this.userFollowingList.length
                      ? (this.following = !0)
                      : (this.following = !1),
                    (this.followers = !1);
                  break;
                default:
                  break;
              }
            },
            handleImages: function (e) {
              return void 0 === this.$store.state.users[e]
                ? "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png"
                : this.$store.state.users[e].userProfileImage.length
                ? this.$store.state.users[e].userProfileImage
                : void 0;
            },
            handleMenuBar: function () {
              (this.displayMenuBar = !this.displayMenuBar),
                (this.showBackDrop = !this.showBackDrop);
            },
            handleBackDrop: function () {
              (this.displayMenuBar = !1), (this.showBackDrop = !1);
            },
            showFriends: function () {
              "Guest" !== this.userData.userName &&
                (this.toggleDisplay("displayFriends"),
                this.$router.push({
                  name: "Friends",
                  params: { userName: this.userData.userName },
                }));
            },
            showFollowers: function () {
              "Guest" !== this.userData.userName &&
                this.toggleDisplay("displayFollowers");
            },
            showFollowing: function () {
              "Guest" !== this.userData.userName &&
                this.toggleDisplay("displayFollowing");
            },
            showUserProfile: function (e) {
              "Guest" !== this.userData.userName &&
                this.$router.push({
                  name: "Timeline",
                  params: { userName: e },
                });
            },
            handleFollow: function (e, t) {
              this.$store.dispatch("handleFollow", {
                friendUserName: e,
                userName: this.userData.userName,
                followState: t,
              });
              var s = this.userData.following;
              (this.followingList = s.map(function (e) {
                return e.userName;
              })),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  friendUserName: e,
                  notificationId: M["a"].v1(),
                  notificationType: "follow",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                "follow" === t &&
                  this.$store.dispatch("handleActivities", {
                    friendUserName: e,
                    userName: this.userData.userName,
                    activity: "followed",
                    activityDate: Date.now(),
                    activityId: M["a"].v1(),
                  });
            },
            handleFriendRequest: function (e, t) {
              switch (t) {
                case "Add Friend":
                  (e.requestStatus = "Request Sent"),
                    this.$store.dispatch("handleFriendRequest", {
                      friendUserName: e.userName,
                      userName: this.userData.userName,
                      requestStatus: "Request Sent",
                    }),
                    this.$store.dispatch("handleNotifications", {
                      userName: this.userData.userName,
                      friendUserName: e.userName,
                      notificationId: M["a"].v1(),
                      notificationType: "friend request",
                      notificationStatus: "unRead",
                      notificationDate: Date.now(),
                    }),
                    this.$store.dispatch("handleActivities", {
                      userName: this.userData.userName,
                      friendUserName: e.userName,
                      activity: "Friend request",
                      activityDate: Date.now(),
                      activityId: M["a"].v1(),
                    });
                  break;
                case "Accept Request":
                  this.$store.dispatch("handleFriendRequest", {
                    friendUserName: e.userName,
                    userName: this.userData.userName,
                    requestStatus: "Accept Request",
                  }),
                    this.$store.dispatch("handleActivities", {
                      friendUserName: e.userName,
                      userName: this.userData.userName,
                      activity: "Accepted Friend Request",
                      activityDate: Date.now(),
                      activityId: M["a"].v1(),
                    }),
                    this.$store.dispatch("handleNotifications", {
                      userName: this.userData.userName,
                      friendUserName: e.userName,
                      notificationId: M["a"].v1(),
                      notificationType: "Accepted Friend Request",
                      notificationStatus: "unRead",
                      notificationDate: Date.now(),
                    });
                  break;
                default:
                  break;
              }
            },
            handleCancelFriendRequest: function (e, t) {
              this.$store.dispatch("handleCancelFriendRequest", {
                userName: t,
                friendUserName: this.userData.userName,
                params: "cancelFriendRequest",
              }),
                this.loadData();
            },
            handleUnfriend: function (e) {
              this.$store.dispatch("handleCancelFriendRequest", {
                userName: e,
                friendUserName: this.userData.userName,
                params: "unFriend",
              });
            },
            handleUnfollow: function (e) {
              this.$store.dispatch("handleCancelFriendRequest", {
                userName: e,
                friendUserName: this.userData.userName,
                params: "unFollow",
              });
            },
          },
          computed: {
            randomUsers: function () {
              var e = this;
              (this.userFriendsList = this.userData.friends.reverse()),
                (this.userFollowersList = this.userData.followers.reverse()),
                (this.userFollowingList = this.userData.following.reverse());
              var t = this.userData.friends.map(function (e) {
                  return e.userName;
                }),
                s = [];
              for (var a in this.$store.state.allUsers)
                s = [].concat(Object(P["a"])(s), [
                  this.$store.state.allUsers[a],
                ]);
              var i = s.filter(function (s) {
                  return ![e.userData.userName]
                    .concat(Object(P["a"])(t))
                    .includes(s.userName);
                }),
                n = Object(P["a"])(i),
                r = [],
                o = [],
                l = [],
                c = [];
              return (
                n.forEach(function (e) {
                  "Accept Request" === e.requestStatus
                    ? (r = [].concat(Object(P["a"])(r), [e]))
                    : "Cancel Request" === e.requestStatus
                    ? (o = [].concat(Object(P["a"])(o), [e]))
                    : (l = [].concat(Object(P["a"])(l), [e])),
                    (c = [].concat(
                      Object(P["a"])(r),
                      Object(P["a"])(o),
                      Object(P["a"])(l)
                    ));
                }),
                c
              );
            },
          },
        };
      (T.render = A), (T.__scopeId = "data-v-5d7c1db4");
      t["default"] = T;
    },
  },
]);
//# sourceMappingURL=Friends.04eea662.js.map
