import Swal from "sweetalert2";

const
	btnPlzen = document.getElementById("pt-plzen"),
 	btnPraha = document.getElementById("pt-praha"),
 	btnBrno = document.getElementById("pt-brno");


btnPlzen.addEventListener("click", () => {
    Swal.fire({
			title: 'Purchase of Ticket Our Pilsen Tour!',
			animation: false,
			customClass: {
			popup: 'animated tada'
        },
        text: "Do you want to buy a Ticket?",
        imageUrl: "https://i.ibb.co/kGHG2H1/plzen.gif",
        imageWidth: 550,
        imageHeight: 225,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        confirmButtonColor: "#00ff55",
        cancelButtonColor: "#999999",
        reverseButtons: true,
    })
	.then((result) => {
		document.querySelector('.swal2-container').remove();
	});
})

btnPraha.addEventListener("click", () => {
    Swal.fire({
			title: 'Purchase of Ticket Our Prague Tour!',
			animation: false,
			customClass: {
			popup: 'animated tada'
        },
        text: "Do you want to buy a Ticket?",
        imageUrl: "https://i.ibb.co/yVdsX4C/praha.gif",
        imageWidth: 550,
        imageHeight: 225,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        confirmButtonColor: "#00ff55",
        cancelButtonColor: "#999999",
        reverseButtons: true,
    })
	.then((result) => {
		document.querySelector('.swal2-container').remove();
	});
})

btnBrno.addEventListener("click", () => {
    Swal.fire({
			title: 'Purchase of Ticket Our Brno Tour!',
			animation: false,
			customClass: {
			popup: 'animated tada'
        },
        text: "Do you want to buy a Ticket?",
        imageUrl: "https://i.ibb.co/YPCFHrn/brno.gif",
        imageWidth: 550,
        imageHeight: 225,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        confirmButtonColor: "#00ff55",
        cancelButtonColor: "#999999",
        reverseButtons: true,
    })
	.then((result) => { 
		document.querySelector('.swal2-container').remove();
	});
})
