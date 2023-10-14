import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { fetchImages } from 'api/ImageApi';
import toast from 'react-hot-toast';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    totalHits: 0,
  }
  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const { totalHits, hits } = await fetchImages(query, page);

        if (totalHits === 0) {
          toast.error('No images found');
          return;
        }

        this.setState(prevState => ({
          images: page === 1 ? hits : [...prevState.images, ...hits],
          totalHits: page === 1 ? totalHits - hits.length : totalHits - [...prevState.images, ...hits].length,
        }));
      } catch (error) {
        toast.error(`Something went wrong with ${error.message}`);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleQuerySubmit = query => {
    this.setState({query, page:1});
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, totalHits, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleQuerySubmit}></Searchbar>
        {images && <ImageGallery images={images} />}
        {!!totalHits && <Button onLoadMore={this.handleLoadMore}></Button>}
        {isLoading && <Loader />}
      </div>
    )
  }
}
