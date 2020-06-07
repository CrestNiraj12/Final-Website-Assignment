/*jslint browser: true*/
/*global $, jQuery, alert*/

$(window).on("load", () => {
    if ($(window).width() > 999) {
        $("#media1").addClass("hide");
        $("#media2").removeClass("hide");
        $(window).scroll(() => {
            var windowTop = $(this).scrollTop();
            if (windowTop >= 820 && windowTop < $(".comment-section").offset().top)
                $(".more-info").css({position: "fixed", top: "20%", width: "20%"});
            else
                $(".more-info").css({position: "relative", top: "0", width: "100%"});
        });

    } else {
        $("#media2").addClass("hide");
        $("#media1").removeClass("hide");
    }
});

$("#submit").on("click", (e) => {
    e.preventDefault();
    var name = $("#name").val();
    var text = $("#text").val();
    var count = $("#count").html();
    
    if (name != "" && text != "") {
        if (count === "No") {
            $("#count").text("1");
            $("#many").css("visibility", "hidden");
        } else {
            $("#count").text(parseInt($("#count").html()) + 1);
            $("#many").css("visibility", "visible");
        }
        $(".comments").append(`<div class="comment">
                                <h3>${name}</h3>
                                <p>${text}</p>
                                <div class="modify">
                                    <button id="edit">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                                            <path d="M1.4,16.9L0,24l7.1-1.4L24,5.7L18.3,0C18.3,0,1.4,16.9,1.4,16.9z M6.1,20.7l-3.6,0.7l0.7-3.6C3.3,17.9,6.1,20.7,6.1,20.7z M21.2,5.7L7.6,19.3l-2.9-2.9L15.5,5.6l2.8,2.8l1.4-1.4l-2.8-2.8l1.4-1.4C18.3,2.8,21.2,5.7,21.2,5.7z"/>
                                        </svg>
                                    </button>
                                    <span> | </span>
                                    <button id="delete">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M463.9,114.4l-11.3-33.9C448.3,67.6,436.2,59,422.6,59h-95V28c0-15.5-12.6-28-28-28h-87c-15.5,0-28,12.6-28,28V59h-95c-13.6,0-25.6,8.7-29.9,21.6l-11.3,33.9c-2.6,7.7-1.3,16.3,3.5,22.9s12.4,10.5,20.6,10.5h11.8l26,321.6c1.9,23.9,22.2,42.6,46.1,42.6h204.9c23.9,0,44.2-18.7,46.1-42.6l26-321.6h6.5c8.1,0,15.8-3.9,20.6-10.5C465.1,130.7,466.4,122.2,463.9,114.4z M214.6,30h83.1v29h-83.1V30z M377.4,467c-0.7,8.4-7.8,15-16.2,15H156.3c-8.4,0-15.5-6.6-16.2-15l-25.8-319.2h288.9L377.4,467z M78.8,117.8L88.1,90c0.2-0.6,0.8-1.1,1.5-1.1h333.1c0.7,0,1.3,0.4,1.5,1.1l9.3,27.8H78.8z"/>
                                            <path d="M329.5,466c0.3,0,0.5,0,0.8,0c7.9,0,14.6-6.2,15-14.2l14.1-270.4c0.4-8.3-5.9-15.3-14.2-15.8c-8.3-0.4-15.3,5.9-15.8,14.2l-14.1,270.4C314.9,458.5,321.2,465.5,329.5,466z"/>
                                            <path d="M167.6,451.8c0.4,8,7.1,14.2,15,14.2c0.3,0,0.6,0,0.8,0c8.3-0.4,14.6-7.5,14.2-15.8l-14.8-270.4c-0.4-8.3-7.5-14.6-15.8-14.2c-8.3,0.4-14.6,7.5-14.2,15.8L167.6,451.8z"/>
                                        <path d="M256.3,466c8.3,0,15-6.7,15-15V180.6c0-8.3-6.7-15-15-15s-15,6.7-15,15V451C241.3,459.3,248,466,256.3,466z"/>
                                        </svg>
                                    </button>
                                </div>`);
        $("#name").val("").css("border", "1px solid #000");
        $("#text").val("").css("border", "1px solid #000");
    } else {
        alert("Error! Insufficient information given!");
        if (name == "")
            $("#name").css("border", "1px solid red");
        else 
            $("#text").css("border", "1px solid red");
    }
});

