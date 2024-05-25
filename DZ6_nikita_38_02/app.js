const currentDate = moment();

function renderWeekdays() {
    const weekdaysNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const calendarWeekdaysContainer = document.querySelector(".calendar-weekdays");

    const htmlElements = weekdaysNames.map(function (weekday) {
        const li = document.createElement("li");
        li.innerText = weekday;
        return li;
    });

    calendarWeekdaysContainer.innerHTML = "";
    calendarWeekdaysContainer.append(...htmlElements);
}

function renderCurrentDate() {
    const calendarCurrentDateContainer = document.querySelector(".calendar-current-date");
    calendarCurrentDateContainer.innerText = currentDate.format("MMMM YYYY");
}

function renderDays() {
    const calendarDaysContainer = document.querySelector(".calendar-dates");
    calendarDaysContainer.innerHTML = "";

    const firstDayInMonth = currentDate.set('date', 1);
    const skipDaysCount = (firstDayInMonth.weekday() -1);

    for (let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement("li");
        li.innerText = "";
        calendarDaysContainer.append(li);
    }

    const daysInMonth = currentDate.daysInMonth();
    const dateNow = moment();
    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.innerText = i.toString();

        const currentDay = currentDate.set('date', i);
        if (currentDay.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i) {
            li.className = "active";
        }

        const dayOfWeek = (skipDaysCount + i - 1) % 7;
        if (dayOfWeek === 5 || dayOfWeek === 6) {
            li.style.color = "red";
        }

        calendarDaysContainer.append(li);
    }
}

function setSeasonBackgroundColor() {
    const currentDateElement = document.querySelector("p");
    const bgc = document.querySelector("body")
    const month = currentDate.month();

    let backgroundColor;

    if (month >= 2 && month <= 4) {
        backgroundColor = "lightgreen";
    } else if (month >= 5 && month <= 7) {
        backgroundColor = "coral";
    } else if (month >= 8 && month <= 10) {
        backgroundColor = "#e2d300";
    } else {
        backgroundColor = "lightblue";
    }
    currentDateElement.style.color = backgroundColor;
    bgc.style.background = backgroundColor;
}

function renderCalendar() {
    renderWeekdays();
    renderCurrentDate();
    renderDays();
    setSeasonBackgroundColor();
}

renderCalendar();

const [prevBtn, nextBtn] = [...document.querySelectorAll(".calendar-navigation span")];

prevBtn.onclick = () => {
    currentDate.subtract(1, "month");
    renderCalendar();
}

nextBtn.onclick = () => {
    currentDate.add(1, "month");
    renderCalendar();
}