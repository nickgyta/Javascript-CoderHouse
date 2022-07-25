document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2022-07-01',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Clase funcional y Crossfit del profe Josh Martinez',
          start: '2022-07-01'
        },
        {
          title: 'Clase funcional y Crossfit del profe Josh Martinez',
          start: '2022-07-04',
          end: '2022-07-09'
        },
        {
          groupId: '999',
          title: 'Capac. HIIT por Pablo Pizurno',
          start: '2022-07-09T16:00:00'
        },
        {
          groupId: '999',
          title: '2° Capac. HIIT por Pablo Pizurno',
          start: '2022-07-16T16:00:00'
        },
        {
          title: 'Funcional c/ profe Josh Martinez',
          start: '2022-07-18',
          end: '2022-07-23'
        },
        {
            title: 'Meeting con Mel Rodriguez',
            start: '2022-07-02T10:30:00',
          },
        {
          title: 'Crossfit del profe Josh Martinez',
          start: '2022-07-11',
          end: '2022-07-16'
        },
        {
          title: 'Lunch',
          start: '2022-07-23T12:00:00'
        },
        {
          title: 'Meeting c/ Jime Delamer',
          start: '2022-07-30T14:30:00'
        },
        {
          title: 'Profe Josh Birthday Party',
          start: '2022-07-13T07:00:00'
        },
        {
          title: 'Clase funcional y Crossfit del profe Josh Martinez',
          start: '2022-07-25',
          end: '2022-07-30'
        }
      ]
    });

    calendar.render();
  });