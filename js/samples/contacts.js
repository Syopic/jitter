var app = angular.module("elephant");

app.service("ContactService", ["$q", "$timeout",
  function ContactService($q, $timeout) {
    this.getContacts = function getContacts() {
      var defer = $q.defer();

      $timeout(function() {
        defer.resolve(
          [{
              "id": 4124364595,
              "photo": "img/3002121059.jpg",
              "firstName": "Abbey",
              "lastName": "Robinson",
              "email": "abbey.robinson@elephant.theme",
              "mobile": "+1 799-428-6432",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 8303343896,
              "photo": "img/2995015682.jpg",
              "firstName": "Adelaide",
              "lastName": "Kane",
              "email": "adelaide.kane@elephant.theme",
              "mobile": "+1 400-180-3207",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 4705844099,
              "photo": "img/2832982242.jpg",
              "firstName": "Agatha",
              "lastName": "Ford",
              "email": "agatha.ford@elephant.theme",
              "mobile": "+1 116-840-7979",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 5071581138,
              "photo": "img/1554502810.jpg",
              "firstName": "Amelia",
              "lastName": "Taylor",
              "email": "amelia.taylor@elephant.theme",
              "mobile": "+1 938-369-5712",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 1937802445,
              "photo": "img/1463296788.jpg",
              "firstName": "Ava",
              "lastName": "Anderson",
              "email": "ava.anderson@elephant.theme",
              "mobile": "+1 319-281-3439",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 1968671127,
              "photo": "img/2790515408.jpg",
              "firstName": "Beatrix",
              "lastName": "Walker",
              "email": "beatrix.walker@elephant.theme",
              "mobile": "+1 388-522-9917",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 1945732780,
              "photo": "img/1376812548.jpg",
              "firstName": "Brad",
              "lastName": "Miller",
              "email": "brad.miller@elephant.theme",
              "mobile": "+1 825-752-3675",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 6376402119,
              "photo": "img/2621512521.jpg",
              "firstName": "Brenda",
              "lastName": "West",
              "email": "brenda.west@elephant.theme",
              "mobile": "+1 308-131-3748",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 2895730596,
              "photo": "img/0460697039.jpg",
              "firstName": "Charlotte",
              "lastName": "Harrison",
              "email": "charlotte.harrison@elephant.theme",
              "mobile": "+1 183-947-4858",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 7474901556,
              "photo": "img/2565559510.jpg",
              "firstName": "Christina",
              "lastName": "Simpson",
              "email": "christina.simpson@elephant.theme",
              "mobile": "+1 317-435-7163",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 1751546050,
              "photo": "img/2440513918.jpg",
              "firstName": "Clara",
              "lastName": "Khan",
              "email": "clara.khan@elephant.theme",
              "mobile": "+1 576-748-5845",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 3186388181,
              "photo": "img/0310728269.jpg",
              "firstName": "Daniel",
              "lastName": "Taylor",
              "email": "daniel.taylor@elephant.theme",
              "mobile": "+1 647-710-3430",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 9289253812,
              "photo": "img/2362153679.jpg",
              "firstName": "Darcie",
              "lastName": "Russell",
              "email": "darcie.russell@elephant.theme",
              "mobile": "+1 800-383-8874",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 4551637649,
              "photo": "img/2234124529.jpg",
              "firstName": "Dave",
              "lastName": "Hamilton",
              "email": "dave.hamilton@elephant.theme",
              "mobile": "+1 337-221-5923",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 5451684326,
              "photo": "img/0980726243.jpg",
              "firstName": "Eliot",
              "lastName": "Morgan",
              "email": "eliot.morgan@elephant.theme",
              "mobile": "+1 890-196-5609",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 6716786206,
              "photo": "img/1182824800.jpg",
              "firstName": "Ella",
              "lastName": "Davis",
              "email": "ella.davis@elephant.theme",
              "mobile": "+1 451-624-1860",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 4870143729,
              "photo": "img/0872116906.jpg",
              "firstName": "Emma",
              "lastName": "Lewis",
              "email": "emma.lewis@elephant.theme",
              "mobile": "+1 765-313-8423",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 5553048563,
              "photo": "img/0531871454.jpg",
              "firstName": "Ethan",
              "lastName": "Walker",
              "email": "ethan.walker@elephant.theme",
              "mobile": "+1 915-822-3702",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 7264117809,
              "photo": "img/0299419341.jpg",
              "firstName": "Harry",
              "lastName": "Jones",
              "email": "harry.jones@elephant.theme",
              "mobile": "+1 949-360-4639",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 1505413697,
              "photo": "img/0777931269.jpg",
              "firstName": "Harry",
              "lastName": "Walker",
              "email": "harry.walker@elephant.theme",
              "mobile": "+1 473-148-8997",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 5572363276,
              "photo": "img/2163317912.jpg",
              "firstName": "Jason",
              "lastName": "Saunders",
              "email": "jason.saunders@elephant.theme",
              "mobile": "+1 927-591-9984",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 5522167955,
              "photo": "img/1099386850.jpg",
              "firstName": "Jessica",
              "lastName": "Brown",
              "email": "jessica.brown@elephant.theme",
              "mobile": "+1 341-782-1481",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 8108695996,
              "photo": "img/2079247459.jpg",
              "firstName": "John",
              "lastName": "Miller",
              "email": "john.miller@elephant.theme",
              "mobile": "+1 563-124-5331",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 6935984656,
              "photo": "img/1968946964.jpg",
              "firstName": "Mark",
              "lastName": "Gibson",
              "email": "mark.gibson@elephant.theme",
              "mobile": "+1 249-340-2879",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 3373453880,
              "photo": "img/1272501223.jpg",
              "firstName": "Mia",
              "lastName": "Ming",
              "email": "mia.ming@elephant.theme",
              "mobile": "+1 971-365-2058",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 8390546875,
              "photo": "img/1823060748.jpg",
              "firstName": "Mitt",
              "lastName": "Owen",
              "email": "mitt.owen@elephant.theme",
              "mobile": "+1 861-808-3794",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 1232384930,
              "photo": "img/1703835345.jpg",
              "firstName": "Rebecca",
              "lastName": "Fox",
              "email": "rebecca.fox@elephant.theme",
              "mobile": "+1 234-906-7294",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 4478594808,
              "photo": "img/1699893867.jpg",
              "firstName": "Ruby",
              "lastName": "Dixon",
              "email": "ruby.dixon@elephant.theme",
              "mobile": "+1 249-177-8530",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            },
            {
              "id": 9290643066,
              "photo": "img/0601274412.jpg",
              "firstName": "Sophia",
              "lastName": "Evans",
              "email": "sophia.evans@elephant.theme",
              "mobile": "+1 176-537-2784",
              "jobTitle": "Executive assistant",
              "employer": "Elephant LLC"
            }
          ]
        );
      }, 500);

      return defer.promise;
    };
  }
]);

app.controller("ContactCtrl", ["$scope", "ContactService",
  function ContactCtrl($scope, ContactService) {
    $scope.contacts = [];
    $scope.groupedContacts = [];
    $scope.currentContact;

    $scope.sidebar = {};
    $scope.sidebar.isActive = true;

    ContactService.getContacts().then(function(contacts) {
      $scope.contacts = contacts;
      $scope.groupedContacts = _.groupBy($scope.contacts,
        function(contact) {
          return contact.firstName.charAt(0);
        });
    });

    $scope.show = function show(contact) {
      $scope.currentContact = contact;
      $scope.contacts.map(function(c) {
        c.isActive = (c.id === contact.id);
      });

      $scope.groupedContacts = _.groupBy(
        $scope.contacts,
        function(contact) {
          return contact.firstName.charAt(0);
        });

      $scope.setSidebarInactive().scrollTop();
    };

    $scope.setSidebarActive = function setSidebarActive() {
      $scope.sidebar.isActive = true;
      return this;
    };

    $scope.setSidebarInactive = function setSidebarInactive() {
      $scope.sidebar.isActive = false;
      return this;
    };

    $scope.scrollTop = function scrollTop() {
      window.scrollTo(0, 0);
      return this;
    };
  }
]);