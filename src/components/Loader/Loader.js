import { Blocks } from 'react-loader-spinner';
import { LoaderBlock } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBlock>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </LoaderBlock>
  );
};
