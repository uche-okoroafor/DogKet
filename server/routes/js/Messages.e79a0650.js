(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["Messages"],
  {
    eaad: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("7a23"),
        c = { id: "messageBox" },
        n = { class: "message-container" },
        r = {
          class: "list-container-left container-mobile-view  ",
          ref: "chatList",
        },
        i = { class: "chat-list" },
        h = { class: "header-chat-list" },
        l = Object(a["h"])("h5", null, "Chats", -1),
        o = { class: "search-chat-list" },
        u = { key: 0, class: "search-contents" },
        d = { class: "names-Bold" },
        m = { key: 0, style: { "text-align": "center" } },
        g = { class: "user-MessageDetails-container" },
        b = { class: "notice-image-container" },
        O = { key: 0, class: "new-message-alert" },
        j = { class: "userName-data-container" },
        f = { class: "side-userName" },
        p = { class: "username-header" },
        y = { class: "side-user-message" },
        k = { key: 0, class: "shortMessage " },
        v = Object(a["h"])(
          "span",
          { style: { "font-weight": "600" } },
          "You: ",
          -1
        ),
        M = Object(a["g"])(),
        S = { class: "message-ellipsis" },
        N = { key: 1, class: "shortMessage" },
        w = { class: "sideMessageCheck" },
        D = { class: "list-container-left  container-desktop-view" },
        C = { class: "chat-list" },
        I = { class: "header-chat-list" },
        U = Object(a["h"])("h5", null, "Chats", -1),
        q = { class: "search-chat-list" },
        L = { key: 0, class: "search-contents" },
        B = { class: "names-Bold" },
        $ = { key: 0, style: { "text-align": "center" } },
        x = { key: 0, class: "empty-chat-list" },
        z = Object(a["h"])("span", null, "You Have No Chats", -1),
        E = Object(a["h"])("div", null, null, -1),
        V = { class: "user-MessageDetails-container" },
        P = { class: "notice-image-container" },
        F = { key: 0, class: "new-message-alert" },
        R = { class: "userName-data-container" },
        H = { class: "side-userName" },
        T = { class: "username-header" },
        Y = { class: "side-user-message" },
        _ = { key: 0, class: "shortMessage" },
        G = Object(a["h"])(
          "span",
          { style: { "font-weight": "600" } },
          "You: ",
          -1
        ),
        J = Object(a["g"])(),
        W = { class: "message-ellipsis" },
        A = { key: 1, class: "shortMessage" },
        K = { class: "sideMessageCheck" },
        Q = { class: "container-message  container-desktop-view" },
        X = { class: "trysrcoll", id: "messageBody" },
        Z = { key: 0, class: "empty-chat-list" },
        ee = Object(a["h"])("span", null, "You Have No Messages", -1),
        se = Object(a["h"])("div", { class: "pulldown" }, null, -1),
        te = { key: 1, class: "message-Box" },
        ae = { class: "username-header" },
        ce = Object(a["h"])("hr", null, null, -1),
        ne = { class: "message-background" },
        re = { class: "message-status" },
        ie = {
          class:
            "container-message  container-mobile-view  container-mobileView",
          ref: "containerMessage",
        },
        he = { class: "trysrcoll", id: "messageBody" },
        le = { key: 0, class: "empty-chat-list" },
        oe = Object(a["h"])("span", null, "You Have No Messages", -1),
        ue = { key: 1, class: "message-Box" },
        de = { class: "username-header" },
        me = Object(a["h"])("hr", null, null, -1),
        ge = { class: "message-background" },
        be = { class: "message-status" },
        Oe = { class: "list-container-right " },
        je = { class: "friends-list-container" },
        fe = Object(a["h"])(
          "div",
          { class: "friends-listHeader" },
          [Object(a["h"])("h5", null, "Friends")],
          -1
        ),
        pe = { key: 0, class: "empty-chat-list" },
        ye = Object(a["h"])("span", null, "You Have No Friends", -1),
        ke = Object(a["g"])(),
        ve = { class: "username-header" },
        Me = Object(a["h"])(
          "div",
          { class: "message-friend" },
          [Object(a["h"])("button", { class: "btn btn-success " }, "Chat")],
          -1
        );
      function Se(e, s, t, Se, Ne, we) {
        var De = Object(a["x"])("font-awesome-icon");
        return (
          Object(a["q"])(),
          Object(a["d"])("section", c, [
            Object(a["h"])("div", n, [
              Object(a["h"])(
                "div",
                r,
                [
                  Object(a["h"])("div", i, [
                    Object(a["h"])("div", h, [
                      l,
                      Object(a["h"])("div", o, [
                        Object(a["G"])(
                          Object(a["h"])(
                            "input",
                            {
                              type: "text",
                              placeholder: "Search Chats...",
                              "onUpdate:modelValue":
                                s[1] ||
                                (s[1] = function (e) {
                                  return (Ne.searchInput = e);
                                }),
                              onClick:
                                s[2] ||
                                (s[2] = function (e) {
                                  return we.handleSearchBackDrop("open");
                                }),
                            },
                            null,
                            512
                          ),
                          [[a["C"], Ne.searchInput]]
                        ),
                        Ne.displaySearchContents
                          ? (Object(a["q"])(),
                            Object(a["d"])("div", u, [
                              (Object(a["q"])(!0),
                              Object(a["d"])(
                                a["a"],
                                null,
                                Object(a["w"])(
                                  we.filteredSearchList,
                                  function (s) {
                                    return (
                                      Object(a["q"])(),
                                      Object(a["d"])(
                                        "ul",
                                        { key: s.userName },
                                        [
                                          Object(a["h"])(
                                            "li",
                                            {
                                              onClick: function (e) {
                                                return we.showMessage(
                                                  s.userName,
                                                  "Read"
                                                );
                                              },
                                            },
                                            [
                                              Object(a["h"])(
                                                "img",
                                                {
                                                  src: e.$store.state.users[
                                                    s.userName
                                                  ].userProfileImage,
                                                  alt: "",
                                                },
                                                null,
                                                8,
                                                ["src"]
                                              ),
                                              Object(a["h"])(
                                                "span",
                                                d,
                                                Object(a["z"])(s.userName),
                                                1
                                              ),
                                            ],
                                            8,
                                            ["onClick"]
                                          ),
                                        ]
                                      )
                                    );
                                  }
                                ),
                                128
                              )),
                              we.searchNotFound
                                ? (Object(a["q"])(),
                                  Object(a["d"])("div", m, "User Not Found"))
                                : Object(a["e"])("", !0),
                            ]))
                          : Object(a["e"])("", !0),
                      ]),
                      Ne.chatListBackDrop
                        ? (Object(a["q"])(),
                          Object(a["d"])("div", {
                            key: 0,
                            class: "chat-list-backDrop",
                            onClick:
                              s[3] ||
                              (s[3] = function (e) {
                                return we.handleSearchBackDrop("close");
                              }),
                          }))
                        : Object(a["e"])("", !0),
                    ]),
                    Ne.messagesEmpty
                      ? (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          { key: 0 },
                          Object(a["w"])(Ne.chattedUsersList, function (e) {
                            return (
                              Object(a["q"])(),
                              Object(a["d"])(
                                "div",
                                {
                                  key: e.userName,
                                  onClick: function (s) {
                                    return we.showMessage(e.userName, "Read");
                                  },
                                  style: we.activeChattedUser(e.showMessage),
                                },
                                [
                                  Object(a["h"])("div", g, [
                                    Object(a["h"])("div", b, [
                                      Object(a["h"])(
                                        "img",
                                        {
                                          src: we.handleImages(e.userName),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      "unRead" ===
                                      Ne.userData.messageStatus[e.userName]
                                        .messageViewStatus
                                        ? (Object(a["q"])(),
                                          Object(a["d"])("div", O))
                                        : Object(a["e"])("", !0),
                                    ]),
                                    Object(a["h"])("div", j, [
                                      Object(a["h"])("div", f, [
                                        Object(a["h"])(
                                          "span",
                                          p,
                                          Object(a["z"])(e.userName),
                                          1
                                        ),
                                        Object(a["h"])(
                                          "span",
                                          null,
                                          Object(a["z"])(
                                            we.showDateInWords(
                                              Ne.chattedUsersInfo[e.userName]
                                                .messageDate,
                                              e.userName
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      Object(a["h"])("div", y, [
                                        Ne.chattedUsersInfo[e.userName]
                                          .userName === Ne.userData.userName
                                          ? (Object(a["q"])(),
                                            Object(a["d"])("span", k, [
                                              v,
                                              M,
                                              Object(a["h"])(
                                                "span",
                                                S,
                                                Object(a["z"])(
                                                  we.handleMessageSlice(
                                                    Ne.chattedUsersInfo[
                                                      e.userName
                                                    ].message
                                                  )
                                                ),
                                                1
                                              ),
                                            ]))
                                          : (Object(a["q"])(),
                                            Object(a["d"])(
                                              "span",
                                              N,
                                              Object(a["z"])(
                                                we.handleMessageSlice(
                                                  Ne.chattedUsersInfo[
                                                    e.userName
                                                  ].message
                                                )
                                              ),
                                              1
                                            )),
                                        Object(a["h"])("span", w, [
                                          we.handleMessageStatus(
                                            Ne.chattedUsersInfo[e.userName]
                                              .messageStatus,
                                            Ne.chattedUsersInfo[e.userName]
                                              .messageId
                                          )
                                            ? (Object(a["q"])(),
                                              Object(a["d"])(De, {
                                                key: 0,
                                                icon: ["fas", "check"],
                                                class: "check-side",
                                              }))
                                            : Object(a["e"])("", !0),
                                          we.handleMessageStatus(
                                            Ne.chattedUsersInfo[e.userName]
                                              .messageStatus,
                                            Ne.chattedUsersInfo[e.userName]
                                              .messageId
                                          )
                                            ? Object(a["e"])("", !0)
                                            : (Object(a["q"])(),
                                              Object(a["d"])(
                                                De,
                                                {
                                                  key: 1,
                                                  icon: ["fas", "check-double"],
                                                  class: [
                                                    "check-double-side",
                                                    we.handleCheckStyle(
                                                      Ne.chattedUsersInfo[
                                                        e.userName
                                                      ].messageStatus
                                                    ),
                                                  ],
                                                },
                                                null,
                                                8,
                                                ["class"]
                                              )),
                                        ]),
                                      ]),
                                    ]),
                                  ]),
                                ],
                                12,
                                ["onClick"]
                              )
                            );
                          }),
                          128
                        ))
                      : Object(a["e"])("", !0),
                  ]),
                ],
                512
              ),
              Object(a["h"])("div", D, [
                Object(a["h"])("div", C, [
                  Object(a["h"])("div", I, [
                    U,
                    Object(a["h"])("div", q, [
                      Object(a["G"])(
                        Object(a["h"])(
                          "input",
                          {
                            type: "text",
                            placeholder: "Search Chats...",
                            "onUpdate:modelValue":
                              s[4] ||
                              (s[4] = function (e) {
                                return (Ne.searchInput = e);
                              }),
                            onClick:
                              s[5] ||
                              (s[5] = function (e) {
                                return we.handleSearchBackDrop("open");
                              }),
                          },
                          null,
                          512
                        ),
                        [[a["C"], Ne.searchInput]]
                      ),
                      Ne.displaySearchContents
                        ? (Object(a["q"])(),
                          Object(a["d"])("div", L, [
                            (Object(a["q"])(!0),
                            Object(a["d"])(
                              a["a"],
                              null,
                              Object(a["w"])(
                                we.filteredSearchList,
                                function (s) {
                                  return (
                                    Object(a["q"])(),
                                    Object(a["d"])("ul", { key: s.userName }, [
                                      Object(a["h"])(
                                        "li",
                                        {
                                          onClick: function (e) {
                                            return we.showMessage(
                                              s.userName,
                                              "Read"
                                            );
                                          },
                                        },
                                        [
                                          Object(a["h"])(
                                            "img",
                                            {
                                              src: e.$store.state.users[
                                                s.userName
                                              ].userProfileImage,
                                              alt: "",
                                            },
                                            null,
                                            8,
                                            ["src"]
                                          ),
                                          Object(a["h"])(
                                            "span",
                                            B,
                                            Object(a["z"])(s.userName),
                                            1
                                          ),
                                        ],
                                        8,
                                        ["onClick"]
                                      ),
                                    ])
                                  );
                                }
                              ),
                              128
                            )),
                            we.searchNotFound
                              ? (Object(a["q"])(),
                                Object(a["d"])("div", $, "User Not Found"))
                              : Object(a["e"])("", !0),
                          ]))
                        : Object(a["e"])("", !0),
                    ]),
                    Ne.chatListBackDrop
                      ? (Object(a["q"])(),
                        Object(a["d"])("div", {
                          key: 0,
                          class: "chat-list-backDrop",
                          onClick:
                            s[6] ||
                            (s[6] = function (e) {
                              return we.handleSearchBackDrop("close");
                            }),
                        }))
                      : Object(a["e"])("", !0),
                  ]),
                  Ne.messagesEmpty
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(), Object(a["d"])("div", x, [z])),
                  E,
                  Ne.messagesEmpty
                    ? (Object(a["q"])(!0),
                      Object(a["d"])(
                        a["a"],
                        { key: 1 },
                        Object(a["w"])(Ne.chattedUsersList, function (e) {
                          return (
                            Object(a["q"])(),
                            Object(a["d"])(
                              "div",
                              {
                                key: e.userName,
                                onClick: function (s) {
                                  return we.showMessage(e.userName, "Read");
                                },
                                style: we.activeChattedUser(e.showMessage),
                              },
                              [
                                Object(a["h"])("div", V, [
                                  Object(a["h"])("div", P, [
                                    Object(a["h"])(
                                      "img",
                                      {
                                        src: we.handleImages(e.userName),
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    "unRead" ===
                                    Ne.userData.messageStatus[e.userName]
                                      .messageViewStatus
                                      ? (Object(a["q"])(),
                                        Object(a["d"])("div", F))
                                      : Object(a["e"])("", !0),
                                  ]),
                                  Object(a["h"])("div", R, [
                                    Object(a["h"])("div", H, [
                                      Object(a["h"])(
                                        "span",
                                        T,
                                        Object(a["z"])(e.userName),
                                        1
                                      ),
                                      Object(a["h"])(
                                        "span",
                                        null,
                                        Object(a["z"])(
                                          we.showDateInWords(
                                            Ne.chattedUsersInfo[e.userName]
                                              .messageDate
                                          )
                                        ),
                                        1
                                      ),
                                    ]),
                                    Object(a["h"])("div", Y, [
                                      Ne.chattedUsersInfo[e.userName]
                                        .userName === Ne.userData.userName
                                        ? (Object(a["q"])(),
                                          Object(a["d"])("span", _, [
                                            G,
                                            J,
                                            Object(a["h"])(
                                              "span",
                                              W,
                                              Object(a["z"])(
                                                we.handleMessageSlice(
                                                  Ne.chattedUsersInfo[
                                                    e.userName
                                                  ].message
                                                )
                                              ),
                                              1
                                            ),
                                          ]))
                                        : (Object(a["q"])(),
                                          Object(a["d"])(
                                            "span",
                                            A,
                                            Object(a["z"])(
                                              we.handleMessageSlice(
                                                Ne.chattedUsersInfo[e.userName]
                                                  .message
                                              )
                                            ),
                                            1
                                          )),
                                      Object(a["h"])("span", K, [
                                        we.handleMessageStatus(
                                          Ne.chattedUsersInfo[e.userName]
                                            .messageStatus,
                                          Ne.chattedUsersInfo[e.userName]
                                            .messageId
                                        )
                                          ? (Object(a["q"])(),
                                            Object(a["d"])(De, {
                                              key: 0,
                                              icon: ["fas", "check"],
                                              class: "check-side",
                                            }))
                                          : Object(a["e"])("", !0),
                                        we.handleMessageStatus(
                                          Ne.chattedUsersInfo[e.userName]
                                            .messageStatus,
                                          Ne.chattedUsersInfo[e.userName]
                                            .messageId
                                        )
                                          ? Object(a["e"])("", !0)
                                          : (Object(a["q"])(),
                                            Object(a["d"])(
                                              De,
                                              {
                                                key: 1,
                                                icon: ["fas", "check-double"],
                                                class: [
                                                  "check-double-side",
                                                  we.handleCheckStyle(
                                                    Ne.chattedUsersInfo[
                                                      e.userName
                                                    ].messageStatus
                                                  ),
                                                ],
                                              },
                                              null,
                                              8,
                                              ["class"]
                                            )),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ],
                              12,
                              ["onClick"]
                            )
                          );
                        }),
                        128
                      ))
                    : Object(a["e"])("", !0),
                ]),
              ]),
              Object(a["h"])("div", Q, [
                Object(a["h"])(
                  "div",
                  { class: "fill-up-container", style: Ne.filUpStyle },
                  null,
                  4
                ),
                Object(a["h"])(
                  "div",
                  { class: "messager-Header", style: we.handleNavCollapse() },
                  [
                    Ne.messagesEmpty
                      ? (Object(a["q"])(),
                        Object(a["d"])(
                          "img",
                          { key: 0, src: Ne.userProfilePicture, alt: "" },
                          null,
                          8,
                          ["src"]
                        ))
                      : Object(a["e"])("", !0),
                    Object(a["h"])(
                      "h5",
                      null,
                      Object(a["z"])(Ne.friendMessaged),
                      1
                    ),
                    Object(a["h"])(
                      "span",
                      {
                        onClick:
                          s[7] ||
                          (s[7] = function () {
                            return (
                              we.showChatList &&
                              we.showChatList.apply(we, arguments)
                            );
                          }),
                        class: "return-chatlist-btn",
                      },
                      [
                        Object(a["h"])("span", null, [
                          Object(a["h"])(De, { icon: ["fas", "chevron-left"] }),
                        ]),
                      ]
                    ),
                  ],
                  4
                ),
                Object(a["h"])("div", X, [
                  Ne.messagesEmpty
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(), Object(a["d"])("div", Z, [ee])),
                  se,
                  Ne.messagesEmpty
                    ? (Object(a["q"])(!0),
                      Object(a["d"])(
                        a["a"],
                        { key: 1 },
                        Object(a["w"])(we.showingMessages, function (e) {
                          return (
                            Object(a["q"])(),
                            Object(a["d"])(
                              "div",
                              {
                                key: e.messageId,
                                class: [
                                  "message-body  message-body-disktopView",
                                  we.handleUserChatBoxStyle(e.userName),
                                ],
                              },
                              [
                                e.messageStatus.length
                                  ? (Object(a["q"])(),
                                    Object(a["d"])(
                                      "img",
                                      {
                                        key: 0,
                                        src: we.handleImages(e.userName),
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ))
                                  : Object(a["e"])("", !0),
                                e.messageStatus.length
                                  ? (Object(a["q"])(),
                                    Object(a["d"])("div", te, [
                                      Object(a["h"])(De, {
                                        icon: ["fas", "caret-right"],
                                        class: "caret-right",
                                      }),
                                      Object(a["h"])(De, {
                                        icon: ["fas", "caret-left"],
                                        class: "caret-left",
                                      }),
                                      Object(a["h"])("div", null, [
                                        Object(a["h"])(
                                          "h6",
                                          ae,
                                          Object(a["z"])(e.userName),
                                          1
                                        ),
                                        Object(a["h"])(
                                          "span",
                                          null,
                                          Object(a["z"])(
                                            we.showDate(e.messageDate)
                                          ),
                                          1
                                        ),
                                      ]),
                                      ce,
                                      Object(a["h"])(
                                        "span",
                                        ne,
                                        Object(a["z"])(e.message),
                                        1
                                      ),
                                      Object(a["h"])("span", re, [
                                        we.handleMessageStatus(
                                          e.messageStatus,
                                          e.messageId
                                        )
                                          ? (Object(a["q"])(),
                                            Object(a["d"])(De, {
                                              key: 0,
                                              icon: ["fas", "check"],
                                              class: "check",
                                            }))
                                          : Object(a["e"])("", !0),
                                        we.handleMessageStatus(
                                          e.messageStatus,
                                          e.messageId
                                        )
                                          ? Object(a["e"])("", !0)
                                          : (Object(a["q"])(),
                                            Object(a["d"])(
                                              De,
                                              {
                                                key: 1,
                                                icon: ["fas", "check-double"],
                                                class: [
                                                  "check-double",
                                                  we.handleCheckStyle(
                                                    e.messageStatus
                                                  ),
                                                ],
                                              },
                                              null,
                                              8,
                                              ["class"]
                                            )),
                                      ]),
                                    ]))
                                  : Object(a["e"])("", !0),
                              ],
                              2
                            )
                          );
                        }),
                        128
                      ))
                    : Object(a["e"])("", !0),
                ]),
                Object(a["h"])(
                  "form",
                  {
                    onSubmit:
                      s[9] ||
                      (s[9] = Object(a["H"])(
                        function () {
                          return (
                            we.handleSubmitMessage &&
                            we.handleSubmitMessage.apply(we, arguments)
                          );
                        },
                        ["prevent"]
                      )),
                    class: "message-input-field",
                  },
                  [
                    Object(a["G"])(
                      Object(a["h"])(
                        "input",
                        {
                          type: "text",
                          "onUpdate:modelValue":
                            s[8] ||
                            (s[8] = function (e) {
                              return (Ne.message = e);
                            }),
                          placeholder: " Type your message",
                        },
                        null,
                        512
                      ),
                      [[a["C"], Ne.message]]
                    ),
                    Object(a["h"])(
                      "img",
                      { src: Ne.userData.userProfileImage, alt: "" },
                      null,
                      8,
                      ["src"]
                    ),
                  ],
                  32
                ),
              ]),
              Object(a["h"])(
                "div",
                ie,
                [
                  Object(a["h"])(
                    "div",
                    { class: "fill-up-container", style: Ne.filUpStyle },
                    null,
                    4
                  ),
                  Object(a["h"])(
                    "div",
                    { class: "messager-Header", style: we.handleNavCollapse() },
                    [
                      Ne.messagesEmpty
                        ? (Object(a["q"])(),
                          Object(a["d"])(
                            "img",
                            { key: 0, src: Ne.userProfilePicture, alt: "" },
                            null,
                            8,
                            ["src"]
                          ))
                        : Object(a["e"])("", !0),
                      Object(a["h"])(
                        "h5",
                        null,
                        Object(a["z"])(Ne.friendMessaged),
                        1
                      ),
                      Object(a["h"])(
                        "span",
                        {
                          onClick:
                            s[10] ||
                            (s[10] = function () {
                              return (
                                we.showChatList &&
                                we.showChatList.apply(we, arguments)
                              );
                            }),
                          class: "return-chatlist-btn",
                        },
                        [
                          Object(a["h"])("span", null, [
                            Object(a["h"])(De, {
                              icon: ["fas", "chevron-left"],
                            }),
                          ]),
                        ]
                      ),
                    ],
                    4
                  ),
                  Object(a["h"])("div", he, [
                    Ne.messagesEmpty
                      ? Object(a["e"])("", !0)
                      : (Object(a["q"])(), Object(a["d"])("div", le, [oe])),
                    Ne.messagesEmpty
                      ? (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          { key: 1 },
                          Object(a["w"])(we.showingMessages, function (e) {
                            return (
                              Object(a["q"])(),
                              Object(a["d"])(
                                "div",
                                {
                                  key: e.messageId,
                                  class: [
                                    "message-body",
                                    we.handleUserChatBoxStyle(e.userName),
                                  ],
                                },
                                [
                                  e.messageStatus.length
                                    ? (Object(a["q"])(),
                                      Object(a["d"])(
                                        "img",
                                        {
                                          key: 0,
                                          src: we.handleImages(e.userName),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ))
                                    : Object(a["e"])("", !0),
                                  e.messageStatus.length
                                    ? (Object(a["q"])(),
                                      Object(a["d"])("div", ue, [
                                        Object(a["h"])(De, {
                                          icon: ["fas", "caret-right"],
                                          class: "caret-right",
                                        }),
                                        Object(a["h"])(De, {
                                          icon: ["fas", "caret-left"],
                                          class: "caret-left",
                                        }),
                                        Object(a["h"])("div", null, [
                                          Object(a["h"])(
                                            "h6",
                                            de,
                                            Object(a["z"])(e.userName),
                                            1
                                          ),
                                          Object(a["h"])(
                                            "span",
                                            null,
                                            Object(a["z"])(
                                              we.showDate(e.messageDate)
                                            ),
                                            1
                                          ),
                                        ]),
                                        me,
                                        Object(a["h"])(
                                          "span",
                                          ge,
                                          Object(a["z"])(e.message),
                                          1
                                        ),
                                        Object(a["h"])("span", be, [
                                          we.handleMessageStatus(
                                            e.messageStatus,
                                            e.messageId
                                          )
                                            ? (Object(a["q"])(),
                                              Object(a["d"])(De, {
                                                key: 0,
                                                icon: ["fas", "check"],
                                                class: "check",
                                              }))
                                            : Object(a["e"])("", !0),
                                          we.handleMessageStatus(
                                            e.messageStatus,
                                            e.messageId
                                          )
                                            ? Object(a["e"])("", !0)
                                            : (Object(a["q"])(),
                                              Object(a["d"])(
                                                De,
                                                {
                                                  key: 1,
                                                  icon: ["fas", "check-double"],
                                                  class: [
                                                    "check-double",
                                                    we.handleCheckStyle(
                                                      e.messageStatus
                                                    ),
                                                  ],
                                                },
                                                null,
                                                8,
                                                ["class"]
                                              )),
                                        ]),
                                      ]))
                                    : Object(a["e"])("", !0),
                                ],
                                2
                              )
                            );
                          }),
                          128
                        ))
                      : Object(a["e"])("", !0),
                  ]),
                  Object(a["h"])(
                    "form",
                    {
                      onSubmit:
                        s[12] ||
                        (s[12] = Object(a["H"])(
                          function () {
                            return (
                              we.handleSubmitMessage &&
                              we.handleSubmitMessage.apply(we, arguments)
                            );
                          },
                          ["prevent"]
                        )),
                      class: "message-input-field",
                    },
                    [
                      Object(a["G"])(
                        Object(a["h"])(
                          "input",
                          {
                            type: "text",
                            "onUpdate:modelValue":
                              s[11] ||
                              (s[11] = function (e) {
                                return (Ne.message = e);
                              }),
                            placeholder: " Type your message",
                          },
                          null,
                          512
                        ),
                        [[a["C"], Ne.message]]
                      ),
                      Object(a["h"])(
                        "img",
                        { src: Ne.userData.userProfileImage, alt: "" },
                        null,
                        8,
                        ["src"]
                      ),
                    ],
                    32
                  ),
                ],
                512
              ),
              Object(a["h"])("div", Oe, [
                Object(a["h"])("div", je, [
                  fe,
                  Ne.userData.friends.length
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(), Object(a["d"])("div", pe, [ye])),
                  Ne.userData.friends.length
                    ? (Object(a["q"])(!0),
                      Object(a["d"])(
                        a["a"],
                        { key: 1 },
                        Object(a["w"])(Ne.userData.friends, function (e) {
                          return (
                            Object(a["q"])(),
                            Object(a["d"])("div", { key: e.userName }, [
                              Object(a["h"])(
                                "div",
                                {
                                  onClick: function (s) {
                                    return we.showMessage(
                                      e.userName,
                                      "newMessage"
                                    );
                                  },
                                  class: "friendLists",
                                },
                                [
                                  Object(a["h"])(
                                    "img",
                                    {
                                      src: we.handleImages(e.userName),
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                  ke,
                                  Object(a["h"])(
                                    "span",
                                    ve,
                                    Object(a["z"])(e.userName),
                                    1
                                  ),
                                  Me,
                                ],
                                8,
                                ["onClick"]
                              ),
                            ])
                          );
                        }),
                        128
                      ))
                    : Object(a["e"])("", !0),
                ]),
              ]),
            ]),
          ])
        );
      }
      var Ne = t("5530"),
        we = t("2909"),
        De = t("ade3"),
        Ce =
          (t("4de4"),
          t("fb6a"),
          t("b64b"),
          t("caad"),
          t("2532"),
          t("159b"),
          t("99af"),
          t("9612")),
        Ie = t("c1df"),
        Ue = t.n(Ie),
        qe = {
          name: "Messages",
          props: ["userName"],
          data: function () {
            return {
              userData: { messageStatus: {} },
              showingMessage: [],
              friendMessaged: "",
              chattedUsersInfo: [],
              message: "",
              showingMessageStatus: [],
              chattedUsersList: [],
              messageUserProfilePicture: "",
              userProfilePicture: "",
              messageUserName: "",
              displayChatList: "",
              filUpStyle: "",
              messagesEmpty: !0,
              searchInput: "",
              displaySearchContents: !1,
              filteredSearchLists: [],
              chatListBackDrop: !1,
              messages: {},
              watchDelay: !0,
            };
          },
          watch: {
            messages: {
              handler: function (e) {
                var s = this;
                setTimeout(function () {
                  s.loadData("on"), (s.watchDelay = !1);
                }, 2e3);
              },
              deep: !0,
            },
          },
          mounted: function () {
            this.loadData("on");
          },
          beforeUnmount: function () {
            this.loadData("off");
          },
          methods: {
            loadData: function (e) {
              (this.userData = this.$store.state.users[this.userName]),
                "on" === e
                  ? this.$store.dispatch("handleDisplayFunctions", {
                      activeLink: "Messages",
                      params: "activeLink",
                    })
                  : (this.$store.dispatch("handleDisplayFunctions", {
                      activeLink: "",
                      params: "activeLink",
                    }),
                    (this.watchDelay = !0));
              var s = [];
              for (var t in this.userData.messageStatus)
                s.push(this.userData.messageStatus[t]);
              s.length
                ? ((this.showingMessageStatus = s.filter(function (e) {
                    return e.showMessage;
                  })),
                  (this.showingMessage =
                    this.userData.messages[
                      this.showingMessageStatus[0].friendMessaged
                    ]),
                  (this.friendMessaged =
                    this.showingMessageStatus[0].friendMessaged),
                  (this.messagesEmpty = !0))
                : (this.messagesEmpty = !1);
              var a =
                this.$store.state.displayFunctions.displayMessage.userName;
              (s.length || a.length) &&
                (a.length
                  ? this.showMessage(a, "newMessage")
                  : this.showMessage(this.friendMessaged, "Read", e),
                this.$store.dispatch("handleNotificationUpdate", {
                  userName: this.userData.userName,
                  notificationStatus: "Read",
                  notificationType: "message",
                }));
            },
            scrollToBottom: function () {
              var e =
                  document.getElementsByClassName("message-body")[
                    document.getElementsByClassName("message-body").length - 1
                  ],
                s = document.getElementsByClassName("message-body-disktopView")[
                  document.getElementsByClassName("message-body-disktopView")
                    .length - 1
                ];
              setTimeout(function () {
                e && e.scrollIntoView({ behavior: "smooth" });
              }, 100),
                setTimeout(function () {
                  s && s.scrollIntoView({ behavior: "smooth" });
                }, 100);
            },
            activeChattedUser: function (e) {
              return e
                ? "background-color:rgba(232, 62, 140, 0.52)"
                : "background-color:white";
            },
            handleSearchBackDrop: function (e) {
              return "open" === e
                ? (this.chatListBackDrop = !0)
                : ((this.searchInput = ""),
                  (this.displaySearchContents = !1),
                  (this.filteredSearchLists = []),
                  (this.chatListBackDrop = !1));
            },
            handleMessageSlice: function (e) {
              if (e.length > 15) {
                var s = e.slice(0, 14) + "....";
                return s;
              }
              return e;
            },
            handleUserChatBoxStyle: function (e) {
              return e === this.userName ? "this-user" : "other-user";
            },
            handleImages: function (e) {
              return this.$store.state.users[e].userProfileImage.length
                ? this.$store.state.users[e].userProfileImage
                : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
            },
            handleSubmitMessage: function () {
              var e = Ce["a"].v1();
              this.message &&
                this.friendMessaged &&
                (this.$store.dispatch(
                  "handleSubmitMessage",
                  Object(De["a"])({}, e, {
                    userName: this.userData.userName,
                    friendMessaged: this.friendMessaged,
                    userId: this.userData.userId,
                    message: this.message,
                    messageId: e,
                    messageDate: Date.now(),
                    messageStatus: "sent",
                  })
                ),
                this.showMessage(this.friendMessaged, "unRead"),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  friendUserName: this.friendMessaged,
                  notificationId: Ce["a"].v1(),
                  notificationType: "message",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                (this.message = ""),
                (this.showingMessage =
                  this.userData.messages[this.friendMessaged])),
                this.scrollToBottom();
            },
            showMessage: function (e, s, t) {
              (this.userProfilePicture = this.handleImages(e)),
                (this.friendMessaged = e);
              var a = Object.keys(this.userData.messageStatus);
              a.includes(e) || "newMessage" !== s
                ? (this.$store.dispatch("handleMessageViewStatus", {
                    friendMessaged: e,
                    messageOnScreen: t,
                    userName: this.userName,
                    messageViewStatus: s,
                    showMessage: !1,
                  }),
                  (this.showingMessage = this.userData.messages[e]))
                : ((this.showingMessage = {
                    none: {
                      messageId: "none",
                      messageDate: "",
                      userName: this.userName,
                      message: "",
                      messageStatus: "",
                    },
                  }),
                  (this.messagesEmpty = !0),
                  this.$store.dispatch("handleDisplayFunctions", {
                    userName: "",
                    params: "displayMessage",
                  })),
                this.$refs.chatList.classList.add("container-mobileView"),
                this.$refs.containerMessage.classList.remove(
                  "container-mobileView"
                ),
                this.handleSearchBackDrop("close");
            },
            showChatList: function () {
              this.$refs.containerMessage.classList.add("container-mobileView"),
                this.$refs.chatList.classList.remove("container-mobileView");
            },
            handleMessageStatus: function (e, s) {
              return (
                "sent" === e || ("received" !== e && "Read" !== e && void 0)
              );
            },
            handleCheckStyle: function (e) {
              return "received" === e ? "check-double" : "check-double-read";
            },
            showDateInWords: function (e, s) {
              var t = Date.now(),
                a = t - e,
                c = Math.round(a / 6e4),
                n = Math.round(a / 36e5),
                r = Math.round(a / 864e5),
                i = Math.round(a / 6048e5),
                h = Math.round(a / 72576e5),
                l = Math.round(a / 1314e6);
              return c <= 0
                ? "Just now"
                : c < 59
                ? 1 === c
                  ? "1 minute ago"
                  : c + " minutes ago"
                : n < 11
                ? 1 === n
                  ? "1 hour ago"
                  : n + " hours ago"
                : r >= 1
                ? 1 === r
                  ? "1 day ago"
                  : r + " days ago"
                : i < 59
                ? 1 === i
                  ? "1 week ago"
                  : i + " weeks ago"
                : h < 59
                ? 1 === h
                  ? "1 month ago"
                  : h + " mouths ago"
                : 1 === l
                ? "1 year ago"
                : l + " years ago";
            },
            showDate: function (e) {
              var s = Date.now(),
                t = s - e,
                a = Math.round(t / 6e4),
                c = Math.round(t / 36e5),
                n = Math.round(t / 864e5),
                r = Math.round(t / 6048e5),
                i = Math.round(t / 72576e5);
              Math.round(t / 1314e6);
              return a <= 0
                ? "Just now"
                : a < 59
                ? 1 === a
                  ? "1 minute ago"
                  : a + "minutes ago"
                : c < 11
                ? Ue()(e).format(" h:mm :ss a L")
                : n >= 1
                ? Ue()(e).format(" h:mm:ss a L")
                : r < 59
                ? Ue()(e).format(" h:mm :ss a L")
                : i < 59
                ? Ue()(e).format(" h:mm :SS a L")
                : Ue()(e).format(" h:mm a  L");
            },
            handleDeleteMessage: function (e, s, t) {
              this.$store.dispatch("handleDeleteMessage", {
                userName: e,
                friendMessaged: s,
                messageId: t,
              });
            },
            handleNavCollapse: function () {
              return this.$store.state.displayFunctions.navCollapsed
                ? ((this.filUpStyle = "height:130px"), "margin-top:-90px")
                : ((this.filUpStyle = "height:160px"), "margin-top:0");
            },
            handleChatList: function () {
              var e = this,
                s = Object.keys(this.userData.messageStatus),
                t = [];
              s.forEach(function (s) {
                t = [].concat(Object(we["a"])(t), [
                  {
                    userName: s,
                    showMessage: e.userData.messageStatus[s].showMessage,
                    messageDate: e.userData.messageStatus[s].messageDate,
                  },
                ]);
              }),
                (this.chattedUsersList = t
                  .sort(function (e, s) {
                    return e.messageDate - s.messageDate;
                  })
                  .reverse());
            },
          },
          computed: {
            filteredSearchList: function () {
              var e = this,
                s = this.chattedUsersList
                  .sort(function (e, s) {
                    var t = e.userName.toUpperCase(),
                      a = s.userName.toUpperCase();
                    return t < a ? -1 : t > a ? 1 : 0;
                  })
                  .filter(function (s) {
                    return (
                      -1 !==
                      s.userName
                        .toLowerCase()
                        .indexOf(e.searchInput.toLowerCase())
                    );
                  });
              return (this.filteredSearchLists = s), this.filteredSearchLists;
            },
            searchNotFound: function () {
              return !this.filteredSearchLists.length;
            },
            showingMessages: function () {
              (this.userData = this.$store.state.users[this.userName]),
                (this.messages =
                  this.$store.state.users[this.userName].messages),
                (this.storeData = this.$store.state),
                this.searchInput.length
                  ? (this.displaySearchContents = !0)
                  : (this.displaySearchContents = !1),
                this.handleChatList();
              var e = {};
              for (var s in this.userData.messageStatus) {
                var t = [];
                for (var a in this.userData.messages[s])
                  t = []
                    .concat(Object(we["a"])(t), [this.userData.messages[s][a]])
                    .sort(function (e, s) {
                      return e.messageDate - s.messageDate;
                    });
                e = Object(Ne["a"])(
                  Object(Ne["a"])({}, e),
                  {},
                  Object(De["a"])({}, s, t[t.length - 1])
                );
              }
              this.chattedUsersInfo = e;
              var c = [];
              for (var n in this.showingMessage) c.push(this.showingMessage[n]);
              return c.sort(function (e, s) {
                return e.messageDate - s.messageDate;
              });
            },
          },
        };
      qe.render = Se;
      s["default"] = qe;
    },
  },
]);
//# sourceMappingURL=Messages.e79a0650.js.map