$(".comments").on("click", "#delete", function (e) {
    e.preventDefault();
    const del = confirm("Do you want to delete the comment?");
    if (del) {
        $(this).closest("div.comment").remove();
        var counter = parseInt($("#count").html());

        if (counter === 2) {
            $("#count").text(counter - 1);
            $("#many").css("visibility", "hidden");
        }
        else if (counter > 1 && count !== 2) {
            $("#count").text(counter - 1);
            $("#many").css("visibility", "visible");
        } 
        else {
            $("#count").text("No");
            $("#many").css("visibility", "visible");
        }
        setTimeout(() => alert("Comment successfully deleted!"), 1);
    }
});

$(".comments").on("click", "#edit", function (e) {
    e.preventDefault();
    var div = $(this).closest("div.comment");
    var name = $(div).find("h3").html();
    var comment = $(div).find("p").html();
    div.empty();
    div.css({padding: "12% 5%", background: "#3d3d3d"});
    div.append(`<input type="text" id="up-name" placeholder="Enter your fullname" value="${name}" required>
                <textarea rows="5" id="up-text" placeholder="I like your view..">${comment}</textarea>
                <input type="submit" id="update" value="Update">`);
    $("#update").on("click", (e) => {
        e.preventDefault();
        var upName = $("#up-name").val();
        var upText = $("#up-text").val();
        div.empty();
        $(div).append(`<h3>${upName}</h3>
                                <p>${upText}</p>
                                <div class="modify">
                                    <button id="edit">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                                            <path d="M1.4,16.9L0,24l7.1-1.4L24,5.7L18.3,0C18.3,0,1.4,16.9,1.4,16.9z M6.1,20.7l-3.6,0.7l0.7-3.6C3.3,17.9,6.1,20.7,6.1,20.7z M21.2,5.7L7.6,19.3l-2.9-2.9L15.5,5.6l2.8,2.8l1.4-1.4l-2.8-2.8l1.4-1.4C18.3,2.8,21.2,5.7,21.2,5.7z"/>
                                        </svg>
                                    </button>
                                    <span> | </span>
                                    <button id="delete">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                            <path d="M463.9,114.4l-11.3-33.9C448.3,67.6,436.2,59,422.6,59h-95V28c0-15.5-12.6-28-28-28h-87c-15.5,0-28,12.6-28,28V59h-95c-13.6,0-25.6,8.7-29.9,21.6l-11.3,33.9c-2.6,7.7-1.3,16.3,3.5,22.9s12.4,10.5,20.6,10.5h11.8l26,321.6c1.9,23.9,22.2,42.6,46.1,42.6h204.9c23.9,0,44.2-18.7,46.1-42.6l26-321.6h6.5c8.1,0,15.8-3.9,20.6-10.5C465.1,130.7,466.4,122.2,463.9,114.4z M214.6,30h83.1v29h-83.1V30z M377.4,467c-0.7,8.4-7.8,15-16.2,15H156.3c-8.4,0-15.5-6.6-16.2-15l-25.8-319.2h288.9L377.4,467z M78.8,117.8L88.1,90c0.2-0.6,0.8-1.1,1.5-1.1h333.1c0.7,0,1.3,0.4,1.5,1.1l9.3,27.8H78.8z"/>
                                            <path d="M329.5,466c0.3,0,0.5,0,0.8,0c7.9,0,14.6-6.2,15-14.2l14.1-270.4c0.4-8.3-5.9-15.3-14.2-15.8c-8.3-0.4-15.3,5.9-15.8,14.2l-14.1,270.4C314.9,458.5,321.2,465.5,329.5,466z"/>
                                            <path d="M167.6,451.8c0.4,8,7.1,14.2,15,14.2c0.3,0,0.6,0,0.8,0c8.3-0.4,14.6-7.5,14.2-15.8l-14.8-270.4c-0.4-8.3-7.5-14.6-15.8-14.2c-8.3,0.4-14.6,7.5-14.2,15.8L167.6,451.8z"/>
                                        <path d="M256.3,466c8.3,0,15-6.7,15-15V180.6c0-8.3-6.7-15-15-15s-15,6.7-15,15V451C241.3,459.3,248,466,256.3,466z"/>
                                        </svg>
                                    </button>`);
        div.css({padding: "3% 5%", background: "#96cdef"});
        setTimeout(() => alert("Comment successfully edited!"), 1);
    });
    
});


