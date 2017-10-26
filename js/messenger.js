var app = angular.module("elephant");

app.service("MessengerService", ["$q", "$timeout",
  function MessengerService($q, $timeout) {
    this.getConversation = function getConversation() {
      var defer = $q.defer();

      $timeout(function() {
        defer.resolve(
          [{
            "id": 601274412,
            "name": "Sophia Evans",
            "photo": "img/0601274412.jpg",
            "last": {
              "timestamp": "04:27:55 PM",
              "message": "Curabitur vel mi ante."
            },
            "conversation": [{
              "isMe": true,
              "timestamp": "10:38:36 PM",
              "messages": ["Sed a tellus egestas, venenatis ligula ut, tincidunt lorem.", "Mauris eget sem rhoncus, ultrices neque eu, rutrum augue."]
            }, {
              "isMe": false,
              "timestamp": "10:41:10 PM",
              "messages": ["Aenean semper tortor luctus orci scelerisque finibus.", "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.", "Donec efficitur ante a lacus suscipit viverra."]
            }, {
              "isMe": true,
              "timestamp": "10:45:39 PM",
              "messages": ["Proin condimentum sapien quis nunc gravida condimentum.", "Aliquam vel lobortis est. In lacinia enim at massa finibus, sed lacinia sem dictum. Nunc risus mauris, vehicula nec enim sit amet, vehicula hendrerit ipsum."]
            }, {
              "isMe": false,
              "timestamp": "10:50:47 PM",
              "messages": ["Fusce a magna tincidunt, convallis magna et, semper mauris.", "Donec dapibus quam id vulputate molestie.", "Nunc eu malesuada lacus."]
            }, {
              "isMe": false,
              "timestamp": "06:54:12 PM",
              "messages": ["Proin id ex eget ipsum fermentum sodales."]
            }, {
              "isMe": true,
              "timestamp": "07:00:57 PM",
              "messages": ["Donec efficitur ante a lacus suscipit viverra.", "Proin vel aliquet."]
            }, {
              "isMe": false,
              "timestamp": "07:07:24 PM",
              "messages": ["Fusce lobortis urna condimentum ante condimentum, volutpat imperdiet neque condimentum.", "Donec scelerisque risus nec ipsum malesuada vestibulum.", "Vehicula."]
            }, {
              "isMe": true,
              "timestamp": "07:12:23 PM",
              "messages": ["Ut nec mauris a neque pulvinar convallis.", "Sed sed dui a tortor dapibus accumsan.", "Fusce mattis lacus massa, et iaculis orci venenatis non. Integer ut pharetra eros, in molestie erat. Aenean sodales vel urna eget dapibus. "]
            }, {
              "isMe": false,
              "timestamp": "07:13:55 PM",
              "messages": ["Praesent eu augue eget dui tincidunt facilisis.", "Fusce mattis lacus massa", "Nunc in arcu rutrum, varius nisi eu, rutrum augue."]
            }, {
              "isMe": true,
              "timestamp": "07:20:03 PM",
              "messages": ["Nulla porttitor nisi sed dolor tempus.", "Donec feugiat mauris sit amet in vestibulum sem varius."]
            }, {
              "isMe": false,
              "timestamp": "07:27:23 PM",
              "messages": ["Aenean sollicitudin elit et dictum scelerisque.", "Etiam tincidunt justo eleifend velit condimentum dictum."]
            }, {
              "isMe": true,
              "timestamp": "07:32:20 PM",
              "messages": ["Nullam quis erat euismod, consequat tellus ut, facilisis mauris.", "Suspendisse rutrum ligula felis, vel maximus mauris dapibus at. In tortor ex, cursus eu bibendum ut, lacinia nec urna. Cras cursus mauris quis nisl faucibus, ultricies fringilla purus aliquet.", "Fusce nec finibus felis, sed consequat velit."]
            }, {
              "isMe": false,
              "timestamp": "07:34:22 PM",
              "messages": ["Maecenas et dui mattis nisl condimentum faucibus.", "Donec eget erat commodo, vestibulum leo sit amet, dapibus arcu", "Cras in commodo nunc."]
            }, {
              "isMe": true,
              "timestamp": "07:43:49 PM",
              "messages": ["Nam tincidunt eros at tellus dignissim interdum.", "Proin pretium auctor gravida."]
            }, {
              "isMe": false,
              "timestamp": "07:47:17 PM",
              "messages": ["Donec a nisl eget diam lobortis condimentum non vitae arcu.", "Praesent tortor orci, rutrum vel dictum ut, condimentum quis mauris. Pellentesque vestibulum a mauris id tristique. Donec nibh sapien, maximus eu tortor sit amet, eleifend pharetra ex."]
            }, {
              "isMe": true,
              "timestamp": "02:47:05 PM",
              "messages": ["Nam eleifend erat et purus semper vel.", "Maecenas eu augue suscipit sem condimentum consectetur vitae in lorem. Donec eget pharetra nisl, non vulputate dui. Nunc in arcu rutrum, varius nisi eu, rutrum augue."]
            }, {
              "isMe": false,
              "timestamp": "02:54:12 PM",
              "messages": ["Etiam eget purus vel elit elementum rhoncus et id odio.", "Nullam eu libero eleifend tortor volutpat sagittis.", "Curabitur quis sodales ex."]
            }, {
              "isMe": true,
              "timestamp": "02:57:04 PM",
              "messages": ["Maecenas id orci eget dui molestie tempor.", "Praesent vulputate enim ut metus scelerisque, eu placerat mi euismod."]
            }, {
              "isMe": false,
              "timestamp": "03:01:49 PM",
              "messages": ["Curabitur ac elit bibendum quam ornare", "Nullam quis erat euismod, consequat tellus ut, facilisis mauris.", "Nullam id ornare velit."]
            }, {
              "isMe": true,
              "timestamp": "03:10:28 PM",
              "messages": ["Integer quis lorem sodales, bibendum ex sit amet, semper enim.", "Sed tempor fermentum felis.", "Vivamus dapibus accumsan convallis. Mauris ligula nibh, varius a ultricies elementum."]
            }, {
              "isMe": true,
              "timestamp": "04:13:27 PM",
              "messages": ["Mauris viverra enim eu erat gravida venenatis.", "Curabitur pellentesque ipsum id suscipit vulputate. Fusce porta a lorem ut sollicitudin.", "Aenean fermentum odio id arcu hendrerit euismod."]
            }, {
              "isMe": false,
              "timestamp": "04:17:38 PM",
              "messages": ["Quisque condimentum leo eu orci iaculis bibendum.", "Nam vel quam ac.", "Sed tincidunt erat eget leo commodo ultricies. Nulla volutpat tortor in tempus elementum. Nulla at diam nulla."]
            }, {
              "isMe": true,
              "timestamp": "04:25:07 PM",
              "messages": ["Nulla a sagittis tortor, id imperdiet leo. Vestibulum lacinia et velit sed ultricies. Mauris pulvinar ac mi a consectetur. Sed tempor fermentum felis. Integer ultrices imperdiet magna.", "Donec vel sem quis nunc dignissim facilisis id at quam.", "Integer scelerisque mauris."]
            }, {
              "isMe": false,
              "timestamp": "04:27:55 PM",
              "messages": ["Phasellus eget tempor turpis. Morbi vitae justo tempor, molestie tellus ultricies rhoncus tortor phasellus vulputate dolor orci.", "Phasellus fermentum felis rhoncus suscipit vulputate.", "Curabitur vel mi ante."]
            }]
          }, {
            "id": 310728269,
            "name": "Daniel Taylor",
            "photo": "img/0310728269.jpg",
            "last": {
              "timestamp": "02:39:28 PM",
              "message": "You: Maecenas sed magna sodales, iaculis felis in, pretium elit."
            },
            "conversation": [{
              "isMe": false,
              "timestamp": "07:13:55 PM",
              "messages": ["Curabitur sollicitudin neque sollicitudin, pharetra nunc sit amet, maximus nunc.", "Etiam volutpat mauris a nisi lacinia tristique.", "Nam eget dolor sagittis, blandit neque eu, dignissim risus."]
            }, {
              "isMe": true,
              "timestamp": "07:22:29 PM",
              "messages": ["Etiam a purus eget dolor venenatis lacinia sit amet sit amet eros.", "Vivamus in orci eget mauris euismod mollis.", "Integer a purus et nisl imperdiet convallis eu id mauris."]
            }, {
              "isMe": false,
              "timestamp": "07:25:59 PM",
              "messages": ["Aenean sollicitudin elit et dictum scelerisque.", "Etiam tincidunt justo eleifend velit condimentum dictum."]
            }, {
              "isMe": true,
              "timestamp": "07:30:56 PM",
              "messages": ["Ut condimentum est et arcu ornare, sit amet egestas eros venenatis.", "Nam efficitur tortor ut lectus ultricies, ut auctor quam accumsan."]
            }, {
              "isMe": false,
              "timestamp": "07:34:44 PM",
              "messages": ["Curabitur ullamcorper ipsum nec quam vestibulum blandit.", "Suspendisse eget erat id dolor commodo elementum sed sed felis.", "Integer rutrum sapien vitae orci vestibulum, sed congue lorem porta."]
            }, {
              "isMe": true,
              "timestamp": "07:41:28 PM",
              "messages": ["Nam tincidunt eros at tellus dignissim interdum.", "Proin pretium auctor gravida."]
            }, {
              "isMe": false,
              "timestamp": "07:48:39 PM",
              "messages": ["Donec a nisl eget diam lobortis condimentum non vitae arcu.", "Praesent tortor orci, rutrum vel dictum ut, condimentum quis mauris. Pellentesque vestibulum a mauris id tristique. Donec nibh sapien, maximus eu tortor sit amet, eleifend pharetra ex."]
            }, {
              "isMe": true,
              "timestamp": "11:11:41 PM",
              "messages": ["Cras finibus odio at porttitor sodales.", "Suspendisse quis sem vel ex volutpat consequat.", "Phasellus sed magna a enim pretium aliquet.", "Ut maximus lectus ut sollicitudin feugiat."]
            }, {
              "isMe": false,
              "timestamp": "11:18:32 PM",
              "messages": ["Etiam eget purus vel elit elementum rhoncus et id odio.", "Nullam eu libero eleifend tortor volutpat sagittis.", "Curabitur quis sodales ex."]
            }, {
              "isMe": true,
              "timestamp": "11:21:26 PM",
              "messages": ["Curabitur imperdiet commodo urna quis rutrum.", "Integer malesuada libero ut velit pulvinar, eget suscipit enim hendrerit."]
            }, {
              "isMe": false,
              "timestamp": "11:22:47 PM",
              "messages": ["Curabitur ac elit bibendum quam ornare", "Nullam quis erat euismod, consequat tellus ut, facilisis mauris.", "Nullam id ornare velit."]
            }, {
              "isMe": true,
              "timestamp": "11:32:25 PM",
              "messages": ["Integer quis lorem sodales, bibendum ex sit amet, semper enim.", "Sed tempor fermentum felis.", "Vivamus dapibus accumsan convallis. Mauris ligula nibh, varius a ultricies elementum."]
            }, {
              "isMe": false,
              "timestamp": "02:21:41 PM",
              "messages": ["In sollicitudin lorem massa, nec posuere arcu venenatis vitae. Morbi mollis diam non pulvinar gravida. Duis non lectus sed purus placerat aliquam.", "Donec vel dui quis nulla ultrices tincidunt. Nunc vehicula sapien ut arcu rhoncus, elementum congue.", "Morbi iaculis tempus neque vel scelerisque."]
            }, {
              "isMe": true,
              "timestamp": "02:27:31 PM",
              "messages": ["Mauris id felis a justo viverra sollicitudin. Donec eu ex eros. Aenean feugiat justo ac odio placerat elementum. Suspendisse tempor ex mi, quis maximus mauris elementum id.", "Curabitur mattis auctor pellentesque. Donec at augue et tellus posuere malesuada a sed leo. Morbi posuere dolor eget risus aliquet consequat."]
            }, {
              "isMe": false,
              "timestamp": "02:36:53 PM",
              "messages": ["Curabitur imperdiet commodo urna quis rutrum.", "Vestibulum vulputate efficitur lorem, quis dictum metus imperdiet eget.", "Duis imperdiet odio eu commodo malesuada."]
            }, {
              "isMe": true,
              "timestamp": "02:39:28 PM",
              "messages": ["Nulla facilisi. Proin in sollicitudin quam. Donec quis auctor eros.", "Pellentesque rhoncus dapibus pretium.", "Maecenas sed magna sodales, iaculis felis in, pretium elit."]
            }]
          }, {
            "id": 299419341,
            "name": "Harry Jones",
            "photo": "img/0299419341.jpg",
            "last": {
              "timestamp": "11:56:40 AM",
              "message": "Maecenas sed magna sodales, iaculis felis in, pretium elit."
            },
            "conversation": [{
              "isMe": false,
              "timestamp": "04:44:12 PM",
              "messages": ["Sed auctor eros in ante tempor, sit amet tempus tortor egestas.", "Integer eget enim non lectus laoreet commodo.", "Aenean tempor lectus non efficitur condimentum."]
            }, {
              "isMe": true,
              "timestamp": "04:45:53 PM",
              "messages": ["Phasellus eu sem non est interdum lobortis vel non nibh.", "Quisque tempus dolor in metus ornare lobortis.", "In pellentesque magna quis nulla lacinia finibus.", "Ut sed turpis pellentesque sapien malesuada sollicitudin."]
            }, {
              "isMe": false,
              "timestamp": "04:50:55 PM",
              "messages": ["Cras vel justo quis massa molestie suscipit vitae consectetur mi.", "Aliquam a sem nec dolor consequat sagittis.", "Etiam ac lectus vitae purus hendrerit ultricies ut quis est."]
            }, {
              "isMe": true,
              "timestamp": "04:53:20 PM",
              "messages": ["Vivamus volutpat enim quis mi placerat, sed suscipit neque egestas.", "Nullam vitae ipsum faucibus, tempor magna sit amet, venenatis magna."]
            }, {
              "isMe": false,
              "timestamp": "05:02:01 PM",
              "messages": ["Donec ultricies nunc in rhoncus vestibulum.", "Ut et tortor gravida, viverra dolor ac, tincidunt tortor.", "Proin eu lectus non sapien mattis lacinia ac ut velit."]
            }, {
              "isMe": true,
              "timestamp": "05:10:15 PM",
              "messages": ["Nam tincidunt eros at tellus dignissim interdum.", "Proin pretium auctor gravida."]
            }, {
              "isMe": false,
              "timestamp": "05:12:59 PM",
              "messages": ["Etiam eu ante id lectus convallis feugiat sed sed nisi.", "Vivamus ut risus lacinia, molestie nulla nec, lacinia odio.", "Quisque a tellus eget eros suscipit varius id eu orci."]
            }, {
              "isMe": true,
              "timestamp": "02:12:11 PM",
              "messages": ["Fusce condimentum diam non luctus lobortis.", "Donec vel purus porttitor, tincidunt est porttitor, pulvinar felis."]
            }, {
              "isMe": false,
              "timestamp": "02:17:21 PM",
              "messages": ["In ac augue condimentum, volutpat purus vitae, viverra urna.", "Sed facilisis dolor ut leo aliquam suscipit.", "Nullam sit amet neque a diam gravida hendrerit eleifend sit amet diam."]
            }, {
              "isMe": true,
              "timestamp": "02:20:00 PM",
              "messages": ["Donec id diam vel turpis mollis fringilla.", "Sed vestibulum orci sodales odio aliquam eleifend at sit amet ex.", "Phasellus ac sapien ac odio cursus porttitor."]
            }, {
              "isMe": false,
              "timestamp": "02:23:18 PM",
              "messages": ["Maecenas eu odio ac elit dictum consequat ut et arcu.", "Maecenas fringilla ipsum id velit auctor aliquet.", "Nam blandit velit feugiat, tempus ante ut, maximus augue."]
            }, {
              "isMe": true,
              "timestamp": "02:31:23 PM",
              "messages": ["Sed vestibulum ipsum vel sollicitudin dignissim.", "Fusce vel enim dignissim, dictum dolor ut, dictum ligula.", "Vestibulum sit amet nunc eget justo malesuada pretium sit amet in augue.", "Phasellus ultrices purus id sapien condimentum auctor."]
            }, {
              "isMe": true,
              "timestamp": "11:46:35 AM",
              "messages": ["Vestibulum vestibulum mi non arcu pretium bibendum.", "Nullam sit amet elit nec nisl tristique fringilla nec ut sapien.", "Donec id mi dapibus, porta metus at, interdum quam.", "Duis vel est ut ligula congue imperdiet in vel purus."]
            }, {
              "isMe": false,
              "timestamp": "11:49:16 AM",
              "messages": ["Suspendisse nec mi imperdiet, mattis enim vitae, aliquet tellus.", "Aenean sagittis purus non neque elementum elementum.", "Maecenas lobortis quam dapibus, volutpat lorem a, consectetur magna."]
            }, {
              "isMe": true,
              "timestamp": "11:52:20 AM",
              "messages": ["Curabitur imperdiet commodo urna quis rutrum.", "Vestibulum vulputate efficitur lorem, quis dictum metus imperdiet eget.", "Duis imperdiet odio eu commodo malesuada."]
            }, {
              "isMe": false,
              "timestamp": "11:56:40 AM",
              "messages": ["Nulla facilisi. Proin in sollicitudin quam. Donec quis auctor eros.", "Pellentesque rhoncus dapibus pretium.", "Maecenas sed magna sodales, iaculis felis in, pretium elit."]
            }]
          }, {
            "id": 1554502810,
            "name": "Amelia Taylor",
            "photo": "img/1554502810.jpg",
            "last": {
              "timestamp": "10:34:21 AM",
              "message": "Quisque condimentum tortor pulvinar urna aliquet, sed vestibulum est laoreet."
            },
            "conversation": [{
              "isMe": true,
              "timestamp": "03:30:54 PM",
              "messages": ["Pellentesque id odio sit amet arcu tempor convallis facilisis eu orci.", "Praesent eu mauris dignissim, eleifend metus ut, sagittis velit."]
            }, {
              "isMe": false,
              "timestamp": "03:34:27 PM",
              "messages": ["Duis convallis erat eu erat malesuada molestie.", "Sed in nunc id sem congue tristique.", "Morbi quis dolor quis est rhoncus laoreet vel eu tortor.", "Aliquam non felis eget tortor laoreet ultrices in ut velit.", "Suspendisse at purus hendrerit, blandit nibh in, interdum metus."]
            }, {
              "isMe": true,
              "timestamp": "03:37:21 PM",
              "messages": ["In ornare felis ac varius facilisis.", "Suspendisse vitae nibh vel purus dignissim dapibus ultricies vel odio.", "Donec a velit eu neque cursus aliquet in vitae libero."]
            }, {
              "isMe": false,
              "timestamp": "03:43:42 PM",
              "messages": ["Morbi in quam nec elit ultricies viverra eu et nibh.", "Duis ac urna hendrerit, dapibus lacus nec, finibus sapien."]
            }, {
              "isMe": true,
              "timestamp": "03:51:20 PM",
              "messages": ["Vestibulum venenatis ligula nec iaculis lacinia.", "Curabitur iaculis enim id ante accumsan, ac egestas nibh suscipit."]
            }, {
              "isMe": false,
              "timestamp": "10:21:34 AM",
              "messages": ["Maecenas hendrerit eros id sem venenatis, id elementum eros consequat."]
            }, {
              "isMe": true,
              "timestamp": "10:29:42 AM",
              "messages": ["Cras non nisl efficitur, cursus nulla ut, egestas magna.", "In fringilla sapien luctus lacinia imperdiet.", "Vivamus scelerisque mi a risus rhoncus sagittis ac id nunc."]
            }, {
              "isMe": false,
              "timestamp": "10:32:16 AM",
              "messages": ["Etiam molestie mauris nec velit elementum viverra.", "Nunc dapibus massa at consequat suscipit."]
            }, {
              "isMe": true,
              "timestamp": "10:34:21 AM",
              "messages": ["Integer elementum ex blandit, viverra urna ut, gravida sapien.", "Quisque condimentum tortor pulvinar urna aliquet, sed vestibulum est laoreet."]
            }]
          }, {
            "id": 1099386850,
            "name": "Jessica Brown",
            "photo": "img/1099386850.jpg",
            "last": {
              "timestamp": "11:41:02 AM",
              "message": "Aenean tempor purus iaculis, faucibus risus in, eleifend justo."
            },
            "conversation": [{
              "isMe": false,
              "timestamp": "11:31:42 AM",
              "messages": ["Fusce cursus felis in dui tempus, vitae dignissim magna vehicula.", "Vivamus tincidunt orci a turpis consectetur, a pretium nibh auctor.", "Cras scelerisque sapien non sodales luctus."]
            }, {
              "isMe": true,
              "timestamp": "11:33:17 AM",
              "messages": ["Nullam quis tortor gravida augue aliquet aliquam.", "Nunc a felis nec nibh eleifend rutrum."]
            }, {
              "isMe": false,
              "timestamp": "11:37:16 AM",
              "messages": ["Nam ultricies ex nec augue ornare tincidunt.", "Pellentesque dapibus eros non nulla sagittis tincidunt."]
            }, {
              "isMe": true,
              "timestamp": "11:41:02 AM",
              "messages": ["Sed imperdiet dui sit amet turpis commodo, et fermentum nisl ultricies.", "Suspendisse efficitur risus non ipsum ullamcorper commodo.", "Aenean tempor purus iaculis, faucibus risus in, eleifend justo."]
            }]
          }, {
            "id": 3002121059,
            "name": "Abbey Robinson",
            "photo": "img/3002121059.jpg",
            "last": {
              "timestamp": "12:35:51 PM",
              "message": "You: Vivamus placerat lectus sed erat facilisis, in eleifend justo semper."
            },
            "conversation": [{
              "isMe": true,
              "timestamp": "09:51:13 PM",
              "messages": ["Maecenas gravida tellus id est eleifend, non volutpat libero sagittis.", "Praesent nec magna dictum, tristique tortor quis, egestas ante.", "Pellentesque fermentum est sit amet metus tristique porta."]
            }, {
              "isMe": false,
              "timestamp": "09:57:51 PM",
              "messages": ["Nullam at quam vel mauris pharetra rhoncus ut at nulla.", "Nam vitae sem eu enim pharetra ultrices."]
            }, {
              "isMe": true,
              "timestamp": "10:05:55 PM",
              "messages": ["Sed a arcu auctor enim scelerisque ullamcorper vel quis nulla.", "Fusce faucibus ante in interdum interdum."]
            }, {
              "isMe": false,
              "timestamp": "10:12:41 PM",
              "messages": ["Morbi in quam nec elit ultricies viverra eu et nibh.", "Duis ac urna hendrerit, dapibus lacus nec, finibus sapien."]
            }, {
              "isMe": true,
              "timestamp": "10:17:49 PM",
              "messages": ["Phasellus quis augue gravida, tempor orci eget, tincidunt dui.", "Phasellus consequat augue a ligula ultrices, sed auctor nisl vestibulum."]
            }, {
              "isMe": true,
              "timestamp": "12:12:31 PM",
              "messages": ["Nunc ac sem sodales, consequat sapien vel, venenatis purus.", "Integer feugiat nibh id quam convallis, vel lobortis metus fermentum."]
            }, {
              "isMe": false,
              "timestamp": "12:20:16 PM",
              "messages": ["Duis aliquet nisi sit amet nisi ornare condimentum.", "Curabitur ac risus nec tellus cursus commodo."]
            }, {
              "isMe": true,
              "timestamp": "12:29:57 PM",
              "messages": ["Nullam eu nibh eget orci euismod commodo sit amet id quam.", "Vivamus eu libero hendrerit, viverra leo id, feugiat ante."]
            }, {
              "isMe": false,
              "timestamp": "12:35:51 PM",
              "messages": ["Maecenas quis purus tristique nunc imperdiet bibendum quis eu augue.", "Vivamus placerat lectus sed erat facilisis, in eleifend justo semper."]
            }]
          }, {
            "id": 1703835345,
            "name": "Rebecca Fox",
            "photo": "img/1703835345.jpg",
            "last": {
              "timestamp": "12:29:57 PM",
              "message": "You: Morbi suscipit tellus vitae convallis tempus."
            },
            "conversation": [{
              "isMe": false,
              "timestamp": "12:12:31 PM",
              "messages": ["Pellentesque efficitur mauris eu eros auctor, eget elementum tortor pretium.", "Nullam et nisi ultrices, accumsan mi vitae, dapibus erat."]
            }, {
              "isMe": true,
              "timestamp": "12:22:03 PM",
              "messages": ["Sed sodales lectus et turpis viverra, nec vulputate risus viverra.", "Sed dignissim metus a velit fringilla, ut finibus augue iaculis."]
            }, {
              "isMe": false,
              "timestamp": "12:28:39 PM",
              "messages": ["Vestibulum eu sem et dolor ultrices placerat mattis eget dolor.", "Nulla at sem et elit posuere varius."]
            }, {
              "isMe": true,
              "timestamp": "12:29:57 PM",
              "messages": ["Ut aliquet arcu elementum lacus hendrerit, a cursus nunc sodales.", "Morbi suscipit tellus vitae convallis tempus."]
            }]
          }, {
            "id": 2832982242,
            "name": "Agatha Ford",
            "photo": "img/2832982242.jpg",
            "last": {
              "timestamp": "09:11:53 PM",
              "message": "Ut pharetra nulla eu dui porttitor, sed blandit nisl aliquam."
            },
            "conversation": [{
              "isMe": false,
              "timestamp": "09:11:53 PM",
              "messages": ["Morbi tempus elit id ipsum egestas dignissim.", "Fusce facilisis nunc id condimentum iaculis.", "Ut pharetra nulla eu dui porttitor, sed blandit nisl aliquam."]
            }]
          }, {
            "id": 2995015682,
            "name": "Adelaide Kane",
            "photo": "img/2995015682.jpg",
            "last": {
              "timestamp": "12:31:14 PM",
              "message": "You: Vivamus placerat lectus sed erat facilisis, in eleifend justo semper."
            },
            "conversation": [{
              "isMe": true,
              "timestamp": "06:12:46 PM",
              "messages": ["Maecenas gravida tellus id est eleifend, non volutpat libero sagittis.", "Praesent nec magna dictum, tristique tortor quis, egestas ante.", "Pellentesque fermentum est sit amet metus tristique porta."]
            }, {
              "isMe": false,
              "timestamp": "06:17:53 PM",
              "messages": ["Nullam at quam vel mauris pharetra rhoncus ut at nulla.", "Nam vitae sem eu enim pharetra ultrices."]
            }, {
              "isMe": true,
              "timestamp": "06:26:58 PM",
              "messages": ["Sed a arcu auctor enim scelerisque ullamcorper vel quis nulla.", "Fusce faucibus ante in interdum interdum."]
            }, {
              "isMe": false,
              "timestamp": "06:29:00 PM",
              "messages": ["Morbi in quam nec elit ultricies viverra eu et nibh.", "Duis ac urna hendrerit, dapibus lacus nec, finibus sapien."]
            }, {
              "isMe": true,
              "timestamp": "06:33:45 PM",
              "messages": ["Phasellus quis augue gravida, tempor orci eget, tincidunt dui.", "Phasellus consequat augue a ligula ultrices, sed auctor nisl vestibulum."]
            }, {
              "isMe": false,
              "timestamp": "12:12:31 PM",
              "messages": ["Nunc ac sem sodales, consequat sapien vel, venenatis purus.", "Integer feugiat nibh id quam convallis, vel lobortis metus fermentum."]
            }, {
              "isMe": true,
              "timestamp": "12:18:57 PM",
              "messages": ["Duis aliquet nisi sit amet nisi ornare condimentum.", "Curabitur ac risus nec tellus cursus commodo."]
            }, {
              "isMe": false,
              "timestamp": "12:24:37 PM",
              "messages": ["Nullam eu nibh eget orci euismod commodo sit amet id quam.", "Vivamus eu libero hendrerit, viverra leo id, feugiat ante."]
            }, {
              "isMe": true,
              "timestamp": "12:31:14 PM",
              "messages": ["Maecenas quis purus tristique nunc imperdiet bibendum quis eu augue.", "Vivamus placerat lectus sed erat facilisis, in eleifend justo semper."]
            }]
          }, {
            "id": 1182824800,
            "name": "Ella Davis",
            "photo": "img/1182824800.jpg",
            "last": {
              "timestamp": "10:04:34 AM",
              "message": "You: Nullam nec neque rhoncus, rutrum dui non, volutpat arcu."
            },
            "conversation": [{
              "isMe": true,
              "timestamp": "04:31:46 PM",
              "messages": ["Cras viverra felis quis risus condimentum, ut cursus libero varius.", "Nullam quis nisi id odio mattis consectetur viverra eu odio."]
            }, {
              "isMe": false,
              "timestamp": "04:33:50 PM",
              "messages": ["Ut convallis ipsum blandit augue porttitor auctor.", "Aenean viverra nibh eu nulla molestie ornare.", "Sed egestas lorem et mi efficitur, quis lacinia nunc ultrices."]
            }, {
              "isMe": true,
              "timestamp": "04:37:16 PM",
              "messages": ["Vivamus accumsan nunc et quam placerat, non lacinia tellus lacinia.", "Aenean aliquam massa a tortor ornare tempus.", "Nam semper mi eu elit lacinia facilisis."]
            }, {
              "isMe": false,
              "timestamp": "04:46:44 PM",
              "messages": ["Morbi in quam nec elit ultricies viverra eu et nibh.", "Nunc ultricies metus id justo mattis, sed vehicula ante molestie.", "Duis sed tellus suscipit purus tincidunt tempor."]
            }, {
              "isMe": true,
              "timestamp": "04:56:27 PM",
              "messages": ["Phasellus quis augue gravida, tempor orci eget, tincidunt dui.", "Vestibulum consectetur dolor ut sem posuere, sit amet porta urna sagittis.", "Morbi a turpis vitae nibh maximus finibus pretium id ante."]
            }, {
              "isMe": false,
              "timestamp": "09:43:34 AM",
              "messages": ["Nam sed ex scelerisque tortor tincidunt mattis.", "Pellentesque eu orci et sapien congue venenatis non condimentum felis.", "Donec et dui ut diam ullamcorper varius sit amet quis purus."]
            }, {
              "isMe": true,
              "timestamp": "09:48:46 AM",
              "messages": ["Vestibulum eget augue et enim luctus venenatis.", "Nunc id ex vitae magna eleifend euismod."]
            }, {
              "isMe": false,
              "timestamp": "09:55:00 AM",
              "messages": ["Pellentesque pretium tellus at sapien laoreet dignissim.", "Suspendisse placerat lorem nec justo dictum egestas."]
            }, {
              "isMe": true,
              "timestamp": "10:04:34 AM",
              "messages": ["Phasellus dictum velit et arcu tincidunt luctus.", "Nullam nec neque rhoncus, rutrum dui non, volutpat arcu."]
            }]
          }]
        );
      }, 500);

      return defer.promise;
    };
  }
]);

app.controller("MessengerCtrl", ["$scope", "MessengerService",
  function MessengerCtrl($scope, MessengerService) {
    $scope.conversations = [];
    $scope.currentConversation;

    $scope.sidebar = {};
    $scope.sidebar.isActive = true;

    MessengerService.getConversation().then(function(conversations) {
      $scope.conversations = conversations;
    });

    $scope.show = function show(conversation) {
      $scope.setSidebarInactive().scrollTop();

      $scope.currentConversation = conversation;
      $scope.conversations.map(function(c) {
        c.isActive = (c.id === conversation.id);
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
