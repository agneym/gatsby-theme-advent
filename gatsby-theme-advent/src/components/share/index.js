import React, { useState, useEffect } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share";
import styled from "styled-components";
import useWebShare from "react-use-web-share";

import ShareBtn from "./share-btn";

const Container = styled.div`
  margin: 1rem 0 5rem;

  .social-icon {
    display: inline-block;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

const Share = ({ post }) => {
  const { loading, isSupported, share } = useWebShare();
  const [url, setUrl] = useState("");
  useEffect(() => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);
  return (
    <Container>
      <p
        css={`
          font-size: 1.4rem;
          color: rgb(0, 0, 0);
        `}
      >
        Share if you liked it:
      </p>
      {!loading && !isSupported ? (
        <>
          <FacebookShareButton
            url={url}
            quote={`Read ${post.title} by ${post.author} #DevAdvent2019`}
            className="social-icon"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={`Read ${post.title}. #DevAdvent2019`}
            via={post.author}
            className="social-icon"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <EmailShareButton
            url={url}
            subject={`Read ${post.title} by ${post.author} #DevAdvent2019`}
            body={`${post.excerpt}
                Read more at ${url}
              `}
            className="social-icon"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          <RedditShareButton url={url} className="social-icon">
            <RedditIcon size={32} round />
          </RedditShareButton>
        </>
      ) : (
        <ShareBtn shareFn={share} />
      )}
    </Container>
  );
};

export default Share;
