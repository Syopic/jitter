var app = angular.module("elephant");

app.service("MailService", ["$q", "$timeout",
  function MailService($q, $timeout) {
    this.getMails = function getMails() {
      var defer = $q.defer();

      $timeout(function() {
        defer.resolve(
          [{
            "id": 8730242649,
            "name": "Harry Jones",
            "email": "harry.jones@elephant.theme",
            "photo": "img/0299419341.jpg",
            "timestamp": "1500596405",
            "subject": "Sed efficitur gravida odio et hendrerit curabitur fermentum ult",
            "message": "Integer ut viverra enim, ut accumsan odio. Nunc rhoncus erat in felis cursus ullamcorper. Maecenas venenatis diam nec ipsum cursus, a iaculis nisi consequat. Morbi nec sollicitudin neque. Cras ex metus, auctor ullamcorper quam et, gravida bibendum ex. Aenean ut luctus quam. Donec rutrum justo nec nunc semper auctor. Mauris sit amet augue sit amet ex accumsan viverra. Morbi malesuada ac ligula ut accumsan. Nunc eget placerat lacus. Nulla non lacus placerat elit pharetra finibus. Sed tristique porta elit, quis fermentum nisi dictum in. Duis quis aliquet justo. Vestibulum eu ornare metus. Nulla at sem id tellus luctus aliquam.",
            "files": [{
              "fileName": "160702 monthly report.",
              "fileExt": "doc"
            }, {
              "fileName": "160702 timesheet.",
              "fileExt": "xls"
            }]
          }, {
            "id": 3459854452,
            "name": "Daniel Taylor",
            "email": "daniel.taylor@elephant.theme",
            "photo": "img/0310728269.jpg",
            "timestamp": "1500660643",
            "subject": "Mauris eleifend vehicula risus, sed malesuada ante sollicitudin",
            "message": "Nulla ornare, enim ut ullamcorper laoreet, risus enim interdum est, nec convallis ipsum sapien dictum odio. Ut eu lorem mollis, malesuada lectus sit amet, molestie mi. Suspendisse in pellentesque sapien. Donec eget nibh a mi sodales mattis. Vestibulum vehicula imperdiet iaculis. Integer vitae dui ac nisl aliquet vestibulum. Phasellus eget pharetra risus. Sed tincidunt tellus non nibh eleifend, quis fringilla ligula dapibus. Maecenas non elementum sapien. Fusce vehicula semper nisi, a porta turpis viverra quis. Integer in est vitae ligula semper semper. Mauris feugiat vehicula turpis, maximus facilisis metus placerat at. Curabitur vitae efficitur nulla. Nullam ultrices accumsan quam quis placerat.",
            "files": [{
              "fileName": "160702 timesheet.",
              "fileExt": "xls"
            }, {
              "fileName": "160702 invoice.",
              "fileExt": "xls"
            }]
          }, {
            "id": 9514881541,
            "name": "Charlotte Harrison",
            "email": "charlotte.harrison@elephant.theme",
            "photo": "img/0460697039.jpg",
            "timestamp": "1500523092",
            "subject": "Maecenas efficitur ultrices erat, ut scelerisque enim auctor nec",
            "message": "Maecenas efficitur ultrices erat, ut scelerisque enim auctor nec. Vivamus urna velit, condimentum et laoreet eget, sollicitudin et enim. Cras nec bibendum odio. Aenean sit amet tempor velit, in sodales justo. Cras posuere, ex quis cursus aliquam, arcu eros dapibus erat, id egestas nisi tortor eu elit. Curabitur interdum, nunc vitae consequat maximus, nisi quam mattis elit, at rutrum mauris felis non mauris. Donec auctor vel odio sit amet pellentesque. Ut velit est, lobortis eu leo placerat, viverra consectetur ligula. Integer consequat rutrum velit, ut viverra urna ornare ac. In viverra, arcu non auctor dapibus, libero sem sagittis metus, at rutrum ipsum nisi a ex. Cras consequat turpis quis ipsum ullamcorper, quis viverra nisl bibendum. In hac habitasse platea dictumst. Aliquam non pretium diam. Nam ornare justo vel rutrum aliquet.",
            "files": [{
              "fileName": "160620 logo.",
              "fileExt": "pdf"
            }, {
              "fileName": "160620 brochure.",
              "fileExt": "pdf"
            }]
          }, {
            "id": 5877593870,
            "name": "Ethan Walker",
            "email": "ethan.walker@elephant.theme",
            "photo": "img/0531871454.jpg",
            "timestamp": "1500426210",
            "subject": "Etiam sit amet finibus dolor quisque luctus consectetur risus n",
            "message": "Nunc imperdiet, metus quis sagittis condimentum, purus quam volutpat sapien, eget pretium odio leo quis nisl. Proin eget scelerisque odio. Donec porta posuere finibus. Cras vitae cursus enim, a tincidunt nisi. Sed dignissim mi quis nunc volutpat elementum. Aenean purus nibh, pharetra in nibh eu, lacinia dapibus ligula. Quisque eu neque justo. Fusce in aliquet dui, eu euismod turpis. In ac leo odio. In placerat ligula eu nibh tempus pretium.",
            "files": []
          }, {
            "id": 1312410223,
            "name": "Sophia Evans",
            "email": "sophia.evans@elephant.theme",
            "photo": "img/0601274412.jpg",
            "timestamp": "1500370375",
            "subject": "Vivamus et quam efficitur, consequat turpis ac, luctus mauris s",
            "message": "Sed sed augue sed lacus mollis vehicula id in massa. Maecenas turpis dolor, condimentum eget lobortis dictum, sodales et enim. Phasellus turpis metus, dignissim non velit id, sodales semper tortor. Proin eu urna sagittis, sodales turpis et, dictum urna. Proin quis lorem scelerisque, ornare neque vel, dictum lectus. Duis tempor posuere lectus sollicitudin lobortis. Phasellus aliquam id dolor vel rhoncus.",
            "files": []
          }, {
            "id": 579859248,
            "name": "Harry Walker",
            "email": "harry.walker@elephant.theme",
            "photo": "img/0777931269.jpg",
            "timestamp": "1500289435",
            "subject": "Mauris velit enim, cursus non purus non, pellentesque hendrerit",
            "message": "Nam luctus ac lectus vel vulputate. Donec posuere laoreet odio id tempor. Curabitur eget dapibus diam, vel laoreet eros. Mauris blandit est augue, vitae viverra mi egestas in. Duis sed auctor magna. Aliquam fermentum feugiat dolor ac hendrerit. Curabitur rhoncus massa nisi, ut dapibus neque mollis aliquet. Quisque venenatis sem ipsum. Mauris eget felis eu metus euismod tempor. Duis in efficitur lorem. Nunc laoreet est faucibus ligula dignissim lacinia. Ut lorem sapien, tempor vitae ipsum non, malesuada rhoncus eros. Duis id metus vel nibh commodo feugiat non vitae tellus. Curabitur in finibus magna. Aliquam ex tellus, dictum a velit ac, placerat molestie erat. Nullam ligula eros, cursus ac blandit in, bibendum sit amet justo.",
            "files": []
          }, {
            "id": 6896254912,
            "name": "Emma Lewis",
            "email": "emma.lewis@elephant.theme",
            "photo": "img/0872116906.jpg",
            "timestamp": "1500072229",
            "subject": "Morbi viverra odio vel maximus dapibus sed lacinia, urna sed mo",
            "message": "Fusce sollicitudin turpis urna, porttitor egestas diam ullamcorper at. Duis at elit placerat, rhoncus quam sed, facilisis augue. Phasellus in sollicitudin est. Curabitur facilisis tempus turpis, vitae finibus urna blandit sed. Donec eget tincidunt enim, vel vestibulum purus. Vivamus sollicitudin, turpis vitae aliquam tempus, dolor erat ultrices ex, a condimentum felis quam a nisi. Phasellus vel congue nibh. Cras congue faucibus massa at imperdiet.",
            "files": [{
              "fileName": "Q1 First Quarterly Report.",
              "fileExt": "doc"
            }, {
              "fileName": "Q2 Second Quarterly Report.",
              "fileExt": "doc"
            }]
          }, {
            "id": 2773203320,
            "name": "Eliot Morgan",
            "email": "eliot.morgan@elephant.theme",
            "photo": "img/0980726243.jpg",
            "timestamp": "1500089105",
            "subject": "Aliquam in nulla elit praesent sit amet dictum eros duis at au",
            "message": "Aliquam in nulla elit. Praesent sit amet dictum eros. Duis at auctor ligula. Suspendisse pharetra enim eu diam congue, venenatis aliquet sem consequat. Sed id hendrerit enim, eget blandit risus. In hac habitasse platea dictumst. Integer elementum quam sit amet lectus sollicitudin, non blandit nisi rhoncus. Integer finibus condimentum ipsum, in maximus arcu facilisis ac.",
            "files": []
          }, {
            "id": 4632674314,
            "name": "Darcie Russell",
            "email": "darcie.russell@elephant.theme",
            "photo": "img/2362153679.jpg",
            "timestamp": "1499990746",
            "subject": "Cras eros elit, interdum ut venenatis quis, dictum viverra metus",
            "message": "Maecenas facilisis leo vitae velit sagittis sagittis. Suspendisse potenti. Mauris nec egestas augue. Phasellus eu placerat orci, at posuere nunc. Etiam sed tincidunt mi. Etiam libero augue, blandit eget faucibus non, aliquet non odio. Aenean semper urna vel mi euismod, in maximus dolor pretium. In placerat et tellus dapibus aliquam. Ut ullamcorper augue et aliquam viverra. Pellentesque sollicitudin neque ut diam dapibus, quis suscipit dolor rhoncus. Duis consequat enim in est accumsan luctus. Aliquam hendrerit diam at erat convallis, eu finibus metus vestibulum. Phasellus eget pharetra massa. In tempus tempor neque, sit amet sollicitudin ipsum eleifend vel.",
            "files": []
          }, {
            "id": 3545217642,
            "name": "Mia Ming",
            "email": "mia.ming@elephant.theme",
            "photo": "img/1272501223.jpg",
            "timestamp": "1500058755",
            "subject": "No subject",
            "message": "Nam sed erat sed libero condimentum pulvinar quis id sapien. Morbi posuere feugiat porta. Phasellus posuere, augue ac lacinia aliquet, est odio malesuada ante, in dictum lacus quam sit amet erat. Aliquam tincidunt rutrum dolor vel dignissim. Donec vehicula est eu leo suscipit maximus. Duis ante neque, varius eu odio et, lobortis gravida dui. Nullam ipsum sem, mattis a molestie nec, tristique vitae justo. Suspendisse potenti. Vivamus ut ipsum imperdiet, mollis lectus scelerisque, ullamcorper leo. Praesent quis nulla nec nibh accumsan mollis eu a felis. Sed fringilla est nec ligula egestas, a semper sem condimentum. Maecenas finibus lectus sed lobortis lobortis. Morbi convallis scelerisque orci, id volutpat augue volutpat quis.",
            "files": []
          }, {
            "id": 5699952563,
            "name": "Mark Gibson",
            "email": "mark.gibson@elephant.theme",
            "photo": "img/1968946964.jpg",
            "timestamp": "1500032489",
            "subject": "Pellentesque purus felis, imperdiet in pulvinar a, tempus at tur",
            "message": "Pellentesque purus felis, imperdiet in pulvinar a, tempus at turpis. Etiam et lorem sit amet arcu luctus pharetra. In hac habitasse platea dictumst. Sed eu aliquam ipsum. Mauris pellentesque fermentum magna nec luctus. Nulla facilisi. In sit amet fermentum justo. In condimentum faucibus urna, mollis accumsan nisl posuere at. Nullam condimentum augue mauris, eu pretium enim euismod nec.",
            "files": []
          }, {
            "id": 4276274808,
            "name": "Charlotte Harrison",
            "email": "charlotte.harrison@elephant.theme",
            "photo": "img/0460697039.jpg",
            "timestamp": "1499945411",
            "subject": "Morbi sed nibh rhoncus, malesuada nulla at, lacinia justo nam s",
            "message": "Sed volutpat turpis et sapien rhoncus condimentum. Aenean orci sem, malesuada sit amet mi vel, bibendum volutpat ex. Aenean rutrum nulla a venenatis maximus. Praesent pretium accumsan felis fringilla ornare. Mauris ornare facilisis nunc, vitae suscipit leo luctus pharetra. Integer tempor accumsan mollis. Nam ultricies feugiat dignissim. Mauris et sapien pretium, mollis mauris euismod, hendrerit nibh. Aliquam erat volutpat. Donec viverra, eros a pellentesque vehicula, felis mi tempor nulla, id pulvinar risus metus in nisl. Etiam ultricies ex lacus, convallis interdum felis iaculis sed. Aenean nisl dolor, euismod vel imperdiet at, dictum ut lorem. Cras ornare odio non libero vulputate, quis accumsan est auctor. Vivamus accumsan mollis turpis, sed facilisis sem accumsan ac.",
            "files": []
          }, {
            "id": 776153557,
            "name": "Amelia Taylor",
            "email": "amelia.taylor@elephant.theme",
            "photo": "img/1554502810.jpg",
            "timestamp": "1499972038",
            "subject": "Curabitur mattis erat et commodo semper mauris augue odio, ulla",
            "message": "Curabitur mattis erat et commodo semper. Mauris augue odio, ullamcorper et bibendum id, dictum quis felis. Suspendisse malesuada sollicitudin tellus, in porta elit rutrum quis. Duis tristique volutpat magna. Suspendisse rutrum leo in commodo imperdiet. Suspendisse potenti. Phasellus eu tellus tortor.",
            "files": []
          }, {
            "id": 2268444018,
            "name": "Ethan Walker",
            "email": "ethan.walker@elephant.theme",
            "photo": "img/0531871454.jpg",
            "timestamp": "1499934346",
            "subject": "Vestibulum turpis dui, feugiat et consectetur nec, porta vel leo",
            "message": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc mi ex, iaculis at felis vel, efficitur rutrum ex. Ut quis luctus lorem. Nullam tincidunt facilisis justo, non tincidunt tortor volutpat eget. Aliquam pulvinar dui sem, ac malesuada lorem egestas vitae. Phasellus eget viverra mi. Vivamus et pretium nisi, vel imperdiet erat. Integer scelerisque est quis ligula interdum, mollis lobortis libero consequat.",
            "files": []
          }, {
            "id": 8808461530,
            "name": "Adelaide Kane",
            "email": "adelaide.kane@elephant.theme",
            "photo": "img/2995015682.jpg",
            "timestamp": "1499948341",
            "subject": "Pellentesque tempor gravida ex, sed ornare justo molestie condim",
            "message": "Aliquam placerat dui at dolor ullamcorper eleifend. Nam maximus malesuada velit. Phasellus scelerisque vestibulum lobortis. Mauris vestibulum tempus fringilla. Praesent ullamcorper cursus neque. Maecenas vel libero turpis. Curabitur in sagittis ante, vel suscipit odio. Donec et mollis ligula, a ullamcorper mi.",
            "files": []
          }, {
            "id": 8459917943,
            "name": "Christina Simpson",
            "email": "christina.simpson@elephant.theme",
            "photo": "img/2565559510.jpg",
            "timestamp": "1499938823",
            "subject": "Nam eleifend est quis ultrices lobortis nulla quam elit, auctor",
            "message": "Nullam rutrum dolor sem, et iaculis nibh tristique ut. Duis at hendrerit nunc. Cras maximus neque nisi, quis efficitur eros consequat eu. Duis molestie orci sed pretium facilisis. Maecenas elementum vitae mauris eget blandit. Aliquam augue nisi, facilisis eu dictum at, malesuada eget odio. Duis ac orci erat. Nullam ac gravida est, sit amet hendrerit mi. Proin vel pharetra enim. Aenean lectus nisi, placerat nec augue vel, sagittis ullamcorper enim. Mauris vitae tristique felis. Cras lectus metus, euismod at gravida eget, pharetra vitae diam. Integer facilisis venenatis arcu, sit amet dignissim erat aliquam non. Mauris tempor a quam non condimentum. Aliquam ut leo porttitor, imperdiet dui pellentesque, varius dolor.",
            "files": []
          }, {
            "id": 7856187263,
            "name": "Beatrix Walker",
            "email": "beatrix.walker@elephant.theme",
            "photo": "img/2790515408.jpg",
            "timestamp": "1499924267",
            "subject": "Duis ut aliquam ante donec vehicula pellentesque diam, nec hend",
            "message": "Vestibulum ac porta dolor. Cras a odio nibh. Quisque semper tempus elit, dictum hendrerit ligula sodales et. Aenean dictum suscipit tortor in condimentum. Duis luctus felis libero, non lobortis lectus convallis in. Duis sollicitudin nec ex vitae volutpat. Ut porttitor finibus sem, non elementum purus fermentum a. Sed eu lorem sed ligula elementum molestie. Nulla et ante sodales, rhoncus ligula sit amet, iaculis velit. Maecenas tellus mi, tincidunt sagittis blandit in, malesuada a dui. Suspendisse convallis, nunc vel efficitur tempor, orci dolor iaculis dolor, quis iaculis orci ante molestie ipsum. Aliquam a augue ornare, pharetra orci ut, lobortis ex. Mauris consectetur bibendum eros a lacinia.",
            "files": []
          }, {
            "id": 9947191100,
            "name": "Jason Saunders",
            "email": "jason.saunders@elephant.theme",
            "photo": "img/2163317912.jpg",
            "timestamp": "1499837252",
            "subject": "Sed quis lacus in magna dapibus aliquet suspendisse in justo ma",
            "message": "Maecenas congue imperdiet consectetur. Sed aliquet varius mattis. Quisque posuere vulputate erat tempus tempor. Vivamus faucibus felis massa, eu fringilla libero vehicula ac. Fusce bibendum orci et scelerisque dapibus. Phasellus accumsan ultrices ligula, quis tempus ante congue vel. Aliquam ullamcorper velit massa, sit amet tempus magna laoreet eu. Aenean ornare, sapien sit amet accumsan pharetra, turpis sapien sagittis tortor, nec posuere leo eros quis dui. Morbi dapibus imperdiet egestas. Fusce id tortor diam. Nunc mollis, risus id euismod volutpat, nibh elit dignissim urna, a tempor urna nulla ultricies leo. Proin dictum odio sit amet dapibus viverra. Nunc at enim non quam eleifend suscipit. Donec et quam quis felis pharetra fermentum et id odio. Maecenas bibendum diam a mauris faucibus condimentum.",
            "files": []
          }, {
            "id": 2959274885,
            "name": "Agatha Ford",
            "email": "agatha.ford@elephant.theme",
            "photo": "img/2832982242.jpg",
            "timestamp": "1499838553",
            "subject": "Duis a dui vel ante congue lacinia curabitur pellentesque massa",
            "message": "Integer id sollicitudin nulla, eu sagittis nibh. Etiam commodo neque eros, ut iaculis urna lacinia a. Mauris facilisis dolor ligula, vitae posuere odio pretium sit amet. Mauris libero arcu, pulvinar non aliquet a, malesuada sit amet mi. Morbi sollicitudin quam iaculis purus convallis sollicitudin. Phasellus et urna suscipit tellus mollis tempor eu id ipsum. Fusce hendrerit massa id ligula ullamcorper egestas. Nulla velit neque, auctor ac ligula quis, gravida vehicula mi. Sed dignissim nunc vitae cursus iaculis. Nunc tristique erat nisi, in malesuada neque tincidunt sed. Aliquam erat volutpat.",
            "files": [{
              "fileName": "personal resume.",
              "fileExt": "doc"
            }, {
              "fileName": "scanned documents.",
              "fileExt": "zip"
            }]
          }, {
            "id": 5228680433,
            "name": "Clara Khan",
            "email": "clara.khan@elephant.theme",
            "photo": "img/2440513918.jpg",
            "timestamp": "1499882535",
            "subject": "No subject",
            "message": "Curabitur vitae diam bibendum, porta mi eget, ultricies ligula. Ut gravida hendrerit orci, sed condimentum nisl iaculis interdum. Fusce elementum enim et metus dictum venenatis. Quisque laoreet mauris at faucibus rhoncus. Suspendisse in orci laoreet, volutpat elit a, porta dui. Nunc maximus dictum maximus. Proin convallis a diam non dictum. Donec mi justo, ultricies vitae sagittis eu, dictum at ipsum. Sed rutrum nisi magna, eget aliquam magna vehicula vel. Donec vehicula lectus nec lectus venenatis varius. Nulla a laoreet libero. Proin non viverra nisl, ac sagittis lacus. Pellentesque id pharetra justo.",
            "files": [{
              "fileName": "clara khan resume.",
              "fileExt": "doc"
            }, {
              "fileName": "clara khan references.",
              "fileExt": "zip"
            }]
          }]
        );
      }, 500);

      return defer.promise;
    };
  }
]);

app.controller("MailCtrl", ["$scope", "MailService",
  function MailCtrl($scope, MailService) {
    $scope.mails = [];
    $scope.currentMail;

    $scope.sidebar = {};
    $scope.sidebar.isActive = true;

    MailService.getMails().then(function(mails) {
      $scope.mails = mails;
    });

    $scope.show = function show(mail) {
      $scope.setSidebarInactive().scrollTop();

      $scope.currentMail = mail;
      $scope.mails.map(function(m) {
        m.isActive = (m.id === mail.id);
      });
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
