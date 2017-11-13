angular.module('ira').controller('DatatablesResponsiveCtrl', function(DTOptionsBuilder, DTColumnBuilder) {
var dt = this;

dt.options = DTOptionsBuilder
    .fromSource("data/facilitiesData.json")
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
    .withPaginationType('full_numbers')
    .withDisplayLength(15)
    .withOption('lengthChange', false)
    .withOption("responsive", true)

    dt.columns = [
        DTColumnBuilder.newColumn("Name").withTitle("Name"),
        DTColumnBuilder.newColumn("Status").withTitle("Status"),
        DTColumnBuilder.newColumn("Village").withTitle("Village"),
        DTColumnBuilder.newColumn("District").withTitle("District"),
        DTColumnBuilder.newColumn("Region").withTitle("Region"),
        DTColumnBuilder.newColumn("FacilityType").withTitle("Facility Type"),
        DTColumnBuilder.newColumn("ControllingAgency").withTitle("Controlling Agency"),
        DTColumnBuilder.newColumn("ContactName").withTitle("Contact Name"),
        DTColumnBuilder.newColumn("Phone").withTitle("Phone"),
        DTColumnBuilder.newColumn("Email").withTitle("Email"),
        DTColumnBuilder.newColumn("Cluster").withTitle("Cluster")
    ];
    
});