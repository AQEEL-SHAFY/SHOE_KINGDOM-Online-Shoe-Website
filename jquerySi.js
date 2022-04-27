$(function() { //UI widjet for size
    $("#size").spinner({
        min: 4,
        max: 12,
        h: function(event, ui) {
            $(this).change();
        }
    });
});


//UI widjets for price slider
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 350,
        values: [1, 30],
        slide: function(event, ui) {
            $("#amount").val("€" + ui.values[0] + " -€" + ui.values[1]);

        }
    });

    $("#amount").val(" €" + $(" #slider-range").slider("values", 0) + " -€" + $("#slider-range").slider("values", 1));
});
//function for search button
$(function() {
    $("#searchBtn").on("click", function() {

        var shoeType = $("#style").val();
        var shoeSize = $("#size").val();
        var gender = $("#gender").val();
        var color = $("#color").val();

        var minPrice = $("#slider-range").slider("option", "values")[0];
        var maxPrice = $("#slider-range").slider("option", "values")[1];

        var output = "<ul class='mx-4 '> ";
        for (var i in shoeProperties.shoes) {
            if ((shoeType == shoeProperties.shoes[i].style))
                if (shoeSize >= shoeProperties.shoes[i].sizes)
                    if ((gender == shoeProperties.shoes[i].gender))
                        if ((color == shoeProperties.shoes[i].color))
                            if ((shoeProperties.shoes[i].price >= minPrice && shoeProperties.shoes[i].price <= maxPrice)) {
                                {
                                    {
                                        {
                                            {
                                                output += "<div class='card' style='width:25rem; height:33rem;'>" +
                                                    "<img src='" + shoeProperties.shoes[i].picture + "' class='card-img-top' alt='...'>" +
                                                    " <div class='card-body'>" +
                                                    "<h4 class='card-title'> " + shoeProperties.shoes[i].name + "</h4>" +
                                                    "<h5>" + shoeProperties.shoes[i].type + "</h5>" +
                                                    "<h5>" + "€" + shoeProperties.shoes[i].price + "</h5>" +
                                                    "<p class='card-text text-truncate'>  " + shoeProperties.shoes[i].description + "</p>" +
                                                    "<a  class='btn btn-primary ' href='" + shoeProperties.shoes[i].url + "'>Visit Page</a>";
                                                "</div>" +
                                                "</div>"
                                            }

                                        }
                                    }
                                }
                            }
            output += "</ul>";
            $("#Placeholder").html(output);


        }

    });
});
//function to add to favourites button 
$(function() {
    $(".addFav").on("click", function() {
        try {
            var outputs = "<ul>";

            $(this).attr('disabled', true);
            var addShoe = $(this).closest("p").attr("id");
            var favShoe = JSON.parse(localStorage.getItem("favouriteShoe"));
            if (favShoe == null) {
                favShoe = [];

            }
            if (favShoe != null) {
                for (var j = 0; j < favShoe.length; j++) {
                    if (addShoe == favShoe[j]) {
                        alert("this shoe is already added to favourites");
                        favShoe = [];
                    }
                }
            }
            favShoe.push(addShoe);
            outputs += "Shoe: " + favShoe;
            localStorage.setItem("favouriteShoe", JSON.stringify(favShoe));
            document.getElementById("gg").innerHTML = outputs;

        } catch (e) {
            alert("error Occured");
        }
    });
});
//function to clear from favourites button 
$(function() {
    $(".clearFav").on("click", function() {

        $(this).attr('disabled', true);
        var clearShoe = $(this).closest("p").attr("id");
        var favShoe = JSON.parse(localStorage.getItem("favouriteShoe"));
        if (favShoe == null) {
            alert("There are no shoes added to favourites");

        }
        if (favShoe != null) {
            for (var j = 0; j < favShoe.length; j++) {
                if (clearShoe == favShoe[j]) {
                    alert("this shoe has been removed from favourites");
                    delete favShoe[j];
                    localStorage.setItem("favouriteShoe", JSON.stringify(favShoe));
                    favShoe[j] = [];
                    outputs += "Shoe: " + favShoe;
                }
            }
        }


    });
});
//JSON file
var shoeProperties = {

        "shoes": [{
                "id": "shoe1",
                "name": "Wallabee Burgundy Nubuck",
                "type": "Mens Original Icon Shoes",
                "gender": "male",
                "style": "formal",
                "sizes": [4, 5, 6, 7, 8],
                "price": 84,
                "color": "red",
                "description": "Worn by revolutionaries, free thinkers, and counter-culture icons for almost 50 years, no shoe is quite like the Clarks Wallabee.",
                "picture": "images/shoe1.1.jpg",
                "url": "shoe1.html"
            },
            {
                "id": "shoe2",
                "name": "Tri Path Trek GORE-TEX Black Combination",
                "type": "Mens Sports Shoes",
                "gender": "male",
                "style": "sports",
                "sizes": [5, 6, 7],
                "price": 115,
                "color": "black",
                "description": "Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
                "picture": "images/shoe2.1.jpg",
                "url": "shoe2.html"
            },

            {
                "id": "shoe3",
                "name": "Ashcombe Hi GORE-TEX Black Warmlined Leather",
                "type": "Mens Boots ",
                "gender": "male",
                "style": "casual",
                "sizes": [4, 5, 6],
                "price": 125,
                "color": "black",
                "description": "For an active outdoor ankle boot, look no further. This performance style features a waterproof, breathable.",
                "picture": "images/shoe3.1.jpg",
                "url": "shoe3.html"
            },

            {
                "id": "shoe4",
                "name": "Chantry Hall Black Leather",
                "type": "Mens Original Leather ",
                "gender": "male",
                "style": "formal",
                "sizes": [4, 5, 6, 7],
                "price": 89,
                "color": "black",
                "description": "Formal footwear, redefined. With subtly relaxed styling and comfort at its core.",
                "picture": "images/shoe4.1.jpg",
                "url": "shoe4.html"
            },

            {
                "id": "shoe5",
                "name": "Un Maui Lace Blush Leather",
                "gender": "female",
                "type": "Women Casual Shoes ",
                "style": "casual",
                "sizes": [4, 5, 6, 7, 8, 9],
                "price": 71,
                "color": "pink",
                "description": "Perfect for city adventures, these luxe leather lace-ups from our Unstructured collection.",
                "picture": "images/shoe5.1.jpg",
                "url": "shoe5.html"
            },
            {
                "id": "shoe6",
                "name": "Clarkdale Arlo Dark Olive Suede",
                "gender": "female",
                "type": "Women Boots",
                "style": "casual",
                "sizes": [5, 6, 7, 8, 9, 10, 11],
                "price": 99,
                "color": "brown",
                "description": "These Chelsea boots are crafted from a dark olive suede and feature.",
                "picture": "images/shoe6.1.jpg",
                "url": "shoe6.html"
            },
            {
                "id": "shoe7",
                "name": "Orianna Derby Metallic Leather",
                "gender": "female",
                "type": "Women Shoes",
                "style": "formal",
                "sizes": [5, 9, 10, 11],
                "price": 89,
                "color": "black",
                "description": "A super-chunky sole is the on-trend finishing touch to chic burgundy leather lace-up Oriann.",
                "picture": "images/shoe7.1.jpg",
                "url": "shoe7.html"
            },
            {
                "id": "shoe8",
                "name": "Pure 2 Tassel White Leather",
                "gender": "female",
                "type": "Women Shoes",
                "style": "casual",
                "sizes": [4, 5, 6],
                "price": 85,
                "color": "white",
                "description": "Slip into loafer Pure 2 Tassel for instant comfort and enhanced style status.",
                "picture": "images/shoe8.1.jpg",
                "url": "shoe8.html"
            },
            {
                "id": "shoe9",
                "name": "Pure 2 Tassel White Leather",
                "gender": "female",
                "type": "Women Sports Shoes",
                "style": "sports",
                "sizes": [5, 6],
                "price": 89,
                "color": "blue",
                "description": "An easy-to-wear casual shoe, Appley Tie wraps feet in comfort for the feel-good factor all day long.",
                "picture": "images/shoe9.1.jpg",
                "url": "shoe9.html"
            },
            {
                "id": "shoe10",
                "name": "Tri Path Day GORE-TEX Black Leather",
                "gender": "universal",
                "type": "Universal Sports Shoes",
                "style": "sports",
                "sizes": [4, 5, 6, 7, 8],
                "price": 120,
                "color": "black",
                "description": "Universal walking boots that guarantee comfort, grip and durability.",
                "picture": "images/shoe10.1.jpg",
                "url": "shoe10.html"
            },
            {
                "id": "shoe11",
                "name": "Tri Path Trek GORE-TEX Black Combination",
                "type": "Mens Sports Shoes",
                "gender": "male",
                "style": "sports",
                "sizes": [5, 6, 7],
                "price": 115,
                "color": "brown",
                "description": "Refreshing our bestselling Orinoco profile, a lace-up ankle boot that stays all day wearable. The premium dark olive leather upper stays classic and crafted while the cleated sole with 3cm heel feels durable and adds grip. Perfect to step into the season with casual style.",
                "picture": "images/shoe11.1.jpg",
                "url": "shoe11.html"
            },
            {
                "id": "shoe12",
                "name": "Wallabee Burgundy Nubuck",
                "type": "Mens Original Icon Shoes",
                "gender": "male",
                "style": "formal",
                "sizes": [4, 5, 6, 7, 8],
                "price": 84,
                "color": "grey",
                "description": "Worn by revolutionaries, free thinkers, and counter-culture icons for almost 50 years, no shoe is quite like the Clarks Wallabee.",
                "picture": "images/shoe12.1.jpg",
                "url": "shoe12.html"
            },
            {
                "id": "shoe13",
                "name": "Wallabee Burgundy Nubuck",
                "type": "Mens Original Icon Shoes",
                "gender": "male",
                "style": "formal",
                "sizes": [4, 5, 6, 7, 8],
                "price": 84,
                "color": "black",
                "description": "Worn by revolutionaries, free thinkers, and counter-culture icons for almost 50 years, no shoe is quite like the Clarks Wallabee.",
                "picture": "images/shoe13.1.jpg",
                "url": "shoe13.html"
            }


        ]
    }
    //function to view favourites button 
