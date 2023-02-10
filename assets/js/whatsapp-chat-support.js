!(function (h, m, _) {
  function v(t, a) {
    this.init(t, a);
  }
  (v.DEFAULTS = {
    popupFx: "1",
    now: "",
    timezone: "America/Chicago",
    notAvailableMsg: "I am not available today",
    almostAvailableMsg: "I will be available soon",
    dialogNotAvailableMsg: "I am not available today",
    dialogAlmostAvailableMsg: "I will be available soon",
    defaultMsg: "Hi, I have some questions about this page: {{url}}!",
    debug: !1,
    onPopupOpen: function () {},
    onPopupClose: function () {},
    whenGoingToWhatsApp: function (t, a) {},
  }),
    (v.prototype.init = function (t, a) {
      var o = m.extend(!0, {}, v.DEFAULTS, a);
      (o.defaultMsg = o.defaultMsg.split("{{url}}").join(h.location.href)),
        (o.defaultMsg = o.defaultMsg.split("[url]").join(h.location.href));
      var s = m(t),
        n = s.find(".wcs_button"),
        i = s.find(".wcs_button_label"),
        e = s.find(".wcs_popup"),
        l = s.find(".wcs_popup_input"),
        a = s.find(".wcs_popup_person_container");
      s.addClass("wcs-effect-" + o.popupFx);
      t = m('<div class="wcs_debug"></div>');

      $(document).scroll(function () {
        o.onPopupClose(),
          s.removeClass("wcs-show"),
          s.find(".wcs_popup_input").find('input[type="text"]').val("");
      });

      $(".wcs_button_circle").hover(
        function () {
          // over
          i.addClass("wcs_button_label_show");
        },
        function () {
          // out
          i.removeClass("wcs_button_label_show");
        }
      );

      $(".whatsapp_chat_support").click(function (e) {
        e.stopPropagation();
      });

      $(document).click(function (e) {
        o.onPopupClose(),
          s.removeClass("wcs-show"),
          s.find(".wcs_popup_input").find('input[type="text"]').val("");
      });

      function p() {
        o.onPopupOpen(),
          m(".whatsapp_chat_support").each(function () {
            var t = m(this);
            t.removeClass("wcs-show"),
              t.find(".wcs_popup_input").find('input[type="text"]').val("");
          }),
          s.addClass("wcs-show"),
          setTimeout(function () {
            e.find("input").val(o.defaultMsg).focus();
          }, 50);
      }
      function r() {
        o.onPopupClose(),
          s.removeClass("wcs-show"),
          s.find(".wcs_popup_input").find('input[type="text"]').val("");
      }
      function u(t, a) {
        o.whenGoingToWhatsApp(t, a), r();
        var s = "https://web.whatsapp.com/send";
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) && (s = "https://api.whatsapp.com/send");
        a = s + "?phone=" + t + "&text=" + a;
        console.log(a), h.open(a, "_blank").focus();
      }
      o.debug && m("body").append(t),
        n.on("click", function () {
          e[0] != _ && (s.hasClass("wcs-show") ? r : p)();
        }),
        i.on("click", function () {
          e[0] != _ && (s.hasClass("wcs-show") ? r : p)();
        }),
        e.find(".wcs_popup_close").on("click", function () {
          r();
        }),
        n.on("click", function () {
          var t = m(this);
          t.attr("data-number") == _ ||
            t.hasClass("wcs_button_person_offline") ||
            u(t.attr("data-number"), o.defaultMsg);
        }),
        l.on("click", ".fa", function () {
          m(this);
          u(l.attr("data-number"), l.find('input[type="text"]').val());
        }),
        l.find('input[type="text"]').keypress(function (t) {
          13 == t.which &&
            (m(this),
            u(l.attr("data-number"), l.find('input[type="text"]').val()));
        }),
        a.on("click", ".wcs_popup_person", function () {
          var t,
            a = m(this);
          a.hasClass("wcs_popup_person_offline") ||
            ((t = o.defaultMsg),
            a.attr("data-default-msg") !== _ &&
              (t = a
                .attr("data-default-msg")
                .split("{{url}}")
                .join(h.location.href)),
            u(a.attr("data-number"), t));
        });
      var d,
        f = moment();
      function c(t) {
        var a,
          s,
          o,
          n = !1,
          i = !1;
        for (a in t)
          t.hasOwnProperty(a) &&
            ("sunday" == (o = (o = a).toLowerCase())
              ? 0
              : "monday" == o
              ? 1
              : "tuesday" == o
              ? 2
              : "wednesday" == o
              ? 3
              : "thursday" == o
              ? 4
              : "friday" == o
              ? 5
              : "saturday" == o
              ? 6
              : void 0) == f.day() &&
            ((s = moment(m.trim(t[a].split("-")[0]), "HH:mm")),
            (o = moment(m.trim(t[a].split("-")[1]), "HH:mm")),
            f.isAfter(s) && f.isBefore(o)
              ? (n = !0)
              : f.isBefore(s) && (i = !0));
        return { is_available: n, almost_available: i };
      }
      t.append(
        "<div><strong>Original Date</strong> " +
          f.format("YYYY-MM-DD HH:mm:ss") +
          " <br><strong>UTC Offsset</strong> " +
          f.utcOffset() / 60 +
          "</div>"
      ),
        "" != o.timezone &&
          "" == o.now &&
          (f.tz(o.timezone),
          t.append(
            "<div><strong>Setting Timezone</strong> " +
              f.format("YYYY-MM-DD HH:mm:ss") +
              " <br><strong>UTC Offsset</strong> " +
              f.utcOffset() / 60 +
              "</div>"
          )),
        "" != o.now &&
          ((f = moment(o.now, "YYYY-MM-DD HH:mm:ss")),
          t.append(
            "<div><strong>Setting Manual Date</strong> " +
              f.format("YYYY-MM-DD HH:mm:ss") +
              " <br><strong>UTC Offsset</strong> " +
              f.utcOffset() / 60 +
              "</div>"
          )),
        n.attr("data-availability") != _ &&
          ((d = c(m.parseJSON(n.attr("data-availability")))).is_available ||
            (n.addClass("wcs_button_person_offline"),
            n
              .find(".wcs_button_person_status")
              .html(
                d.almost_available ? o.almostAvailableMsg : o.notAvailableMsg
              ))),
        l.attr("data-availability") != _ &&
          ((d = c(m.parseJSON(l.attr("data-availability")))).is_available ||
            (l.addClass("wcs_popup_input_offline"),
            l.html(
              d.almost_available
                ? o.dialogAlmostAvailableMsg
                : o.dialogNotAvailableMsg
            ))),
        a.find(".wcs_popup_person").each(function () {
          var t,
            a = m(this);
          a.attr("data-availability") != _ &&
            ((t = c(m.parseJSON(a.attr("data-availability")))).is_available ||
              (a.addClass("wcs_popup_person_offline"),
              a
                .find(".wcs_popup_person_status")
                .html(
                  t.almost_available
                    ? o.dialogAlmostAvailableMsg
                    : o.dialogNotAvailableMsg
                )));
        });
    });
  m.fn.whatsappChatSupport = function (n, i, e) {
    return this.each(function (t, a) {
      var s = m(this),
        o = s.data("whatsappChatSupport");
      o ||
        "string" == typeof n ||
        s.data("whatsappChatSupport", new v(this, n)),
        o && "string" == typeof n && o[n](i, e);
    });
  };

  var whatsapp = $(".whatsapp_chat_support");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
      whatsapp.removeClass("active");
    } else {
      whatsapp.addClass("active");
    }
  });
})(window, jQuery);
