(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["Messages"],
  {
    eaad: function (e, s, t) {
      "use strict";
      t.r(s);
      var a = t("7a23");
      const c = { id: "messageBox" },
        i = { class: "message-container" },
        h = {
          class: "list-container-left container-mobile-view  ",
          ref: "chatList",
        },
        n = { class: "chat-list" },
        r = { class: "header-chat-list" },
        l = Object(a["h"])("h5", null, "Chats", -1),
        o = { class: "search-chat-list" },
        d = { key: 0, class: "search-contents" },
        u = { class: "names-Bold" },
        m = { key: 0, style: { "text-align": "center" } },
        g = { class: "user-MessageDetails-container" },
        b = { class: "notice-image-container" },
        O = { key: 0, class: "new-message-alert" },
        j = { class: "userName-data-container" },
        p = { class: "side-userName" },
        f = { class: "username-header" },
        y = { class: "side-user-message" },
        k = { key: 0, class: "shortMessage " },
        M = Object(a["h"])(
          "span",
          { style: { "font-weight": "600" } },
          "You: ",
          -1
        ),
        S = { class: "message-ellipsis" },
        N = { key: 1, class: "shortMessage" },
        w = { class: "sideMessageCheck" },
        v = { class: "list-container-left  container-desktop-view" },
        D = { class: "chat-list" },
        C = { class: "header-chat-list" },
        I = Object(a["h"])("h5", null, "Chats", -1),
        U = { class: "search-chat-list" },
        q = { key: 0, class: "search-contents" },
        L = { class: "names-Bold" },
        B = { key: 0, style: { "text-align": "center" } },
        $ = { key: 0, class: "empty-chat-list" },
        x = Object(a["h"])("span", null, "You Have No Chats", -1),
        z = Object(a["h"])("div", null, null, -1),
        E = { class: "user-MessageDetails-container" },
        V = { class: "notice-image-container" },
        P = { key: 0, class: "new-message-alert" },
        F = { class: "userName-data-container" },
        R = { class: "side-userName" },
        H = { class: "username-header" },
        T = { class: "side-user-message" },
        Y = { key: 0, class: "shortMessage" },
        _ = Object(a["h"])(
          "span",
          { style: { "font-weight": "600" } },
          "You: ",
          -1
        ),
        G = { class: "message-ellipsis" },
        J = { key: 1, class: "shortMessage" },
        W = { class: "sideMessageCheck" },
        A = { class: "container-message  container-desktop-view" },
        K = { class: "trysrcoll", id: "messageBody" },
        Q = { key: 0, class: "empty-chat-list" },
        X = Object(a["h"])("span", null, "You Have No Messages", -1),
        Z = Object(a["h"])("div", { class: "pulldown" }, null, -1),
        ee = { key: 1, class: "message-Box" },
        se = { class: "username-header" },
        te = Object(a["h"])("hr", null, null, -1),
        ae = { class: "message-background" },
        ce = { class: "message-status" },
        ie = {
          class:
            "container-message  container-mobile-view  container-mobileView",
          ref: "containerMessage",
        },
        he = { class: "trysrcoll", id: "messageBody" },
        ne = { key: 0, class: "empty-chat-list" },
        re = Object(a["h"])("span", null, "You Have No Messages", -1),
        le = { key: 1, class: "message-Box" },
        oe = { class: "username-header" },
        de = Object(a["h"])("hr", null, null, -1),
        ue = { class: "message-background" },
        me = { class: "message-status" },
        ge = { class: "list-container-right " },
        be = { class: "friends-list-container" },
        Oe = Object(a["h"])(
          "div",
          { class: "friends-listHeader" },
          [Object(a["h"])("h5", null, "Friends")],
          -1
        ),
        je = { key: 0, class: "empty-chat-list" },
        pe = Object(a["h"])("span", null, "You Have No Friends", -1),
        fe = { class: "username-header" },
        ye = Object(a["h"])(
          "div",
          { class: "message-friend" },
          [Object(a["h"])("button", { class: "btn btn-success " }, "Chat")],
          -1
        );
      function ke(e, s, t, ke, Me, Se) {
        const Ne = Object(a["x"])("font-awesome-icon");
        return (
          Object(a["q"])(),
          Object(a["d"])("section", c, [
            Object(a["h"])("div", i, [
              Object(a["h"])(
                "div",
                h,
                [
                  Object(a["h"])("div", n, [
                    Object(a["h"])("div", r, [
                      l,
                      Object(a["h"])("div", o, [
                        Object(a["G"])(
                          Object(a["h"])(
                            "input",
                            {
                              type: "text",
                              placeholder: "Search Chats...",
                              "onUpdate:modelValue":
                                s[1] || (s[1] = (e) => (Me.searchInput = e)),
                              onClick:
                                s[2] ||
                                (s[2] = (e) => Se.handleSearchBackDrop("open")),
                            },
                            null,
                            512
                          ),
                          [[a["C"], Me.searchInput]]
                        ),
                        Me.displaySearchContents
                          ? (Object(a["q"])(),
                            Object(a["d"])("div", d, [
                              (Object(a["q"])(!0),
                              Object(a["d"])(
                                a["a"],
                                null,
                                Object(a["w"])(
                                  Se.filteredSearchList,
                                  (s) => (
                                    Object(a["q"])(),
                                    Object(a["d"])("ul", { key: s.userName }, [
                                      Object(a["h"])(
                                        "li",
                                        {
                                          onClick: (e) =>
                                            Se.showMessage(s.userName, "Read"),
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
                                            u,
                                            Object(a["z"])(s.userName),
                                            1
                                          ),
                                        ],
                                        8,
                                        ["onClick"]
                                      ),
                                    ])
                                  )
                                ),
                                128
                              )),
                              Se.searchNotFound
                                ? (Object(a["q"])(),
                                  Object(a["d"])("div", m, " User Not Found "))
                                : Object(a["e"])("", !0),
                            ]))
                          : Object(a["e"])("", !0),
                      ]),
                      Me.chatListBackDrop
                        ? (Object(a["q"])(),
                          Object(a["d"])("div", {
                            key: 0,
                            class: "chat-list-backDrop",
                            onClick:
                              s[3] ||
                              (s[3] = (e) => Se.handleSearchBackDrop("close")),
                          }))
                        : Object(a["e"])("", !0),
                    ]),
                    Me.messagesEmpty
                      ? (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          { key: 0 },
                          Object(a["w"])(
                            Me.chattedUsersList,
                            (e) => (
                              Object(a["q"])(),
                              Object(a["d"])(
                                "div",
                                {
                                  key: e.userName,
                                  onClick: (s) =>
                                    Se.showMessage(e.userName, "Read"),
                                  style: Se.activeChattedUser(e.showMessage),
                                },
                                [
                                  Object(a["h"])("div", g, [
                                    Object(a["h"])("div", b, [
                                      Object(a["h"])(
                                        "img",
                                        {
                                          src: Se.handleImages(e.userName),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ),
                                      "unRead" ===
                                      Me.userData.messageStatus[e.userName]
                                        .messageViewStatus
                                        ? (Object(a["q"])(),
                                          Object(a["d"])("div", O))
                                        : Object(a["e"])("", !0),
                                    ]),
                                    Object(a["h"])("div", j, [
                                      Object(a["h"])("div", p, [
                                        Object(a["h"])(
                                          "span",
                                          f,
                                          Object(a["z"])(e.userName),
                                          1
                                        ),
                                        Object(a["h"])(
                                          "span",
                                          null,
                                          Object(a["z"])(
                                            Se.showDateInWords(
                                              Me.chattedUsersInfo[e.userName]
                                                .messageDate,
                                              e.userName
                                            )
                                          ),
                                          1
                                        ),
                                      ]),
                                      Object(a["h"])("div", y, [
                                        Me.chattedUsersInfo[e.userName]
                                          .userName === Me.userData.userName
                                          ? (Object(a["q"])(),
                                            Object(a["d"])("span", k, [
                                              M,
                                              Object(a["h"])(
                                                "span",
                                                S,
                                                Object(a["z"])(
                                                  Se.handleMessageSlice(
                                                    Me.chattedUsersInfo[
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
                                                Se.handleMessageSlice(
                                                  Me.chattedUsersInfo[
                                                    e.userName
                                                  ].message
                                                )
                                              ),
                                              1
                                            )),
                                        Object(a["h"])("span", w, [
                                          Se.handleMessageStatus(
                                            Me.chattedUsersInfo[e.userName]
                                              .messageStatus,
                                            Me.chattedUsersInfo[e.userName]
                                              .messageId
                                          )
                                            ? (Object(a["q"])(),
                                              Object(a["d"])(Ne, {
                                                key: 0,
                                                icon: ["fas", "check"],
                                                class: "check-side",
                                              }))
                                            : Object(a["e"])("", !0),
                                          Se.handleMessageStatus(
                                            Me.chattedUsersInfo[e.userName]
                                              .messageStatus,
                                            Me.chattedUsersInfo[e.userName]
                                              .messageId
                                          )
                                            ? Object(a["e"])("", !0)
                                            : (Object(a["q"])(),
                                              Object(a["d"])(
                                                Ne,
                                                {
                                                  key: 1,
                                                  icon: ["fas", "check-double"],
                                                  class: [
                                                    "check-double-side",
                                                    Se.handleCheckStyle(
                                                      Me.chattedUsersInfo[
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
                            )
                          ),
                          128
                        ))
                      : Object(a["e"])("", !0),
                  ]),
                ],
                512
              ),
              Object(a["h"])("div", v, [
                Object(a["h"])("div", D, [
                  Object(a["h"])("div", C, [
                    I,
                    Object(a["h"])("div", U, [
                      Object(a["G"])(
                        Object(a["h"])(
                          "input",
                          {
                            type: "text",
                            placeholder: "Search Chats...",
                            "onUpdate:modelValue":
                              s[4] || (s[4] = (e) => (Me.searchInput = e)),
                            onClick:
                              s[5] ||
                              (s[5] = (e) => Se.handleSearchBackDrop("open")),
                          },
                          null,
                          512
                        ),
                        [[a["C"], Me.searchInput]]
                      ),
                      Me.displaySearchContents
                        ? (Object(a["q"])(),
                          Object(a["d"])("div", q, [
                            (Object(a["q"])(!0),
                            Object(a["d"])(
                              a["a"],
                              null,
                              Object(a["w"])(
                                Se.filteredSearchList,
                                (s) => (
                                  Object(a["q"])(),
                                  Object(a["d"])("ul", { key: s.userName }, [
                                    Object(a["h"])(
                                      "li",
                                      {
                                        onClick: (e) =>
                                          Se.showMessage(s.userName, "Read"),
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
                                          L,
                                          Object(a["z"])(s.userName),
                                          1
                                        ),
                                      ],
                                      8,
                                      ["onClick"]
                                    ),
                                  ])
                                )
                              ),
                              128
                            )),
                            Se.searchNotFound
                              ? (Object(a["q"])(),
                                Object(a["d"])("div", B, " User Not Found "))
                              : Object(a["e"])("", !0),
                          ]))
                        : Object(a["e"])("", !0),
                    ]),
                    Me.chatListBackDrop
                      ? (Object(a["q"])(),
                        Object(a["d"])("div", {
                          key: 0,
                          class: "chat-list-backDrop",
                          onClick:
                            s[6] ||
                            (s[6] = (e) => Se.handleSearchBackDrop("close")),
                        }))
                      : Object(a["e"])("", !0),
                  ]),
                  Me.messagesEmpty
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(), Object(a["d"])("div", $, [x])),
                  z,
                  Me.messagesEmpty
                    ? (Object(a["q"])(!0),
                      Object(a["d"])(
                        a["a"],
                        { key: 1 },
                        Object(a["w"])(
                          Me.chattedUsersList,
                          (e) => (
                            Object(a["q"])(),
                            Object(a["d"])(
                              "div",
                              {
                                key: e.userName,
                                onClick: (s) =>
                                  Se.showMessage(e.userName, "Read"),
                                style: Se.activeChattedUser(e.showMessage),
                              },
                              [
                                Object(a["h"])("div", E, [
                                  Object(a["h"])("div", V, [
                                    Object(a["h"])(
                                      "img",
                                      {
                                        src: Se.handleImages(e.userName),
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ),
                                    "unRead" ===
                                    Me.userData.messageStatus[e.userName]
                                      .messageViewStatus
                                      ? (Object(a["q"])(),
                                        Object(a["d"])("div", P))
                                      : Object(a["e"])("", !0),
                                  ]),
                                  Object(a["h"])("div", F, [
                                    Object(a["h"])("div", R, [
                                      Object(a["h"])(
                                        "span",
                                        H,
                                        Object(a["z"])(e.userName),
                                        1
                                      ),
                                      Object(a["h"])(
                                        "span",
                                        null,
                                        Object(a["z"])(
                                          Se.showDateInWords(
                                            Me.chattedUsersInfo[e.userName]
                                              .messageDate
                                          )
                                        ),
                                        1
                                      ),
                                    ]),
                                    Object(a["h"])("div", T, [
                                      Me.chattedUsersInfo[e.userName]
                                        .userName === Me.userData.userName
                                        ? (Object(a["q"])(),
                                          Object(a["d"])("span", Y, [
                                            _,
                                            Object(a["h"])(
                                              "span",
                                              G,
                                              Object(a["z"])(
                                                Se.handleMessageSlice(
                                                  Me.chattedUsersInfo[
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
                                            J,
                                            Object(a["z"])(
                                              Se.handleMessageSlice(
                                                Me.chattedUsersInfo[e.userName]
                                                  .message
                                              )
                                            ),
                                            1
                                          )),
                                      Object(a["h"])("span", W, [
                                        Se.handleMessageStatus(
                                          Me.chattedUsersInfo[e.userName]
                                            .messageStatus,
                                          Me.chattedUsersInfo[e.userName]
                                            .messageId
                                        )
                                          ? (Object(a["q"])(),
                                            Object(a["d"])(Ne, {
                                              key: 0,
                                              icon: ["fas", "check"],
                                              class: "check-side",
                                            }))
                                          : Object(a["e"])("", !0),
                                        Se.handleMessageStatus(
                                          Me.chattedUsersInfo[e.userName]
                                            .messageStatus,
                                          Me.chattedUsersInfo[e.userName]
                                            .messageId
                                        )
                                          ? Object(a["e"])("", !0)
                                          : (Object(a["q"])(),
                                            Object(a["d"])(
                                              Ne,
                                              {
                                                key: 1,
                                                icon: ["fas", "check-double"],
                                                class: [
                                                  "check-double-side",
                                                  Se.handleCheckStyle(
                                                    Me.chattedUsersInfo[
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
                          )
                        ),
                        128
                      ))
                    : Object(a["e"])("", !0),
                ]),
              ]),
              Object(a["h"])("div", A, [
                Object(a["h"])(
                  "div",
                  { class: "fill-up-container", style: Me.filUpStyle },
                  null,
                  4
                ),
                Object(a["h"])(
                  "div",
                  { class: "messager-Header", style: Se.handleNavCollapse() },
                  [
                    Me.messagesEmpty
                      ? (Object(a["q"])(),
                        Object(a["d"])(
                          "img",
                          { key: 0, src: Me.userProfilePicture, alt: "" },
                          null,
                          8,
                          ["src"]
                        ))
                      : Object(a["e"])("", !0),
                    Object(a["h"])(
                      "h5",
                      null,
                      Object(a["z"])(Me.friendMessaged),
                      1
                    ),
                    Object(a["h"])(
                      "span",
                      {
                        onClick:
                          s[7] ||
                          (s[7] = (...e) =>
                            Se.showChatList && Se.showChatList(...e)),
                        class: "return-chatlist-btn",
                      },
                      [
                        Object(a["h"])("span", null, [
                          Object(a["h"])(Ne, { icon: ["fas", "chevron-left"] }),
                        ]),
                      ]
                    ),
                  ],
                  4
                ),
                Object(a["h"])("div", K, [
                  Me.messagesEmpty
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(), Object(a["d"])("div", Q, [X])),
                  Z,
                  Me.messagesEmpty
                    ? (Object(a["q"])(!0),
                      Object(a["d"])(
                        a["a"],
                        { key: 1 },
                        Object(a["w"])(
                          Se.showingMessages,
                          (e) => (
                            Object(a["q"])(),
                            Object(a["d"])(
                              "div",
                              {
                                key: e.messageId,
                                class: [
                                  "message-body  message-body-disktopView",
                                  Se.handleUserChatBoxStyle(e.userName),
                                ],
                              },
                              [
                                e.messageStatus.length
                                  ? (Object(a["q"])(),
                                    Object(a["d"])(
                                      "img",
                                      {
                                        key: 0,
                                        src: Se.handleImages(e.userName),
                                        alt: "",
                                      },
                                      null,
                                      8,
                                      ["src"]
                                    ))
                                  : Object(a["e"])("", !0),
                                e.messageStatus.length
                                  ? (Object(a["q"])(),
                                    Object(a["d"])("div", ee, [
                                      Object(a["h"])(Ne, {
                                        icon: ["fas", "caret-right"],
                                        class: "caret-right",
                                      }),
                                      Object(a["h"])(Ne, {
                                        icon: ["fas", "caret-left"],
                                        class: "caret-left",
                                      }),
                                      Object(a["h"])("div", null, [
                                        Object(a["h"])(
                                          "h6",
                                          se,
                                          Object(a["z"])(e.userName),
                                          1
                                        ),
                                        Object(a["h"])(
                                          "span",
                                          null,
                                          Object(a["z"])(
                                            Se.showDate(e.messageDate)
                                          ),
                                          1
                                        ),
                                      ]),
                                      te,
                                      Object(a["h"])(
                                        "span",
                                        ae,
                                        Object(a["z"])(e.message),
                                        1
                                      ),
                                      Object(a["h"])("span", ce, [
                                        Se.handleMessageStatus(
                                          e.messageStatus,
                                          e.messageId
                                        )
                                          ? (Object(a["q"])(),
                                            Object(a["d"])(Ne, {
                                              key: 0,
                                              icon: ["fas", "check"],
                                              class: "check",
                                            }))
                                          : Object(a["e"])("", !0),
                                        Se.handleMessageStatus(
                                          e.messageStatus,
                                          e.messageId
                                        )
                                          ? Object(a["e"])("", !0)
                                          : (Object(a["q"])(),
                                            Object(a["d"])(
                                              Ne,
                                              {
                                                key: 1,
                                                icon: ["fas", "check-double"],
                                                class: [
                                                  "check-double",
                                                  Se.handleCheckStyle(
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
                          )
                        ),
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
                        (...e) =>
                          Se.handleSubmitMessage &&
                          Se.handleSubmitMessage(...e),
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
                            s[8] || (s[8] = (e) => (Me.message = e)),
                          placeholder: " Type your message",
                        },
                        null,
                        512
                      ),
                      [[a["C"], Me.message]]
                    ),
                    Object(a["h"])(
                      "img",
                      { src: Me.userData.userProfileImage, alt: "" },
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
                    { class: "fill-up-container", style: Me.filUpStyle },
                    null,
                    4
                  ),
                  Object(a["h"])(
                    "div",
                    { class: "messager-Header", style: Se.handleNavCollapse() },
                    [
                      Me.messagesEmpty
                        ? (Object(a["q"])(),
                          Object(a["d"])(
                            "img",
                            { key: 0, src: Me.userProfilePicture, alt: "" },
                            null,
                            8,
                            ["src"]
                          ))
                        : Object(a["e"])("", !0),
                      Object(a["h"])(
                        "h5",
                        null,
                        Object(a["z"])(Me.friendMessaged),
                        1
                      ),
                      Object(a["h"])(
                        "span",
                        {
                          onClick:
                            s[10] ||
                            (s[10] = (...e) =>
                              Se.showChatList && Se.showChatList(...e)),
                          class: "return-chatlist-btn",
                        },
                        [
                          Object(a["h"])("span", null, [
                            Object(a["h"])(Ne, {
                              icon: ["fas", "chevron-left"],
                            }),
                          ]),
                        ]
                      ),
                    ],
                    4
                  ),
                  Object(a["h"])("div", he, [
                    Me.messagesEmpty
                      ? Object(a["e"])("", !0)
                      : (Object(a["q"])(), Object(a["d"])("div", ne, [re])),
                    Me.messagesEmpty
                      ? (Object(a["q"])(!0),
                        Object(a["d"])(
                          a["a"],
                          { key: 1 },
                          Object(a["w"])(
                            Se.showingMessages,
                            (e) => (
                              Object(a["q"])(),
                              Object(a["d"])(
                                "div",
                                {
                                  key: e.messageId,
                                  class: [
                                    "message-body",
                                    Se.handleUserChatBoxStyle(e.userName),
                                  ],
                                },
                                [
                                  e.messageStatus.length
                                    ? (Object(a["q"])(),
                                      Object(a["d"])(
                                        "img",
                                        {
                                          key: 0,
                                          src: Se.handleImages(e.userName),
                                          alt: "",
                                        },
                                        null,
                                        8,
                                        ["src"]
                                      ))
                                    : Object(a["e"])("", !0),
                                  e.messageStatus.length
                                    ? (Object(a["q"])(),
                                      Object(a["d"])("div", le, [
                                        Object(a["h"])(Ne, {
                                          icon: ["fas", "caret-right"],
                                          class: "caret-right",
                                        }),
                                        Object(a["h"])(Ne, {
                                          icon: ["fas", "caret-left"],
                                          class: "caret-left",
                                        }),
                                        Object(a["h"])("div", null, [
                                          Object(a["h"])(
                                            "h6",
                                            oe,
                                            Object(a["z"])(e.userName),
                                            1
                                          ),
                                          Object(a["h"])(
                                            "span",
                                            null,
                                            Object(a["z"])(
                                              Se.showDate(e.messageDate)
                                            ),
                                            1
                                          ),
                                        ]),
                                        de,
                                        Object(a["h"])(
                                          "span",
                                          ue,
                                          Object(a["z"])(e.message),
                                          1
                                        ),
                                        Object(a["h"])("span", me, [
                                          Se.handleMessageStatus(
                                            e.messageStatus,
                                            e.messageId
                                          )
                                            ? (Object(a["q"])(),
                                              Object(a["d"])(Ne, {
                                                key: 0,
                                                icon: ["fas", "check"],
                                                class: "check",
                                              }))
                                            : Object(a["e"])("", !0),
                                          Se.handleMessageStatus(
                                            e.messageStatus,
                                            e.messageId
                                          )
                                            ? Object(a["e"])("", !0)
                                            : (Object(a["q"])(),
                                              Object(a["d"])(
                                                Ne,
                                                {
                                                  key: 1,
                                                  icon: ["fas", "check-double"],
                                                  class: [
                                                    "check-double",
                                                    Se.handleCheckStyle(
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
                            )
                          ),
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
                          (...e) =>
                            Se.handleSubmitMessage &&
                            Se.handleSubmitMessage(...e),
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
                              s[11] || (s[11] = (e) => (Me.message = e)),
                            placeholder: " Type your message",
                          },
                          null,
                          512
                        ),
                        [[a["C"], Me.message]]
                      ),
                      Object(a["h"])(
                        "img",
                        { src: Me.userData.userProfileImage, alt: "" },
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
              Object(a["h"])("div", ge, [
                Object(a["h"])("div", be, [
                  Oe,
                  Me.userData.friends.length
                    ? Object(a["e"])("", !0)
                    : (Object(a["q"])(), Object(a["d"])("div", je, [pe])),
                  Me.userData.friends.length
                    ? (Object(a["q"])(!0),
                      Object(a["d"])(
                        a["a"],
                        { key: 1 },
                        Object(a["w"])(
                          Me.userData.friends,
                          (e) => (
                            Object(a["q"])(),
                            Object(a["d"])("div", { key: e.userName }, [
                              Object(a["h"])(
                                "div",
                                {
                                  onClick: (s) =>
                                    Se.showMessage(e.userName, "newMessage"),
                                  class: "friendLists",
                                },
                                [
                                  Object(a["h"])(
                                    "img",
                                    {
                                      src: Se.handleImages(e.userName),
                                      alt: "",
                                    },
                                    null,
                                    8,
                                    ["src"]
                                  ),
                                  Object(a["h"])(
                                    "span",
                                    fe,
                                    Object(a["z"])(e.userName),
                                    1
                                  ),
                                  ye,
                                ],
                                8,
                                ["onClick"]
                              ),
                            ])
                          )
                        ),
                        128
                      ))
                    : Object(a["e"])("", !0),
                ]),
              ]),
            ]),
          ])
        );
      }
      var Me = t("9612"),
        Se = t("c1df"),
        Ne = t.n(Se),
        we = {
          name: "Messages",
          props: ["userName"],
          data() {
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
              handler(e) {
                setTimeout(() => {
                  this.loadData("on"), (this.watchDelay = !1);
                }, 2e3);
              },
              deep: !0,
            },
          },
          mounted() {
            this.loadData("on");
          },
          beforeUnmount() {
            this.loadData("off");
          },
          methods: {
            loadData(e) {
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
              let s = [];
              for (const a in this.userData.messageStatus)
                s.push(this.userData.messageStatus[a]);
              s.length
                ? ((this.showingMessageStatus = s.filter((e) => e.showMessage)),
                  (this.showingMessage =
                    this.userData.messages[
                      this.showingMessageStatus[0].friendMessaged
                    ]),
                  (this.friendMessaged =
                    this.showingMessageStatus[0].friendMessaged),
                  (this.messagesEmpty = !0))
                : (this.messagesEmpty = !1);
              let t =
                this.$store.state.displayFunctions.displayMessage.userName;
              (s.length || t.length) &&
                (t.length
                  ? this.showMessage(t, "newMessage")
                  : this.showMessage(this.friendMessaged, "Read", e),
                this.$store.dispatch("handleNotificationUpdate", {
                  userName: this.userData.userName,
                  notificationStatus: "Read",
                  notificationType: "message",
                }));
            },
            scrollToBottom() {
              const e =
                  document.getElementsByClassName("message-body")[
                    document.getElementsByClassName("message-body").length - 1
                  ],
                s = document.getElementsByClassName("message-body-disktopView")[
                  document.getElementsByClassName("message-body-disktopView")
                    .length - 1
                ];
              setTimeout(() => {
                e && e.scrollIntoView({ behavior: "smooth" });
              }, 100),
                setTimeout(() => {
                  s && s.scrollIntoView({ behavior: "smooth" });
                }, 100);
            },
            activeChattedUser(e) {
              return e
                ? "background-color:rgba(232, 62, 140, 0.52)"
                : "background-color:white";
            },
            handleSearchBackDrop(e) {
              return "open" === e
                ? (this.chatListBackDrop = !0)
                : ((this.searchInput = ""),
                  (this.displaySearchContents = !1),
                  (this.filteredSearchLists = []),
                  (this.chatListBackDrop = !1));
            },
            handleMessageSlice(e) {
              if (e.length > 15) {
                let s = e.slice(0, 14) + "....";
                return s;
              }
              return e;
            },
            handleUserChatBoxStyle(e) {
              return e === this.userName ? "this-user" : "other-user";
            },
            handleImages(e) {
              return this.$store.state.users[e].userProfileImage.length
                ? this.$store.state.users[e].userProfileImage
                : "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png";
            },
            handleSubmitMessage() {
              const e = Me["a"].v1();
              this.message &&
                this.friendMessaged &&
                (this.$store.dispatch("handleSubmitMessage", {
                  [e]: {
                    userName: this.userData.userName,
                    friendMessaged: this.friendMessaged,
                    userId: this.userData.userId,
                    message: this.message,
                    messageId: e,
                    messageDate: Date.now(),
                    messageStatus: "sent",
                  },
                }),
                this.showMessage(this.friendMessaged, "unRead"),
                this.$store.dispatch("handleNotifications", {
                  userName: this.userData.userName,
                  friendUserName: this.friendMessaged,
                  notificationId: Me["a"].v1(),
                  notificationType: "message",
                  notificationStatus: "unRead",
                  notificationDate: Date.now(),
                }),
                (this.message = ""),
                (this.showingMessage =
                  this.userData.messages[this.friendMessaged])),
                this.scrollToBottom();
            },
            showMessage(e, s, t) {
              (this.userProfilePicture = this.handleImages(e)),
                (this.friendMessaged = e);
              let a = Object.keys(this.userData.messageStatus);
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
            showChatList() {
              this.$refs.containerMessage.classList.add("container-mobileView"),
                this.$refs.chatList.classList.remove("container-mobileView");
            },
            handleMessageStatus(e, s) {
              return (
                "sent" === e || ("received" !== e && "Read" !== e && void 0)
              );
            },
            handleCheckStyle(e) {
              return "received" === e ? "check-double" : "check-double-read";
            },
            showDateInWords(e, s) {
              const t = Date.now(),
                a = t - e,
                c = Math.round(a / 6e4),
                i = Math.round(a / 36e5),
                h = Math.round(a / 864e5),
                n = Math.round(a / 6048e5),
                r = Math.round(a / 72576e5),
                l = Math.round(a / 1314e6);
              return c <= 0
                ? "Just now"
                : c < 60
                ? 1 === c
                  ? "1 minute ago"
                  : c + " minutes ago"
                : i < 24
                ? 1 === i
                  ? "1 hour ago"
                  : i + " hours ago"
                : h < 7
                ? 1 === h
                  ? "1 day ago"
                  : h + " days ago"
                : n < 4
                ? 1 === n
                  ? "1 week ago"
                  : n + " weeks ago"
                : r < 12
                ? 1 === r
                  ? "1 month ago"
                  : r + " mouths ago"
                : 1 === l
                ? "1 year ago"
                : l + " years ago";
            },
            showDate(e) {
              let s = Date.now(),
                t = s - e;
              const a = Math.round(t / 6e4),
                c = Math.round(t / 36e5),
                i = Math.round(t / 864e5),
                h = Math.round(t / 6048e5),
                n = Math.round(t / 72576e5);
              Math.round(t / 1314e6);
              return a <= 0
                ? "Just now"
                : a < 60
                ? 1 === a
                  ? "1 minute ago"
                  : a + "minutes ago"
                : c < 24
                ? Ne()(e).format(" h:mm :ss a L")
                : i < 7
                ? Ne()(e).format(" h:mm:ss a L")
                : h < 4
                ? Ne()(e).format(" h:mm :ss a L")
                : n < 12
                ? Ne()(e).format(" h:mm :SS a L")
                : Ne()(e).format(" h:mm a  L");
            },
            handleDeleteMessage(e, s, t) {
              this.$store.dispatch("handleDeleteMessage", {
                userName: e,
                friendMessaged: s,
                messageId: t,
              });
            },
            handleNavCollapse() {
              return this.$store.state.displayFunctions.navCollapsed
                ? ((this.filUpStyle = "height:130px"), "margin-top:-90px")
                : ((this.filUpStyle = "height:160px"), "margin-top:0");
            },
            handleChatList() {
              let e = Object.keys(this.userData.messageStatus),
                s = [];
              e.forEach((e) => {
                s = [
                  ...s,
                  {
                    userName: e,
                    showMessage: this.userData.messageStatus[e].showMessage,
                    messageDate: this.userData.messageStatus[e].messageDate,
                  },
                ];
              }),
                (this.chattedUsersList = s
                  .sort((e, s) => e.messageDate - s.messageDate)
                  .reverse());
            },
          },
          computed: {
            filteredSearchList() {
              let e = this.chattedUsersList
                .sort(function (e, s) {
                  var t = e.userName.toUpperCase(),
                    a = s.userName.toUpperCase();
                  return t < a ? -1 : t > a ? 1 : 0;
                })
                .filter(
                  (e) =>
                    -1 !==
                    e.userName
                      .toLowerCase()
                      .indexOf(this.searchInput.toLowerCase())
                );
              return (this.filteredSearchLists = e), this.filteredSearchLists;
            },
            searchNotFound() {
              return !this.filteredSearchLists.length;
            },
            showingMessages() {
              (this.userData = this.$store.state.users[this.userName]),
                (this.messages =
                  this.$store.state.users[this.userName].messages),
                (this.storeData = this.$store.state),
                this.searchInput.length
                  ? (this.displaySearchContents = !0)
                  : (this.displaySearchContents = !1),
                this.handleChatList();
              let e = {};
              for (const t in this.userData.messageStatus) {
                let s = [];
                for (const e in this.userData.messages[t])
                  s = [...s, this.userData.messages[t][e]].sort(
                    (e, s) => e.messageDate - s.messageDate
                  );
                e = { ...e, [t]: s[s.length - 1] };
              }
              this.chattedUsersInfo = e;
              let s = [];
              for (const t in this.showingMessage)
                s.push(this.showingMessage[t]);
              return s.sort((e, s) => e.messageDate - s.messageDate);
            },
          },
        },
        ve = t("d959"),
        De = t.n(ve);
      const Ce = De()(we, [["render", ke]]);
      s["default"] = Ce;
    },
  },
]);
//# sourceMappingURL=Messages.c32bb05a.js.map
