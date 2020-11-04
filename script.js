$(".finalForm").click(function() {
    let perMonth = parseInt($(".QueOne").val());
    let GameCost = parseInt($(".QueTwo").val());
    let name = $(".QueThird").val();
    let math = perMonth * 480;
    let moreMath = math * GameCost;
    console.log(perMonth, GameCost, name);
    $(".show").append(`<p>${name}, in 40 years you will have bought ${math} games,and you will have spent $${moreMath} `);
    $(".images").show();

});