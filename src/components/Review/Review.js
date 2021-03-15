import React, { Component } from 'react';

import ReviewItems from './ReviewItems';
import ReviewVideoItems from './ReviewVideoItems';
// import ReviewVideoItemsModal from './ReviewVideoItemsModal';
// import ModalVideoPlay from '../Modal/ModalVideoPlay';

import dataText from '../../json/reviews.json';
import dataVideo from '../../json/videoReviews.json';
import './reviews.css';

class Review extends Component {
  // state = {
  //   name: null,
  //   description: null,
  //   isModal: false,
  //   currentVideo: null,
  // };
  // toggleModal = (name, video, description) => {
  //   // console.log(name);
  //   this.setState(prevState => ({
  //     isModal: !prevState.isModal,
  //     currentVideo: prevState.isModal ? null : video,
  //     description: description,
  //     name: name,
  //   }));
  // };
  // handleImageClick = (name, video, description) => {
  //   this.toggleModal(name, video, description);
  // };
  render() {
    // const { isModal, currentVideo, description, name } = this.state;
    // console.log(this.concatReviews());
    return (
      <>
        <div>
          {/* {isModal && (
            <ModalVideoPlay
              video={currentVideo}
              description={description}
              name={name}
              onToggle={this.toggleModal}
            />
          )} */}
          <ul className="contentRow">
            {dataVideo.map(({ id, small, name, description }) => (
              <ReviewVideoItems
                key={id}
                video={small}
                name={name}
                description={description}
                // onClick={this.handleImageClick}
              />
            ))}
          </ul>
          {/* <ul className="contentRow">
            {dataVideo.map(({ id, small, name, description, image }) => (
              <ReviewVideoItemsModal
                key={id}
                video={small}
                name={name}
                description={description}
                image={image}
                onClick={this.handleImageClick}
              />
            ))}
          </ul> */}
          <ul className="contentRow">
            {dataText.map(({ id, date, text, foto }) => (
              <ReviewItems key={id} date={date} text={text} foto={foto} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default Review;
