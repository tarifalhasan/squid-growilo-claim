import React from 'react';
import Container from '../Container';
import ConnectWallect from '../ConnectWallect';
import Image from 'next/image';
import heroImage from '../../assets/images/hero.svg';

import Footer from './Footer';
const Hero = () => {
  return (
    <Container>
      <div className=" pt-10 lg:pt-16  flex flex-col gap-2 lg:gap-24 justify-between lg:flex-row ">
        {/* Connect Wallet */}
        <div className=" basis-1/2 order-first lg:order-last">
          <ConnectWallect />
        </div>
        {/*  hero content for Desktop*/}

        <div className=" basis-1/2  ">
          <div className="hidden lg:block">
            <Image className=" block mx-auto" src={heroImage} alt="heroImage" />
          </div>
        </div>

        {/* footer content for mobile */}
        <Footer />
      </div>
    </Container>
  );
};

export default Hero;
