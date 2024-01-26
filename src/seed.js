export const calendarWeekData = [
  {
    id: 1,
    shortName: "Mo",
    fullName: "Montag",
    events: [
      { title: "Spazieren", edit: false, color: "success", priority: 0 },
      { title: "Einkaufen", edit: false, color: "info", priority: -1 },
    ],
    active: false,
  },
  {
    id: 2,
    shortName: "Di",
    fullName: "Dienstag",
    events: [],
    active: false,
  },
  {
    id: 3,
    shortName: "Mi",
    fullName: "Mittwoch",
    events: [],
    active: false,
  },
  {
    id: 4,
    shortName: "Do",
    fullName: "Donnerstag",
    events: [
      {
        title: "Essgen gehen mit Freunden",
        edit: false,
        color: "warning",
        priority: 0,
      },
    ],
    active: true,
  },
  {
    id: 5,
    shortName: "Fr",
    fullName: "Freitag",
    events: [],
    active: false,
  },
  {
    id: 6,
    shortName: "Sa",
    fullName: "Samstag",
    events: [],
    active: false,
  },
  {
    id: 7,
    shortName: "So",
    fullName: "Sonntag",
    events: [
      { title: "Müll rausbringen", edit: false, color: "primary", priority: 1 },
    ],
    active: false,
  },
];
