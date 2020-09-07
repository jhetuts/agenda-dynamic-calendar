"use strict";

(function () {
  var agendaTarget = document.querySelector(".agenda-ui");
  var theAgendaUI = document.querySelector(".agenda-wrapper");
  theAgendaUI.style.display = "none";
  var checkingTime = [];
  var checkAgendaTarget = setInterval(function () {
    console.log("running checAgendaTarget");

    if (agendaTarget) {
      // Drag and Scroll
      var dragScroll = function dragScroll() {
        var container = document.querySelector(".col-2");
        var isDown = !1;
        var startX = 0;
        var scrollLeft = 0;

        var mouseDownHandler = function mouseDownHandler(a) {
          (isDown = !0),
            (container.style.cursor = "grabbing"),
            (startX = a.pageX - container.offsetLeft),
            (scrollLeft = container.scrollLeft),
            container.addEventListener("mouseup", mouseUpHandler),
            container.addEventListener("mouseleave", mouseUpHandler),
            container.addEventListener("mousemove", mouseMoveHandler);
        };

        var mouseUpHandler = function mouseUpHandler(a) {
          (container.style.cursor = "grab"), (isDown = !1);
        };

        var mouseMoveHandler = function mouseMoveHandler(a) {
          a.preventDefault();

          if (isDown) {
            var i = 2 * (a.pageX - container.offsetLeft - startX);
            container.scrollLeft = scrollLeft - i;
          }
        };

        container.addEventListener("mousedown", mouseDownHandler);
      }; // Utilities

      var isDateEqual = function isDateEqual(data) {
        var y = calculateBetweenLocalAndDefaultTz(
          data.defaultCity,
          data.defaultTimezoneOffset
        );
        var today = new Date(y);
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();
        var currentDay = new Date(mm + "/" + dd + "/" + yyyy);
        var testDate = new Date(data.date);

        for (var itrvl = 0; itrvl < checkingTime.length; itrvl++) {
          clearInterval(checkingTime[itrvl]);
        }

        if (testDate.getTime() === currentDay.getTime()) {
          checkRangeInSession(data);
        }

        return testDate.getTime() === currentDay.getTime();
      };

      var checkRangeInSession = function checkRangeInSession(data) {
        var dt = calculateBetweenLocalAndDefaultTz(
          data.defaultCity,
          data.defaultTimezoneOffset
        );
        var startTime = data.from;
        var endTime = data.to;
        var s = startTime.split(":");
        var dt1 = new Date(
          dt.getFullYear(),
          dt.getMonth(),
          dt.getDate(),
          parseInt(s[0]),
          parseInt(s[1]),
          parseInt(s[2])
        );
        var e = endTime.split(":");
        var dt2 = new Date(
          dt.getFullYear(),
          dt.getMonth(),
          dt.getDate(),
          parseInt(e[0]),
          parseInt(e[1]),
          parseInt(e[2])
        );

        if (dt >= dt1 && dt <= dt2) {
          var from = new Date(data.date + " " + data.from);
          var to = new Date(dt);
          var secondsDiff = checkSecondsDiff(from, to);
          var markerPos = (secondsDiff / 60 / 5) * 60;
          marker.style.display = "flex";
          marker.style.left = "unset";
          marker.style.left = markerPos + "px";
          startCheckingTime(data);
        }
      };

      var calculateBetweenLocalAndDefaultTz = function calculateBetweenLocalAndDefaultTz(
        city,
        offset
      ) {
        var d = new Date();
        var utc = d.getTime() + d.getTimezoneOffset() * 60000;
        var nd = new Date(utc + 3600000 * offset);
        return nd;
      };

      var checkActive = function checkActive(tabs) {
        var withActive = false;
        tabs.forEach(function (tab) {
          if (tab.classList.contains("active")) {
            withActive = true;
          }
        });
        return withActive;
      };

      var checkSecondsDiff = function checkSecondsDiff(a, b) {
        if (a.getTime() < b.getTime()) {
          var diff = (a.getTime() - b.getTime()) / 1000;
          diff /= 60 * 60;
          return Math.abs(diff * 60 * 60);
        }
      }; // Filling contents

      var checkTabActive = function checkTabActive() {
        var tabs = document.querySelectorAll(".tab");
        tabs.forEach(function (tab) {
          if (tab.classList.contains("active")) {
            fillTimeTable(eventData[tab.dataset.id]);
            fillLabels(eventData[tab.dataset.id]);
            fillCalendarBlocks(eventData[tab.dataset.id]);
            fillBreakOutBlocks(eventData[tab.dataset.id]);
            isDateEqual(eventData[tab.dataset.id]);
          }
        });
      };

      var fillTimeTable = function fillTimeTable(data) {
        var hourDenomination = document.querySelector(".hour-denomination");
        hourDenomination.innerHTML = "";
        var from = new Date(data.date + " " + data.from);
        var to = new Date(data.date + " " + data.to);
        var secondsDiff = checkSecondsDiff(from, to); // base

        var minuteBase = data.from.split(":");
        var counter = parseInt(minuteBase[1]);
        var base = parseFloat(data.from);

        for (var t = 0; t <= secondsDiff / 60 / 5; t++) {
          if (counter > 55) {
            base++;
            counter = 0;
          }

          var timeMarks = document.createElement("div");
          timeMarks.classList.add("time");
          timeMarks.innerHTML = base + ":" + ("0" + counter).slice(-2);
          hourDenomination.appendChild(timeMarks);
          counter += 5;
        }
      };

      var fillCalendarBlocks = function fillCalendarBlocks(data) {
        var calendarBlocks = document.querySelector(".calendar-blocks");
        calendarBlocks.innerHTML = "";
        var from = new Date(data.date + " " + data.from);
        var to = new Date(data.date + " " + data.to);
        var secondsDiff = checkSecondsDiff(from, to); // seconds (width of the container)

        var counter = 0;
        var base = parseInt(data.from);

        for (var t = 0; t <= secondsDiff / 60 / 5; t++) {
          if (counter > 55) {
            base++;
            counter = 0;
          }

          var block = document.createElement("div");
          block.classList.add("block");
          calendarBlocks.appendChild(block);
          counter += 5;
        }

        for (var ses = 0; ses < data.agenda.items.length; ses++) {
          var thisAgenda = document.createElement("a");
          var thisAgendaImages = document.createElement("div");
          var thisAgendaTitle = document.createElement("p");
          var thisAgendaTitleTrans = document.createElement("span");
          var thisAgendaTooltip = document.createElement("p");
          var thisAgendaTooltipTrans = document.createElement("span");
          var startFrom = new Date(
            data.date + " " + data.agenda.items[ses].from
          );
          var endTo = new Date(data.date + " " + data.agenda.items[ses].to);
          var thisAgendaWidth =
            (checkSecondsDiff(startFrom, endTo) / 60 / 5) * 60 - 2;
          var left1Pos =
            (checkSecondsDiff(
              new Date(data.date + " " + data.from),
              startFrom
            ) /
              60 /
              5) *
              60 +
            31;

          if (data.agenda.items[ses].people.length) {
            for (
              var peps = 0;
              peps < data.agenda.items[ses].people.length;
              peps++
            ) {
              if (data.agenda.items[ses].people[peps].image) {
                var pepsImg = document.createElement("img");
                pepsImg.src = data.agenda.items[ses].people[peps].image;
                pepsImg.alt = data.agenda.items[ses].people[peps].name;
                thisAgendaImages.appendChild(pepsImg);
              }

              continue;
            }
          }

          thisAgendaTitle.textContent = data.agenda.items[ses].title;
          thisAgendaTitle.style.color = data.agenda.items[ses].textColor;
          thisAgendaTitleTrans.style.fontStyle = "italic";
          thisAgendaTitleTrans.textContent = data.agenda.items[ses].translation;
          thisAgendaTitleTrans.style.color = data.agenda.items[ses].textColor;
          thisAgendaTooltip.className = "tooltip";
          thisAgendaTooltip.textContent = data.agenda.items[ses].tooltip
            ? data.agenda.items[ses].tooltip
            : data.agenda.items[ses].title;
          thisAgendaTooltipTrans.textContent = data.agenda.items[ses].tooltip
            ? ""
            : data.agenda.items[ses].translation;
          thisAgendaTooltipTrans.style.fontStyle = "italic";
          thisAgendaTooltip.appendChild(thisAgendaTooltipTrans);
          thisAgenda.classList.add("agenda");
          thisAgenda.classList.add("agenda-" + ses);
          thisAgendaImages.classList.add("images");
          thisAgenda.appendChild(thisAgendaTooltip);
          thisAgenda.appendChild(thisAgendaImages);
          thisAgendaTitle.appendChild(thisAgendaTitleTrans);
          thisAgenda.appendChild(thisAgendaTitle);
          thisAgenda.style.width = thisAgendaWidth + "px";
          thisAgenda.style.backgroundColor = data.agenda.items[ses].bgColor;
          thisAgenda.style.left = left1Pos + "px";
          thisAgenda.href = data.agenda.items[ses].url;
          calendarBlocks.append(thisAgenda);
        }
      };

      var fillBreakOutBlocks = function fillBreakOutBlocks(data) {
        var calendarBreakouts = document.querySelector(".calendar-breakouts");
        calendarBreakouts.innerHTML = "";

        if (data.breakouts) {
          var from = new Date(data.date + " " + data.from);
          var to = new Date(data.date + " " + data.to);
          var secondsDiff = checkSecondsDiff(from, to); // seconds (width of the container)

          for (var b = 0; b < data.breakouts.items.length; b++) {
            var thisBreakoutParent = document.createElement("div");
            var thisBreakout = document.createElement("a");
            var thisBreakoutTitle = document.createElement("p");
            var thisBreakoutDesc = document.createElement("span");
            var thisBreakoutImages = document.createElement("div");
            var counter = 0;
            var base = parseInt(data.from);
            var startFrom = new Date(
              data.date + " " + data.breakouts.items[b].from
            );
            var endTo = new Date(data.date + " " + data.breakouts.items[b].to);
            var thisBreakoutWidth =
              (checkSecondsDiff(startFrom, endTo) / 60 / 5) * 60 - 2;
            var left1Pos =
              (checkSecondsDiff(
                new Date(data.date + " " + data.from),
                startFrom
              ) /
                60 /
                5) *
                60 +
              31;

            for (var t = 0; t <= secondsDiff / 60 / 5; t++) {
              if (counter > 55) {
                base++;
                counter = 0;
              }

              var block = document.createElement("div");
              block.classList.add("block");
              thisBreakoutParent.appendChild(block);
              counter += 5;
            }

            for (
              var bpeps = 0;
              bpeps < data.breakouts.items[b].people.length;
              bpeps++
            ) {
              if (data.breakouts.items[b].people[bpeps].imageURL) {
                var bpepsImg = document.createElement("img");
                bpepsImg.src = data.breakouts.items[b].people[bpeps].imageURL;
                bpepsImg.alt = data.breakouts.items[b].people[bpeps].name;
                thisBreakoutImages.appendChild(bpepsImg);
              }
            }

            thisBreakoutImages.className = "images";
            thisBreakoutDesc.textContent = data.breakouts.items[b].translation;
            thisBreakoutTitle.textContent = data.breakouts.items[b].title;
            thisBreakoutTitle.appendChild(thisBreakoutDesc);
            thisBreakout.className = "breakout breakout-" + b;
            thisBreakout.style.width = thisBreakoutWidth + "px";
            thisBreakout.style.left = left1Pos + "px";
            thisBreakout.style.backgroundColor =
              data.breakouts.items[b].bgColor;
            thisBreakout.href = data.breakouts.items[b].url;
            thisBreakout.style.color = data.breakouts.items[b].textColor;
            thisBreakout.appendChild(thisBreakoutImages);
            thisBreakout.appendChild(thisBreakoutTitle);
            thisBreakoutParent.className =
              "parent-breakouts parent-breakouts-" + b;
            thisBreakoutParent.appendChild(thisBreakout);
            calendarBreakouts.appendChild(thisBreakoutParent);
          }
        }
      };

      var fillLabels = function fillLabels(data) {
        var agendaLabel = document.querySelector(".agenda-calendar-label");
        var breakoutLabel = document.querySelector(".agenda-breakout-label");
        var agendaDesc = document.createElement("p");
        var breakoutDesc = document.createElement("p");
        agendaLabel.innerHTML = "";
        breakoutLabel.innerHTML = "";
        agendaDesc.textContent = "No data";
        breakoutDesc.textContent = "No data";

        if (data.agenda) {
          agendaLabel.textContent = data.agenda.name;
          agendaDesc.textContent = data.agenda.description;
          agendaDesc.classList.add("desc");
          agendaLabel.style.height = "60px";
          agendaLabel.style.backgroundColor = data.agenda.backgroundColor;
        }

        if (data.breakouts) {
          breakoutLabel.textContent = data.breakouts.name;
          breakoutDesc.textContent = data.breakouts.description;
          breakoutDesc.classList.add("desc");
          breakoutLabel.style.height = data.breakouts.items.length * 60 + "px";
          breakoutLabel.style.backgroundColor = data.breakouts.backgroundColor;
        }

        agendaLabel.appendChild(agendaDesc);
        breakoutLabel.appendChild(breakoutDesc);
      }; // Tab Switching

      var switchTab = function switchTab() {
        var tabs = document.querySelectorAll(".tab");
        marker.style.display = "none";
        tabs.forEach(function (tab) {
          if (tab.classList.contains("active")) {
            tab.classList.remove("active");
          }
        });
        this.classList.add("active");
        checkTabActive();
      }; // determine active sessions

      var activeSessions = function activeSessions(data) {
        var convertedt = calculateBetweenLocalAndDefaultTz(
          data.defaultCity,
          data.defaultTimezoneOffset
        );

        for (var actSes = 0; actSes < data.agenda.items.length; actSes++) {
          var startTime = data.agenda.items[actSes].from;
          var endTime = data.agenda.items[actSes].to;
          var currentSess = document.querySelector(".agenda-" + actSes);
          currentSess.style.backgroundColor = data.agenda.items[actSes].bgColor;
          var s = startTime.split(":");
          var dt1 = new Date(
            convertedt.getFullYear(),
            convertedt.getMonth(),
            convertedt.getDate(),
            parseInt(s[0]),
            parseInt(s[1]),
            parseInt(s[2])
          );
          var e = endTime.split(":");
          var dt2 = new Date(
            convertedt.getFullYear(),
            convertedt.getMonth(),
            convertedt.getDate(),
            parseInt(e[0]),
            parseInt(e[1]),
            parseInt(e[2])
          );

          if (convertedt >= dt1 && convertedt <= dt2) {
            currentSess.style.backgroundColor =
              data.agenda.items[actSes].highlightBg;
          }
        }
      }; // Time marker

      var startCheckingTime = function startCheckingTime(data) {
        var from = new Date(data.date + " " + data.from);
        var to = new Date(data.date + " " + data.to);
        var secondsDiff = checkSecondsDiff(from, to); // base

        var ceiling = (secondsDiff / 60 / 5) * 60;
        var secondMove = 0.2;
        var runMarkerRun = setInterval(function () {
          var oldValue = window
            .getComputedStyle(marker, null)
            .getPropertyValue("left");
          var convertedOldValue = parseFloat(oldValue.replace("px", ""));
          var newValue = convertedOldValue + secondMove;

          if (newValue > ceiling) {
            marker.style.display = "none";

            for (var itrvl = 0; itrvl < checkingTime.length; itrvl++) {
              clearInterval(checkingTime[itrvl]);
            }
          }

          marker.style.left = newValue + "px";
          activeSessions(data);
        }, 1000);
        checkingTime.push(runMarkerRun);
      }; // Days

      var addDayTab = function addDayTab() {
        var agendaDays = document.querySelector(".agenda-days");
        eventData.map(function (day, index) {
          var tab = document.createElement("li");
          tab.className = index + " tab";
          tab.dataset.id = index;

          if (isDateEqual(day)) {
            tab.classList.add("active");
          }

          var p = document.createElement("p");
          p.textContent =
            day.name +
            " - " +
            new Date(day.date).toLocaleString("default", {
              month: "short",
            }) +
            " " +
            new Date(day.date).getDate();
          tab.appendChild(p);
          tab.addEventListener("click", switchTab);
          agendaDays.append(tab);
        });
        var tabs = document.querySelectorAll(".tab");

        if (!checkActive(tabs)) {
          tabs[0].classList.add("active");
        }

        checkTabActive();
        dragScroll();
      };

      var eventData = [
        {
          name: "Day 1",
          date: "09/07/2020",
          // the date
          from: "09:30:00",
          // start time (may expand as a scope)
          to: "13:00:00",
          // end time (may expand as a scope)
          defaultCity: "Singapore",
          // Default timezone
          defaultTimezoneOffset: "+8",
          // in GMT
          agenda: {
            name: "Main Track",
            description: "Some description here...",
            backgroundColor: "#104836",
            items: [
              {
                from: "10:00:00",
                // start time (exact)
                to: "10:10:00",
                // end time (exact)
                title: "Championing the female economy",
                translation: "Potenciando la economía femenina",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "2",
              },
              {
                from: "10:10:00",
                // start time (exact)
                to: "10:20:00",
                // end time (exact)
                title: "Keynote",
                translation: "Discurso de apertura",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Keynote",
                numOfSpeakers: "1",
              },
              {
                from: "10:20:00",
                // start time (exact)
                to: "10:30:00",
                // end time (exact)
                title: "Data driving the female economy",
                translation: "Datos que impulsan la economía femenina",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Presentation",
                numOfSpeakers: "1",
              },
              {
                from: "10:30:00",
                // start time (exact)
                to: "11:15:00",
                // end time (exact)
                title: "The opportunity of championing the female economy",
                translation: "La oportunidad de potenciar la economía femenina",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Panel Discussion",
                numOfSpeakers: "5",
              },
              {
                from: "11:15:00",
                // start time (exact)
                to: "11:25:00",
                // end time (exact)
                title: "Break",
                translation: "",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#999",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "",
                numOfSpeakers: "",
              },
              {
                from: "11:25:00",
                // start time (exact)
                to: "11:35:00",
                // end time (exact)
                title:
                  "Accelerating women's economic power through non-financial services",
                translation:
                  "Acelerando el poder económico de las mujeres a través de los servicios no financieros",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Fireside Chat",
                numOfSpeakers: "2",
              },
              {
                from: "12:05:00",
                // start time (exact)
                to: "12:15:00",
                // end time (exact)
                title: "Regroup and consolidation",
                translation: "Reagrupamiento y consolidación",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "12:15:00",
                // start time (exact)
                to: "12:35:00",
                // end time (exact)
                title: "Wealth tech: A new way to make money",
                translation:
                  "Tecnología en la gestión de patrimonios: una nueva forma de ganar dinero",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "",
                numOfSpeakers: "",
              },
              {
                from: "12:35:00",
                // start time (exact)
                to: "12:55:00",
                // end time (exact)
                title: "Day 1 highlights and learnings",
                translation: "Puntos destacados y aprendizajes del día 1",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
            ],
          },
          breakouts: {
            name: "Breakouts",
            description: "Some description here...",
            backgroundColor: "#3cb4ff",
            items: [
              {
                title: "-",
                translation:
                  "Sesión de Trabajo 1: El caso de negocios y la importancia de medir los servicios no financieros  (español)",
                from: "11:35:00",
                // start time (exact)
                to: "12:05:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "3",
              },
              {
                title:
                  "Breakout 2: NFS business case & how to measure it (English)",
                translation:
                  "Sesión de Trabajo 2: El caso de negocios y la importancia de medir los servicios no financieros  (inglés)",
                from: "11:35:00",
                // start time (exact)
                to: "12:05:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "3",
              },
              {
                title: "Breakout 3: Tapping into SME ecoystem",
                translation:
                  "Sesión de trabajo 3: Aprovechando el ecosistema de las PYMEs",
                from: "11:35:00",
                // start time (exact)
                to: "12:05:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "3",
              },
              {
                title: "Breakout 4: Upskilling through eCommerce platforms",
                translation:
                  "Sesión de trabajo 4: Mejorando las habilidades a través de las plataformas de comercio electrónico",
                from: "11:35:00",
                // start time (exact)
                to: "12:05:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "4",
              },
            ],
          },
        },
        {
          name: "Day 2",
          date: "09/08/2020",
          // the date
          from: "06:30:00",
          // start time (may expand as a scope)
          to: "12:30:00",
          // end time (may expand as a scope)
          defaultCity: "Singapore",
          // Default timezone
          defaultTimezoneOffset: "+8",
          // in GMT
          agenda: {
            name: "Main Track",
            description: "Some description here...",
            backgroundColor: "#104836",
            items: [
              {
                from: "07:00:00",
                // start time (exact)
                to: "07:05:00",
                // end time (exact)
                title:
                  "The transformational opportunity of fintech on the female economy",
                translation:
                  "La oportunidad de la transformación de las fintech en la economía femenina",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "07:05:00",
                // start time (exact)
                to: "07:25:00",
                // end time (exact)
                title:
                  "Blue sky vision - the impact of fintech on women's markets",
                translation:
                  "Visión General: el impacto de las fintech en el segmento mujer",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Fireside Chat",
                numOfSpeakers: "2",
              },
              {
                from: "07:25:00",
                // start time (exact)
                to: "07:45:00",
                // end time (exact)
                title: "Alliance fintech research",
                translation: "Investigación fintech de la Alianza",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Fireside Chat",
                numOfSpeakers: "2",
              },
              {
                from: "07:45:00",
                // start time (exact)
                to: "08:30:00",
                // end time (exact)
                title:
                  "How fintechs are and can support the full financial inclusion of women",
                translation:
                  "Cómo las fintech están y pueden apoyar a la plena inclusión financiera de las mujeres",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Panel Discussion",
                numOfSpeakers: "5",
              },
              {
                from: "08:30:00",
                // start time (exact)
                to: "08:35:00",
                // end time (exact)
                title: "Break",
                translation: "",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#999",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "",
                numOfSpeakers: "",
              },
              {
                from: "08:35:00",
                // start time (exact)
                to: "08:40:00",
                // end time (exact)
                title: "Reimagining fintech as gender intelligent",
                translation:
                  "Reimaginando a las fintechs con inteligencia de género",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "09:15:00",
                // start time (exact)
                to: "09:25:00",
                // end time (exact)
                title: "Regroup and consolidation",
                translation: "Reagrupamiento y consolidación",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "09:25:00",
                // start time (exact)
                to: "09:55:00",
                // end time (exact)
                title: "e-Hackathon pitches & final vote",
                translation:
                  "Presentaciones finales del e-Hackathon y votación fina",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Presentation",
                numOfSpeakers: "2",
              },
              {
                from: "09:55:00",
                // start time (exact)
                to: "10:05:00",
                // end time (exact)
                title: "Day 2 highlights and learnings",
                translation: "Puntos destacados y aprendizajes del día 2",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "12:00:00",
                // start time (exact)
                to: "12:05:00",
                // end time (exact)
                title: "Day 2 highlights and learnings",
                translation: "Puntos destacados y aprendizajes del día 2",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "12:05:00",
                // start time (exact)
                to: "12:10:00",
                // end time (exact)
                title: "Day 2 highlights and learnings",
                translation: "Puntos destacados y aprendizajes del día 2",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "12:10:00",
                // start time (exact)
                to: "12:15:00",
                // end time (exact)
                title: "Day 2 highlights and learnings",
                translation: "Puntos destacados y aprendizajes del día 2",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "12:15:00",
                // start time (exact)
                to: "12:18:00",
                // end time (exact)
                title: "Day 2 highlights and learnings",
                translation: "Puntos destacados y aprendizajes del día 2",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
            ],
          },
          breakouts: {
            name: "Breakouts",
            description: "Some description here...",
            backgroundColor: "#3cb4ff",
            items: [
              {
                title: "Breakout 1: Data bias & course corrections",
                translation:
                  "Sesión de trabajo 1: sesgo de datos y cambios de procesos",
                from: "08:40:00",
                // start time (exact)
                to: "09:15:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "3",
              },
              {
                title:
                  "Breakout 2: Incentives & ecosystem support - defining stakeholder roles",
                translation:
                  "Sesión de trabajo 2: Incentivos y apoyo al ecosistema: definiendo los roles de los grupos de interés",
                from: "08:40:00",
                // start time (exact)
                to: "09:15:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "4",
              },
              {
                title:
                  "Breakout 3: Business case For gender intelligent fintech (Spanish)",
                translation:
                  "Sesión de trabajo 3: El caso de negocio para las fintech con inteligencia de género",
                from: "08:40:00",
                // start time (exact)
                to: "09:15:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "4",
              },
              {
                title: "Breakout 4: Investing in women-focused fintechs",
                translation:
                  "Sesión de trabajo 4: Invirtiendo en las fintechs centradas en las mujeres",
                from: "08:40:00",
                // start time (exact)
                to: "09:15:00",
                // end time (exact)
                bgColor: "#3cb4ff",
                tooltip: "",
                textColor: "#fff",
                highlightBg: "#42d886",
                url: "#",
                people: [
                  {
                    name: "",
                    imageURL: "",
                  },
                ],
                sessionType: "Breakout Session",
                numOfSpeakers: "3",
              },
            ],
          },
        },
        {
          name: "Day 3",
          date: "09/09/2020",
          // the date
          from: "08:30:00",
          // start time (may expand as a scope)
          to: "13:30:00",
          // end time (may expand as a scope)
          defaultCity: "Singapore",
          // Default timezone
          defaultTimezoneOffset: "+8",
          // in GMT
          agenda: {
            name: "Main Track",
            description: "Some description here...",
            backgroundColor: "#104836",
            items: [
              {
                from: "09:00:00",
                // start time (exact)
                to: "09:05:00",
                // end time (exact)
                title: "The future of work",
                translation: "El futuro del trabajo",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "09:05:00",
                // start time (exact)
                to: "09:25:00",
                // end time (exact)
                title:
                  "Building the workforce of tomorrow - diversity & inclusion post pandemic",
                translation:
                  "Construyendo la fuerza laboral de mañana: diversidad e inclusión después de la pandemia",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Fireside Chat",
                numOfSpeakers: "2",
              },
              {
                from: "09:25:00",
                // start time (exact)
                to: "10:10:00",
                // end time (exact)
                title:
                  "Building the workforce of tomorrow - diversity & inclusion post pandemic",
                translation: "",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Fireside Chat",
                numOfSpeakers: "2",
              },
              {
                from: "10:10:00",
                // start time (exact)
                to: "10:15:00",
                // end time (exact)
                title: "Break",
                translation: "",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Panel Discussion",
                numOfSpeakers: "5",
              },
              {
                from: "10:15:00",
                // start time (exact)
                to: "10:50:00",
                // end time (exact)
                title: "Interactive session or gamification",
                translation: "Sesión interactiva o gamificación",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#999",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "",
                numOfSpeakers: "",
              },
              {
                from: "10:50:00",
                // start time (exact)
                to: "11:35:00",
                // end time (exact)
                title:
                  "Doing Business 2020 & beyond: serving customers in the new normal",
                translation:
                  "Haciendo negocios 2020 y más allá: sirviendo a los clientes en la nueva normalidad",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "11:35:00",
                // start time (exact)
                to: "11:55:00",
                // end time (exact)
                title: "Women SME platform",
                translation: "Plataforma PYMEs propiedad de mujeres",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Remarks",
                numOfSpeakers: "1",
              },
              {
                from: "11:55:00",
                // start time (exact)
                to: "12:05:00",
                // end time (exact)
                title: "Closing remarks",
                translation: "Palabras de clausura",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Presentation",
                numOfSpeakers: "2",
              },
              {
                from: "12:50:00",
                // start time (exact)
                to: "12:55:00",
                // end time (exact)
                title: "Closing remarks",
                translation: "Palabras de clausura",
                url: "#",
                people: [
                  {
                    name: "",
                    image: "",
                  },
                ],
                tooltip: "",
                bgColor: "#104836",
                // background color customizable
                textColor: "#fff",
                // text color customizable
                highlightBg: "#42d886",
                sessionType: "Presentation",
                numOfSpeakers: "2",
              },
            ],
          },
        },
      ];
      var marker = document.querySelector(".marker");
      var txtTimeZone = document.querySelector(".agenda-timezone");
      marker.style.display = "none";
      txtTimeZone.textContent =
        "All time displayed in: " +
        eventData[0].defaultCity +
        " GMT " +
        eventData[0].defaultTimezoneOffset;
      theAgendaUI.style.display = "block";
      agendaTarget.appendChild(theAgendaUI);
      addDayTab();
      clearInterval(checkAgendaTarget);
      console.log("stopping checAgendaTarget");
    }
  });
})();
