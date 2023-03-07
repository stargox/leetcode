

// write function like
// function getEarliestMeetTime(events = [], k = 5) {
//     // Write your code here
// }
// where events can be like ['Alex, sleep 00:00 08:00', ['Sam, eat 01:20 09:00']
// and ka is duration

// this function should earliest time available for all people


function getEarliestMeetTime1(events = [], k = 5) {
    const eventDescriptors = getEventDescriptors(events);

    eventDescriptors.sort((event1, event2) => event1.start - event2.start);

    if (eventDescriptors[0].start > k) {
        return minutesToTime(0);
    }

    let earliestMinute = eventDescriptors[0].end + 1;
    for(let eventDescriptor of eventDescriptors) {
        if (earliestMinute + 1 + k > eventDescriptor.start) {
            earliestMinute = eventDescriptor.end + 1;
        } else {
            earliestMinute = eventDescriptor.start + k + 1;
        }
    }

    const minutesInDay = 1440;
    if (earliestMinute + k > minutesInDay) {
        return '-1';
    }

    const earliestTime = minutesToTime(earliestMinute);

    return earliestTime;
}

function getEarliestMeetTime(events = [], k = 5) {
    const eventDescriptors = getEventDescriptors(events);

    eventDescriptors.sort((event1, event2) => event1.start - event2.start);

    if (eventDescriptors[0].start > k + 1) {
        return minutesToTime(0);
    }

    let earliestMinute = eventDescriptors[0].end + 1;
    for (let i = 1; i < eventDescriptors.length; i++) {
        const eventDescriptor = eventDescriptors[i];

        if (earliestMinute + 1 + k > eventDescriptor.start) {
            earliestMinute = Math.max(eventDescriptor.end + 1, earliestMinute);
        }
    }

    const minutesInDay = 1440;
    if (earliestMinute + k > minutesInDay) {
        return '-1';
    }

    const earliestTime = minutesToTime(earliestMinute);

    return earliestTime;
}

function getEventDescriptors(events = []) {
    return events.map(event => {
        const [personName, action, start, end] = event.split(' ');
        return {
            personName,
            action,
            start: timeToMinutes(start),
            end: timeToMinutes(end),
        };
      });
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
   }
   
function minutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = (minutes % 60).toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes}`;
}

getEarliestMeetTime(['Alex sleep 00:00 08:00', 'Sam sleep 07:00 13:00', 'Alex lunch 12:30 13:59', 'Alex lunch2 15:00 17:00'], 60)