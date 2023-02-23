import badsa from "../public/profile/badsa.jpg"
import khusboo from "../public/profile/khusboo.jpg"
import manoj from "../public/profile/manoj.jpg"
import raja from "../public/profile/raja.jpg"
import robi from "../public/profile/robi.jpg"
import victor from "../public/profile/victor.jpg"


export const contactList = [
  {
    id: 1,
    name: "Badshaa",
    profilePic: badsa,
    lastText: "Lets go to Party",
    lastTextTime: "8:00 PM",
  },
  {
    id: 2,
    name: "Raja Rahman",
    profilePic: khusboo,
    lastText: "Hey Bro !",
    lastTextTime: "11:50 PM",
  },
  {
    id: 3,
    name: "Khusboo Rahman",
    profilePic: manoj,
    lastText: `Good Morning ..`,
    lastTextTime: "10:45 AM",
  },
  {
    id: 4,
    name: "Victor Barman",
    profilePic: raja,
    lastText: "Hi ...",
    lastTextTime: "12:30 PM",
  },
  {
    id: 5,
    name: "Manoj Barman",
    profilePic: robi,
    lastText: "Lets go to Party",
    lastTextTime: "8:00 PM",
  },
  {
    id: 6,
    name: "Robi Haque",
    profilePic: victor,
    lastText: "Lets go to Party",
    lastTextTime: "8:00 PM",
  },
];

export const messagesList = [
  {
    id: 1,
    msgList: [
      {
        messageType: "TEXT",
        text: "Hi ....!,  How r u ?",
        senderID: 1,
        addedOn: "12:00 PM",
      },
      {
        // id: 8,
        messageType: "TEXT",
        text: "All Good, What about you?",
        senderID: 0,
        addedOn: "12:00 PM",
      },
      {
        // id: 8,
        messageType: "TEXT",
        text: "I am fine",
        senderID: 1,
        addedOn: "12:00 PM",
      },
      {
        // id: 8,
        messageType: "TEXT",
        text: "Whare r u ?",
        senderID: 0,
        addedOn: "12:00 PM",
      },
      {
        // id: 8,
        messageType: "TEXT",
        text: "Bangalore",
        senderID: 1,
        addedOn: "12:00 PM",
      },
    ],
  },
  {
    id: 2,
    msgList: [
      {
        messageType: "TEXT",
        text: "Hi....",
        senderID: 0,
        addedOn: "12:00 PM",
      },
      {
        messageType: "TEXT",
        text: "Hello..",
        senderID: 1,
        addedOn: "12:00 PM",
      },
      {
        messageType: "TEXT",
        text: "How r u ?",
        senderID: 0,
        addedOn: "12:00 PM",
      },
      {
        messageType: "TEXT",
        text: "Fine... What about you?",
        senderID: 1,
        addedOn: "12:00 PM",
      },
    ],
  },
];
