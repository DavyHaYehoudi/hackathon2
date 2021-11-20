
const robots = [
    {
      _id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      price: '10',
      imageUrl: 'image1.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      price: '20',
      imageUrl: 'image2.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      price: '30',
      imageUrl: 'image3.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      price: '40',
      imageUrl: 'image4.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      price: '50',
      imageUrl: 'image5.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      price: '60',
      imageUrl: 'image6.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      price: '70',
      imageUrl: 'image7.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      price: '80',
      imageUrl: 'image8.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      price: '90',
      imageUrl:'image9.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      _id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      price: '100',
      imageUrl:'image10.png',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
    ];

  
  exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(robots))));
  }
  
  exports.findById = (id) => {
    return new Promise((resolve, reject) =>
      resolve(JSON.parse(JSON.stringify(robots)).find(robot =>
        robot._id == id)
      )
    );
  }