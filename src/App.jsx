import { Component } from 'react';
import { Button } from './components/Button/Button';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { Loader } from './components/Loader/Loader';
import { Modal } from './components/Modal/Modal';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchImages } from 'servies/Api';

export class App extends Component {
  state = {
    images: [],
    isLoding: false,
    query: '',
    page: 1,
    isModalOpen: false,
    modalImage: '',
  };
  totalPages = 0;
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoding: true });
      fetchImages(query, page)
        .then(images => {
          this.setState(prev => ({
            images: page === 1 ? images.hits : [...prev.images, ...images.hits],
          }));
          this.totalPages = images.totalHits;
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoding: false }));
    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ query: event.target.elements.query.value, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  toggleModal = image => {
    if (image) {
      this.setState({ modalImage: image });
      return;
    }
    this.setState({  modalImage: '' });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery
          images={this.state.images}
          toggleModal={this.toggleModal}
        />
        {this.state.isLoding && <Loader />}
        {this.state.images.length > 0 &&
          this.totalPages > 1 &&
          !this.state.isLoding && (
            <Button handleLoadMore={this.handleLoadMore} />
          )}
        {this.state.modalImage && (
          <Modal
            modalImage={this.state.modalImage}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}