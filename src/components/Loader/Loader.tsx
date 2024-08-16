import css from './Loader.module.css';
import { InfinitySpin } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
        <InfinitySpin
            visible={true}
            width="200"
            color="#333"
            ariaLabel="infinity-spin-loading"
        />
    </div>
  );
};

export default Loader;
