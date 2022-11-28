import { Component } from "react";
import { Carousel, Row, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class ThirdGallery extends Component {
  state = {
    library: [],
    isError: false,
  };

  fetchMovies = async () => {
    const APIKey = "2f95a32d";
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKey}&s=star%20wars`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        let movies = data.Search;
        console.log(movies);
        this.setState({
          library: movies,
        });
        console.log(this.state.library);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    return (
      <div className="m-2">
        <h5 className="text-left text-light mt-2 mb-2">Star Wars</h5>

        <Carousel>
          <Carousel.Item>
            <Row>
              {this.state.library.slice(0, 6).map((movie) => {
                return (
                  <SingleMovie
                    key={movie.imdbID}
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError && <Alert variant="danger">ERROR</Alert>}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              {this.state.library.slice(4, 10).map((movie) => {
                return (
                  <SingleMovie
                    key={movie.imdbID}
                    src={movie.Poster}
                    text={movie.Title}
                  ></SingleMovie>
                );
              })}
              {this.state.isError && <Alert variant="danger">ERROR</Alert>}
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ThirdGallery;
