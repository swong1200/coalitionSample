const mountain1 = $("#mountain1");
const mountain2 = $("#mountain2");

const schedule = $(".schedule");
const schedule2 = $(".schedule2");

mountain2.click(() => {
  schedule.hide();
  schedule2.show();
});

mountain1.click(() => {
  schedule2.hide();
  schedule.show();
});
