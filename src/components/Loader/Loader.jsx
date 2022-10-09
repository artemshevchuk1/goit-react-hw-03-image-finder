import { ColorRing } from  'react-loader-spinner'

export const Loader = () =>(
    <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{ margin: 'auto'}}
  wrapperClass="blocks-wrapper"
  colors={['#815be1', '#0d0450', '#e0a76e', '#abbd81', '#849b87']}
/>
);