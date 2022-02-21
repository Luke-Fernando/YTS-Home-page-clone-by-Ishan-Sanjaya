class MovieCard extends HTMLElement {
    constructor() {
        super();
    };
    connectedCallback() {
        this.innerHTML = ` <div class="movie">
                    <div id="${this.getAttribute("cardId")}" class="image">
                        <div class="movie-hover-div">
                            <div class="star"><i class="fas fa-star"></i></div>
                            <div class="movie-rating">
                                <h3>6 / 10</h3>
                            </div>
                            <div class="categorie">
                                <p>Drama<br>Thriller</p>
                            </div>
                            <div class="movie-view-btn"><button>View Details</button></div>
                        </div><img src="${this.getAttribute("imgSrc")}"
                            alt="${this.getAttribute("imgAlt")}">
                    </div>
                    <div class="details">
                        <p>${this.getAttribute("movieName")}<br><span>${this.getAttribute("movieYear")}</span></p>
                    </div>
                </div>  `
    }
};

class UpcomingMovie extends HTMLElement {
    constructor() {
        super();
    };
    connectedCallback() {
        this.innerHTML = `<div class="movie">
                    <div id="${this.getAttribute("cardId")}" class="upcoming-movie-container image">
                        <div class="movie-hover-div">
                            <div class="movie-view-btn"><button>View IMDb</button></div>
                        </div><img src="${this.getAttribute("imgSrc")}" alt="${this.getAttribute("imgAlt")}">
                    </div>
                    <div class="details">
                        <p>${this.getAttribute("movieName")}<br><span>${this.getAttribute("movieYear")}</span></p>
                    </div>
                </div>`
    }
}

customElements.define("movie-card", MovieCard);
customElements.define("upcoming-movie", UpcomingMovie);