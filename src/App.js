import "./App.css";

///////////////////////////////////////////////////////////////////////////////////////
// * this replicates data that will come from your DB
///////////////////////////////////////////////////////////////////////////////////////
const dummyData = [
  {
    // your database will have the unique id. Order num can be generated from
    // the map loop or entered in db as BIGSERIAL. Either can work
    date: "Sat 12/17/2022",
    event: "Mt Diablo All Comers Timing (Cancelled)",
    location: "Mt Diablo High School",
    time: "10:00",
    end: "2:00",
  },
  {
    date: "Sat 01/14/2023",
    event: "Heritage All Comers Timing (Cancelled)",
    location: "Heritage High School",
    time: "10:00",
    end: "3:00",
  },
  {
    date: "Sat 01/28/2023",
    event: "Winter Champtionships Starting",
    location: "Pittsburg High School",
    time: "10:00",
    end: "3:00",
  },
  {
    date: "Sat 02/04/2023",
    event: "Heritage All Comers Timing",
    location: "Heritage High School",
    time: "10:00",
    end: "3:00",
  },
  {
    date: "Sat 02/11/2023",
    event: "Vandan All Comers Timing",
    location: "Vanden High School",
    time: "9:00",
    end: "3:00",
  },
  {
    date: " Sat 02/18/2023",
    event: "Caccavo Relays Starting",
    location: "Mt Diablo High School",
    time: "9:00",
    end: "4:00",
  },
  {
    date: "Sat 02/25/2023",
    event: "De La Salle Super Seven",
    location: "TBA",
    time: "9:00",
    end: "4:00",
  },
];

export default function App() {
  return (
    <div className="App">
      {" "}
      <TableHeads />
      {dummyData.map((i, index) => {
        return (
          <>
            {" "}
            {/* this is how to dynamically use data in React. I first map through the data and then use the param of i to select each 
            piece of data that I am looping through, followed by the desired key */}
            <EntriesTable
            key={index}
              num={index + 1}
              date={i.date}
              event={i.event}
              location={i.location}
              time={i.time}
              end={i.end}
            />
          </>
        );
      })}
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////
// * This is a separate component made to organize the code and improve implementation
///////////////////////////////////////////////////////////////////////////////////////
// below are the props used to select the desired data
export const EntriesTable = ({ num, date, event, location, time, end }) => {
  return (
    <>
      <table className="table table__row--container">
        <tbody>
            <tr className="table__row">
              <td className="event-num">{num}</td>
              <td className="date">{date}</td>
              <td className="event"> {event}</td>
              <td className="location">{location}</td>
              <td className="time"> {time}</td>
              <td className="end"> {end} </td>
            </tr>
        </tbody>
      </table>
    </>
  );
};

///////////////////////////////////////////////////////////////////////////////////////
// * This is a separate component made to organize the code and improve implementation
///////////////////////////////////////////////////////////////////////////////////////
const TableHeads = () => {
  return (
    <table className=" table table__headers--container">
      <thead>
          <tr className="table__headers">
            <th className="event-num"></th>
            <th className="date">Date</th>
            <th className="event">Event</th>
            <th className="location">Location</th>
            <th className="time">Time</th>
            <th className="end"> End </th>
          </tr>
      </thead>
    </table>
  );
};
