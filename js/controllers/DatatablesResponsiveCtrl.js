angular.module('ira').controller('DatatablesResponsiveCtrl', function(DTOptionsBuilder, DTColumnBuilder) {
var dt = this;

dt.options = DTOptionsBuilder
    .fromSource("data/data.json")
    .withDOM(`<"row"<"col-sm-6"i><"col-sm-6"f>>
    <"table-responsive"tr><"row"<"col-sm-6"l><"col-sm-6"p>>`)
    .withBootstrap()
    .withLanguage({
    paginate: {
        previous: "&laquo;",
        next: "&raquo;",
    },
    search: "_INPUT_",
    searchPlaceholder: "Search…"
    })
    .withOption("order", [
    [5, "desc"]
    ])
    .withOption("responsive", true);

    dt.columns = [
        DTColumnBuilder.newColumn("Name").withTitle("Name"),
        DTColumnBuilder.newColumn("Type").withTitle("Type"),
        DTColumnBuilder.newColumn("Region").withTitle("Region"),
        DTColumnBuilder.newColumn("District").withTitle("District"),
        DTColumnBuilder.newColumn("Latitude").withTitle("Latitude"),
        DTColumnBuilder.newColumn("Longitude").withTitle("Longitude")
    ];
    
});