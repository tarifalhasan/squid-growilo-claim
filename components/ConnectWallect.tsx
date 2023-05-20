import React from 'react';

import briogeLogo from '../assets/images/brioge.png';
import logo from '../assets/images/SRLOGO.svg';
import eth2 from '../assets/images/eth.svg';
import multiChain from '../assets/images/multichain.svg';
import connectWaletBrn from '../assets/images/CollectWalletButton.svg';
import Image from 'next/image';
import Button from './Button';

const ConnectWallect = () => {
  return (
    <div className=" bg-secondary space-y-5 border px-6 py-6 border-[#D9D9D9] rounded-[16px]">
      <div className=" max-w-[160px] md:max-w-[270px]">
        <Image src={briogeLogo} alt="briogeLogo" />
      </div>
      <p className=" text-sm lg:text-lg ">
        Here you can claim your SquidGrow from your ILO contribution.
      </p>

      <div className="space-y-5">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 ">
          <h2 className=" text-lg !font-semibold w-[40%]">Contributed:</h2>
          <div className=" relative">
            <input
              type="text"
              className=" px-3 py-5 bg-extraDark w-full md:w-auto md:rounded-[14px]  placeholder:text-muted focus:outline-none outline-none text-sm md:text-lg text-muted"
              placeholder="0.000 ETH"
            />
            <div className=" absolute top-[17%] right-[5%] md:right-[-7%] ">
              <Image src={eth2} alt="eth2" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-5 ">
          <h2 className=" text-lg w-[40%] !font-semibold">Claim:</h2>
          <div className=" relative">
            <input
              type="text"
              className=" bg-extraDark md:bg-transparent px-3 py-5  w-full md:w-auto md:rounded-[14px]  placeholder:text-muted focus:outline-none outline-none text-sm md:text-lg text-muted"
              placeholder="0.000 ETH"
            />
            <div className=" absolute top-[10%] right-[5%] md:right-[-7%] ">
              <Image className=" max-w-[41px]" src={logo} alt="eth2" />
            </div>
          </div>
        </div>
      </div>

      {/* button collect wallet */}

      <div className="  flex justify-start">
        <Button />
      </div>
      {/* footer */}
      <div className=" ">
        <div className=" text-muted">
          *You will not be able to transfer tokens until Liquidity is added
        </div>
      </div>
    </div>
  );
};

export default ConnectWallect;
