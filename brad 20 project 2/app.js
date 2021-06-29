const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');

let ticketPrice = +movie.value;

updateUI();

function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);
}

function updateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        })
    }
    const selectMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectMovieIndex !== null){
        movie.selectedIndex = selectMovieIndex;
    }
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCount = selectedSeats.length;
    const someStrings = [...selectedSeats].map(e => [...seats].indexOf(e));
    localStorage.setItem('selectedSeats',JSON.stringify(someStrings));
    count.innerText = selectedSeatCount;
    total.innerText = selectedSeatCount * ticketPrice;
}

movie.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});

updateSelectedCount();
