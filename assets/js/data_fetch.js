$(document).ready(function () {

  // Fetch and Populate District Dropdown List
  let dropdown = $('#districtList');
  dropdown.empty();

  dropdown.append('<option selected="true" disabled>জেলার নাম নির্বাচন করুন</option>');
  dropdown.prop('selectedIndex', 0);


  let subdistrictDropdown = $('#areaList');
  subdistrictDropdown.empty();

  subdistrictDropdown.append('<option selected="true" disabled>এরিয়ার নাম নির্বাচন করুন</option>');
  subdistrictDropdown.prop('selectedIndex', 0);

  const url = './assets/js/location.json';

  // Populate dropdown with list of districts
  $.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
      dropdown.append($('<option></option>').attr('value', entry.value).text(entry.district_name));
    })
  });

  // Fetch and Populate SubDistrict Dropdown List
  dropdown.change(function () {
    $.each(dropdown, function () {
      let selectedDistrict = $("#districtList option:selected").val();
      $.getJSON(url, function (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].value == selectedDistrict) {
            for (let j = 0; j < data[i].area.length; j++) {
              subdistrictDropdown.append($('<option></option>').attr('value', data[i].area[j].value).text(data[i].area[j].area_name));
            }
          }
        }
      });
    });
  });
});