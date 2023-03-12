import { ERROR_MESSAGE } from '@/app/constants/constants';
import { fetchData } from '@/app/helpers';
import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { Button } from '@mui/material';
import { ModalContentWrapper, ModalImageWrapper, StyledModal } from './BreedDetailsModal.styles';
import { BreedDetailsApiData, BreedDetailsModalProps } from './BreedDetailsModal.types';

export function BreedDetailsModal({
  isOpen,
  handleClose,
  apiUrl,
  breedName,
}: BreedDetailsModalProps) {
  const [imageUrl, setImageUrl] = useState('');
  const [isError, setIsError] = useState(false);

  const fetchImageUrl = async (url: string) => {
    try {
      const apiData = await fetchData<BreedDetailsApiData>(url);

      setImageUrl(apiData.message);
    } catch (e) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchImageUrl(apiUrl);
  }, []);

  return (
    <StyledModal
      open={isOpen}
      onClose={handleClose}
    >
      <ModalContentWrapper>
        {isError ? <h2>{ERROR_MESSAGE}</h2> : null}
        {!isError && imageUrl ? (
          <>
            <h2>{breedName.toUpperCase()}</h2>
            <ModalImageWrapper>
              <NextImage
                fill
                style={{ objectFit: 'contain' }}
                src={imageUrl}
                alt="random dog image"
              />
            </ModalImageWrapper>
            <Button
              variant="contained"
              onClick={() => fetchImageUrl(apiUrl)}
            >
              Random photo
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
            >
              Close
            </Button>
          </>
        ) : null}
      </ModalContentWrapper>
    </StyledModal>
  );
}