$(document).ready(function() {
    $("#favourites").on("click", function() {
        favShoe = JSON.parse(localStorage.getItem("favouriteShoe"));
        var output = "<ul>";
        var z = document.getElementById("gig");

        if (favShoe != null) {
            for (var i = 0; i < shoeProperties.shoes.length; i++) {
                for (j = 0; j < favShoe.length; j++) {
                    if (shoeProperties.shoes[i].id == favShoe[j]) {
                        output += "<div class='card' style='width:25rem; height:33rem;'>" +
                            "<img src='" + shoeProperties.shoes[i].picture + "' class='card-img-top' alt='...'>" +
                            " <div class='card-body'>" +
                            "<h4 class='card-title'> " + shoeProperties.shoes[i].name + "</h4>" +
                            "<h5>" + shoeProperties.shoes[i].type + "</h5>" +
                            "<h5>" + "€" + shoeProperties.shoes[i].price + "</h5>" +
                            "<p class='card-text text-truncate'>  " + shoeProperties.shoes[i].description + "</p>" +
                            "<a  class='btn btn-primary ' href='" + shoeProperties.shoes[i].url + "'>Visit Page</a>";
                        "</div>" +
                        "</div>"
                    }
                }
            }
        }


        output + -"<ul>";
        document.getElementById("gig").innerHTML = output;

        if (z.style.display === "none") {
            z.style.display = "block";
        } else {
            z.style.display = "none";

        }
    });
});
//function to clear from favourites button 
$(function() {
    $("#clear").on("click", function() {
        localStorage.clear();
        location.reload();
    });
});
//function for the buttons
$(function() {

    $(".btn-primary").click(function() {
        $(".btn-primary").css("background-color", "#FFAE55");
        $(".btn-primary").css("border", "none");
        $(".btn-primary").css("color", "#000");
    });
});