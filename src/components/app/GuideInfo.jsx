import React from 'react';
import { InfoTag } from '../shared/InfoTag.js';
import { TopRightContainer } from '../shared/containers/TopRightContainer.js';

function GuideInfo() {
  return (
    <TopRightContainer>
      <InfoTag>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_350_2080)">
            <path d="M14 5C15.42 5 16.74 5.76 17.45 7C18.56 8.9 17.91 11.35 16 12.46V11.23C16.64 10.67 17 9.85 17 9C17 8.20435 16.6839 7.44129 16.1213 6.87868C15.5587 6.31607 14.7956 6 14 6C13.2044 6 12.4413 6.31607 11.8787 6.87868C11.3161 7.44129 11 8.20435 11 9C11 9.85 11.36 10.67 12 11.23V12.46C10.77 11.75 10 10.43 10 9C10 7.93913 10.4214 6.92172 11.1716 6.17157C11.9217 5.42143 12.9391 5 14 5Z" fill="black" />
            <path d="M13 9C13 8.73478 13.1054 8.48043 13.2929 8.29289C13.4804 8.10536 13.7348 8 14 8C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V13.47L16.21 13.6L21.15 15.8C21.67 16.04 22 16.56 22 17.14V21.5C21.97 22.32 21.32 22.97 20.5 23H14C13.62 23 13.26 22.85 13 22.57L11.1716 18.5L13 15.8V9Z" fill="black" />
            <path d="M1.48049 10.0902L3.88292 12.4927L6.28535 10.0902L5.56462 9.3695L4.17121 10.7629C4.23527 9.7699 4.46751 8.82495 4.86791 7.92804C5.26832 7.03113 5.82088 6.23032 6.52559 5.52561C7.2303 4.8209 8.03111 4.26834 8.92802 3.86793C9.82492 3.46753 10.7699 3.23529 11.7629 3.17123L10.3695 4.56464L11.0902 5.28537L13.4926 2.88294L11.0902 0.480508L10.3695 1.20124L11.3304 2.16221C10.2814 2.26631 9.2863 2.54452 8.34519 2.99681C7.4044 3.44943 6.55762 4.05212 5.80486 4.80488C5.0521 5.55764 4.44941 6.40442 3.99679 7.34521C3.54449 8.28632 3.26629 9.28141 3.16219 10.3305L2.20121 9.3695L1.48049 10.0902Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_350_2080">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Rotate
      </InfoTag>
      <InfoTag>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 9C13 8.73478 13.1054 8.48043 13.2929 8.29289C13.4804 8.10536 13.7348 8 14 8C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V13.47L16.21 13.6L21.15 15.8C21.67 16.04 22 16.56 22 17.14V21.5C21.97 22.32 21.32 22.97 20.5 23H14C13.62 23 13.26 22.85 13 22.57L8.1 18.37L8.84 17.6C9.03 17.39 9.3 17.28 9.58 17.28H9.8L13 19V9ZM14 5C15.42 5 16.74 5.76 17.45 7C18.56 8.9 17.91 11.35 16 12.46V11.23C16.64 10.67 17 9.85 17 9C17 8.20435 16.6839 7.44129 16.1213 6.87868C15.5587 6.31607 14.7956 6 14 6C13.2044 6 12.4413 6.31607 11.8787 6.87868C11.3161 7.44129 11 8.20435 11 9C11 9.85 11.36 10.67 12 11.23V12.46C10.77 11.75 10 10.43 10 9C10 7.93913 10.4214 6.92172 11.1716 6.17157C11.9217 5.42143 12.9391 5 14 5ZM4 9L7 12H5V15H3V12H1L4 9ZM4 7L1 4H3V1H5V4H7L4 7ZM9 14C9.73 14 10.41 14.19 11 14.54V15.76C10.47 15.29 9.77 15 9 15C8.20435 15 7.44129 15.3161 6.87868 15.8787C6.31607 16.4413 6 17.2044 6 18C6 19 6.5 19.87 7.22 20.42L9.31 22H9C7.93913 22 6.92172 21.5786 6.17157 20.8284C5.42143 20.0783 5 19.0609 5 18C5 16.9391 5.42143 15.9217 6.17157 15.1716C6.92172 14.4214 7.93913 14 9 14Z" fill="black" />
        </svg>
        Zoom
      </InfoTag>
      <InfoTag>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 9C13 8.73478 13.1054 8.48043 13.2929 8.29289C13.4804 8.10536 13.7348 8 14 8C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V13.47L16.21 13.6L21.15 15.8C21.67 16.04 22 16.56 22 17.14V21.5C21.97 22.32 21.32 22.97 20.5 23H14C13.62 23 13.26 22.85 13 22.57L8.1 18.37L8.84 17.6C9.03 17.39 9.3 17.28 9.58 17.28H9.8L13 19V9ZM14 5C15.42 5 16.74 5.76 17.45 7C18.56 8.9 17.91 11.35 16 12.46V11.23C16.64 10.67 17 9.85 17 9C17 8.20435 16.6839 7.44129 16.1213 6.87868C15.5587 6.31607 14.7956 6 14 6C13.2044 6 12.4413 6.31607 11.8787 6.87868C11.3161 7.44129 11 8.20435 11 9C11 9.85 11.36 10.67 12 11.23V12.46C10.77 11.75 10 10.43 10 9C10 7.93913 10.4214 6.92172 11.1716 6.17157C11.9217 5.42143 12.9391 5 14 5ZM9 14C9.73 14 10.41 14.19 11 14.54V15.76C10.47 15.29 9.77 15 9 15C8.20435 15 7.44129 15.3161 6.87868 15.8787C6.31607 16.4413 6 17.2044 6 18C6 19 6.5 19.87 7.22 20.42L9.31 22H9C7.93913 22 6.92172 21.5786 6.17157 20.8284C5.42143 20.0783 5 19.0609 5 18C5 16.9391 5.42143 15.9217 6.17157 15.1716C6.92172 14.4214 7.93913 14 9 14Z" fill="black" />
          <path d="M7.14265 2.14286L4.99979 0L2.85693 2.14286H4.2855V4.28571H5.71408V2.14286H7.14265Z" fill="black" />
          <path d="M2.85735 7.85714L5.00021 10L7.14307 7.85714H5.7145V5.71429H4.28592V7.85714H2.85735Z" fill="black" />
          <path d="M2.14286 2.85711L0 4.99997L2.14286 7.14282V5.71425H4.28571V4.28568H2.14286L2.14286 2.85711Z" fill="black" />
          <path d="M7.85714 7.14289L10 5.00003L7.85714 2.85718V4.28575H5.71429V5.71432H7.85714V7.14289Z" fill="black" />
        </svg>
        Move
      </InfoTag>
    </TopRightContainer>
  );
}

export default GuideInfo;