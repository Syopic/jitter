var app = angular.module("sara").service('ServiceData', [function ServiceData() {
    this.diseaseIndicatorsDirectory = {
        Malaria: [
            { index: 0, code: "S15", name: "Malaria services" },
            { index: 1, code: "S15-01", name: "Malaria diagnosis" },
            { index: 2, code: "S15_02", name: "Malaria diagnostic testing" },
            { index: 3, code: "S15_03", name: "Malaria treatment" },
            { index: 4, code: "S15_04", name: "IPT" },
            { index: 5, code: "S15_05", name: "Malaria diagnosis by clinical symptoms" },
            { index: 6, code: "S15_06", name: "Malaria diagnosis by RDT" },
            { index: 7, code: "S15_07", name: "Malaria diagnosis by microscopy" },
            { index: 8, code: "T18", name: "Guidelines for diagnosis and treatment of malaria" },
            { index: 9, code: "T19", name: "Guidelines for IPT" },
            { index: 10, code: "T20", name: "Staff trained in malaria diagnosis and treatment" },
            { index: 11, code: "T21", name: "Staff trained in IPT" },
            { index: 12, code: "D3", name: "Malaria diagnosis capacity" },
            { index: 13, code: "M37", name: "First-line antimalarial in stock" },
            { index: 14, code: "M38", name: "Paracetamol cap/tab" },
            { index: 15, code: "M39", name: "IPT drug" },
            { index: 16, code: "M40", name: "ITN" },
            { index: 17, code: "T59", name: "Accredited/certified microscopist" },
            { index: 18, code: "D35", name: "Capacity to conduct malaria microscopy" },
            { index: 19, code: "D36", name: "Availability to conduct RDT" },
            { index: 20, code: "D36_A", name: "RDT stock out" },
            { index: 21, code: "D36_B", name: "Length of RDT stock out" },
            { index: 22, code: "M37_A", name: "ACT stock out" },
            { index: 23, code: "M37_B", name: "Length of ACT stock out" },
            { index: 24, code: "M136", name: "Artemisinin monotherapy (oral)" },
            { index: 25, code: "M82", name: "Artesunate rectal or injection dosage forms" },
            { index: 26, code: "M138", name: "Cloroquine (oral)" },
            { index: 27, code: "M139", name: "Quinine (oral)" },
            { index: 28, code: "M140", name: "Primaquine (oral)" }
        ],
        TB: [
            { index: 0, code: "S16", name: "TB services" },
            { index: 1, code: "S16_01", name: "TB diagnosis" },
            { index: 2, code: "S16_02", name: "TB diagnostic testing" },
            { index: 3, code: "S16_03", name: "TB diagnosis by clinical symptoms" },
            { index: 4, code: "S16_04", name: "TB diagnosis by sputum smearmicroscopy examination" },
            { index: 5, code: "S16_05", name: "TB diagnosis by culture" },
            { index: 6, code: "S16_06", name: "TB diagnosis by rapid test {GeneXpert MTB/RIF)" },
            { index: 7, code: "S16_07", name: "TB diagnosis by chest X-ray" },
            { index: 8, code: "S16_08", name: "Prescription of drugs to TB patients" },
            { index: 9, code: "S16_09", name: "Provision of drugs to TB patients" },
            { index: 10, code: "S16_10", name: "Management and treatment follow-up for TB patients" },
            { index: 11, code: "T22", name: "Guidelines for diagnosis and treatment of TB" },
            { index: 12, code: "T23", name: "Guidelines for management of HIV & TB co-infection" },
            { index: 13, code: "T24", name: "Guidelines related to MDR-TB treatment (or identification of need for referral)" },
            { index: 14, code: "T25", name: "Guidelines for TB infection control" },
            { index: 15, code: "T26", name: "Staff trained in TB diagnosis and treatment" },
            { index: 16, code: "T27", name: "Staff trained in management of HIV & TB co-infection" },
            { index: 17, code: "T28", name: "Staff trained in client MDR-TB treatment or identification of need for referral" },
            { index: 18, code: "T29", name: "Staff trained in TB Infection Control" },
            { index: 19, code: "D8", name: "TB microscopy" },
            { index: 20, code: "D6", name: "HIV diagnostic capacity" },
            { index: 21, code: "D13", name: "System for diagnosis of HIV among TB clients" },
            { index: 22, code: "M41", name: "First-line TB medications" }
        ],
        HIV: [
            { index: 0, code: "S17", name: "HIV counselling and testing" },
            { index: 1, code: "T30", name: "Guidelines on HIV counselling and testing" },
            { index: 2, code: "T31", name: "Staff trained in HIV counselling and testing" },
            { index: 3, code: "I23", name: "Visual and auditory privacyg" },
            { index: 4, code: "D6", name: "HIV diagnostic capacityg" },
            { index: 5, code: "M91", name: "Condoms" },
            { index: 6, code: "S18", name: "HIV/AIDS care and support services" },
            { index: 7, code: "S18_01", name: "Treatment of opportunistic infections" },
            { index: 8, code: "S18_02", name: "Provision of palliative care" },
            { index: 9, code: "S18_03", name: "Intravenous treatment of fungal infections" },
            { index: 10, code: "S18_04", name: "Treatment for Kaposi’s sarcoma" },
            { index: 11, code: "S18_05", name: "Nutritional rehabilitation services" },
            { index: 12, code: "S18_06", name: "Prescribe/provide fortified protein supplementation" },
            { index: 13, code: "S18_07", name: "Care for paediatric HIV/AIDS patients" },
            { index: 14, code: "S18_08", name: "Provide/prescribe preventative treatment for TB" },
            { index: 15, code: "S18_09", name: "Primary preventative treatment for opportunistic infections" },
            { index: 16, code: "S18_10", name: "Provide/prescribe micronutrient supplementation" },
            { index: 17, code: "S18_11", name: "Family planning counselling" },
            { index: 18, code: "S18_12", name: "Provide condoms" },
            { index: 19, code: "T32", name: "Guidelines for clinical management of HIV & AIDS" },
            { index: 20, code: "T33", name: "Guidelines for palliative care" },
            { index: 21, code: "T34", name: "Staff trained in clinical management of HIV & AIDS" },
            { index: 22, code: "D14", name: "System for diagnosis of TB among HIV + clients" },
            { index: 23, code: "M27", name: "Intravenous solution with infusion set" },
            { index: 24, code: "M42", name: "IV treatment fungal infections" },
            { index: 25, code: "M43", name: "Co-trimoxazole cap/tab" },
            { index: 26, code: "M41", name: "First-line TB treatment medications" },
            { index: 27, code: "M44", name: "Palliative care pain management" },
            { index: 28, code: "M17", name: "Condoms" },
            { index: 29, code: "S19", name: "ARV prescription or ARV treatment follow-up services" },
            { index: 30, code: "S19_01", name: "Antiretroviral prescription" },
            { index: 31, code: "S19_02", name: "Treatment follow-up services for persons on ART" },
            { index: 32, code: "T35", name: "Guidelines for antiretroviral therapy" },
            { index: 33, code: "T36", name: "Staff trained in ART prescription and management" },
            { index: 34, code: "D15", name: "Full blood count" },
            { index: 35, code: "D16", name: "CD4 or Viral load" },
            { index: 36, code: "D17", name: "Renal function test {serum creatinine testing or other)" },
            { index: 37, code: "D19", name: "Liver function test {ALT or other)" },
            { index: 38, code: "M45", name: "Three first-line antiretrovirals" },
            { index: 39, code: "S20", name: "Preventing mother-to-child transmission {PMTCT) services" },
            { index: 40, code: "S20_01", name: "Counselling and testing for HIV+ pregnant women" },
            { index: 41, code: "S20_02", name: "Counselling and testing for infants born to HIV+ women" },
            { index: 42, code: "S20_03", name: "ARV prophylaxis to HIV+ pregnant women" },
            { index: 43, code: "S20_04", name: "ARV prophylaxis to infants born to HIV+ women" },
            { index: 44, code: "S20_05", name: "Infant and young child feeding counselling" },
            { index: 45, code: "S20_06", name: "Nutritional counselling for HIV+ women and their infants" },
            { index: 46, code: "S20_07", name: "Family planning counselling to HIV+ women" },
            { index: 47, code: "T37", name: "Guidelines for PMTCT" },
            { index: 48, code: "T38", name: "Guidelines for infant and young child feeding counselling" },
            { index: 49, code: "T39", name: "Staff trained in PMTCT" },
            { index: 50, code: "T40", name: "Staff trained in infant and young child feeding" },
            { index: 51, code: "I24", name: "Visual and auditory privacy" },
            { index: 52, code: "D6", name: "HIV diagnostic capacity for adults" },
            { index: 53, code: "D7", name: "Dried blood spot {DBS) filter paper for diagnosing HIV in newborns" },
            { index: 54, code: "M46", name: "Zidovudine {AZT) syrup" },
            { index: 55, code: "M47", name: "Nevirapine {NVP) syrup" },
            { index: 56, code: "M48", name: "Maternal ARV prophylaxis" }
        ]
    },

        this.complexHeaders = {
            Malaria: [
                { name: "District", rowspan: 2, colspan: 0, bgColor: "#eeeeee" },
                { name: "% of facilities offering:", rowspan: 0, from: 0, colspan: 8, bgColor: "#eeeeee" },
                { name: "% of facilities providing malaria services with:", rowspan: 0, from: 8, colspan: 9, bgColor: "#dddddd" },
                { name: "% of facilities providing malaria services with:", rowspan: 0, from: 17, colspan: 12, bgColor: "#eeeeee" }
            ],
            TB: [
                { name: "District", rowspan: 2, colspan: 0, bgColor: "#eeeeee" },
                { name: "% of facilities offering:", rowspan: 0, from: 0, colspan: 11, bgColor: "#eeeeee" },
                { name: "% of facilities providing tuberculosis services with:", rowspan: 0, from: 11, colspan: 12, bgColor: "#dddddd" }
            ],
            HIV: [
                { name: "District", rowspan: 2, colspan: 0, bgColor: "#eeeeee" },
                { name: "% if facilities offering:", rowspan: 0, from: 0, colspan: 1, bgColor: "#eeeeee" },
                { name: "% of facilities providing HIB counselling and testing services with:", rowspan: 0, from: 1, colspan: 5, bgColor: "#dddddd" },
                { name: "% of facilities offering:", rowspan: 0, from: 6, colspan: 13, bgColor: "#eeeeee" },
                { name: "% of facilities providing HIV/AIDS care and support services with:", rowspan: 0, from: 19, colspan: 10, bgColor: "#dddddd" },
                { name: "% of facilities offering:", rowspan: 0, from: 29, colspan: 3, bgColor: "#eeeeee" },
                { name: "% of facilities providing antiretroviral prescription and client management services with:", rowspan: 0, from: 32, colspan: 7, bgColor: "#dddddd" },
                { name: "% of facilities offering:", rowspan: 0, from: 39, colspan: 8, bgColor: "#eeeeee" },
                { name: "% of facilities providing prevention of mother-to-child transmission (PMTCT) services with:", rowspan: 0, from: 47, colspan: 10, bgColor: "#dddddd" }
            ],
            HIVL0: [
                { name: "", rowspan: 0, colspan: 1, bgColor: "#eeeeee" },
                { name: "HIV: counselling and testing", rowspan: 0, colspan: 6, bgColor: "#aaaaaa" },
                { name: "HIV/AIDS care and support services", rowspan: 0, colspan: 23, bgColor: "#bbbbbb" },
                { name: "HIV: Antiretroviral prescription and client management services", rowspan: 0, colspan: 10, bgColor: "#aaaaaa" },
                { name: "HIV/AIDS: Preventing mother-to-child transmission (PMTCT)", rowspan: 0, colspan: 18, bgColor: "#bbbbbb" }
            ]
        },
        this.collections = {
            Diseases: ["HIV", "TB", "Malaria"],
            Years: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2020", "2021", "2022", "2023", "2024", "2025"],
        },
        this.getColor = function getColor(grades, d) {
            d *= 1.1;
            return d > grades[6] ? '#85ADFF' :
                d > grades[5] ? '#759DE9' :
                    d > grades[4] ? '#658DD3' :
                        d > grades[3] ? '#567EBD' :
                            d > grades[2] ? '#466EA7' :
                                d > grades[1] ? '#365E91' :
                                    '#274F7C';

        },
        this.getLegend = function getLegend(type, index) {
            var startrange = 0;
            var endrange = 0;
            var legend = ""
            angular.forEach(this.complexHeaders[type], function (value, key) {
                endrange = startrange + value.colspan;
                if (startrange <= index && endrange >= index) {
                    legend = value.name;
                } else { startrange = endrange; }

            })
            return legend;
        }


}]);