$(function () {
  const mountain1 = $("#mountain1");
  const mountain2 = $("#mountain2");

  const mountainText1 = $("#mountainText1");
  const mountainText2 = $("#mountainText2");

  const schedule = $(".schedule");
  const schedule2 = $(".schedule2");

  mountain2.click((e) => {
    e.preventDefault();
    schedule.hide();
    schedule2.show();
    mountain2.css("background-color", "#afb3bd");
    mountainText2.css({ color: "#414f6b", "text-decoration": "underline" });
    mountain1.css("background-color", "#414f6b");
    mountainText1.css({ color: "#afb3bd", "text-decoration": "none" });
  });

  mountain1.click((e) => {
    e.preventDefault();
    schedule2.hide();
    schedule.show();
    mountain1.css("background-color", "#afb3bd");
    mountainText1.css({ color: "#414f6b", "text-decoration": "underline" });
    mountain2.css("background-color", "#414f6b");
    mountainText2.css({ color: "#afb3bd", "text-decoration": "none" });
  });
});
